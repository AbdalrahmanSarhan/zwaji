import React from 'react';
import { BookmarkIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { ShareButton } from '../common/ShareButton';
import { CardTypeUtils } from './CardTypeUtils';
interface CardContentProps {
  card: any;
  flipped: boolean;
  toggleFlip: () => void;
  animateCard: boolean;
  isSaved: boolean;
  handleSave: () => void;
}
export function CardContent({
  card,
  flipped,
  toggleFlip,
  animateCard,
  isSaved,
  handleSave
}: CardContentProps) {
  const {
    getCardTypeColor,
    getCardTypeLabel,
    getCardTypeIcon,
    getUserTypeIcon,
    getUserTypeLabel
  } = CardTypeUtils;
  const handleShare = () => {
    const cardType = getCardTypeLabel(card.type);
    const shareTitle = `حقوق الزوجين في الإسلام - ${cardType}`;
    const shareText = `${card.content}\n\n${card.explanation || ''}\n\n${card.source || ''}`;
    return {
      title: shareTitle,
      text: shareText
    };
  };
  return <div className={`relative h-[450px] w-full mb-8 transition-all duration-500 perspective-1000 ${animateCard ? 'opacity-90 scale-95' : 'opacity-100 scale-100'}`}>
      <div className="absolute -top-2 left-0 right-0 h-1 bg-slate-100 rounded-full overflow-hidden z-10">
        <div className="h-full bg-sky-500 transition-all duration-300 ease-out" style={{
        width: `${(card.currentIndex + 1) / card.totalCards * 100}%`
      }}></div>
      </div>
      {/* Front of Card */}
      <div className={`absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform backface-hidden ${flipped ? 'rotate-y-180 opacity-0 pointer-events-none' : 'rotate-y-0 opacity-100'}`}>
        <div className="p-6 md:p-8 h-full flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <div className={`text-sm font-medium px-3 py-1.5 rounded-full inline-flex items-center ${getCardTypeColor(card.type)}`}>
                <span className="mr-1.5">{getCardTypeIcon(card.type)}</span>
                <span>{getCardTypeLabel(card.type)}</span>
              </div>
              <div className="mr-2 text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700 flex items-center">
                {getUserTypeIcon(card.relevance)}
                <span className="mr-1">{getUserTypeLabel(card.relevance)}</span>
              </div>
            </div>
            <div className="flex space-x-2 rtl:space-x-reverse">
              <button onClick={handleSave} className={`p-2 rounded-full transition-colors duration-200 ${isSaved ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:text-amber-500 hover:bg-amber-50'}`} aria-label={isSaved ? 'إزالة من المحفوظات' : 'حفظ البطاقة'}>
                <BookmarkIcon className="h-5 w-5" />
              </button>
              <ShareButton {...handleShare()} color={card.type === 'verse' ? 'emerald' : card.type === 'hadith' ? 'sky' : card.type === 'wisdom' ? 'amber' : card.type === 'ruling' ? 'purple' : 'sky'} />
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-center items-center mb-6 relative">
            <div className="absolute top-0 right-0 left-0 h-10 bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute bottom-0 right-0 left-0 h-10 bg-gradient-to-t from-white to-transparent"></div>
            <div className="overflow-y-auto max-h-56 px-2 py-4 w-full">
              <p className="text-2xl md:text-3xl font-bold mb-4 text-center leading-relaxed">
                {card.content}
              </p>
              {card.source && <p className="text-slate-600 text-sm text-center mt-2">
                  {card.source}
                </p>}
            </div>
            {card.tags && <div className="mt-6 flex flex-wrap justify-center gap-2">
                {card.tags.map((tag: string, index: number) => <span key={index} className="text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded-full border border-slate-200">
                    {tag}
                  </span>)}
              </div>}
          </div>
          <button onClick={toggleFlip} className="w-full py-3.5 text-center bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-md transition-colors duration-200 font-medium flex items-center justify-center">
            <span>اضغط للشرح</span>
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
          </button>
        </div>
      </div>
      {/* Back of Card */}
      <div className={`absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform backface-hidden ${flipped ? 'rotate-y-0 opacity-100' : 'rotate-y-180 opacity-0 pointer-events-none'}`}>
        <div className="p-6 md:p-8 h-full flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <div className={`text-sm font-medium px-3 py-1.5 rounded-full inline-flex items-center ${getCardTypeColor(card.type)}`}>
                <span className="mr-1.5">💡</span>
                <span>الشرح</span>
              </div>
              <div className="mr-2 text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700 flex items-center">
                {getUserTypeIcon(card.relevance)}
                <span className="mr-1">{getUserTypeLabel(card.relevance)}</span>
              </div>
            </div>
            <div className="flex space-x-2 rtl:space-x-reverse">
              <button onClick={handleSave} className={`p-2 rounded-full transition-colors duration-200 ${isSaved ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:text-amber-500 hover:bg-amber-50'}`} aria-label={isSaved ? 'إزالة من المحفوظات' : 'حفظ البطاقة'}>
                <BookmarkIcon className="h-5 w-5" />
              </button>
              <ShareButton {...handleShare()} color={card.type === 'verse' ? 'emerald' : card.type === 'hadith' ? 'sky' : card.type === 'wisdom' ? 'amber' : card.type === 'ruling' ? 'purple' : 'sky'} />
            </div>
          </div>
          <div className="flex-grow overflow-y-auto mb-6 relative">
            <div className="absolute top-0 right-0 left-0 h-10 bg-gradient-to-b from-white to-transparent z-10"></div>
            <div className="absolute bottom-0 right-0 left-0 h-10 bg-gradient-to-t from-white to-transparent z-10"></div>
            <div className="p-6 bg-amber-50 rounded-lg mb-4 border border-amber-100 relative z-0">
              <p className="text-slate-700 text-right leading-relaxed text-lg">
                {card.explanation}
              </p>
            </div>
            {card.source && <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-slate-600 text-sm text-right">
                  <span className="font-bold">المصدر: </span>
                  {card.source}
                </p>
              </div>}
          </div>
          <button onClick={toggleFlip} className="w-full py-3.5 text-center bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-md transition-colors duration-200 font-medium flex items-center justify-center">
            <span>العودة للبطاقة</span>
            <ArrowRightIcon className="h-4 w-4 mr-2" />
          </button>
        </div>
      </div>
    </div>;
}