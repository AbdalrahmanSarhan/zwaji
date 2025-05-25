import React, { useCallback, useEffect, useMemo, useState, memo, createElement } from 'react';
import { useCardData } from './useCardData';
import { CardHeader } from './CardHeader';
import { CardFilters } from './CardFilters';
import { CardSearch } from './CardSearch';
import { CardContent } from './CardContent';
import { CardNavigation } from './CardNavigation';
import { SavedCardsPanel } from './SavedCardsPanel';
interface CardViewProps {
  userType: 'husband' | 'wife' | 'both';
}
const MemoizedCardHeader = memo(CardHeader);
const MemoizedCardSearch = memo(CardSearch);
const MemoizedCardContent = memo(CardContent);
const MemoizedCardNavigation = memo(CardNavigation);
const MemoizedSavedCardsPanel = memo(SavedCardsPanel);
export function CardView({
  userType
}: CardViewProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [savedCards, setSavedCards] = useState<number[]>([]);
  const [flipped, setFlipped] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);
  const [showSavedCardsPanel, setShowSavedCardsPanel] = useState(false);
  const {
    filteredCards,
    resetFilters
  } = useCardData({
    userType,
    activeFilter,
    searchQuery
  });
  useEffect(() => {
    if (currentCardIndex >= filteredCards.length) {
      setCurrentCardIndex(0);
    }
  }, [activeFilter, searchQuery, filteredCards.length, currentCardIndex]);
  useEffect(() => {
    if (animateCard) {
      const timer = setTimeout(() => {
        setAnimateCard(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [animateCard]);
  const handleNext = useCallback(() => {
    if (currentCardIndex < filteredCards.length - 1) {
      setFlipped(false);
      setAnimateCard(true);
      const nextIndex = currentCardIndex + 1;
      setTimeout(() => {
        setCurrentCardIndex(nextIndex);
        setAnimateCard(false);
      }, 200);
    }
  }, [currentCardIndex, filteredCards.length]);
  const handlePrevious = useCallback(() => {
    if (currentCardIndex > 0) {
      setFlipped(false);
      setAnimateCard(true);
      const prevIndex = currentCardIndex - 1;
      setTimeout(() => {
        setCurrentCardIndex(prevIndex);
        setAnimateCard(false);
      }, 200);
    }
  }, [currentCardIndex]);
  const handleSave = useCallback(() => {
    setSavedCards(prev => {
      if (prev.includes(currentCardIndex)) {
        return prev.filter(index => index !== currentCardIndex);
      }
      showSaveNotification();
      return [...prev, currentCardIndex];
    });
  }, [currentCardIndex]);
  const showSaveNotification = () => {
    const notification = document.createElement('div');
    notification.className = 'fixed top-24 right-1/2 transform translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-lg z-50 animate-fadeIn';
    notification.textContent = 'تم حفظ البطاقة';
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.add('opacity-0');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 2000);
  };
  const toggleFlip = useCallback(() => {
    setFlipped(prev => !prev);
  }, []);
  const toggleSearch = useCallback(() => {
    setShowSearch(prev => {
      if (prev) setSearchQuery('');
      return !prev;
    });
  }, []);
  const toggleSavedCardsPanel = useCallback(() => {
    setShowSavedCardsPanel(prev => !prev);
  }, []);
  // Memoize current card
  const currentCard = useMemo(() => filteredCards[currentCardIndex], [filteredCards, currentCardIndex]);
  const isSaved = useMemo(() => savedCards.includes(currentCardIndex), [savedCards, currentCardIndex]);
  return <div className="max-w-4xl mx-auto">
      <MemoizedCardHeader activeFilter={activeFilter} setActiveFilter={setActiveFilter} showSearch={showSearch} toggleSearch={toggleSearch} savedCardsCount={savedCards.length} toggleSavedCardsPanel={toggleSavedCardsPanel} />
      {showSearch && <MemoizedCardSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredCardsLength={filteredCards.length} resetFilters={resetFilters} />}
      {(activeFilter || searchQuery) && filteredCards.length > 0 && <div className="mb-4 flex justify-center">
          <button onClick={resetFilters} className="px-3 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-full text-sm transition-colors duration-200 inline-flex items-center">
            <span>إلغاء التصفية</span>
          </button>
        </div>}
      {currentCard && <MemoizedCardContent card={currentCard} flipped={flipped} toggleFlip={toggleFlip} animateCard={animateCard} isSaved={isSaved} handleSave={handleSave} />}
      <MemoizedCardNavigation currentIndex={currentCardIndex} totalCards={filteredCards.length} handlePrevious={handlePrevious} handleNext={handleNext} />
      {showSavedCardsPanel && <MemoizedSavedCardsPanel savedCards={savedCards} allCards={filteredCards} toggleSavedCardsPanel={toggleSavedCardsPanel} setCurrentCardIndex={setCurrentCardIndex} setFlipped={setFlipped} />}
    </div>;
}