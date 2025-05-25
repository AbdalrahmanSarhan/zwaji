import React, { useEffect, useState, createElement } from 'react';
import { XIcon, StarIcon } from 'lucide-react';
import { useVideos, Video } from './VideosContext';
interface VideoFormProps {
  video: Video | null;
  onClose: () => void;
}
export function VideoForm({
  video,
  onClose
}: VideoFormProps) {
  const {
    addVideo,
    updateVideo
  } = useVideos();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<Video>>({
    title: '',
    youtubeId: '',
    description: '',
    path: 'general',
    isFeatured: false,
    author: ''
  });
  // Extract YouTube ID from URL if URL is provided
  const extractYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : url;
  };
  useEffect(() => {
    if (video) {
      setFormData(video);
    }
  }, [video]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value,
      type
    } = e.target;
    if (name === 'youtubeId') {
      // Extract YouTube ID if a URL is pasted
      const extractedId = extractYouTubeId(value);
      setFormData({
        ...formData,
        youtubeId: extractedId
      });
    } else if (name === 'isFeatured') {
      setFormData({
        ...formData,
        isFeatured: (e.target as HTMLInputElement).checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Validate required fields
      if (!formData.title || !formData.youtubeId || !formData.description || !formData.path) {
        throw new Error('يرجى ملء جميع الحقول المطلوبة');
      }
      if (video) {
        updateVideo(video.id, formData);
      } else {
        addVideo(formData as Omit<Video, 'id' | 'createdAt'>);
      }
      // Show success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-24 right-1/2 transform translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-lg z-50 animate-fadeIn';
      notification.textContent = video ? 'تم تحديث الفيديو بنجاح' : 'تمت إضافة الفيديو بنجاح';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.classList.add('opacity-0');
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 2000);
      onClose();
    } catch (error) {
      alert(error instanceof Error ? error.message : 'حدث خطأ أثناء حفظ البيانات');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="p-4 bg-sky-50 border-b border-sky-100 flex justify-between items-center sticky top-0 z-10">
          <h3 className="font-bold text-sky-900">
            {video ? 'تعديل فيديو' : 'إضافة فيديو جديد'}
          </h3>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-sky-100 text-slate-500 hover:text-slate-700 transition-colors">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-6" style={{
        maxHeight: 'calc(90vh - 70px)'
      }}>
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  عنوان الفيديو <span className="text-rose-500">*</span>
                </label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="أدخل عنوان الفيديو" />
              </div>
              {/* YouTube ID */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  رابط الفيديو أو YouTube ID{' '}
                  <span className="text-rose-500">*</span>
                </label>
                <input type="text" name="youtubeId" value={formData.youtubeId} onChange={handleChange} required className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="أدخل رابط الفيديو أو YouTube ID" />
                {formData.youtubeId && <div className="mt-3">
                    <p className="text-xs text-slate-500 mb-2">
                      معاينة الصورة المصغرة:
                    </p>
                    <img src={`https://img.youtube.com/vi/${formData.youtubeId}/0.jpg`} alt="معاينة الفيديو" className="h-24 object-cover rounded" onError={e => {
                  ;
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/480x360?text=خطأ+في+معرف+الفيديو';
                }} />
                  </div>}
              </div>
              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  وصف الفيديو <span className="text-rose-500">*</span>
                </label>
                <textarea name="description" value={formData.description} onChange={handleChange} required rows={3} className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="أدخل وصفاً مختصراً للفيديو" />
              </div>
              {/* Author */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  اسم المؤلف أو المتحدث
                </label>
                <input type="text" name="author" value={formData.author || ''} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="مثال: د. عبدالله المطلق" />
              </div>
              {/* Path */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  المسار <span className="text-rose-500">*</span>
                </label>
                <select name="path" value={formData.path} onChange={handleChange} required className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none">
                  <option value="husband">مسار الزوج</option>
                  <option value="wife">مسار الزوجة</option>
                  <option value="engaged">المقبلين على الزواج</option>
                  <option value="both">الزوجين معاً</option>
                  <option value="general">معرفة عامة</option>
                </select>
              </div>
              {/* Featured */}
              <div className="flex items-center">
                <input type="checkbox" id="isFeatured" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} className="h-5 w-5 text-amber-600 focus:ring-amber-500 border-gray-300 rounded" />
                <label htmlFor="isFeatured" className="mr-2 flex items-center text-slate-700">
                  <StarIcon className="h-4 w-4 text-amber-500 ml-1" />
                  فيديو مميز
                </label>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 flex gap-3">
              <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-md font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors duration-200">
                إلغاء
              </button>
              <button type="submit" disabled={isSubmitting} className="flex-1 py-2.5 rounded-md font-medium bg-sky-600 hover:bg-sky-700 text-white transition-colors duration-200 flex items-center justify-center">
                {isSubmitting ? <>
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                    <span>جاري الحفظ...</span>
                  </> : <span>{video ? 'تحديث الفيديو' : 'إضافة الفيديو'}</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
}