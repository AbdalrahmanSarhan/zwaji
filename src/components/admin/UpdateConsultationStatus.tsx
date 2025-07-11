import React, { useState, createElement } from 'react';
import { XIcon, CheckIcon, ClockIcon, XCircleIcon } from 'lucide-react';
import { ConsultationRequest, useConsultationRequests } from './ConsultationRequestsContext';
interface UpdateConsultationStatusProps {
  request: ConsultationRequest;
  onClose: () => void;
}
export function UpdateConsultationStatus({
  request,
  onClose
}: UpdateConsultationStatusProps) {
  const [status, setStatus] = useState<string>(request.status);
  const [paymentStatus, setPaymentStatus] = useState<string>(request.paymentStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    updateConsultationRequest
  } = useConsultationRequests();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      updateConsultationRequest(request.id, {
        status,
        paymentStatus
      });
      // Show success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-24 right-1/2 transform translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-lg z-50 animate-fadeIn';
      notification.textContent = 'تم تحديث حالة الطلب بنجاح';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.classList.add('opacity-0');
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 2000);
      onClose();
    } catch (error) {
      console.error('Error updating consultation request:', error);
      alert('حدث خطأ أثناء تحديث حالة الطلب');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden">
        <div className="p-4 bg-sky-50 border-b border-sky-100 flex justify-between items-center">
          <h3 className="font-bold text-sky-900">تحديث حالة الطلب</h3>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-sky-100 text-slate-500 hover:text-slate-700 transition-colors">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
              <div className="flex items-center mb-2">
                <span className="font-medium text-slate-700">المستخدم:</span>
                <span className="mr-2 text-slate-900">{request.userName}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-slate-700">الاستشاري:</span>
                <span className="mr-2 text-slate-900">
                  {request.consultantName}
                </span>
              </div>
            </div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              حالة الطلب
            </label>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button type="button" onClick={() => setStatus('pending')} className={`p-3 border rounded-lg flex flex-col items-center justify-center transition-colors ${status === 'pending' ? 'bg-yellow-50 border-yellow-400 ring-2 ring-yellow-200' : 'border-slate-200 hover:bg-slate-50'}`}>
                <ClockIcon className="w-6 h-6 text-yellow-500 mb-1" />
                <span className="text-sm font-medium">قيد الانتظار</span>
              </button>
              <button type="button" onClick={() => setStatus('confirmed')} className={`p-3 border rounded-lg flex flex-col items-center justify-center transition-colors ${status === 'confirmed' ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-200' : 'border-slate-200 hover:bg-slate-50'}`}>
                <CheckIcon className="w-6 h-6 text-blue-500 mb-1" />
                <span className="text-sm font-medium">مؤكد</span>
              </button>
              <button type="button" onClick={() => setStatus('completed')} className={`p-3 border rounded-lg flex flex-col items-center justify-center transition-colors ${status === 'completed' ? 'bg-green-50 border-green-400 ring-2 ring-green-200' : 'border-slate-200 hover:bg-slate-50'}`}>
                <CheckIcon className="w-6 h-6 text-green-500 mb-1" />
                <span className="text-sm font-medium">مكتمل</span>
              </button>
              <button type="button" onClick={() => setStatus('cancelled')} className={`p-3 border rounded-lg flex flex-col items-center justify-center transition-colors ${status === 'cancelled' ? 'bg-red-50 border-red-400 ring-2 ring-red-200' : 'border-slate-200 hover:bg-slate-50'}`}>
                <XCircleIcon className="w-6 h-6 text-red-500 mb-1" />
                <span className="text-sm font-medium">ملغي</span>
              </button>
            </div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              حالة الدفع
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={() => setPaymentStatus('pending')} className={`p-3 border rounded-lg flex items-center justify-center transition-colors ${paymentStatus === 'pending' ? 'bg-yellow-50 border-yellow-400 ring-2 ring-yellow-200' : 'border-slate-200 hover:bg-slate-50'}`}>
                <span className="text-sm font-medium">بانتظار الدفع</span>
              </button>
              <button type="button" onClick={() => setPaymentStatus('paid')} className={`p-3 border rounded-lg flex items-center justify-center transition-colors ${paymentStatus === 'paid' ? 'bg-green-50 border-green-400 ring-2 ring-green-200' : 'border-slate-200 hover:bg-slate-50'}`}>
                <span className="text-sm font-medium">تم الدفع</span>
              </button>
            </div>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-md font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors duration-200">
              إلغاء
            </button>
            <button type="submit" disabled={isSubmitting} className="flex-1 py-2.5 rounded-md font-medium bg-sky-600 hover:bg-sky-700 text-white transition-colors duration-200 flex items-center justify-center">
              {isSubmitting ? <>
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                  <span>جاري الحفظ...</span>
                </> : <span>حفظ التغييرات</span>}
            </button>
          </div>
        </form>
      </div>
    </div>;
}