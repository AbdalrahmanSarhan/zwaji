import React, { useState, createElement } from 'react';
import { XIcon, MailIcon, PhoneIcon, CalendarIcon, MailOpenIcon, ReplyIcon, ArchiveIcon } from 'lucide-react';
import { ContactMessage } from './ContactContext';
interface ContactDetailsProps {
  message: ContactMessage;
  onClose: () => void;
  onStatusChange: (status: 'new' | 'read' | 'replied' | 'archived') => void;
}
export function ContactDetails({
  message,
  onClose,
  onStatusChange
}: ContactDetailsProps) {
  const [replyText, setReplyText] = useState('');
  const [showReplyForm, setShowReplyForm] = useState(false);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'read':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'replied':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'archived':
        return 'bg-slate-100 text-slate-800 border-slate-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  const getStatusText = (status: string) => {
    switch (status) {
      case 'new':
        return 'جديدة';
      case 'read':
        return 'مقروءة';
      case 'replied':
        return 'تم الرد';
      case 'archived':
        return 'مؤرشفة';
      default:
        return 'غير معروف';
    }
  };
  const handleSendReply = () => {
    // In a real app, this would send an email to the user
    if (replyText.trim()) {
      // Update status to replied
      onStatusChange('replied');
      // Show success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-24 right-1/2 transform translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-lg z-50 animate-fadeIn';
      notification.textContent = 'تم إرسال الرد بنجاح';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.classList.add('opacity-0');
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 2000);
      // Close reply form
      setShowReplyForm(false);
      setReplyText('');
    }
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-4 bg-sky-50 border-b border-sky-100 flex justify-between items-center sticky top-0 z-10">
          <h3 className="font-bold text-sky-900">تفاصيل الرسالة</h3>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-sky-100 text-slate-500 hover:text-slate-700 transition-colors">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-6" style={{
        maxHeight: 'calc(90vh - 70px)'
      }}>
          <div className="mb-6">
            <div className={`p-4 rounded-lg ${getStatusClass(message.status)} border flex items-center justify-between`}>
              <div className="flex items-center">
                <span className="font-medium">
                  {getStatusText(message.status)}
                </span>
              </div>
              <div className="text-sm">
                تاريخ الإرسال: {formatDate(message.createdAt)}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-center mb-3">
                <UserIcon className="h-5 w-5 text-slate-500 ml-2" />
                <span className="font-medium text-slate-700">الاسم:</span>
                <span className="mr-2 text-slate-900">{message.name}</span>
              </div>
              <div className="flex items-center mb-3">
                <MailIcon className="h-5 w-5 text-slate-500 ml-2" />
                <span className="font-medium text-slate-700">
                  البريد الإلكتروني:
                </span>
                <span className="mr-2 text-slate-900">{message.email}</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-slate-500 ml-2" />
                <span className="font-medium text-slate-700">رقم الهاتف:</span>
                <span className="mr-2 text-slate-900">{message.phone}</span>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-center mb-3">
                <CalendarIcon className="h-5 w-5 text-slate-500 ml-2" />
                <span className="font-medium text-slate-700">
                  تاريخ الإرسال:
                </span>
                <span className="mr-2 text-slate-900">
                  {formatDate(message.createdAt)}
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-slate-700">الموضوع:</span>
                <span className="mr-2 text-slate-900">{message.subject}</span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-medium text-sky-800 mb-3">
              نص الرسالة:
            </h4>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-slate-800 whitespace-pre-wrap">
                {message.message}
              </p>
            </div>
          </div>
          {!showReplyForm ? <div className="flex flex-wrap gap-3">
              <button onClick={() => setShowReplyForm(true)} className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200 flex items-center">
                <ReplyIcon className="h-4 w-4 ml-2" />
                <span>الرد على الرسالة</span>
              </button>
              {message.status !== 'read' && <button onClick={() => onStatusChange('read')} className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200 transition-colors duration-200 flex items-center">
                  <MailOpenIcon className="h-4 w-4 ml-2" />
                  <span>تحديد كمقروءة</span>
                </button>}
              {message.status !== 'archived' && <button onClick={() => onStatusChange('archived')} className="px-4 py-2 bg-slate-100 text-slate-800 rounded-md hover:bg-slate-200 transition-colors duration-200 flex items-center">
                  <ArchiveIcon className="h-4 w-4 ml-2" />
                  <span>أرشفة</span>
                </button>}
            </div> : <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
              <h4 className="text-lg font-medium text-sky-800 mb-3">
                الرد على الرسالة:
              </h4>
              <div className="mb-4">
                <textarea value={replyText} onChange={e => setReplyText(e.target.value)} placeholder="اكتب ردك هنا..." className="w-full px-4 py-3 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none min-h-[150px]"></textarea>
              </div>
              <div className="flex justify-end gap-3">
                <button onClick={() => setShowReplyForm(false)} className="px-4 py-2 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors duration-200">
                  إلغاء
                </button>
                <button onClick={handleSendReply} className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200 flex items-center">
                  <ReplyIcon className="h-4 w-4 ml-2" />
                  <span>إرسال الرد</span>
                </button>
              </div>
            </div>}
          <div className="mt-8 pt-4 border-t border-slate-100">
            <button onClick={onClose} className="w-full py-2.5 rounded-md font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors duration-200">
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </div>;
}
function UserIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>;
}