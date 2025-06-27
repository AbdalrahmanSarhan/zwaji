import React from 'react';
import { LightbulbIcon, ExternalLinkIcon, ArrowRightIcon } from 'lucide-react';
interface Suggestion {
  id: string;
  text: string;
  link?: {
    url: string;
    label: string;
  };
}
interface SectionSuggestionsProps {
  title?: string;
  suggestions: Suggestion[];
  color?: 'sky' | 'amber' | 'emerald' | 'purple' | 'rose' | 'indigo';
}
export function SectionSuggestions({
  title = 'اقتراحات مفيدة',
  suggestions,
  color = 'sky'
}: SectionSuggestionsProps) {
  const getColorClasses = () => {
    switch (color) {
      case 'amber':
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-100',
          title: 'text-amber-800',
          icon: 'text-amber-500',
          bullet: 'bg-amber-500',
          hover: 'group-hover:text-amber-700'
        };
      case 'emerald':
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-100',
          title: 'text-emerald-800',
          icon: 'text-emerald-500',
          bullet: 'bg-emerald-500',
          hover: 'group-hover:text-emerald-700'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-100',
          title: 'text-purple-800',
          icon: 'text-purple-500',
          bullet: 'bg-purple-500',
          hover: 'group-hover:text-purple-700'
        };
      case 'rose':
        return {
          bg: 'bg-rose-50',
          border: 'border-rose-100',
          title: 'text-rose-800',
          icon: 'text-rose-500',
          bullet: 'bg-rose-500',
          hover: 'group-hover:text-rose-700'
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-50',
          border: 'border-indigo-100',
          title: 'text-indigo-800',
          icon: 'text-indigo-500',
          bullet: 'bg-indigo-500',
          hover: 'group-hover:text-indigo-700'
        };
      default:
        return {
          bg: 'bg-sky-50',
          border: 'border-sky-100',
          title: 'text-sky-800',
          icon: 'text-sky-500',
          bullet: 'bg-sky-500',
          hover: 'group-hover:text-sky-700'
        };
    }
  };
  const colors = getColorClasses();
  return <div className={`rounded-lg ${colors.bg} ${colors.border} border p-6 mb-8 animate-fadeIn`}>
      <div className="flex items-center mb-4">
        <LightbulbIcon className={`h-5 w-5 ml-2 ${colors.icon}`} />
        <h3 className={`font-bold text-lg ${colors.title}`}>{title}</h3>
      </div>
      <ul className="space-y-3">
        {suggestions.map(suggestion => <li key={suggestion.id} className="flex items-start group">
            <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full ${colors.bullet} mt-2 group-hover:scale-125 transition-transform duration-300`}></span>
            <div>
              <p className={`text-slate-600 ${colors.hover} transition-colors duration-200`}>
                {suggestion.text}
              </p>
              {suggestion.link && <a href={suggestion.link.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center mt-1 text-sm ${colors.title} hover:underline`}>
                  <span>{suggestion.link.label}</span>
                  <ArrowRightIcon className="h-3.5 w-3.5 mr-1" />
                </a>}
            </div>
          </li>)}
      </ul>
    </div>;
}