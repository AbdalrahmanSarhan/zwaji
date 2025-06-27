import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, VideoIcon, HeartIcon, PuzzleIcon, BookIcon } from 'lucide-react';
import { SEO } from '../SEO';
import { PageHeader } from '../PageHeader';
import { SectionSuggestions } from '../SectionSuggestions';
import { urlMappings } from '../../utils/urlMappings';
interface HomePageProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
}
export function HomePage({
  userType
}: HomePageProps) {
  // Get user type display name
  const getUserTypeDisplayName = () => {
    switch (userType) {
      case 'husband':
        return 'أنا زوج';
      case 'wife':
        return 'أنا زوجة';
      case 'both':
        return 'معرفة عامة';
      case 'engaged':
        return 'مقبل على الزواج';
      default:
        return '';
    }
  };
  // Get the base path for the current user type
  const getBasePath = () => {
    return `/${urlMappings.userTypePaths[userType]}`;
  };
  // Define sections for the current user type
  const sections = [{
    id: 'cards',
    title: 'بطاقات معرفية',
    description: 'تعرف على حقوق وواجبات الزوجين من خلال بطاقات سهلة وميسرة',
    icon: <BookOpenIcon className="h-8 w-8" />,
    color: 'bg-sky-100 text-sky-700',
    link: `${getBasePath()}/cards`
  }, {
    id: 'stories',
    title: 'قصص زوجية',
    description: 'قصص واقعية من حياة الأزواج مع دروس وعبر مستفادة',
    icon: <HeartIcon className="h-8 w-8" />,
    color: 'bg-rose-100 text-rose-700',
    link: `${getBasePath()}/stories`
  }, {
    id: 'videos',
    title: 'فيديوهات تعليمية',
    description: 'شاهد فيديوهات تعليمية عن الحياة الزوجية والعلاقات الأسرية',
    icon: <VideoIcon className="h-8 w-8" />,
    color: 'bg-amber-100 text-amber-700',
    link: `${getBasePath()}/videos`
  }, {
    id: 'scholars',
    title: 'آراء العلماء',
    description: 'تعرف على آراء وفتاوى العلماء المعاصرين حول قضايا الزواج والأسرة',
    icon: <BookIcon className="h-8 w-8" />,
    color: 'bg-emerald-100 text-emerald-700',
    link: `${getBasePath()}/scholars`
  }, {
    id: 'solutions',
    title: 'حلول للمشاكل',
    description: 'حلول عملية للمشكلات الزوجية الشائعة بمنظور إسلامي',
    icon: <PuzzleIcon className="h-8 w-8" />,
    color: 'bg-purple-100 text-purple-700',
    link: `${getBasePath()}/solutions`
  }, {
    id: 'tools',
    title: 'أدوات زوجية',
    description: 'أدوات ومصادر مفيدة لتعزيز الحياة الزوجية',
    icon: <BookIcon className="h-8 w-8" />,
    color: 'bg-indigo-100 text-indigo-700',
    link: `${getBasePath()}/tools`
  }];
  // Add engaged-rights section for engaged users
  if (userType === 'engaged') {
    sections.push({
      id: 'engaged-rights',
      title: 'حقوق المقبلين على الزواج',
      description: 'معلومات مهمة للمقبلين على الزواج حول الحقوق والواجبات',
      icon: <BookOpenIcon className="h-8 w-8" />,
      color: 'bg-yellow-100 text-yellow-700',
      link: `${getBasePath()}/engaged-rights`
    });
  }
  // Add suggestions specific to the user type
  const getSuggestionsByUserType = () => {
    switch (userType) {
      case 'husband':
        return [{
          id: 'suggestion-1',
          text: 'ابدأ بقراءة قسم "بطاقات معرفية" للتعرف على حقوق وواجبات الزوج في الإسلام.'
        }, {
          id: 'suggestion-2',
          text: 'استكشف قسم "حلول للمشاكل" للتعرف على كيفية التعامل مع التحديات الشائعة في الحياة الزوجية.'
        }, {
          id: 'suggestion-3',
          text: 'شاهد الفيديوهات التعليمية المخصصة للأزواج لتعزيز مهارات التواصل مع زوجتك.'
        }];
      case 'wife':
        return [{
          id: 'suggestion-1',
          text: 'ابدئي بقراءة قسم "بطاقات معرفية" للتعرف على حقوق وواجبات الزوجة في الإسلام.'
        }, {
          id: 'suggestion-2',
          text: 'استكشفي قسم "قصص زوجية" للاستفادة من تجارب الآخرين في بناء علاقة زوجية ناجحة.'
        }, {
          id: 'suggestion-3',
          text: 'اطلعي على قسم "آراء العلماء" للحصول على رؤى شرعية حول قضايا المرأة والزواج.'
        }];
      case 'engaged':
        return [{
          id: 'suggestion-1',
          text: 'ابدأ بقسم "الاستعداد للزواج" للتعرف على الخطوات المهمة قبل الزواج.'
        }, {
          id: 'suggestion-2',
          text: 'اطلع على قسم "مرحلة الخطوبة" لفهم الضوابط الشرعية وأفضل الممارسات خلال هذه الفترة.'
        }, {
          id: 'suggestion-3',
          text: 'استخدم قسم "قائمة التحضير" كمرجع لضمان الاستعداد المناسب للحياة الزوجية.'
        }, {
          id: 'suggestion-4',
          text: 'تواصل مع أحد الاستشاريين المتخصصين لمساعدتك في الإعداد النفسي والاجتماعي للزواج.'
        }];
      default:
        return [{
          id: 'suggestion-1',
          text: 'استكشف الأقسام المختلفة للتطبيق للحصول على معلومات شاملة عن الحياة الزوجية في الإسلام.'
        }, {
          id: 'suggestion-2',
          text: 'شارك المحتوى المفيد مع شريك حياتك لتعزيز الفهم المشترك للحقوق والواجبات.'
        }, {
          id: 'suggestion-3',
          text: 'استخدم الأدوات الزوجية المتاحة لتقييم وتحسين علاقتك الزوجية بشكل مستمر.'
        }];
    }
  };
  return <div className="max-w-4xl mx-auto">
      <SEO title={`${getUserTypeDisplayName()} - الصفحة الرئيسية`} description={urlMappings.sectionDescriptions.home} path={`/${urlMappings.userTypePaths[userType]}`} />
      <PageHeader title={`مرحباً بك في قسم ${getUserTypeDisplayName()}`} description="اختر أحد الأقسام التالية للتعرف على حقوق وواجبات الزوجين في الإسلام" icon={<BookOpenIcon className="h-6 w-6" />} color="sky" />
      <SectionSuggestions title={`اقتراحات لك كـ${getUserTypeDisplayName()}`} suggestions={getSuggestionsByUserType()} color={userType === 'husband' ? 'sky' : userType === 'wife' ? 'rose' : userType === 'engaged' ? 'purple' : 'amber'} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {sections.map(section => <Link key={section.id} to={section.link} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-slate-200">
            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className={`p-3 rounded-lg ${section.color}`}>
                  {section.icon}
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-bold text-slate-800 mb-1">
                    {section.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>)}
      </div>
    </div>;
}