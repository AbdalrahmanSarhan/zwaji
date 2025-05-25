import React, { useState, createElement } from 'react';
import { Share2Icon, CheckIcon } from 'lucide-react';
interface ShareButtonProps {
  title?: string;
  text: string;
  className?: string;
  color?: 'emerald' | 'sky' | 'amber' | 'purple' | 'rose' | 'slate';
}
export const ShareButton: React.FC<ShareButtonProps> = ({
  title = '',
  text,
  className = '',
  color = 'emerald'
}) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const showNotification = (message: string, isError = false) => {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full shadow-lg z-50 ${isError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transition = 'opacity 0.3s ease';
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 2000);
  };
  const copyToClipboardFallback = (text: string): boolean => {
    // Create a temporary textarea element
    const textArea = document.createElement('textarea');
    textArea.value = text;
    // Make the textarea invisible
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    // Focus and select the text
    textArea.focus();
    textArea.select();
    let success = false;
    try {
      // Execute the copy command
      success = document.execCommand('copy');
    } catch (err) {
      console.error('Fallback: Could not copy text: ', err);
    }
    // Remove the temporary element
    document.body.removeChild(textArea);
    return success;
  };
  const handleShare = async () => {
    const shareText = title ? `${title}\n\n${text}` : text;
    try {
      // Try to use the Web Share API first if available
      if (navigator.share) {
        await navigator.share({
          title: title || 'مشاركة',
          text: shareText
        });
        showNotification('تمت المشاركة بنجاح');
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
        return;
      }
    } catch (error) {
      console.error('Error using Web Share API:', error);
      // Continue to clipboard methods if Web Share API fails
    }
    // Try modern clipboard API
    try {
      await navigator.clipboard.writeText(shareText);
      showNotification('تم نسخ المحتوى للحافظة');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      return;
    } catch (error) {
      console.error('Error with Clipboard API:', error);
      // Try fallback method
    }
    // Use fallback method
    const success = copyToClipboardFallback(shareText);
    if (success) {
      showNotification('تم نسخ المحتوى للحافظة');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } else {
      showNotification('حدث خطأ أثناء نسخ المحتوى', true);
    }
  };
  const getColorClasses = () => {
    const baseClasses = 'p-2 rounded-full transition-colors duration-200';
    switch (color) {
      case 'sky':
        return `${baseClasses} bg-sky-50 hover:bg-sky-100 text-sky-600`;
      case 'amber':
        return `${baseClasses} bg-amber-50 hover:bg-amber-100 text-amber-600`;
      case 'emerald':
        return `${baseClasses} bg-emerald-50 hover:bg-emerald-100 text-emerald-600`;
      case 'rose':
        return `${baseClasses} bg-rose-50 hover:bg-rose-100 text-rose-600`;
      case 'purple':
        return `${baseClasses} bg-purple-50 hover:bg-purple-100 text-purple-600`;
      case 'slate':
        return `${baseClasses} bg-slate-50 hover:bg-slate-100 text-slate-600`;
      default:
        return `${baseClasses} bg-emerald-50 hover:bg-emerald-100 text-emerald-600`;
    }
  };
  return <button onClick={handleShare} className={`${getColorClasses()} ${className}`} aria-label="نسخ">
      {showSuccess ? <CheckIcon className="h-5 w-5" /> : <Share2Icon className="h-5 w-5" />}
    </button>;
};