import React, { useState } from 'react';
import { BookOpenIcon, HelpCircleIcon, GraduationCapIcon, UsersIcon, HeartIcon, SunIcon, MenuIcon, XIcon, SparklesIcon, CheckSquareIcon, ShieldIcon } from 'lucide-react';
import { CardView } from '../CardView';
import { RightsComparison } from '../RightsComparison';
import { Scenarios } from '../Scenarios';
import { Quiz } from '../Quiz';
import { ScholarOpinions } from '../ScholarOpinions';
import { CoupleStories } from '../CoupleStories';
import { Solutions } from '../Solutions';
import { EngagedPreparation } from '../EngagedPreparation';
import { EngagedChecklist } from '../EngagedChecklist';
import { EngagedRights } from '../EngagedRights';
import { DashboardHeader } from './DashboardHeader';
import { DashboardNavigation } from './DashboardNavigation';
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
    id: 'checklist',
    label: 'قائمة التحضير',
    icon: <CheckSquareIcon className="h-5 w-5 ml-3" />
  }, {
    id: 'rights',
    label: 'حقوق الزوجين',
    icon: <ShieldIcon className="h-5 w-5 ml-3" />
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
  }];
  return <div className="min-h-screen flex flex-col bg-amber-50">
      <DashboardHeader userType={userType} onReset={onReset} toggleMobileMenu={toggleMobileMenu} mobileMenuOpen={mobileMenuOpen} />
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Mobile menu overlay */}
        {mobileMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={toggleMobileMenu}></div>}
        <DashboardNavigation navItems={navItems} activeTab={activeTab} handleTabChange={handleTabChange} mobileMenuOpen={mobileMenuOpen} onReset={onReset} />
        <div className="flex-1 p-4 md:p-6 transition-all duration-300 ease-in-out">
          <div className="max-w-4xl mx-auto">
            {userType !== 'engaged' && <>
                {activeTab === 'cards' && <CardView userType={userType} />}
                {activeTab === 'comparison' && <RightsComparison />}
                {activeTab === 'scenarios' && <Scenarios userType={userType} />}
                {activeTab === 'quiz' && <Quiz userType={userType} />}
                {activeTab === 'scholars' && <ScholarOpinions userType={userType} />}
                {activeTab === 'stories' && <CoupleStories userType={userType} />}
                {activeTab === 'solutions' && <Solutions userType={userType} />}
              </>}
            {userType === 'engaged' && <>
                {activeTab === 'preparation' && <EngagedPreparation />}
                {activeTab === 'checklist' && <EngagedChecklist />}
                {activeTab === 'rights' && <EngagedRights />}
                {activeTab === 'scholars' && <ScholarOpinions userType={userType} />}
                {activeTab === 'quiz' && <Quiz userType={userType} />}
              </>}
          </div>
        </div>
      </main>
      <footer className="bg-white py-4 px-6 text-center text-slate-600 border-t">
        <p className="text-sm">
          © {new Date().getFullYear()} حقوق الزوجين في الإسلام - جميع الحقوق
          محفوظة
        </p>
      </footer>
    </div>;
}