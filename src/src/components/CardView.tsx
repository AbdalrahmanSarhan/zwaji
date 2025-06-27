import React from 'react';
import { BookOpenIcon } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { SectionSuggestions } from './SectionSuggestions';
interface CardViewProps {
  userType: string;
}
export function CardView({
  userType
}: CardViewProps) {
  const pageTitle = 'بطاقات معرفية';
  const pageDescription = 'مجموعة من البطاقات المعرفية حول حقوق الزوجين في الإسلام';
  const cardSuggestions = [{
    id: 'suggestion-1',
    text: 'اقرأ البطاقات المعرفية بتمعن واحتفظ بالملاحظات المهمة لمناقشتها مع شريك حياتك.'
  }, {
    id: 'suggestion-2',
    text: 'شارك البطاقات المفيدة مع شريكك لتعزيز الفهم المشترك للحقوق والواجبات.'
  }, {
    id: 'suggestion-3',
    text: 'خصص وقتاً أسبوعياً لمناقشة مفهوم جديد من المفاهيم المذكورة في البطاقات.'
  }, {
    id: 'suggestion-4',
    text: 'استخدم البطاقات كمرجع عند مواجهة تحديات في العلاقة الزوجية.'
  }];
  return <div>
      <PageHeader title={pageTitle} description={pageDescription} icon={<BookOpenIcon className="h-6 w-6" />} color="sky" />
      <SectionSuggestions title="اقتراحات للاستفادة من البطاقات المعرفية" suggestions={cardSuggestions} color="sky" />
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-slate-700">محتوى البطاقات المعرفية...</p>
      </div>
    </div>;
}