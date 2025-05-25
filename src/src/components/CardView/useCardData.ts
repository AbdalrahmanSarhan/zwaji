import { useMemo } from 'react';
import { cardData } from './cardData';
interface UseCardDataProps {
  userType: 'husband' | 'wife' | 'both';
  activeFilter: string | null;
  searchQuery: string;
}
export function useCardData({
  userType,
  activeFilter,
  searchQuery
}: UseCardDataProps) {
  const filteredCards = useMemo(() => {
    return cardData.filter(card => {
      const matchesUserType = card.relevance.includes(userType);
      const matchesFilter = !activeFilter || card.type === activeFilter;
      const matchesSearch = !searchQuery || card.content.includes(searchQuery) || card.explanation && card.explanation.includes(searchQuery) || card.source && card.source.includes(searchQuery) || card.tags && card.tags.some(tag => tag.includes(searchQuery));
      return matchesUserType && matchesFilter && matchesSearch;
    });
  }, [userType, activeFilter, searchQuery]);
  const resetFilters = () => {
    // This function is meant to be used in the component to reset filters
    // We return it here to make it available in the component
    return;
  };
  return {
    filteredCards: filteredCards.length > 0 ? filteredCards : cardData.filter(card => card.relevance.includes(userType)),
    resetFilters
  };
}