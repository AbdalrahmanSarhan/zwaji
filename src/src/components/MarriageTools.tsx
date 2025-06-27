import React, { useEffect, useState, createElement } from 'react';
import { useLocation } from 'react-router-dom';
import { FileTextIcon, DownloadIcon, BookOpenIcon, FileIcon, HeartIcon, CheckCircleIcon, MailIcon, XIcon } from 'lucide-react';
import { SEO } from './SEO';
import { PageHeader } from './PageHeader';
import { SectionSuggestions } from './SectionSuggestions';
interface ToolResource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'worksheet' | 'guide' | 'book';
  downloadUrl: string;
  thumbnailUrl: string;
  pages?: number;
  category: 'rights' | 'communication' | 'evaluation' | 'spiritual' | 'general';
  forUserType?: ('husband' | 'wife' | 'both' | 'engaged')[];
}
export function MarriageTools() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<ToolResource | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  // Determine which tools to show based on path
  const getPathType = () => {
    if (path.includes('/wife/tools-library')) {
      return 'wife';
    } else if (path.includes('/husband/tools-library')) {
      return 'husband';
    } else if (path.includes('/couple/tools-library')) {
      return 'couple';
    } else if (path.includes('/stories/tools-library')) {
      return 'stories';
    } else {
      return 'default';
    }
  };
  const pathType = getPathType();
  // Get appropriate title and description based on path
  const getPageTitle = () => {
    switch (pathType) {
      case 'husband':
        return 'مكتبة الأدوات للأزواج';
      case 'wife':
        return 'مكتبة الأدوات للزوجات';
      case 'couple':
        return 'مكتبة الأدوات للزوجين';
      case 'stories':
        return 'قصص نجاح مع أدوات الزواج';
      default:
        return 'مكتبة الأدوات الزوجية';
    }
  };
  const getPageDescription = () => {
    switch (pathType) {
      case 'husband':
        return 'مجموعة من الأدوات والموارد المخصصة للأزواج لتحسين العلاقة الزوجية';
      case 'wife':
        return 'مجموعة من الأدوات والموارد المخصصة للزوجات لتحسين العلاقة الزوجية';
      case 'couple':
        return 'مجموعة من الأدوات والموارد المشتركة للزوجين لتحسين العلاقة الزوجية';
      case 'stories':
        return 'قصص نجاح حقيقية باستخدام أدوات وموارد العلاقة الزوجية';
      default:
        return 'مجموعة من الأدوات والمستندات المفيدة التي تساعد الزوجين على بناء حياة زوجية سعيدة ومستقرة';
    }
  };
  // Filter resources based on path type
  const getFilteredResourcesByPath = () => {
    if (pathType === 'husband') {
      return resources.filter(r => !r.forUserType || r.forUserType.includes('husband'));
    } else if (pathType === 'wife') {
      return resources.filter(r => !r.forUserType || r.forUserType.includes('wife'));
    } else if (pathType === 'couple') {
      return resources.filter(r => !r.forUserType || r.forUserType.includes('both'));
    } else if (pathType === 'stories') {
      // For stories path, show all resources but sort by category
      return [...resources].sort((a, b) => a.category.localeCompare(b.category));
    } else {
      return resources;
    }
  };
  // يمكن استبدال هذه الروابط بروابط حقيقية من Firebase أو Google Drive
  const resources: ToolResource[] = [{
    id: 'rights-doc',
    title: '10 حقوق الزوجة والزوج',
    description: 'ملخص شامل لأهم الحقوق الشرعية للزوجين في الإسلام، مدعم بالأدلة من القرآن والسنة',
    type: 'pdf',
    downloadUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1532153955177-f59af40d6472?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    pages: 4,
    category: 'rights',
    forUserType: ['husband', 'wife', 'both']
  }, {
    id: 'communication-worksheet',
    title: 'كيف نتحاور؟',
    description: 'ورقة عمل تساعد الزوجين على تطوير مهارات التواصل الفعال وحل الخلافات بطريقة إيجابية',
    type: 'worksheet',
    downloadUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    pages: 8,
    category: 'communication',
    forUserType: ['both']
  }, {
    id: 'evaluation-sheet',
    title: 'كيف نقيم زواجنا؟',
    description: 'استبيان تقييم ذاتي يساعد الزوجين على تحديد نقاط القوة والضعف في علاقتهما',
    type: 'guide',
    downloadUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    pages: 6,
    category: 'evaluation',
    forUserType: ['both']
  }, {
    id: 'prayers-booklet',
    title: 'أدعية للحياة الزوجية',
    description: 'مجموعة من الأدعية المأثورة والأذكار التي تساعد على استقرار الحياة الزوجية وسعادتها',
    type: 'book',
    downloadUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1585681614545-cd8c7b9d92b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    pages: 12,
    category: 'spiritual',
    forUserType: ['husband', 'wife', 'both']
  }, {
    id: 'conflict-resolution',
    title: 'أساليب حل الخلافات الزوجية',
    description: 'دليل عملي يقدم استراتيجيات فعالة لحل الخلافات بين الزوجين بطريقة صحية',
    type: 'guide',
    downloadUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    pages: 10,
    category: 'communication',
    forUserType: ['husband', 'wife', 'both']
  }, {
    id: 'marriage-goals',
    title: 'تحديد أهداف الزواج',
    description: 'ورقة عمل لمساعدة الزوجين على تحديد أهدافهما المشتركة وخطة تحقيقها',
    type: 'worksheet',
    downloadUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    pages: 5,
    category: 'general',
    forUserType: ['both']
  }, {
    id: 'husband-guide',
    title: 'دليل الزوج الناجح',
    description: 'مرجع شامل للرجل حول كيفية أن يكون زوجاً ناجحاً وفق التعاليم الإسلامية',
    type: 'book',
    downloadUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    pages: 15,
    category: 'general',
    forUserType: ['husband']
  }, {
    id: 'wife-guide',
    title: 'دليل الزوجة الناجحة',
    description: 'مرجع شامل للمرأة حول كيفية أن تكون زوجة ناجحة وفق التعاليم الإسلامية',
    type: 'book',
    downloadUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    pages: 15,
    category: 'general',
    forUserType: ['wife']
  }];
  const filteredResources = getFilteredResourcesByPath();
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
  // Add suggestions for the Marriage Tools section
  const toolsSuggestions = [{
    id: 'suggestion-1',
    text: 'قم بتحميل الأدوات واستخدامها مع شريك حياتك في جلسة مشتركة لتعزيز التواصل.'
  }, {
    id: 'suggestion-2',
    text: 'خصص وقتاً أسبوعياً لاستخدام إحدى أدوات الزواج، مثل ورقة تقييم العلاقة أو خطة الأهداف المشتركة.'
  }, {
    id: 'suggestion-3',
    text: 'احتفظ بملف خاص للأدوات والتمارين التي أكملتها مع شريكك، ومراجعتها دورياً لتقييم التقدم.'
  }, {
    id: 'suggestion-4',
    text: 'شارك تجربتك مع الأدوات مع أزواج آخرين قد يستفيدون منها، مع الحفاظ على خصوصية علاقتك.'
  }];
  return <div className="max-w-4xl mx-auto">
      <SEO title={getPageTitle()} description={getPageDescription()} path={path} />
      <PageHeader title={getPageTitle()} description={getPageDescription()} icon={<BookOpenIcon className="h-6 w-6" />} color="amber" />
      <SectionSuggestions title="اقتراحات للاستفادة من الأدوات الزوجية" suggestions={toolsSuggestions} color="amber" />
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(resource => <div key={resource.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200 flex flex-col">
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