import React from 'react';
import { XIcon, BookmarkIcon } from 'lucide-react';
import { CardTypeUtils } from './CardTypeUtils';
interface SavedCardsPanelProps {
  savedCards: number[];
  allCards: any[];
  toggleSavedCardsPanel: () => void;
  setCurrentCardIndex: (index: number) => void;
  setFlipped: (flipped: boolean) => void;
}
export function SavedCardsPanel({
  savedCards,
  allCards,
  toggleSavedCardsPanel,
  setCurrentCardIndex,
  setFlipped
}: SavedCardsPanelProps) {
  const {
    getCardTypeColor,
    getCardTypeLabel
  } = CardTypeUtils;
  if (savedCards.length === 0) {
    return <div className="mt-10 animate-fadeIn">
        <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100 text-center">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-amber-800">
              البطاقات المحفوظة
            </h3>
            <button onClick={toggleSavedCardsPanel} className="text-slate-400 hover:text-slate-600">
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="py-8">
            <div className="w-16 h-16 mx-auto mb-4 text-slate-300">
              <BookmarkIcon className="w-full h-full" />
            </div>
            <p className="text-slate-500">لم تقم بحفظ أي بطاقات بعد</p>
            <p className="text-slate-400 text-sm mt-2">
              اضغط على أيقونة الحفظ لإضافة البطاقات إلى قائمة المحفوظات
            </p>
          </div>
        </div>
      </div>;
  }
  return <div className="mt-10 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-amber-800">
            البطاقات المحفوظة
          </h3>
          <button onClick={toggleSavedCardsPanel} className="text-slate-400 hover:text-slate-600">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {savedCards.map(index => {
          const card = allCards[index];
          return <button key={index} onClick={() => {
            setCurrentCardIndex(index);
            setFlipped(false);
            toggleSavedCardsPanel();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }} className="p-3 text-right rounded-lg bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-200 transition-colors duration-200 group">
                <div className="flex items-start mb-2">
                  <div className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCardTypeColor(card.type)}`}>
                    {getCardTypeLabel(card.type)}
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-700 line-clamp-2 group-hover:text-amber-800 transition-colors duration-200">
                  {card.content}
                </p>
              </button>;
        })}
        </div>
      </div>
    </div>;
}