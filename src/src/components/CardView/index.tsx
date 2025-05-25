import React, { useEffect, useState, createElement } from 'react';
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
  const handleNext = () => {
    if (currentCardIndex < filteredCards.length - 1) {
      setFlipped(false);
      setAnimateCard(true);
      setTimeout(() => {
        setCurrentCardIndex(currentCardIndex + 1);
      }, 200);
    }
  };
  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setFlipped(false);
      setAnimateCard(true);
      setTimeout(() => {
        setCurrentCardIndex(currentCardIndex - 1);
      }, 200);
    }
  };
  const handleSave = () => {
    if (!savedCards.includes(currentCardIndex)) {
      setSavedCards([...savedCards, currentCardIndex]);
      showSaveNotification();
    } else {
      setSavedCards(savedCards.filter(index => index !== currentCardIndex));
    }
  };
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
  const toggleFlip = () => {
    setFlipped(!flipped);
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery('');
    }
  };
  const toggleSavedCardsPanel = () => {
    setShowSavedCardsPanel(!showSavedCardsPanel);
  };
  const currentCard = filteredCards[currentCardIndex];
  const isSaved = savedCards.includes(currentCardIndex);
  return <div className="max-w-4xl mx-auto">
      <CardHeader activeFilter={activeFilter} setActiveFilter={setActiveFilter} showSearch={showSearch} toggleSearch={toggleSearch} savedCardsCount={savedCards.length} toggleSavedCardsPanel={toggleSavedCardsPanel} />
      {showSearch && <CardSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredCardsLength={filteredCards.length} resetFilters={resetFilters} />}
      {(activeFilter || searchQuery) && filteredCards.length > 0 && <div className="mb-4 flex justify-center">
          <button onClick={resetFilters} className="px-3 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-full text-sm transition-colors duration-200 inline-flex items-center">
            <span>إلغاء التصفية</span>
          </button>
        </div>}
      {currentCard && <CardContent card={currentCard} flipped={flipped} toggleFlip={toggleFlip} animateCard={animateCard} isSaved={isSaved} handleSave={handleSave} />}
      <CardNavigation currentIndex={currentCardIndex} totalCards={filteredCards.length} handlePrevious={handlePrevious} handleNext={handleNext} />
      {showSavedCardsPanel && <SavedCardsPanel savedCards={savedCards} allCards={filteredCards} toggleSavedCardsPanel={toggleSavedCardsPanel} setCurrentCardIndex={setCurrentCardIndex} setFlipped={setFlipped} />}
    </div>;
}