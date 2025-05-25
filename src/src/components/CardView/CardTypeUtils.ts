import React from "react";
import { UserIcon, UsersIcon } from 'lucide-react';
export const CardTypeUtils = {
  getCardTypeColor: (type: string) => {
    switch (type) {
      case 'verse':
        return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'hadith':
        return 'text-sky-600 bg-sky-50 border-sky-200';
      case 'wisdom':
        return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'ruling':
        return 'text-purple-600 bg-purple-50 border-purple-200';
      default:
        return 'text-sky-600 bg-sky-50 border-sky-200';
    }
  },
  getCardTypeLabel: (type: string) => {
    switch (type) {
      case 'verse':
        return 'آية قرآنية';
      case 'hadith':
        return 'حديث شريف';
      case 'wisdom':
        return 'حكمة';
      case 'ruling':
        return 'حكم فقهي';
      default:
        return '';
    }
  },
  getCardTypeIcon: (type: string) => {
    switch (type) {
      case 'verse':
        return '📖';
      case 'hadith':
        return '🗣️';
      case 'wisdom':
        return '✨';
      case 'ruling':
        return '⚖️';
      default:
        return '📝';
    }
  },
  getUserTypeIcon: (relevance: string[]) => {
    if (relevance.includes('husband') && relevance.includes('wife') && relevance.includes('both')) {
      return <UsersIcon className="h-4 w-4 text-amber-500" />;
    } else if (relevance.includes('husband') && !relevance.includes('wife')) {
      return <UserIcon className="h-4 w-4 text-sky-500" />;
    } else if (relevance.includes('wife') && !relevance.includes('husband')) {
      return <UserIcon className="h-4 w-4 text-rose-500" />;
    } else {
      return <UsersIcon className="h-4 w-4 text-amber-500" />;
    }
  },
  getUserTypeLabel: (relevance: string[]) => {
    if (relevance.includes('husband') && relevance.includes('wife') && relevance.includes('both')) {
      return 'للجميع';
    } else if (relevance.includes('husband') && !relevance.includes('wife')) {
      return 'للزوج';
    } else if (relevance.includes('wife') && !relevance.includes('husband')) {
      return 'للزوجة';
    } else {
      return 'للجميع';
    }
  }
};