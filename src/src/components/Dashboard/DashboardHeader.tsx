import React from 'react';
import { HeartIcon, SparklesIcon, MenuIcon, XIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { urlMappings } from '../../utils/urlMappings';
interface DashboardHeaderProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
  onReset: () => void;
  toggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
}
export function DashboardHeader({
  userType,
  onReset,
  toggleMobileMenu,
  mobileMenuOpen
}: DashboardHeaderProps) {
  const navigate = useNavigate();
  const userTypeText = userType === 'husband' ? 'الزوج' : userType === 'wife' ? 'الزوجة' : userType === 'engaged' ? 'المقبلين على الزواج' : 'الزوجين';
  const userTypeColor = userType === 'husband' ? 'text-sky-700' : userType === 'wife' ? 'text-rose-600' : userType === 'engaged' ? 'text-purple-600' : 'text-amber-600';
  return <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-30">
      <div className="flex items-center">
        {userType === 'engaged' ? <SparklesIcon className="h-8 w-8 text-purple-600 mr-3" /> : userType === 'wife' ? <HeartIcon className="h-8 w-8 text-rose-600 mr-3" /> : userType === 'both' ? <HeartIcon className="h-8 w-8 text-amber-600 mr-3" /> : <HeartIcon className="h-8 w-8 text-sky-600 mr-3" />}
        <h1 className="text-2xl font-bold text-sky-900">
          <span className={userTypeColor}>{userTypeText}</span>
        </h1>
      </div>
      <div className="flex items-center">
        <button onClick={onReset} className="text-slate-600 hover:text-sky-700 transition-colors duration-200 text-sm md:text-base px-3 py-1 rounded-md hover:bg-sky-50">
          تغيير المسار
        </button>
        <button className="md:hidden ml-4 text-slate-600 focus:outline-none" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
    </header>;
}