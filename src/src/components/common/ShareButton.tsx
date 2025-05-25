import React, { useState } from 'react';
import { Share2Icon, CheckIcon, CopyIcon, XIcon } from 'lucide-react';
import { useShare } from '../../hooks/useShare';
interface ShareButtonProps {
  title: string;
  text: string;
  url?: string;
  className?: string;
  variant?: 'icon' | 'button';
  color?: 'sky' | 'amber' | 'emerald' | 'rose' | 'purple' | 'slate';
}
export const ShareButton: React.FC<ShareButtonProps> = ({
  title,
  text,
  url = window.location.href,
  className = '',
  variant = 'icon',
  color = 'sky'
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipStatus, setTooltipStatus] = useState<'success' | 'error' | 'info'>('info');
  const {
    share,
    isSupported
  } = useShare();
  const getColorClasses = () => {
    switch (color) {
      case 'sky':
        return variant === 'button' ? 'bg-sky-100 text-sky-700 hover:bg-sky-200' : 'text-slate-400 hover:text-sky-500 hover:bg-sky-50';
      case 'amber':
        return variant === 'button' ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'text-slate-400 hover:text-amber-500 hover:bg-amber-50';
      case 'emerald':
        return variant === 'button' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' : 'text-slate-400 hover:text-emerald-500 hover:bg-emerald-50';
      case 'rose':
        return variant === 'button' ? 'bg-rose-100 text-rose-700 hover:bg-rose-200' : 'text-slate-400 hover:text-rose-500 hover:bg-rose-50';
      case 'purple':
        return variant === 'button' ? 'bg-purple-100 text-purple-700 hover:bg-purple-200' : 'text-slate-400 hover:text-purple-500 hover:bg-purple-50';
      default:
        return variant === 'button' ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50';
    }
  };
  const getTooltipColorClasses = () => {
    switch (tooltipStatus) {
      case 'success':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };
  const handleShare = async () => {
    const shareData = {
      title,
      text,
      url
    };
    const success = await share(shareData);
    if (success) {
      showSuccessTooltip(isSupported ? 'تمت المشاركة بنجاح' : 'تم نسخ المحتوى إلى الحافظة');
    } else {
      showErrorTooltip('فشلت المشاركة، حاول مرة أخرى');
    }
  };
  const showSuccessTooltip = (message: string) => {
    setTooltipText(message);
    setTooltipStatus('success');
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000);
  };
  const showErrorTooltip = (message: string) => {
    setTooltipText(message);
    setTooltipStatus('error');
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000);
  };
  return <div className="relative">
      {variant === 'button' ? <button onClick={handleShare} className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${getColorClasses()} ${className}`} aria-label="مشاركة">
          <Share2Icon className="h-4 w-4 ml-2" />
          <span>مشاركة</span>
        </button> : <button onClick={handleShare} className={`p-2 rounded-full transition-colors duration-200 ${getColorClasses()} ${className}`} aria-label="مشاركة">
          <Share2Icon className="h-5 w-5" />
        </button>}
      {showTooltip && <div className={`absolute top-full mt-2 right-0 z-50 px-3 py-2 rounded-md text-sm shadow-md border whitespace-nowrap animate-fadeIn ${getTooltipColorClasses()}`}>
          <div className="flex items-center">
            {tooltipStatus === 'success' ? <CheckIcon className="h-4 w-4 ml-1.5" /> : tooltipStatus === 'error' ? <XIcon className="h-4 w-4 ml-1.5" /> : <CopyIcon className="h-4 w-4 ml-1.5" />}
            <span>{tooltipText}</span>
          </div>
        </div>}
    </div>;
};