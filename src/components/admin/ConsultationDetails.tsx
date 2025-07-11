import React from 'react';
import { XIcon, MonitorIcon, UsersIcon, PhoneIcon, MailIcon, CalendarIcon, ClockIcon, CreditCardIcon, FileTextIcon } from 'lucide-react';
import { ConsultationRequest } from './ConsultationRequestsContext';
interface ConsultationDetailsProps {
  request: ConsultationRequest;
  onClose: () => void;
}
export function ConsultationDetails({
  request,
  onClose
}: ConsultationDetailsProps) {
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
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'قيد الانتظار';
      case 'confirmed':
        return 'مؤكد';
      case 'completed':
        return 'مكتمل';
      case 'cancelled':
        return 'ملغي';
      default:
        return 'غير معروف';
    }
  };
  const getPaymentMethodText = (method: string) => {
    switch (method) {
      case 'cliq':
        return 'CliQ';
      case 'bank':
        return 'حوالة بنكية';
      case 'cash':
        return 'نقداً';
      default:
        return method;
    }
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-4 bg-sky-50 border-b border-sky-100 flex justify-between items-center sticky top-0 z-10">
          <h3 className="font-bold text-sky-900">تفاصيل طلب الاستشارة</h3>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-sky-100 text-slate-500 hover:text-slate-700 transition-colors">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-6" style={{
        maxHeight: 'calc(90vh - 70px)'
      }}>
          <div className="mb-6">
            <div className={`p-4 rounded-lg ${getStatusClass(request.status)} border flex items-center justify-between`}>
              <div className="flex items-center">
                <span className="font-medium">
                  {getStatusText(request.status)}
                </span>
              </div>
              <div className="text-sm">
                تاريخ الطلب: {formatDate(request.createdAt)}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-lg font-medium text-sky-800 mb-4 pb-2 border-b border-sky-100">
                معلومات المستخدم
              </h4>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-center mb-3">
                <UserIcon className="h-5 w-5 text-slate-500 ml-2" />
                <span className="font-medium text-slate-700">الاسم:</span>
                <span className="mr-2 text-slate-900">{request.userName}</span>
              </div>
              <div className="flex items-center mb-3">
                <PhoneIcon className="h-5 w-5 text-slate-500 ml-2" />
                <span className="font-medium text-slate-700">رقم الهاتف:</span>
                <span className="mr-2 text-slate-900">{request.userPhone}</span>
              </div>
              <div className="flex items-center">
                <MailIcon className="h-5 w-5 text-slate-500 ml-2" />
                <span className="font-medium text-slate-700">
                  البريد الإلكتروني:
                </span>
                <span className="mr-2 text-slate-900">{request.userEmail}</span>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-center mb-3">
                <CalendarIcon className="h-5 w-5 text-slate-500 ml-2" />
                <span className="font-medium text-slate-700">اليوم:</span>
                <span className="mr-2 text-slate-900">{request.date}</span>
              </div>
              <div className="flex items-center mb-3">
                <ClockIcon className="h-5 w-5 text-slate-500 ml-2" />
                <span className="font-medium text-slate-700">الوقت:</span>
                <span className="mr-2 text-slate-900">{request.time}</span>
              </div>
              <div className="flex items-center">
                {request.consultationType === 'online' ? <MonitorIcon className="h-5 w-5 text-green-600 ml-2" /> : <UsersIcon className="h-5 w-5 text-purple-600 ml-2" />}
                <span className="font-medium text-slate-700">
                  نوع الاستشارة:
                </span>
                <span className="mr-2 text-slate-900">
                  {request.consultationType === 'online' ? 'أونلاين' : 'وجاهي (شخصي)'}
                </span>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-lg font-medium text-sky-800 mb-4 pb-2 border-b border-sky-100">
                معلومات الاستشاري
              </h4>
            </div>
            <div className="col-span-1 md:col-span-2 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-center mb-3">
                <UserIcon className="h-5 w-5 text-slate-500 ml-2" />
                <span className="font-medium text-slate-700">الاستشاري:</span>
                <span className="mr-2 text-slate-900">
                  {request.consultantName}
                </span>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-lg font-medium text-sky-800 mb-4 pb-2 border-b border-sky-100">
                موضوع الاستشارة
              </h4>
            </div>
            <div className="col-span-1 md:col-span-2 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-start">
                <FileTextIcon className="h-5 w-5 text-slate-500 ml-2 mt-0.5" />
                <div>
                  <span className="font-medium text-slate-700 block mb-2">
                    الموضوع:
                  </span>
                  <p className="text-slate-900">{request.topic}</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-lg font-medium text-sky-800 mb-4 pb-2 border-b border-sky-100">
                معلومات الدفع
              </h4>
            </div>
            <div className="col-span-1 md:col-span-2 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-center mb-3">
                <CreditCardIcon className="h-5 w-5 text-slate-500 ml-2" />
                <span className="font-medium text-slate-700">طريقة الدفع:</span>
                <span className="mr-2 text-slate-900">
                  {getPaymentMethodText(request.paymentMethod)}
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-slate-700">حالة الدفع:</span>
                <span className={`mr-2 px-2 py-0.5 rounded-full text-xs font-medium ${request.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {request.paymentStatus === 'paid' ? 'تم الدفع' : 'بانتظار الدفع'}
                </span>
              </div>
            </div>
          </div>
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