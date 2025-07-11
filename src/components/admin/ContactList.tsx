import React, { useState, createElement } from 'react';
import { SearchIcon, XIcon, MailIcon, MailOpenIcon, ReplyIcon, ArchiveIcon, TrashIcon, AlertCircleIcon } from 'lucide-react';
import { useContact, ContactMessage } from './ContactContext';
import { ContactDetails } from './ContactDetails';
export function ContactList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const {
    contactMessages,
    loading,
    updateContactMessage,
    deleteContactMessage
  } = useContact();
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const filteredMessages = contactMessages.filter(message => {
    const matchesSearch = searchQuery === '' || message.name.includes(searchQuery) || message.email.includes(searchQuery) || message.subject.includes(searchQuery) || message.message.includes(searchQuery);
    const matchesStatus = statusFilter === null || message.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  const handleViewDetails = (message: ContactMessage) => {
    // If message is new, mark it as read
    if (message.status === 'new') {
      updateContactMessage(message.id, {
        status: 'read'
      });
    }
    setSelectedMessage(message);
    setShowDetailsModal(true);
  };
  const handleMarkAsRead = (message: ContactMessage, e: React.MouseEvent) => {
    e.stopPropagation();
    updateContactMessage(message.id, {
      status: 'read'
    });
  };
  const handleMarkAsReplied = (message: ContactMessage, e: React.MouseEvent) => {
    e.stopPropagation();
    updateContactMessage(message.id, {
      status: 'replied'
    });
  };
  const handleArchive = (message: ContactMessage, e: React.MouseEvent) => {
    e.stopPropagation();
    updateContactMessage(message.id, {
      status: 'archived'
    });
  };
  const handleDelete = (message: ContactMessage, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedMessage(message);
    setShowDeleteConfirm(true);
  };
  const confirmDelete = () => {
    if (selectedMessage) {
      deleteContactMessage(selectedMessage.id);
      setShowDeleteConfirm(false);
      setSelectedMessage(null);
      // Show success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-24 right-1/2 transform translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-lg z-50 animate-fadeIn';
      notification.textContent = 'تم حذف الرسالة بنجاح';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.classList.add('opacity-0');
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 2000);
    }
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <AlertCircleIcon className="h-3 w-3 ml-1" />
            جديدة
          </span>;
      case 'read':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <MailOpenIcon className="h-3 w-3 ml-1" />
            مقروءة
          </span>;
      case 'replied':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <ReplyIcon className="h-3 w-3 ml-1" />
            تم الرد
          </span>;
      case 'archived':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
            <ArchiveIcon className="h-3 w-3 ml-1" />
            مؤرشفة
          </span>;
      default:
        return null;
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
        <h2 className="text-xl font-bold text-sky-900">رسائل التواصل</h2>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="بحث في الرسائل..." className="w-full px-4 py-2 pr-10 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" />
            <SearchIcon className="absolute top-2.5 right-3 h-5 w-5 text-slate-400" />
            {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute top-2.5 left-3 h-5 w-5 text-slate-400 hover:text-slate-600">
                <XIcon className="h-5 w-5" />
              </button>}
          </div>
        </div>
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        <div>
          <span className="block text-sm font-medium text-slate-700 mb-1">
            تصفية حسب الحالة:
          </span>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setStatusFilter(null)} className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusFilter === null ? 'bg-sky-100 text-sky-700' : 'bg-gray-100 text-gray-700 hover:bg-sky-50'}`}>
              الكل
            </button>
            <button onClick={() => setStatusFilter('new')} className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusFilter === 'new' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-blue-50'}`}>
              جديدة
            </button>
            <button onClick={() => setStatusFilter('read')} className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusFilter === 'read' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700 hover:bg-yellow-50'}`}>
              مقروءة
            </button>
            <button onClick={() => setStatusFilter('replied')} className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusFilter === 'replied' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-green-50'}`}>
              تم الرد
            </button>
            <button onClick={() => setStatusFilter('archived')} className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusFilter === 'archived' ? 'bg-slate-200 text-slate-700' : 'bg-gray-100 text-gray-700 hover:bg-slate-50'}`}>
              مؤرشفة
            </button>
          </div>
        </div>
      </div>
      {filteredMessages.length === 0 ? <div className="text-center py-12 bg-slate-50 rounded-lg">
          <p className="text-slate-500 mb-2">لا توجد رسائل مطابقة لبحثك</p>
          {(searchQuery || statusFilter) && <button onClick={() => {
        setSearchQuery('');
        setStatusFilter(null);
      }} className="text-sky-600 hover:text-sky-800 font-medium">
              عرض جميع الرسائل
            </button>}
        </div> : <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  المرسل
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  الموضوع
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  التاريخ
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  الحالة
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {filteredMessages.map(message => <tr key={message.id} className={`hover:bg-slate-50 cursor-pointer ${message.status === 'new' ? 'bg-blue-50' : ''}`} onClick={() => handleViewDetails(message)}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-slate-900">
                        {message.name}
                      </div>
                      <div className="text-sm text-slate-500">
                        {message.email}
                      </div>
                      <div className="text-xs text-slate-500">
                        {message.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-900 line-clamp-2">
                      {message.subject}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-500">
                      {formatDate(message.createdAt)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(message.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <div className="flex justify-center space-x-2 rtl:space-x-reverse">
                      {message.status === 'new' && <button onClick={e => handleMarkAsRead(message, e)} className="text-blue-600 hover:text-blue-900 p-1" title="تحديد كمقروءة">
                          <MailOpenIcon className="h-5 w-5" />
                        </button>}
                      {(message.status === 'new' || message.status === 'read') && <button onClick={e => handleMarkAsReplied(message, e)} className="text-green-600 hover:text-green-900 p-1" title="تحديد كتم الرد">
                          <ReplyIcon className="h-5 w-5" />
                        </button>}
                      {message.status !== 'archived' && <button onClick={e => handleArchive(message, e)} className="text-slate-600 hover:text-slate-900 p-1" title="أرشفة">
                          <ArchiveIcon className="h-5 w-5" />
                        </button>}
                      <button onClick={e => handleDelete(message, e)} className="text-red-600 hover:text-red-900 p-1" title="حذف">
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>}
      {showDetailsModal && selectedMessage && <ContactDetails message={selectedMessage} onClose={() => {
      setShowDetailsModal(false);
      setSelectedMessage(null);
    }} onStatusChange={status => {
      updateContactMessage(selectedMessage.id, {
        status
      });
    }} />}
      {showDeleteConfirm && selectedMessage && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden">
            <div className="p-4 bg-red-50 border-b border-red-100 flex justify-between items-center">
              <h3 className="font-bold text-red-900">تأكيد الحذف</h3>
              <button onClick={() => {
            setShowDeleteConfirm(false);
            setSelectedMessage(null);
          }} className="p-1.5 rounded-full hover:bg-red-100 text-slate-500 hover:text-slate-700 transition-colors">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-slate-700 mb-4">
                هل أنت متأكد من رغبتك في حذف هذه الرسالة؟ لا يمكن التراجع عن هذا
                الإجراء.
              </p>
              <div className="flex justify-between gap-4">
                <button onClick={() => {
              setShowDeleteConfirm(false);
              setSelectedMessage(null);
            }} className="px-4 py-2 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors duration-200 flex-1">
                  إلغاء
                </button>
                <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 flex-1">
                  نعم، حذف
                </button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}