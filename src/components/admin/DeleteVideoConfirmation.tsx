import React, { createElement } from 'react';
import { AlertTriangleIcon, XIcon } from 'lucide-react';
import { useVideos, Video } from './VideosContext';
interface DeleteVideoConfirmationProps {
  video: Video;
  onClose: () => void;
}
export function DeleteVideoConfirmation({
  video,
  onClose
}: DeleteVideoConfirmationProps) {
  const {
    deleteVideo
  } = useVideos();
  const handleDelete = () => {
    deleteVideo(video.id);
    // Show success notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-24 right-1/2 transform translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-lg z-50 animate-fadeIn';
    notification.textContent = 'تم حذف الفيديو بنجاح';
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.add('opacity-0');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 2000);
    onClose();
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="p-4 bg-rose-50 border-b border-rose-100 flex justify-between items-center">
          <h3 className="font-bold text-rose-900">تأكيد الحذف</h3>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-rose-100 text-slate-500 hover:text-slate-700 transition-colors">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-rose-100 rounded-full p-3">
              <AlertTriangleIcon className="h-6 w-6 text-rose-600" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-center mb-2">
            هل أنت متأكد من حذف هذا الفيديو؟
          </h3>
          <p className="text-slate-600 text-center mb-4">
            سيتم حذف الفيديو "{video.title}" نهائياً. لا يمكن التراجع عن هذا
            الإجراء.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button onClick={onClose} className="flex-1 py-2 px-4 rounded-md font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors duration-200">
              إلغاء
            </button>
            <button onClick={handleDelete} className="flex-1 py-2 px-4 rounded-md font-medium bg-rose-600 hover:bg-rose-700 text-white transition-colors duration-200">
              نعم، احذف الفيديو
            </button>
          </div>
        </div>
      </div>
    </div>;
}