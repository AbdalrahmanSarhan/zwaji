import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { BookOpenIcon, HelpCircleIcon, GraduationCapIcon, UsersIcon, HeartIcon, SunIcon, SparklesIcon, CheckSquareIcon, ShieldIcon } from 'lucide-react';
import { DashboardHeader } from './DashboardHeader';
import { DashboardNavigation } from './DashboardNavigation';
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
import { MarriageTools } from '../MarriageTools';
import { EngagementPhase } from '../EngagementPhase';
import { Consultants } from '../Consultants';
interface DashboardProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
  onReset: () => void;
}
export function Dashboard({
  userType,
  onReset
}: DashboardProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const getDefaultPath = () => {
    return userType === 'engaged' ? 'preparation' : 'cards';
  };
  const navItems = userType === 'engaged' ? [{
    id: 'preparation',
    label: 'الاستعداد للزواج',
    icon: <SparklesIcon className="h-5 w-5 ml-3" />,
    path: 'preparation'
  }, {
    id: 'checklist',
    label: 'قائمة التحضير',
    icon: <CheckSquareIcon className="h-5 w-5 ml-3" />,
    path: 'checklist'
  }, {
    id: 'rights',
    label: 'حقوق الزوجين',
    icon: <ShieldIcon className="h-5 w-5 ml-3" />,
    path: 'rights'
  }, {
    id: 'engagement',
    label: 'مرحلة الخطوبة',
    icon: <HeartIcon className="h-5 w-5 ml-3" />,
    path: 'engagement'
  }
  // ... other engaged nav items
  ] : [{
    id: 'cards',
    label: 'بطاقات معرفية',
    icon: <BookOpenIcon className="h-5 w-5 ml-3" />,
    path: 'cards'
  }, {
    id: 'comparison',
    label: 'مقارنة الحقوق',
    icon: <div className="h-5 w-5 ml-3" />,
    path: 'comparison'
  }
  // ... other nav items
  ];
  return <div className="min-h-screen flex flex-col bg-amber-50">
      <DashboardHeader userType={userType} onReset={onReset} toggleMobileMenu={toggleMobileMenu} mobileMenuOpen={mobileMenuOpen} />
      <main className="flex-1 flex flex-col md:flex-row">
        {mobileMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={toggleMobileMenu}></div>}
        <DashboardNavigation navItems={navItems} activeTab={location.pathname.split('/').pop() || getDefaultPath()} handleTabChange={() => setMobileMenuOpen(false)} mobileMenuOpen={mobileMenuOpen} onReset={onReset} />
        <div className="flex-1 p-4 md:p-6 transition-all duration-300 ease-in-out">
          <div className="max-w-4xl mx-auto">
            <Routes>
              {/* Common routes for all user types */}
              <Route path="consultants" element={<Consultants userType={userType} />} />
              <Route path="tools" element={<MarriageTools />} />
              <Route path="quiz" element={<Quiz userType={userType} />} />
              <Route path="scholars" element={<ScholarOpinions userType={userType} />} />
              {/* Conditional routes based on user type */}
              {userType !== 'engaged' ? <>
                  <Route path="cards" element={<CardView userType={userType} />} />
                  <Route path="comparison" element={<RightsComparison />} />
                  <Route path="scenarios" element={<Scenarios userType={userType} />} />
                  <Route path="stories" element={<CoupleStories userType={userType} />} />
                  <Route path="solutions" element={<Solutions userType={userType} />} />
                  <Route index element={<Navigate to="cards" replace />} />
                </> : <>
                  <Route path="preparation" element={<EngagedPreparation />} />
                  <Route path="checklist" element={<EngagedChecklist />} />
                  <Route path="rights" element={<EngagedRights />} />
                  <Route path="engagement" element={<EngagementPhase />} />
                  <Route index element={<Navigate to="preparation" replace />} />
                </>}
              {/* Catch-all route - redirect to default tab */}
              <Route path="*" element={<Navigate to={getDefaultPath()} replace />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>;
}