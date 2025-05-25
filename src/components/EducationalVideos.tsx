import React from 'react';
import { ExternalLinkIcon, PlayIcon } from 'lucide-react';
interface Video {
  title: string;
  youtubeId: string;
  description: string;
  author?: string;
}
interface EducationalVideosProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
}
export function EducationalVideos({
  userType
}: EducationalVideosProps) {
  // بيانات الفيديوهات لكل نوع من المستخدمين
  // محاولة جلب البيانات من localStorage أولاً
  const getVideosFromStorage = () => {
    try {
      const savedVideos = localStorage.getItem('educational_videos');
      if (savedVideos) {
        return JSON.parse(savedVideos);
      }
    } catch (error) {
      console.error('Error loading videos from localStorage:', error);
    }
    return null;
  };
  // الفيديوهات المخزنة أو الافتراضية
  const storedVideos = getVideosFromStorage();
  // بيانات الفيديوهات الافتراضية
  const defaultVideosData: Record<string, Video[]> = {
    husband: [{
      title: 'حقوق الزوج على زوجته في الإسلام',
      youtubeId: 'by1WRpfSyOQ',
      description: 'شرح مفصل للحقوق الشرعية للزوج وكيفية تطبيقها في الحياة اليومية',
      author: 'د. هالة سمير'
    }, {
      title: 'كيف تكون زوجاً ناجحاً؟',
      youtubeId: 'OgbEf9b9nU4',
      description: 'نصائح عملية للرجل لبناء حياة زوجية سعيدة ومستقرة',
      author: 'د. خالد الحداد'
    }, {
      title: 'فن التعامل مع الزوجة',
      youtubeId: 'iVjGZcLGubA',
      description: 'مهارات التواصل الفعّال مع الزوجة وحل الخلافات الزوجية',
      author: 'د. عمر عبد الكافي'
    }, {
      title: 'مسؤوليات الزوج تجاه أسرته',
      youtubeId: 'wDJVPa-QxpA',
      description: 'توضيح للمسؤوليات المالية والمعنوية للزوج في الإسلام',
      author: 'د. محمد راتب النابلسي'
    }],
    wife: [{
      title: 'حقوق الزوجة في الإسلام',
      youtubeId: '5ZD7RgG4h1U',
      description: 'شرح مفصل للحقوق المالية والمعنوية للزوجة في الشريعة الإسلامية',
      author: 'د. عائض القرني'
    }, {
      title: 'كيف تكونين زوجة صالحة؟',
      youtubeId: 'A2Gu8EFydiA',
      description: 'نصائح عملية للمرأة لبناء بيت سعيد وعلاقة زوجية ناجحة',
      author: 'د. رقية المحارب'
    }, {
      title: 'فن التعامل مع الزوج',
      youtubeId: 'GBCk2THwL6A',
      description: 'مهارات التواصل الفعّال مع الزوج وكيفية احتواء المشكلات',
      author: 'د. خولة درويش'
    }, {
      title: 'الذكاء العاطفي في الحياة الزوجية',
      youtubeId: '8jNXS_KdMzA',
      description: 'كيفية فهم مشاعر الزوج والتعامل معها بحكمة وذكاء',
      author: 'د. صفاء السيد'
    }],
    both: [{
      title: 'أسرار السعادة الزوجية',
      youtubeId: 'q9SjgHDEWJM',
      description: 'مفاتيح بناء علاقة زوجية ناجحة ومستقرة من منظور إسلامي',
      author: 'د. محمد العريفي'
    }, {
      title: 'حل المشكلات الزوجية',
      youtubeId: 'ZmEk3GpNGZU',
      description: 'طرق عملية لحل الخلافات بين الزوجين والتعامل مع الضغوط',
      author: 'د. إبراهيم الفقي'
    }, {
      title: 'التواصل الفعال بين الزوجين',
      youtubeId: 'wuqNDuM0Xvk',
      description: 'مهارات الاستماع والتحدث لتقوية العلاقة الزوجية',
      author: 'د. طارق الحبيب'
    }, {
      title: 'الذكاء العاطفي في العلاقة الزوجية',
      youtubeId: '4M_9a0Z6FEU',
      description: 'كيفية فهم المشاعر والتعامل معها بين الزوجين',
      author: 'د. صالح الراشد'
    }],
    engaged: [{
      title: 'كيف تستعد للزواج؟',
      youtubeId: 'BoYQZ-zBtFM',
      description: 'نصائح عملية للمقبلين على الزواج للاستعداد النفسي والعملي',
      author: 'د. محمد الدويش'
    }, {
      title: 'مهارات اختيار شريك الحياة',
      youtubeId: 'Yy9g4q0z3KA',
      description: 'معايير الاختيار الصحيح لشريك الحياة وعلامات التوافق',
      author: 'د. ياسر الدوسري'
    }, {
      title: 'فترة الخطوبة: ضوابط وتوجيهات',
      youtubeId: '7B0gkh3nKH0',
      description: 'الضوابط الشرعية للتعامل خلال فترة الخطوبة وحدودها',
      author: 'د. عبد الله المصلح'
    }, {
      title: 'التأهيل النفسي للزواج',
      youtubeId: '2-Wgyx_Qt3U',
      description: 'كيفية الاستعداد النفسي للانتقال من حياة العزوبية إلى الزواج',
      author: 'د. مصطفى أبو سعد'
    }],
    general: [{
      title: 'الأسس الشرعية للعلاقة الزوجية',
      youtubeId: 'dQw4w9WgXcQ',
      description: 'شرح مفصل للأسس الشرعية التي تنظم العلاقة بين الزوجين',
      author: 'د. عبدالله المطلق'
    }]
  };
  // إذا وجدنا فيديوهات مخزنة، نستخدم الفيديوهات المخزنة بناءً على نوع المستخدم
  const getVideos = () => {
    if (storedVideos) {
      // استخدام الفيديوهات المخزنة وتصفيتها حسب نوع المستخدم
      const filteredVideos = storedVideos.filter((video: any) => video.path === userType || userType === 'both' && video.path === 'both' || video.path === 'general');
      // إذا كان هناك فيديوهات مميزة، نضعها في المقدمة
      const featuredVideos = filteredVideos.filter((video: any) => video.isFeatured);
      const regularVideos = filteredVideos.filter((video: any) => !video.isFeatured);
      // إذا لم نجد فيديوهات لهذا النوع، نستخدم فيديوهات "both" أو "general"
      if (featuredVideos.length === 0 && regularVideos.length === 0) {
        const fallbackVideos = storedVideos.filter((video: any) => video.path === 'both' || video.path === 'general');
        return fallbackVideos.slice(0, 4);
      }
      // ترتيب الفيديوهات: المميزة أولاً ثم العادية
      return [...featuredVideos, ...regularVideos].slice(0, 8);
    }
    // إذا لم نجد فيديوهات مخزنة، نستخدم البيانات الافتراضية
    return defaultVideosData[userType] || defaultVideosData.both;
  };
  // اختيار الفيديوهات المناسبة للمستخدم
  const videos = getVideos();
  return <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-sky-900">
        الفيديوهات التوعوية
      </h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-6">
          <PlayIcon className="h-8 w-8 text-sky-600 ml-4" />
          <h3 className="text-xl font-bold text-sky-800">
            فيديوهات مختارة لمساعدتك
          </h3>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          مجموعة من الفيديوهات التوعوية المفيدة التي تساعدك على فهم أعمق لحقوق
          وواجبات الزوجين في الإسلام، وتقدم نصائح عملية لبناء حياة زوجية سعيدة
          ومستقرة.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`} alt={video.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <PlayIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2 text-sky-900">
                  {video.title}
                </h4>
                {video.author && <p className="text-sm text-sky-600 mb-2">{video.author}</p>}
                <p className="text-slate-600 text-sm mb-4 h-12 overflow-hidden">
                  {video.description}
                </p>
                <a href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-md transition-colors duration-200">
                  <span>شاهد الآن</span>
                  <ExternalLinkIcon className="h-4 w-4 mr-2" />
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}