import { useState } from "react";
interface ShareOptions {
  title: string;
  text: string;
  url?: string;
}
interface UseShareReturn {
  share: (options: ShareOptions) => Promise<boolean>;
  copyToClipboard: (text: string) => Promise<boolean>;
  isSupported: boolean;
  isSharing: boolean;
  error: Error | null;
}
export function useShare(): UseShareReturn {
  const [isSharing, setIsSharing] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  // Check if Web Share API is supported
  const isSupported = typeof navigator !== "undefined" && navigator.share && typeof navigator.share === "function";
  const share = async ({
    title,
    text,
    url = window.location.href
  }: ShareOptions): Promise<boolean> => {
    setIsSharing(true);
    setError(null);
    try {
      if (isSupported) {
        await navigator.share({
          title,
          text,
          url
        });
        setIsSharing(false);
        return true;
      } else {
        // Fallback to clipboard
        const fullText = `${title}\n\n${text}\n\n${url}`;
        const result = await copyToClipboard(fullText);
        setIsSharing(false);
        return result;
      }
    } catch (err) {
      // If AbortError, user canceled sharing - don't treat as error
      if (err instanceof Error && err.name !== "AbortError") {
        setError(err instanceof Error ? err : new Error(String(err)));
      }
      setIsSharing(false);
      return false;
    }
  };
  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(text);
        return true;
      }
      // Fallback method
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      if (!successful) {
        throw new Error("Failed to copy text");
      }
      return true;
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      return false;
    }
  };
  return {
    share,
    copyToClipboard,
    isSupported,
    isSharing,
    error
  };
}