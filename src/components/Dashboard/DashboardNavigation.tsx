import React from 'react';
import { Link } from 'react-router-dom';
import { LogOutIcon } from 'lucide-react';
interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}
interface DashboardNavigationProps {
  navItems: NavItem[];
  userType: 'husband' | 'wife' | 'both' | 'engaged';
  mobileMenuOpen: boolean;
  onReset: () => void;
}
export function DashboardNavigation({
  navItems,
  userType,
  mobileMenuOpen,
  onReset
}: DashboardNavigationProps) {
  return <nav className={`bg-white shadow-md md:shadow-none transition-all duration-300 ease-in-out md:w-64 md:flex-shrink-0 md:border-l border-amber-100 md:static md:block z-30 fixed inset-y-0 right-0 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
      <div className="p-4 h-full flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-400 mb-3 px-2">
              القائمة الرئيسية
            </h3>
            <ul className="space-y-1">
              {navItems.map(item => <li key={item.id}>
                  <Link to={`${item.path}`} className={`flex items-center px-3 py-2.5 rounded-lg text-slate-900 hover:bg-amber-50 transition-colors duration-200`}>
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>
        <div className="pt-4 border-t border-slate-100">
          <button onClick={onReset} className="flex items-center w-full px-3 py-2.5 rounded-lg text-slate-700 hover:bg-rose-50 hover:text-rose-700 transition-colors duration-200">
            <LogOutIcon className="h-5 w-5 ml-3" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </div>
    </nav>;
}