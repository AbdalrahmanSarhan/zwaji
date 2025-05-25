import React, { useMemo, useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon, FilterIcon, StarIcon } from 'lucide-react';
import { useVideos, Video } from './VideosContext';
interface VideosListProps {
  onEdit: (video: Video) => void;
  onDelete: (video: Video) => void;
  onAdd: () => void;
}
export function VideosList({
  onEdit,
  onDelete,
  onAdd
}: VideosListProps) {
  const {
    videos
  } = useVideos();
  const [pathFilter, setPathFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const filteredVideos = useMemo(() => {
    return videos.filter(video => {
      if (pathFilter === 'all') return true;
      return video.path === pathFilter;
    }).filter(video => {
      if (!searchTerm) return true;
      return video.title.toLowerCase().includes(searchTerm.toLowerCase()) || video.description.toLowerCase().includes(searchTerm.toLowerCase()) || video.author && video.author.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [videos, pathFilter, searchTerm]);
  const pathOptions = [{
    value: 'all',
    label: 'جميع المسارات'
  }, {
    value: 'husband',
    label: 'مسار الزوج'
  }, {
    value: 'wife',
    label: 'مسار الزوجة'
  }, {
    value: 'engaged',
    label: 'المقبلين على الزواج'
  }, {
    value: 'both',
    label: 'الزوجين معاً'
  }, {
    value: 'general',
    label: 'معرفة عامة'
  }];
  const getPathLabel = (path: string) => {
    const option = pathOptions.find(opt => opt.value === path);
    return option ? option.label : path;
  };
  return <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-sky-50 border-b border-sky-100 flex justify-between items-center">
        <h2 className="font-bold text-lg text-sky-900">
          إدارة الفيديوهات التوعوية
        </h2>
        <button onClick={onAdd} className="px-3 py-1.5 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors flex items-center text-sm">
          <PlusIcon className="h-4 w-4 ml-1.5" />
          <span>إضافة فيديو جديد</span>
        </button>
      </div>
      <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3">
          <div className="flex items-center">
            <FilterIcon className="h-4 w-4 ml-2 text-slate-500" />
            <label className="text-sm text-slate-600">تصفية حسب المسار:</label>
          </div>
          <select value={pathFilter} onChange={e => setPathFilter(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 py-2 px-3 text-sm focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none">
            {pathOptions.map(option => <option key={option.value} value={option.value}>
                {option.label}
              </option>)}
          </select>
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex items-center">
            <EyeIcon className="h-4 w-4 ml-2 text-slate-500" />
            <label className="text-sm text-slate-600">بحث في الفيديوهات:</label>
          </div>
          <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="ابحث بالعنوان أو الوصف أو اسم المؤلف..." className="mt-1 w-full rounded-md border border-slate-200 py-2 px-3 text-sm focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الصورة
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                العنوان
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                المسار
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                مميز
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                تاريخ الإضافة
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredVideos.length === 0 ? <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                  لا توجد فيديوهات متاحة
                </td>
              </tr> : filteredVideos.map(video => <tr key={video.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img src={`https://img.youtube.com/vi/${video.youtubeId}/default.jpg`} alt={video.title} className="h-12 w-20 object-cover rounded" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {video.title}
                    </div>
                    {video.author && <div className="text-xs text-gray-500">
                        {video.author}
                      </div>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {getPathLabel(video.path)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {video.isFeatured ? <StarIcon className="h-5 w-5 text-amber-500 inline-block" /> : <span className="text-gray-400">-</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(video.createdAt).toLocaleDateString('ar-SA')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                    <div className="flex space-x-2 justify-end">
                      <a href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-900 p-1" title="عرض الفيديو">
                        <EyeIcon className="h-5 w-5" />
                      </a>
                      <button onClick={() => onEdit(video)} className="text-amber-600 hover:text-amber-900 p-1" title="تعديل">
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button onClick={() => onDelete(video)} className="text-rose-600 hover:text-rose-900 p-1" title="حذف">
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>)}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-gray-100 bg-gray-50">
        <div className="text-sm text-gray-500">
          إجمالي الفيديوهات: {filteredVideos.length} من {videos.length}
        </div>
      </div>
    </div>;
}