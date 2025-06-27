import React, { useState } from 'react';
import { ShareIcon, CheckIcon, CopyIcon, XIcon } from 'lucide-react';
import { useShare } from '../hooks/useShare';
interface PageShareButtonProps {
  title: string;
  description: string;
  className?: string;
}
export function PageShareButton({
  title,
  description,
  className = ''
}: PageShareButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipStatus, setTooltipStatus] = useState<'success' | 'error' | 'info'>('info');
  const {
    share,
    isSupported
  } = useShare();
  const handleShare = async () => {
    const shareData = {
      title: title,
      text: description,
      url: window.location.href
    };
    const success = await share(shareData);
    if (success) {
      showSuccessTooltip(isSupported ? 'تم مشاركة الصفحة بنجاح' : 'تم نسخ رابط الصفحة');
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
  return <div className="relative">
      <button onClick={handleShare} className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 bg-amber-100 text-amber-700 hover:bg-amber-200 ${className}`} aria-label="مشاركة الصفحة">
        <ShareIcon className="h-4 w-4 ml-2" />
        <span>مشاركة الصفحة</span>
      </button>
      {showTooltip && <div className={`absolute top-full mt-2 right-0 z-50 px-3 py-2 rounded-md text-sm shadow-md border whitespace-nowrap animate-fadeIn ${getTooltipColorClasses()}`}>
          <div className="flex items-center">
            {tooltipStatus === 'success' ? <CheckIcon className="h-4 w-4 ml-1.5" /> : tooltipStatus === 'error' ? <XIcon className="h-4 w-4 ml-1.5" /> : <CopyIcon className="h-4 w-4 ml-1.5" />}
            <span>{tooltipText}</span>
          </div>
        </div>}
    </div>;
}