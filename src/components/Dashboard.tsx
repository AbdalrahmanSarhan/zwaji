import React, { useState, Children } from 'react';
import { HomeIcon, BookOpenIcon, HelpCircleIcon, GraduationCapIcon, UsersIcon, HeartIcon, SunIcon, MenuIcon, XIcon, SparklesIcon, CheckSquareIcon, CalendarIcon, ShieldIcon, BabyIcon, PlayIcon, BookIcon } from 'lucide-react';
import { CardView } from './CardView';
import { RightsComparison } from './RightsComparison';
import { Scenarios } from './Scenarios';
import { Quiz } from './Quiz';
import { ScholarOpinions } from './ScholarOpinions';
import { CoupleStories } from './CoupleStories';
import { Solutions } from './Solutions';
import { EngagedPreparation } from './EngagedPreparation';
import { EngagedChecklist } from './EngagedChecklist';
import { EngagedRights } from './EngagedRights';
import { Consultants } from './Consultants';
import { EngagementPhase } from './EngagementPhase';
import { ChildrenRights } from './ChildrenRights';
import { EducationalVideos } from './EducationalVideos';
import { MarriageTools } from './MarriageTools';
import { DonationModal } from './DonationModal';
interface DashboardProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
  onReset: () => void;
}
export function Dashboard({
  userType,
  onReset
}: DashboardProps) {
  const [activeTab, setActiveTab] = useState(userType === 'engaged' ? 'preparation' : 'cards');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const userTypeText = userType === 'husband' ? 'الزوج' : userType === 'wife' ? 'الزوجة' : userType === 'engaged' ? 'المقبلين على الزواج' : 'الزوجين';
  const userTypeColor = userType === 'husband' ? 'text-sky-700' : userType === 'wife' ? 'text-rose-600' : userType === 'engaged' ? 'text-purple-600' : 'text-amber-600';
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const navItems = userType === 'engaged' ? [{
    id: 'preparation',
    label: 'الاستعداد للزواج',
    icon: <SparklesIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'engagement',
    label: 'مرحلة الخطوبة',
    icon: <HeartIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'checklist',
    label: 'قائمة التحضير',
    icon: <CheckSquareIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'rights',
    label: 'حقوق الزوجين',
    icon: <ShieldIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'videos',
    label: 'الفيديوهات التوعوية',
    icon: <PlayIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'tools',
    label: 'مكتبة الأدوات الزوجية',
    icon: <BookIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'children',
    label: 'حقوق الأبناء',
    icon: <BabyIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'consultants',
    label: 'استشاريون',
    icon: <UsersIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'scholars',
    label: 'نصائح العلماء',
    icon: <UsersIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'quiz',
    label: 'اختبر معلوماتك',
    icon: <GraduationCapIcon className="h-5 w-5 ml-3" />
  }] : [{
    id: 'cards',
    label: 'بطاقات معرفية',
    icon: <BookOpenIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'comparison',
    label: 'مقارنة الحقوق',
    icon: <div className="h-5 w-5 ml-3" />
  }, {
    id: 'scenarios',
    label: 'سيناريوهات واقعية',
    icon: <HelpCircleIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'videos',
    label: 'الفيديوهات التوعوية',
    icon: <PlayIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'tools',
    label: 'مكتبة الأدوات الزوجية',
    icon: <BookIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'children',
    label: 'حقوق الأبناء',
    icon: <BabyIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'quiz',
    label: 'اختبر معلوماتك',
    icon: <GraduationCapIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'scholars',
    label: 'أصوات العلماء',
    icon: <UsersIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'stories',
    label: 'يوميات زوجين',
    icon: <HeartIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'solutions',
    label: 'الحلول الهادئة',
    icon: <SunIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'consultants',
    label: 'استشاريون',
    icon: <CalendarIcon className="h-5 w-5 ml-3" />
  }];
  return <div className="min-h-screen flex flex-col bg-amber-50">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-30">
        <div className="flex items-center">
          {userType === 'engaged' ? <SparklesIcon className="h-8 w-8 text-purple-600 mr-3" /> : userType === 'wife' ? <HeartIcon className="h-8 w-8 text-rose-600 mr-3" /> : userType === 'both' ? <HeartIcon className="h-8 w-8 text-amber-600 mr-3" /> : <HeartIcon className="h-8 w-8 text-sky-600 mr-3" />}
          <h1 className="text-2xl font-bold text-sky-900">
            <span className={userTypeColor}>{userTypeText}</span>
          </h1>
        </div>
        <div className="flex items-center">
          <button onClick={() => setShowDonationModal(true)} className="text-rose-600 hover:text-rose-700 transition-colors duration-200 text-sm md:text-base px-3 py-1 rounded-md hover:bg-rose-50 ml-3">
            دعم المشروع
          </button>
          <button onClick={onReset} className="text-slate-600 hover:text-sky-700 transition-colors duration-200 text-sm md:text-base px-3 py-1 rounded-md hover:bg-sky-50">
            تغيير المسار
          </button>
          <button className="md:hidden ml-4 text-slate-600 focus:outline-none" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </header>
      <main className="flex-1 flex flex-col md:flex-row">
        {mobileMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={toggleMobileMenu}></div>}
        <nav className={`bg-white shadow-md md:w-64 md:sticky md:top-20 md:h-[calc(100vh-5rem)] transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'fixed top-16 right-0 h-screen z-20 w-3/4 max-w-xs transform translate-x-0' : 'fixed top-16 right-0 h-screen z-20 w-3/4 max-w-xs transform translate-x-full md:transform-none'}`}>
          <div className="p-4 space-y-2 overflow-y-auto h-full">
            {navItems.map(item => <button key={item.id} onClick={() => handleTabChange(item.id)} className={`w-full text-right py-3 px-4 rounded-md flex items-center transition-all duration-200 ${activeTab === item.id ? 'bg-sky-100 text-sky-700 shadow-sm' : 'hover:bg-gray-100'}`}>
                {item.icon}
                <span>{item.label}</span>
              </button>)}
            <div className="md:hidden mt-8 pt-6 border-t border-gray-200">
              <button onClick={onReset} className="w-full text-right py-3 px-4 rounded-md flex items-center text-rose-600 hover:bg-rose-50">
                <span>العودة لاختيار المسار</span>
              </button>
            </div>
          </div>
        </nav>
        <div className="flex-1 p-4 md:p-6 transition-all duration-300 ease-in-out">
          <div className="max-w-4xl mx-auto">
            {userType !== 'engaged' && <>
                {activeTab === 'cards' && <CardView userType={userType} />}
                {activeTab === 'comparison' && <RightsComparison />}
                {activeTab === 'scenarios' && <Scenarios userType={userType} />}
                {activeTab === 'children' && <ChildrenRights />}
                {activeTab === 'quiz' && <Quiz userType={userType} />}
                {activeTab === 'scholars' && <ScholarOpinions userType={userType} />}
                {activeTab === 'stories' && <CoupleStories userType={userType} />}
                {activeTab === 'solutions' && <Solutions userType={userType} />}
                {activeTab === 'consultants' && <Consultants userType={userType} />}
                {activeTab === 'videos' && <EducationalVideos userType={userType} />}
                {activeTab === 'tools' && <MarriageTools />}
              </>}
            {userType === 'engaged' && <>
                {activeTab === 'preparation' && <EngagedPreparation />}
                {activeTab === 'engagement' && <EngagementPhase />}
                {activeTab === 'checklist' && <EngagedChecklist />}
                {activeTab === 'rights' && <EngagedRights />}
                {activeTab === 'children' && <ChildrenRights />}
                {activeTab === 'scholars' && <ScholarOpinions userType={userType} />}
                {activeTab === 'quiz' && <Quiz userType={userType} />}
                {activeTab === 'consultants' && <Consultants userType={userType} />}
                {activeTab === 'videos' && <EducationalVideos userType={userType} />}
                {activeTab === 'tools' && <MarriageTools />}
              </>}
          </div>
        </div>
      </main>
      <footer className="bg-white py-4 px-6 text-center text-slate-600 border-t">
        <p className="text-sm">
          © {new Date().getFullYear()} حقوق الزوجين في الإسلام - عبدالرحمن
          سرحان - جميع الحقوق محفوظة
        </p>
      </footer>
      <DonationModal isOpen={showDonationModal} onClose={() => setShowDonationModal(false)} />
    </div>;
}