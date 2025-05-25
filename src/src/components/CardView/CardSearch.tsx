import React from 'react';
import { SearchIcon, XIcon, ArrowRightIcon } from 'lucide-react';
interface CardSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredCardsLength: number;
  resetFilters: () => void;
}
export function CardSearch({
  searchQuery,
  setSearchQuery,
  filteredCardsLength,
  resetFilters
}: CardSearchProps) {
  return <div className="mb-6 animate-fadeIn">
      <div className="relative">
        <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="ابحث في البطاقات..." className="w-full px-4 py-3 pr-12 rounded-lg border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none transition-all duration-200" />
        <SearchIcon className="absolute top-3.5 right-4 h-5 w-5 text-slate-400" />
        {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute top-3.5 left-4 h-5 w-5 text-slate-400 hover:text-slate-600">
            <XIcon className="h-5 w-5" />
          </button>}
      </div>
      {searchQuery && filteredCardsLength === 0 && <div className="mt-4 text-center">
          <p className="text-slate-500 mb-3">لا توجد نتائج مطابقة لبحثك</p>
          <button onClick={resetFilters} className="px-4 py-2 bg-sky-100 hover:bg-sky-200 text-sky-700 rounded-md transition-colors duration-200 inline-flex items-center">
            <ArrowRightIcon className="h-4 w-4 ml-1.5" />
            <span>عرض جميع البطاقات</span>
          </button>
        </div>}
    </div>;
}