import React from 'react';
import { ScaleIcon } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { SEO } from './SEO';
import { SectionSuggestions } from './SectionSuggestions';
import { urlMappings } from '../utils/urlMappings';
export function RightsComparison() {
  const sectionId = 'comparison';
  const pageTitle = urlMappings.sectionTitles[sectionId];
  const pageDescription = urlMappings.sectionDescriptions[sectionId];
  const comparisonSuggestions = [{
    id: 'suggestion-1',
    text: 'تذكر أن الحقوق والواجبات متكاملة وليست متعارضة، فهي تهدف لبناء أسرة متماسكة.'
  }, {
    id: 'suggestion-2',
    text: 'ناقش مع شريك حياتك فهمكما المشترك للحقوق والواجبات لتجنب سوء الفهم.'
  }, {
    id: 'suggestion-3',
    text: 'ركز على أداء واجباتك قبل المطالبة بحقوقك، فهذا منهج الإسلام في بناء العلاقات.'
  }, {
    id: 'suggestion-4',
    text: 'احرص على التوازن بين الحقوق والواجبات، فالإفراط في المطالبة بالحقوق قد يؤثر سلباً على العلاقة.',
    link: {
      url: 'https://example.com/balance-rights',
      label: 'اقرأ المزيد عن التوازن في الحقوق'
    }
  }];
  return <div>
      <SEO title={pageTitle} description={pageDescription} path={window.location.pathname} />
      <PageHeader title={pageTitle} description={pageDescription} icon={<ScaleIcon className="h-6 w-6" />} color="amber" />
      <SectionSuggestions title="اقتراحات لفهم أفضل للحقوق والواجبات" suggestions={comparisonSuggestions} color="amber" />
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-slate-700">محتوى مقارنة الحقوق...</p>
      </div>
    </div>;
}