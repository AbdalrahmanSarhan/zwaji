import React, { useState } from 'react';
import { SearchIcon, XIcon, MonitorIcon, UsersIcon, CheckIcon, XCircleIcon, ClockIcon, AlertCircleIcon } from 'lucide-react';
import { useConsultationRequests, ConsultationRequest } from './ConsultationRequestsContext';
import { UpdateConsultationStatus } from './UpdateConsultationStatus';
interface ConsultationRequestsListProps {
  onViewDetails: (request: ConsultationRequest) => void;
}
export function ConsultationRequestsList({
  onViewDetails
}: ConsultationRequestsListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [consultantFilter, setConsultantFilter] = useState<number | null>(null);
  const {
    consultationRequests,
    loading
  } = useConsultationRequests();
  const [selectedRequest, setSelectedRequest] = useState<ConsultationRequest | null>(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  // Get unique consultants from the requests
  const uniqueConsultants = Array.from(new Set(consultationRequests.map(request => request.consultantId))).map(consultantId => {
    const request = consultationRequests.find(r => r.consultantId === consultantId);
    return {
      id: consultantId,
      name: request ? request.consultantName : 'غير معروف'
    };
  });
  const filteredRequests = consultationRequests.filter(request => {
    const matchesSearch = searchQuery === '' || request.userName.includes(searchQuery) || request.userPhone.includes(searchQuery) || request.userEmail.includes(searchQuery) || request.topic.includes(searchQuery) || request.consultantName.includes(searchQuery);
    const matchesStatus = statusFilter === null || request.status === statusFilter;
    const matchesConsultant = consultantFilter === null || request.consultantId === consultantFilter;
    return matchesSearch && matchesStatus && matchesConsultant;
  });
  const handleUpdateStatus = (request: ConsultationRequest) => {
    setSelectedRequest(request);
    setShowStatusModal(true);
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <ClockIcon className="h-3 w-3 ml-1" />
            قيد الانتظار
          </span>;
      case 'confirmed':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <CheckIcon className="h-3 w-3 ml-1" />
            مؤكد
          </span>;
      case 'completed':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckIcon className="h-3 w-3 ml-1" />
            مكتمل
          </span>;
      case 'cancelled':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircleIcon className="h-3 w-3 ml-1" />
            ملغي
          </span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <AlertCircleIcon className="h-3 w-3 ml-1" />
            غير معروف
          </span>;
    }
  };
  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            تم الدفع
          </span>;
      case 'pending':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            بانتظار الدفع
          </span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            غير معروف
          </span>;
    }
  };
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
  if (loading) {
    return <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-sky-600 border-t-transparent"></div>
        </div>
      </div>;
  }
  return <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-sky-900">طلبات الاستشارة</h2>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="بحث عن طلب..." className="w-full px-4 py-2 pr-10 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" />
            <SearchIcon className="absolute top-2.5 right-3 h-5 w-5 text-slate-400" />
            {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute top-2.5 left-3 h-5 w-5 text-slate-400 hover:text-slate-600">
                <XIcon className="h-5 w-5" />
              </button>}
          </div>
        </div>
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        <div className="ml-4">
          <span className="block text-sm font-medium text-slate-700 mb-1">
            تصفية حسب الحالة:
          </span>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setStatusFilter(null)} className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusFilter === null ? 'bg-sky-100 text-sky-700' : 'bg-gray-100 text-gray-700 hover:bg-sky-50'}`}>
              الكل
            </button>
            <button onClick={() => setStatusFilter('pending')} className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusFilter === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700 hover:bg-yellow-50'}`}>
              قيد الانتظار
            </button>
            <button onClick={() => setStatusFilter('confirmed')} className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusFilter === 'confirmed' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-blue-50'}`}>
              مؤكد
            </button>
            <button onClick={() => setStatusFilter('completed')} className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusFilter === 'completed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-green-50'}`}>
              مكتمل
            </button>
            <button onClick={() => setStatusFilter('cancelled')} className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusFilter === 'cancelled' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700 hover:bg-red-50'}`}>
              ملغي
            </button>
          </div>
        </div>
        <div>
          <span className="block text-sm font-medium text-slate-700 mb-1">
            تصفية حسب الاستشاري:
          </span>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setConsultantFilter(null)} className={`px-3 py-1.5 rounded-full text-xs font-medium ${consultantFilter === null ? 'bg-sky-100 text-sky-700' : 'bg-gray-100 text-gray-700 hover:bg-sky-50'}`}>
              الكل
            </button>
            {uniqueConsultants.map(consultant => <button key={consultant.id} onClick={() => setConsultantFilter(consultant.id)} className={`px-3 py-1.5 rounded-full text-xs font-medium ${consultantFilter === consultant.id ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700 hover:bg-purple-50'}`}>
                {consultant.name}
              </button>)}
          </div>
        </div>
      </div>
      {filteredRequests.length === 0 ? <div className="text-center py-12 bg-slate-50 rounded-lg">
          <p className="text-slate-500 mb-2">
            لا يوجد طلبات استشارة مطابقة لبحثك
          </p>
          {(searchQuery || statusFilter || consultantFilter) && <button onClick={() => {
        setSearchQuery('');
        setStatusFilter(null);
        setConsultantFilter(null);
      }} className="text-sky-600 hover:text-sky-800 font-medium">
              عرض جميع الطلبات
            </button>}
        </div> : <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  المستخدم
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  الاستشاري
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  الموعد
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  النوع
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  الحالة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  الدفع
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {filteredRequests.map(request => <tr key={request.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-slate-900">
                        {request.userName}
                      </div>
                      <div className="text-sm text-slate-500">
                        {request.userPhone}
                      </div>
                      <div className="text-xs text-slate-500">
                        {request.userEmail}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900">
                      {request.consultantName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900">
                      {request.date} - {request.time}
                    </div>
                    <div className="text-xs text-slate-500">
                      {formatDate(request.createdAt)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900">
                      {request.consultationType === 'online' ? <div className="flex items-center">
                          <MonitorIcon className="h-4 w-4 text-green-600 ml-1" />
                          <span>أونلاين</span>
                        </div> : <div className="flex items-center">
                          <UsersIcon className="h-4 w-4 text-purple-600 ml-1" />
                          <span>وجاهي</span>
                        </div>}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(request.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col items-start">
                      <div className="text-sm text-slate-900 mb-1">
                        {request.paymentMethod === 'cliq' ? 'CliQ' : request.paymentMethod === 'bank' ? 'حوالة بنكية' : request.paymentMethod === 'cash' ? 'نقداً' : request.paymentMethod}
                      </div>
                      {getPaymentStatusBadge(request.paymentStatus)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <div className="flex justify-center space-x-2 rtl:space-x-reverse">
                      <button onClick={() => handleUpdateStatus(request)} className="text-sky-600 hover:text-sky-900 p-1" title="تغيير الحالة">
                        <CheckIcon className="h-5 w-5" />
                      </button>
                      <button onClick={() => onViewDetails(request)} className="text-amber-600 hover:text-amber-900 p-1" title="عرض التفاصيل">
                        <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded-md text-xs">
                          التفاصيل
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>}
      {showStatusModal && selectedRequest && <UpdateConsultationStatus request={selectedRequest} onClose={() => {
      setShowStatusModal(false);
      setSelectedRequest(null);
    }} />}
    </div>;
}