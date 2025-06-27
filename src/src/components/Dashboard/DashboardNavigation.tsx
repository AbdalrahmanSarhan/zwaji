import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { urlMappings } from '../../utils/urlMappings';
interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}
interface DashboardNavigationProps {
  navItems: NavItem[];
  activeTab: string;
  handleTabChange: (tab: string) => void;
  mobileMenuOpen: boolean;
  onReset: () => void;
  userType: 'husband' | 'wife' | 'both' | 'engaged';
}
export function DashboardNavigation({
  navItems,
  activeTab,
  handleTabChange,
  mobileMenuOpen,
  onReset,
  userType
}: DashboardNavigationProps) {
  const navigate = useNavigate();
  const userTypePath = urlMappings.userTypePaths[userType];
  const handleReset = () => {
    onReset();
    navigate('/');
  };
  return <nav className={`bg-white shadow-md md:w-64 md:sticky md:top-20 md:h-[calc(100vh-5rem)] transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'fixed top-16 right-0 h-screen z-20 w-3/4 max-w-xs transform translate-x-0' : 'fixed top-16 right-0 h-screen z-20 w-3/4 max-w-xs transform translate-x-full md:transform-none'}`}>
      <div className="p-4 space-y-2 overflow-y-auto h-full">
        {navItems.map(item => <Link key={item.id} to={`/${userTypePath}/${item.path}`} className={`w-full text-right py-3 px-4 rounded-md flex items-center transition-all duration-200 ${activeTab === item.id ? 'bg-sky-100 text-sky-700 shadow-sm' : 'hover:bg-gray-100'}`} onClick={() => handleTabChange(item.id)}>
            {item.icon}
            <span>{item.label}</span>
          </Link>)}
        <div className="md:hidden mt-8 pt-6 border-t border-gray-200">
          <button onClick={handleReset} className="w-full text-right py-3 px-4 rounded-md flex items-center text-rose-600 hover:bg-rose-50">
            <span>العودة لاختيار المسار</span>
          </button>
        </div>
      </div>
    </nav>;
}