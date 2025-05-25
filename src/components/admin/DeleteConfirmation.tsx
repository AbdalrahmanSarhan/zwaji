import React, { useState, createElement } from 'react';
import { XIcon, AlertTriangleIcon } from 'lucide-react';
import { Consultant } from '../Consultants';
import { useConsultants } from './ConsultantsContext';
interface DeleteConfirmationProps {
  consultant: Consultant;
  onClose: () => void;
}
export function DeleteConfirmation({
  consultant,
  onClose
}: DeleteConfirmationProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const {
    deleteConsultant
  } = useConsultants();
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      deleteConsultant(consultant.id);
      // Show success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-24 right-1/2 transform translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-lg z-50 animate-fadeIn';
      notification.textContent = 'تم حذف الاستشاري بنجاح';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.classList.add('opacity-0');
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 2000);
      onClose();
    } catch (error) {
      console.error('Error deleting consultant:', error);
      alert('حدث خطأ أثناء حذف الاستشاري');
    } finally {
      setIsDeleting(false);
    }
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden">
        <div className="p-4 bg-rose-50 border-b border-rose-100 flex justify-between items-center">
          <h3 className="font-bold text-rose-900">تأكيد الحذف</h3>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-rose-100 text-slate-500 hover:text-slate-700 transition-colors">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-rose-100 rounded-full">
              <AlertTriangleIcon className="h-6 w-6 text-rose-600" />
            </div>
            <div className="mr-4">
              <h4 className="font-bold text-lg text-slate-900">
                هل أنت متأكد من حذف هذا الاستشاري؟
              </h4>
              <p className="text-slate-600 mt-1">
                سيتم حذف {consultant.name} من قائمة الاستشاريين بشكل نهائي.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
            <div className="flex items-center">
              <img src={consultant.image} alt={consultant.name} className="h-12 w-12 rounded-full object-cover" />
              <div className="mr-3">
                <p className="font-medium text-slate-900">{consultant.name}</p>
                <p className="text-sm text-slate-500">{consultant.title}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={onClose} disabled={isDeleting} className="flex-1 py-2.5 rounded-md font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors duration-200">
              إلغاء
            </button>
            <button onClick={handleDelete} disabled={isDeleting} className="flex-1 py-2.5 rounded-md font-medium bg-rose-600 hover:bg-rose-700 text-white transition-colors duration-200 flex items-center justify-center">
              {isDeleting ? <>
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                  <span>جاري الحذف...</span>
                </> : <span>تأكيد الحذف</span>}
            </button>
          </div>
        </div>
      </div>
    </div>;
}