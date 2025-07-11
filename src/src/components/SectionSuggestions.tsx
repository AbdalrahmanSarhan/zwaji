import React from 'react';
import { LightbulbIcon } from 'lucide-react';
interface Suggestion {
  id: string;
  text: string;
}
interface SectionSuggestionsProps {
  title: string;
  suggestions: Suggestion[];
  color: string;
}
export function SectionSuggestions({
  title,
  suggestions,
  color
}: SectionSuggestionsProps) {
  return <div className={`bg-${color}-50 rounded-lg shadow-sm p-6 mb-8 border border-${color}-100`}>
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-full bg-${color}-100 ml-3`}>
          <LightbulbIcon className={`h-5 w-5 text-${color}-600`} />
        </div>
        <h3 className={`font-bold text-lg text-${color}-800`}>{title}</h3>
      </div>
      <ul className="space-y-3">
        {suggestions.map(suggestion => <li key={suggestion.id} className="flex items-start">
            <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-${color}-500 mt-2`}></span>
            <span className="text-slate-700">{suggestion.text}</span>
          </li>)}
      </ul>
    </div>;
}