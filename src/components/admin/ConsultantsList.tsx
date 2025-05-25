import React, { useState } from 'react';
import { EditIcon, TrashIcon, PlusIcon, SearchIcon, XIcon, MonitorIcon, UsersIcon } from 'lucide-react';
import { Consultant } from '../Consultants';
import { useConsultants } from './ConsultantsContext';
interface ConsultantsListProps {
  onEdit: (consultant: Consultant) => void;
  onDelete: (consultant: Consultant) => void;
  onAdd: () => void;
}
export function ConsultantsList({
  onEdit,
  onDelete,
  onAdd
}: ConsultantsListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    consultants,
    loading
  } = useConsultants();
  const filteredConsultants = consultants.filter(consultant => consultant.name.includes(searchQuery) || consultant.title.includes(searchQuery) || consultant.specialization.some(s => s.includes(searchQuery)));
  if (loading) {
    return <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-sky-600 border-t-transparent"></div>
        </div>
      </div>;
  }
  return <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-sky-900">قائمة الاستشاريين</h2>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="بحث عن استشاري..." className="w-full px-4 py-2 pr-10 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" />
            <SearchIcon className="absolute top-2.5 right-3 h-5 w-5 text-slate-400" />
            {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute top-2.5 left-3 h-5 w-5 text-slate-400 hover:text-slate-600">
                <XIcon className="h-5 w-5" />
              </button>}
          </div>
          <button onClick={onAdd} className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center">
            <PlusIcon className="h-5 w-5 ml-1.5" />
            <span>إضافة استشاري</span>
          </button>
        </div>
      </div>
      {filteredConsultants.length === 0 ? <div className="text-center py-12 bg-slate-50 rounded-lg">
          <p className="text-slate-500 mb-2">لا يوجد استشاريين مطابقين لبحثك</p>
          {searchQuery && <button onClick={() => setSearchQuery('')} className="text-sky-600 hover:text-sky-800 font-medium">
              عرض جميع الاستشاريين
            </button>}
        </div> : <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  الاستشاري
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  التخصصات
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  أسعار الاستشارات
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  التقييم
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {filteredConsultants.map(consultant => <tr key={consultant.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded-full object-cover" src={consultant.image} alt={consultant.name} />
                      </div>
                      <div className="mr-4">
                        <div className="text-sm font-medium text-slate-900">
                          {consultant.name}
                        </div>
                        <div className="text-sm text-slate-500">
                          {consultant.title}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {consultant.specialization.slice(0, 2).map((spec, index) => <span key={index} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800">
                            {spec}
                          </span>)}
                      {consultant.specialization.length > 2 && <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                          +{consultant.specialization.length - 2}
                        </span>}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-900 space-y-1">
                      {consultant.onlineAvailable && <div className="flex items-center">
                          <MonitorIcon className="h-4 w-4 text-green-600 ml-1" />
                          <span>أونلاين: {consultant.price.online}</span>
                        </div>}
                      {consultant.inPersonAvailable && <div className="flex items-center">
                          <UsersIcon className="h-4 w-4 text-purple-600 ml-1" />
                          <span>وجاهي: {consultant.price.inPerson}</span>
                        </div>}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-amber-500">★</span>
                      <span className="ml-1 text-sm text-slate-900">
                        {consultant.rating}
                      </span>
                      <span className="ml-1 text-xs text-slate-500">
                        ({consultant.reviewCount})
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <div className="flex justify-center space-x-2 rtl:space-x-reverse">
                      <button onClick={() => onEdit(consultant)} className="text-sky-600 hover:text-sky-900 p-1" title="تعديل">
                        <EditIcon className="h-5 w-5" />
                      </button>
                      <button onClick={() => onDelete(consultant)} className="text-rose-600 hover:text-rose-900 p-1" title="حذف">
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>}
    </div>;
}