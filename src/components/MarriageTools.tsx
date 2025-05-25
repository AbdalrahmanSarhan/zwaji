import React, { useState, createElement } from 'react';
import { FileTextIcon, DownloadIcon, BookOpenIcon, FileIcon, HeartIcon, CheckCircleIcon, MailIcon, XIcon } from 'lucide-react';
interface ToolResource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'worksheet' | 'guide' | 'book';
  downloadUrl: string;
  thumbnailUrl: string;
  pages?: number;
  category: 'rights' | 'communication' | 'evaluation' | 'spiritual' | 'general';
}
export function MarriageTools() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<ToolResource | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  // يمكن استبدال هذه الروابط بروابط حقيقية من Firebase أو Google Drive
  const resources: ToolResource[] = [{
    id: 'rights-doc',
    title: '10 حقوق الزوجة والزوج',
    description: 'ملخص شامل لأهم الحقوق الشرعية للزوجين في الإسلام، مدعم بالأدلة من القرآن والسنة',
    type: 'pdf',
    downloadUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1532153955177-f59af40d6472?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    pages: 4,
    category: 'rights'
  }, {
    id: 'communication-worksheet',
    title: 'كيف نتحاور؟',
    description: 'ورقة عمل تساعد الزوجين على تطوير مهارات التواصل الفعال وحل الخلافات بطريقة إيجابية',
    type: 'worksheet',
    downloadUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    pages: 8,
    category: 'communication'
  }, {
    id: 'evaluation-sheet',
    title: 'كيف نقيم زواجنا؟',
    description: 'استبيان تقييم ذاتي يساعد الزوجين على تحديد نقاط القوة والضعف في علاقتهما',
    type: 'guide',
    downloadUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    pages: 6,
    category: 'evaluation'
  }, {
    id: 'prayers-booklet',
    title: 'أدعية للحياة الزوجية',
    description: 'مجموعة من الأدعية المأثورة والأذكار التي تساعد على استقرار الحياة الزوجية وسعادتها',
    type: 'book',
    downloadUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1585681614545-cd8c7b9d92b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    pages: 12,
    category: 'spiritual'
  }, {
    id: 'conflict-resolution',
    title: 'أساليب حل الخلافات الزوجية',
    description: 'دليل عملي يقدم استراتيجيات فعالة لحل الخلافات بين الزوجين بطريقة صحية',
    type: 'guide',
    downloadUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    pages: 10,
    category: 'communication'
  }, {
    id: 'marriage-goals',
    title: 'تحديد أهداف الزواج',
    description: 'ورقة عمل لمساعدة الزوجين على تحديد أهدافهما المشتركة وخطة تحقيقها',
    type: 'worksheet',
    downloadUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    pages: 5,
    category: 'general'
  }];
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileTextIcon className="h-10 w-10 text-rose-500" />;
      case 'worksheet':
        return <FileIcon className="h-10 w-10 text-sky-500" />;
      case 'guide':
        return <BookOpenIcon className="h-10 w-10 text-amber-500" />;
      case 'book':
        return <BookOpenIcon className="h-10 w-10 text-emerald-500" />;
      default:
        return <FileTextIcon className="h-10 w-10 text-slate-500" />;
    }
  };
  const getResourceTypeLabel = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'ملف PDF';
      case 'worksheet':
        return 'ورقة عمل';
      case 'guide':
        return 'دليل إرشادي';
      case 'book':
        return 'كتيب';
      default:
        return 'ملف';
    }
  };
  const handleDownload = (resource: ToolResource) => {
    // في الحالة الحقيقية، هنا يمكن تتبع التحميل أو إضافة تحليلات
    setSelectedResource(resource);
    setShowEmailModal(true);
  };
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // محاكاة لعملية الإرسال
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // بعد نجاح الإرسال، يمكن إعادة توجيه المستخدم للتحميل المباشر
      setTimeout(() => {
        setShowEmailModal(false);
        setEmail('');
        setSubmitSuccess(false);
        // هنا يمكن فتح رابط التحميل مباشرة
        // window.open(selectedResource?.downloadUrl, '_blank')
        // نظرًا لأننا نستخدم روابط وهمية، سنعرض إشعارًا بدلاً من ذلك
        const notification = document.createElement('div');
        notification.className = 'fixed top-24 right-1/2 transform translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-lg z-50 animate-fadeIn';
        notification.textContent = `تم بدء تحميل: ${selectedResource?.title}`;
        document.body.appendChild(notification);
        setTimeout(() => {
          notification.classList.add('opacity-0');
          setTimeout(() => {
            document.body.removeChild(notification);
          }, 300);
        }, 2000);
      }, 1500);
    }, 1000);
  };
  return <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-amber-900">
        مكتبة الأدوات الزوجية
      </h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-6">
          <BookOpenIcon className="h-8 w-8 text-amber-600 ml-4" />
          <h3 className="text-xl font-bold text-amber-800">
            أدوات ومستندات مفيدة للحياة الزوجية
          </h3>
        </div>
        <p className="text-slate-700 leading-relaxed mb-8">
          مجموعة من الأدوات والمستندات المفيدة التي تساعد الزوجين على بناء حياة
          زوجية سعيدة ومستقرة. يمكنك تحميل هذه الموارد واستخدامها مع شريك حياتك
          للتواصل بشكل أفضل وفهم حقوقكما وواجباتكما.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map(resource => <div key={resource.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200 flex flex-col">
              <div className="h-40 bg-cover bg-center" style={{
            backgroundImage: `url(${resource.thumbnailUrl})`
          }}>
                <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div className="bg-white/90 rounded-full p-2 backdrop-blur-sm">
                    {getResourceIcon(resource.type)}
                  </div>
                </div>
              </div>
              <div className="p-4 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg text-slate-800">
                    {resource.title}
                  </h4>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                    {getResourceTypeLabel(resource.type)}
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {resource.description}
                </p>
                <div className="text-xs text-slate-500 flex items-center mt-2 mb-4">
                  <FileTextIcon className="h-3.5 w-3.5 ml-1.5" />
                  <span>{resource.pages} صفحات</span>
                </div>
              </div>
              <div className="p-4 border-t border-slate-100">
                <button onClick={() => handleDownload(resource)} className="w-full py-2 flex items-center justify-center bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-md transition-colors duration-200">
                  <DownloadIcon className="h-4 w-4 ml-2" />
                  <span>تحميل الملف</span>
                </button>
              </div>
            </div>)}
        </div>
      </div>
      {/* نافذة إدخال البريد الإلكتروني */}
      {showEmailModal && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-fadeIn">
            <div className="p-4 bg-amber-50 border-b border-amber-100 flex justify-between items-center">
              <h3 className="font-bold text-amber-900">تحميل الملف</h3>
              <button onClick={() => setShowEmailModal(false)} className="p-1.5 rounded-full hover:bg-amber-100 text-slate-500 hover:text-slate-700 transition-colors">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              {!submitSuccess ? <>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center ml-4">
                      {getResourceIcon(selectedResource?.type || 'pdf')}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">
                        {selectedResource?.title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {getResourceTypeLabel(selectedResource?.type || 'pdf')}{' '}
                        • {selectedResource?.pages} صفحات
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-6">
                    أدخل بريدك الإلكتروني لتلقي رابط التحميل مباشرة، ولمتابعة
                    آخر الإصدارات والأدوات المفيدة.
                  </p>
                  <form onSubmit={handleEmailSubmit}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        البريد الإلكتروني
                      </label>
                      <div className="relative">
                        <MailIcon className="absolute right-3 top-3 h-5 w-5 text-slate-400" />
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-4 py-2.5 pr-10 rounded-md border border-slate-200 focus:border-amber-300 focus:ring focus:ring-amber-100 focus:outline-none" placeholder="أدخل بريدك الإلكتروني" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <button type="button" onClick={() => setShowEmailModal(false)} className="px-4 py-2 text-slate-600 hover:text-slate-800 text-sm">
                        تخطي
                      </button>
                      <button type="submit" disabled={isSubmitting} className="px-6 py-2.5 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-200 flex items-center">
                        {isSubmitting ? <>
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                            <span>جاري الإرسال...</span>
                          </> : <>
                            <DownloadIcon className="h-4 w-4 ml-2" />
                            <span>تحميل الملف</span>
                          </>}
                      </button>
                    </div>
                  </form>
                </> : <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <CheckCircleIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800 mb-2">
                    تم إرسال رابط التحميل!
                  </h4>
                  <p className="text-slate-600 mb-4">
                    تم إرسال رابط التحميل إلى بريدك الإلكتروني. سيبدأ التحميل
                    تلقائياً خلال لحظات...
                  </p>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 animate-pulse"></div>
                  </div>
                </div>}
            </div>
          </div>
        </div>}
    </div>;
}