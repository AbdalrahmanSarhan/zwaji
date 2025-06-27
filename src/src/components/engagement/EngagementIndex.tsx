import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, HandIcon, MessageCircleIcon, ShieldIcon, CheckCircleIcon, LightbulbIcon } from 'lucide-react';
export function EngagementIndex() {
  const sections = [{
    id: 'definition',
    title: 'تعريف الخطبة في الإسلام',
    description: 'ماهيّة الخطبة وحكمها الشرعي والحكمة منها',
    icon: <BookOpenIcon className="h-8 w-8" />,
    color: 'bg-purple-100 text-purple-700',
    link: '/moqbilin-ala-alzawaj/engagement/definition'
  }, {
    id: 'rules',
    title: 'ضوابط الخطبة في الإسلام',
    description: 'أحكام وقواعد يجب مراعاتها أثناء فترة الخطوبة',
    icon: <HandIcon className="h-8 w-8" />,
    color: 'bg-emerald-100 text-emerald-700',
    link: '/moqbilin-ala-alzawaj/engagement/rules'
  }, {
    id: 'communication',
    title: 'التواصل الفعال أثناء الخطبة',
    description: 'كيفية التواصل الإيجابي ضمن الضوابط الشرعية',
    icon: <MessageCircleIcon className="h-8 w-8" />,
    color: 'bg-blue-100 text-blue-700',
    link: '/moqbilin-ala-alzawaj/engagement/communication'
  }, {
    id: 'allowed',
    title: 'ما يجوز وما لا يجوز في فترة الخطوبة',
    description: 'حدود العلاقة بين الخاطبين وفق الشريعة الإسلامية',
    icon: <CheckCircleIcon className="h-8 w-8" />,
    color: 'bg-sky-100 text-sky-700',
    link: '/moqbilin-ala-alzawaj/engagement/allowed'
  }, {
    id: 'challenges',
    title: 'تحديات شائعة في فترة الخطوبة',
    description: 'مشكلات قد تواجه الخاطبين وكيفية التعامل معها',
    icon: <ShieldIcon className="h-8 w-8" />,
    color: 'bg-red-100 text-red-700',
    link: '/moqbilin-ala-alzawaj/engagement/challenges'
  }, {
    id: 'tips',
    title: 'نصائح لنجاح فترة الخطوبة',
    description: 'كيف تستثمر هذه الفترة بشكل إيجابي',
    icon: <LightbulbIcon className="h-8 w-8" />,
    color: 'bg-amber-100 text-amber-700',
    link: '/moqbilin-ala-alzawaj/engagement/tips'
  }];
  return <div>
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-purple-900 mb-4">
          مرحلة الخطبة في الإسلام
        </h2>
        <p className="text-slate-700 mb-4">
          الخطبة في الإسلام هي طلب الرجل يد امرأة معينة للزواج بها، والتقدم
          إليها أو إلى وليها لهذا الغرض. وهي وعد بالزواج وليست عقداً ملزماً،
          فلكل من الطرفين الحق في العدول عنها.
        </p>
        <p className="text-slate-700">
          في هذا القسم، ستجد معلومات شاملة عن مرحلة الخطبة من منظور إسلامي، بما
          في ذلك تعريفها وضوابطها وآدابها والحدود المسموح بها وكيفية التعامل مع
          التحديات التي قد تواجه الخاطبين.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map(section => <Link key={section.id} to={section.link} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-slate-200">
            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className={`p-3 rounded-lg ${section.color}`}>
                  {section.icon}
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-bold text-slate-800 mb-1">
                    {section.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>)}
      </div>
    </div>;
}