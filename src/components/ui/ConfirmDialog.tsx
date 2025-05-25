import React, { useState } from 'react';
interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: 'red' | 'sky' | 'amber' | 'emerald';
  icon?: React.ReactNode;
}
export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'تأكيد',
  cancelText = 'إلغاء',
  confirmColor = 'sky',
  icon
}) => {
  if (!isOpen) return null;
  const colorClasses = {
    red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
    sky: 'bg-sky-600 hover:bg-sky-700 focus:ring-sky-500',
    amber: 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500',
    emerald: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500'
  };
  return <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" aria-hidden="true" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-right overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" onClick={e => e.stopPropagation()}>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              {icon && <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-slate-100 sm:mx-0 sm:h-10 sm:w-10">
                  {icon}
                </div>}
              <div className="mt-3 text-center sm:mt-0 sm:mr-4 sm:text-right">
                <h3 className="text-lg leading-6 font-medium text-slate-900" id="modal-title">
                  {title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-slate-500">{message}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${colorClasses[confirmColor]} text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mr-3 sm:w-auto sm:text-sm`} onClick={() => {
            onConfirm();
            onClose();
          }}>
              {confirmText}
            </button>
            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-slate-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={onClose}>
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export const useConfirmDialog = () => {
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {},
    confirmText: 'تأكيد',
    cancelText: 'إلغاء',
    confirmColor: 'sky' as 'red' | 'sky' | 'amber' | 'emerald',
    icon: null as React.ReactNode
  });
  const openConfirmDialog = ({
    title,
    message,
    onConfirm,
    confirmText = 'تأكيد',
    cancelText = 'إلغاء',
    confirmColor = 'sky',
    icon = null
  }: {
    title: string;
    message: string;
    onConfirm: () => void;
    confirmText?: string;
    cancelText?: string;
    confirmColor?: 'red' | 'sky' | 'amber' | 'emerald';
    icon?: React.ReactNode;
  }) => {
    setDialogState({
      isOpen: true,
      title,
      message,
      onConfirm,
      confirmText,
      cancelText,
      confirmColor,
      icon
    });
  };
  const closeConfirmDialog = () => {
    setDialogState(prev => ({
      ...prev,
      isOpen: false
    }));
  };
  return {
    ConfirmDialog: <ConfirmDialog isOpen={dialogState.isOpen} onClose={closeConfirmDialog} onConfirm={dialogState.onConfirm} title={dialogState.title} message={dialogState.message} confirmText={dialogState.confirmText} cancelText={dialogState.cancelText} confirmColor={dialogState.confirmColor} icon={dialogState.icon} />,
    openConfirmDialog,
    closeConfirmDialog
  };
};