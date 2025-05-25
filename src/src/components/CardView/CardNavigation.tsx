import React from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from 'lucide-react';
interface CardNavigationProps {
  currentIndex: number;
  totalCards: number;
  handlePrevious: () => void;
  handleNext: () => void;
}
export function CardNavigation({
  currentIndex,
  totalCards,
  handlePrevious,
  handleNext
}: CardNavigationProps) {
  return <div className="flex justify-between items-center">
      <button onClick={handlePrevious} disabled={currentIndex === 0} className={`flex items-center px-4 py-2.5 rounded-md transition-all duration-200 ${currentIndex === 0 ? 'text-slate-400 cursor-not-allowed opacity-50' : 'text-sky-600 hover:bg-sky-50 hover:shadow-sm'}`}>
        <ChevronLeftIcon className="h-5 w-5 ml-1" />
        <span>السابق</span>
      </button>
      <div className="flex items-center bg-white px-4 py-2 rounded-full text-sm shadow-sm">
        <span className="font-medium text-sky-600">{currentIndex + 1}</span>
        <span className="mx-1.5 text-slate-400">/</span>
        <span className="text-slate-500">{totalCards}</span>
      </div>
      <button onClick={handleNext} disabled={currentIndex === totalCards - 1} className={`flex items-center px-4 py-2.5 rounded-md transition-all duration-200 ${currentIndex === totalCards - 1 ? 'text-slate-400 cursor-not-allowed opacity-50' : 'text-sky-600 hover:bg-sky-50 hover:shadow-sm'}`}>
        <span>التالي</span>
        <ChevronRightIcon className="h-5 w-5 mr-1" />
      </button>
    </div>;
}