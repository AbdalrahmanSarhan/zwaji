import React from 'react';
import { Link, useLocation, Routes, Route } from 'react-router-dom';
import { HeartIcon, BookOpenIcon, HandIcon, MessageCircleIcon, ShieldIcon, CheckCircleIcon, LightbulbIcon } from 'lucide-react';
import { PageHeader } from '../PageHeader';
import { EngagementIndex } from './EngagementIndex';
import { EngagementDefinition } from './EngagementDefinition';
import { EngagementRules } from './EngagementRules';
import { EngagementCommunication } from './EngagementCommunication';
import { EngagementAllowed } from './EngagementAllowed';
import { EngagementChallenges } from './EngagementChallenges';
import { EngagementTips } from './EngagementTips';
import { ErrorBoundary } from '../ErrorBoundary';
export function EngagementLayout() {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || '';
  const basePath = '/moqbilin-ala-alzawaj/engagement';
  return <div className="max-w-4xl mx-auto">
      <PageHeader title="مرحلة الخطوبة في الإسلام" description="دليل شامل للخاطبين حول آداب وأحكام وضوابط الخطوبة في الإسلام" icon={<HeartIcon className="h-6 w-6" />} color="purple" />
      <div className="bg-white rounded-xl shadow-md p-4 mb-6 overflow-x-auto">
        <nav className="flex flex-wrap justify-center gap-2 md:gap-4 min-w-max">
          <Link to={`${basePath}`} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center ${currentPath === 'engagement' || !currentPath ? 'bg-purple-100 text-purple-800' : 'hover:bg-purple-50 text-slate-600'}`}>
            <HeartIcon className="h-4 w-4 ml-1.5" />
            <span>الرئيسية</span>
          </Link>
          <Link to={`${basePath}/definition`} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center ${currentPath === 'definition' ? 'bg-purple-100 text-purple-800' : 'hover:bg-purple-50 text-slate-600'}`}>
            <BookOpenIcon className="h-4 w-4 ml-1.5" />
            <span>تعريف الخطبة</span>
          </Link>
          <Link to={`${basePath}/rules`} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center ${currentPath === 'rules' ? 'bg-emerald-100 text-emerald-800' : 'hover:bg-emerald-50 text-slate-600'}`}>
            <HandIcon className="h-4 w-4 ml-1.5" />
            <span>ضوابط الخطبة</span>
          </Link>
          <Link to={`${basePath}/communication`} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center ${currentPath === 'communication' ? 'bg-blue-100 text-blue-800' : 'hover:bg-blue-50 text-slate-600'}`}>
            <MessageCircleIcon className="h-4 w-4 ml-1.5" />
            <span>التواصل الفعال</span>
          </Link>
          <Link to={`${basePath}/allowed`} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center ${currentPath === 'allowed' ? 'bg-sky-100 text-sky-800' : 'hover:bg-sky-50 text-slate-600'}`}>
            <CheckCircleIcon className="h-4 w-4 ml-1.5" />
            <span>الحدود المسموحة</span>
          </Link>
          <Link to={`${basePath}/challenges`} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center ${currentPath === 'challenges' ? 'bg-red-100 text-red-800' : 'hover:bg-red-50 text-slate-600'}`}>
            <ShieldIcon className="h-4 w-4 ml-1.5" />
            <span>تحديات شائعة</span>
          </Link>
          <Link to={`${basePath}/tips`} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center ${currentPath === 'tips' ? 'bg-amber-100 text-amber-800' : 'hover:bg-amber-50 text-slate-600'}`}>
            <LightbulbIcon className="h-4 w-4 ml-1.5" />
            <span>نصائح للنجاح</span>
          </Link>
        </nav>
      </div>
      <ErrorBoundary>
        <div className="bg-white rounded-xl shadow-md p-6">
          {renderEngagementContent(currentPath)}
        </div>
      </ErrorBoundary>
    </div>;
}
function renderEngagementContent(currentPath: string) {
  switch (currentPath) {
    case 'definition':
      return <EngagementDefinition />;
    case 'rules':
      return <EngagementRules />;
    case 'communication':
      return <EngagementCommunication />;
    case 'allowed':
      return <EngagementAllowed />;
    case 'challenges':
      return <EngagementChallenges />;
    case 'tips':
      return <EngagementTips />;
    default:
      return <EngagementIndex />;
  }
}