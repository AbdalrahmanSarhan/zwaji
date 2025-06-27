import React from 'react';
import { Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, VideoIcon, HeartIcon, PuzzleIcon, BookIcon, ArrowLeftIcon, UserIcon } from 'lucide-react';
import { CardView } from './CardView';
import { CoupleStories } from './CoupleStories';
import { EducationalVideos } from './EducationalVideos';
import { EngagedRights } from './EngagedRights';
import { MarriageTools } from './MarriageTools';
import { ScholarOpinions } from './ScholarOpinions';
import { Solutions } from './Solutions';
import { SEO } from './SEO';
import { urlMappings } from '../utils/urlMappings';
import { HomePage } from './pages/HomePage';
import { Consultants } from './Consultants';
import { EngagementLayout } from './engagement/EngagementLayout';
import { EngagementIndex } from './engagement/EngagementIndex';
import { EngagementDefinition } from './engagement/EngagementDefinition';
import { EngagementRules } from './engagement/EngagementRules';
import { EngagementCommunication } from './engagement/EngagementCommunication';
import { EngagementAllowed } from './engagement/EngagementAllowed';
import { EngagementChallenges } from './engagement/EngagementChallenges';
import { EngagementTips } from './engagement/EngagementTips';
interface DashboardProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
  onReset: () => void;
}
export function Dashboard({
  userType,
  onReset
}: DashboardProps) {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || 'home';
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
  return <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <UserIcon className="h-6 w-6 text-sky-600 ml-2" />
              <h1 className="text-xl font-bold text-sky-900">
                {getUserTypeDisplayName()}
              </h1>
            </div>
            <button onClick={onReset} className="flex items-center text-slate-600 hover:text-sky-700 transition-colors">
              <ArrowLeftIcon className="h-4 w-4 ml-1" />
              <span>تغيير المسار</span>
            </button>
          </div>
        </div>
      </header>
      <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto whitespace-nowrap py-3">
            <NavLink to={`${getBasePath()}`} end className={({
            isActive
          }) => `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'}`}>
              <HomeIcon className="h-4 w-4 ml-1.5" />
              <span>الرئيسية</span>
            </NavLink>
            <NavLink to={`${getBasePath()}/cards`} className={({
            isActive
          }) => `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'}`}>
              <BookOpenIcon className="h-4 w-4 ml-1.5" />
              <span>بطاقات معرفية</span>
            </NavLink>
            <NavLink to={`${getBasePath()}/stories`} className={({
            isActive
          }) => `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'}`}>
              <HeartIcon className="h-4 w-4 ml-1.5" />
              <span>قصص زوجية</span>
            </NavLink>
            <NavLink to={`${getBasePath()}/videos`} className={({
            isActive
          }) => `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'}`}>
              <VideoIcon className="h-4 w-4 ml-1.5" />
              <span>فيديوهات تعليمية</span>
            </NavLink>
            <NavLink to={`${getBasePath()}/scholars`} className={({
            isActive
          }) => `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'}`}>
              <BookIcon className="h-4 w-4 ml-1.5" />
              <span>آراء العلماء</span>
            </NavLink>
            <NavLink to={`${getBasePath()}/solutions`} className={({
            isActive
          }) => `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'}`}>
              <PuzzleIcon className="h-4 w-4 ml-1.5" />
              <span>حلول للمشاكل</span>
            </NavLink>
            <NavLink to={`${getBasePath()}/tools-library`} className={({
            isActive
          }) => `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'}`}>
              <BookIcon className="h-4 w-4 ml-1.5" />
              <span>مكتبة الأدوات</span>
            </NavLink>
            <NavLink to={`${getBasePath()}/consultants`} className={({
            isActive
          }) => `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'}`}>
              <UserIcon className="h-4 w-4 ml-1.5" />
              <span>استشاريون</span>
            </NavLink>
            {userType === 'engaged' && <NavLink to={`${getBasePath()}/engaged-rights`} className={({
            isActive
          }) => `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'}`}>
                <BookOpenIcon className="h-4 w-4 ml-1.5" />
                <span>حقوق المقبلين</span>
              </NavLink>}
          </div>
        </div>
      </nav>
      <main className="flex-grow py-8 px-4">
        <SEO title={urlMappings.sectionTitles[currentPath] || getUserTypeDisplayName()} description={urlMappings.sectionDescriptions[currentPath] || 'حقوق الزوجين في الإسلام'} path={location.pathname} />
        <Routes>
          <Route path="/" element={<HomePage userType={userType} />} />
          <Route path="/cards" element={<CardView userType={userType} />} />
          <Route path="/stories" element={<CoupleStories userType={userType} />} />
          <Route path="/videos" element={<EducationalVideos userType={userType} />} />
          <Route path="/scholars" element={<ScholarOpinions userType={userType} />} />
          <Route path="/solutions" element={<Solutions userType={userType} />} />
          <Route path="/tools" element={<MarriageTools />} />
          {/* New routes for consultants with different paths */}
          <Route path="/consultants" element={<Consultants userType={userType} />} />
          <Route path="/husband/consultants" element={<Consultants userType={userType} />} />
          <Route path="/couple/consultants" element={<Consultants userType={userType} />} />
          <Route path="/stories/consultants" element={<Consultants userType={userType} />} />
          {/* New routes for marriage tools library with different paths */}
          <Route path="/tools-library" element={<MarriageTools />} />
          <Route path="/wife/tools-library" element={<MarriageTools />} />
          <Route path="/husband/tools-library" element={<MarriageTools />} />
          <Route path="/couple/tools-library" element={<MarriageTools />} />
          <Route path="/stories/tools-library" element={<MarriageTools />} />
          {/* New routes for engagement section */}
          <Route path="/moqbilin-ala-alzawaj/engagement" element={<EngagementLayout />}>
            <Route index element={<EngagementIndex />} />
            <Route path="definition" element={<EngagementDefinition />} />
            <Route path="rules" element={<EngagementRules />} />
            <Route path="communication" element={<EngagementCommunication />} />
            <Route path="allowed" element={<EngagementAllowed />} />
            <Route path="challenges" element={<EngagementChallenges />} />
            <Route path="tips" element={<EngagementTips />} />
          </Route>
          {userType === 'engaged' && <Route path="/engaged-rights" element={<EngagedRights />} />}
          <Route path="*" element={<Navigate to={getBasePath()} replace />} />
        </Routes>
      </main>
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>حقوق الزوجين في الإسلام © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>;
}