import React from 'react';
import { SearchIcon, XIcon, BookmarkIcon } from 'lucide-react';
interface CardHeaderProps {
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
  showSearch: boolean;
  toggleSearch: () => void;
  savedCardsCount: number;
  toggleSavedCardsPanel: () => void;
}
export function CardHeader({
  activeFilter,
  setActiveFilter,
  showSearch,
  toggleSearch,
  savedCardsCount,
  toggleSavedCardsPanel
}: CardHeaderProps) {
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter === activeFilter ? null : filter);
  };
  return <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center md:text-right text-sky-900 mb-4 md:mb-0">
        بطاقات معرفية
      </h2>
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <div className="relative">
          <button onClick={() => handleFilterChange('verse')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === 'verse' ? 'bg-emerald-100 text-emerald-700' : 'bg-white text-slate-600 hover:bg-emerald-50'}`}>
            آيات
          </button>
        </div>
        <div className="relative">
          <button onClick={() => handleFilterChange('hadith')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === 'hadith' ? 'bg-sky-100 text-sky-700' : 'bg-white text-slate-600 hover:bg-sky-50'}`}>
            أحاديث
          </button>
        </div>
        <div className="relative">
          <button onClick={() => handleFilterChange('wisdom')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === 'wisdom' ? 'bg-amber-100 text-amber-700' : 'bg-white text-slate-600 hover:bg-amber-50'}`}>
            حكم
          </button>
        </div>
        <div className="relative">
          <button onClick={() => handleFilterChange('ruling')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === 'ruling' ? 'bg-purple-100 text-purple-700' : 'bg-white text-slate-600 hover:bg-purple-50'}`}>
            أحكام
          </button>
        </div>
        <button onClick={toggleSearch} className={`p-2 rounded-full transition-colors duration-200 ${showSearch ? 'bg-sky-100 text-sky-700' : 'bg-white text-slate-600 hover:bg-sky-50'}`} aria-label="بحث">
          {showSearch ? <XIcon className="h-5 w-5" /> : <SearchIcon className="h-5 w-5" />}
        </button>
        <button onClick={toggleSavedCardsPanel} className={`p-2 rounded-full transition-colors duration-200 relative ${showSavedCardsPanel ? 'bg-amber-100 text-amber-700' : 'bg-white text-slate-600 hover:bg-amber-50'}`} aria-label="البطاقات المحفوظة">
          <BookmarkIcon className="h-5 w-5" />
          {savedCardsCount > 0 && <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {savedCardsCount}
            </span>}
        </button>
      </div>
    </div>;
}