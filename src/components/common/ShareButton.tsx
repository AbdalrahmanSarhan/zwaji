import React, { useState } from 'react';
import { ShareIcon, CheckIcon } from 'lucide-react';
interface ShareButtonProps {
  title: string;
  text: string;
  color?: 'sky' | 'emerald' | 'amber' | 'purple' | 'rose';
}
export function ShareButton({
  title,
  text,
  color = 'sky'
}: ShareButtonProps) {
  const [isSharing, setIsSharing] = useState(false);
  const [shared, setShared] = useState(false);
  const colorClasses = {
    sky: 'text-sky-500 hover:text-sky-600 hover:bg-sky-50',
    emerald: 'text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50',
    amber: 'text-amber-500 hover:text-amber-600 hover:bg-amber-50',
    purple: 'text-purple-500 hover:text-purple-600 hover:bg-purple-50',
    rose: 'text-rose-500 hover:text-rose-600 hover:bg-rose-50'
  };
  const successColorClasses = {
    sky: 'text-sky-600 bg-sky-50',
    emerald: 'text-emerald-600 bg-emerald-50',
    amber: 'text-amber-600 bg-amber-50',
    purple: 'text-purple-600 bg-purple-50',
    rose: 'text-rose-600 bg-rose-50'
  };
  const handleShare = async () => {
    setIsSharing(true);
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } else {
        await navigator.clipboard.writeText(`${title}\n\n${text}`);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    } finally {
      setIsSharing(false);
    }
  };
  return <button onClick={handleShare} disabled={isSharing} className={`p-2 rounded-full transition-all duration-300 ${shared ? successColorClasses[color] : colorClasses[color]} ${isSharing ? 'opacity-70' : ''}`} aria-label="مشاركة">
      {shared ? <CheckIcon className="h-5 w-5 animate-scale-in" /> : <ShareIcon className="h-5 w-5" />}
    </button>;
}