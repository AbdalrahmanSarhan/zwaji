import React, { useEffect, useState } from 'react';
import { CheckCircleIcon, XCircleIcon, AlertCircleIcon, XIcon } from 'lucide-react';
export type ToastType = 'success' | 'error' | 'warning' | 'info';
interface ToastProps {
  type?: ToastType;
  message: string;
  duration?: number;
  onClose?: () => void;
  isVisible: boolean;
}
export const Toast: React.FC<ToastProps> = ({
  type = 'info',
  message,
  duration = 3000,
  onClose,
  isVisible
}) => {
  const [isClosing, setIsClosing] = useState(false);
  useEffect(() => {
    if (!isVisible) {
      setIsClosing(false);
      return;
    }
    const timer = setTimeout(() => {
      setIsClosing(true);
      const closeTimer = setTimeout(() => {
        if (onClose) onClose();
      }, 300);
      return () => clearTimeout(closeTimer);
    }, duration);
    return () => clearTimeout(timer);
  }, [isVisible, duration, onClose]);
  if (!isVisible) return null;
  const typeConfig = {
    success: {
      icon: <CheckCircleIcon className="h-5 w-5 text-green-500" />,
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800'
    },
    error: {
      icon: <XCircleIcon className="h-5 w-5 text-red-500" />,
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800'
    },
    warning: {
      icon: <AlertCircleIcon className="h-5 w-5 text-amber-500" />,
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-800'
    },
    info: {
      icon: <AlertCircleIcon className="h-5 w-5 text-sky-500" />,
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      text: 'text-sky-800'
    }
  };
  const config = typeConfig[type];
  return <div className={`fixed top-24 right-1/2 transform translate-x-1/2 ${config.bg} ${config.border} ${config.text} px-4 py-3 rounded-lg shadow-lg z-50 flex items-center transition-all duration-300 ${isClosing ? 'opacity-0 translate-y-[-15px]' : 'opacity-100'} border`} role="alert">
      <div className="ml-3">{config.icon}</div>
      <div className="mx-3 font-medium">{message}</div>
      <button onClick={() => {
      setIsClosing(true);
      setTimeout(() => {
        if (onClose) onClose();
      }, 300);
    }} className="ml-auto p-1.5 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors">
        <XIcon className="h-4 w-4" />
      </button>
    </div>;
};
export const useToast = () => {
  const [toast, setToast] = useState<{
    type: ToastType;
    message: string;
    isVisible: boolean;
  }>({
    type: 'info',
    message: '',
    isVisible: false
  });
  const showToast = (message: string, type: ToastType = 'info') => {
    setToast({
      type,
      message,
      isVisible: true
    });
  };
  const hideToast = () => {
    setToast(prev => ({
      ...prev,
      isVisible: false
    }));
  };
  return {
    Toast: <Toast type={toast.type} message={toast.message} isVisible={toast.isVisible} onClose={hideToast} />,
    showToast,
    hideToast
  };
};