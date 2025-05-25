import React, { useState } from 'react';
import { ChevronDownIcon, BookOpenIcon, BookmarkIcon, UserIcon, UsersIcon } from 'lucide-react';
import { ShareButton } from './ShareButton';
interface ScholarOpinionsProps {
  userType: 'husband' | 'wife' | 'both';
}
export function ScholarOpinions({
  userType
}: ScholarOpinionsProps) {
  const [expandedOpinion, setExpandedOpinion] = useState<number | null>(0);
  const [savedOpinions, setSavedOpinions] = useState<number[]>([]);
  const [showRelevanceFilter, setShowRelevanceFilter] = useState<boolean>(false);
  const [relevanceFilter, setRelevanceFilter] = useState<string | null>(null);
  const scholars = [{
    name: 'الشيخ ابن باز',
    topic: 'حقوق الزوجة على زوجها',
    quote: 'من حقوق الزوجة على زوجها: النفقة والكسوة والسكنى بالمعروف، والمعاشرة بالمعروف، وتعليمها ما تحتاج إليه من أمور دينها، وعدم الإضرار بها.',
    source: 'مجموع فتاوى ابن باز (21/237)',
    category: 'النفقة والمعاشرة',
    relevance: ['husband', 'both']
  }, {
    name: 'الشيخ ابن عثيمين',
    topic: 'التعامل بين الزوجين',
    quote: 'ينبغي أن يكون التعامل بين الزوجين قائماً على المودة والرحمة والتسامح، فالمرأة خُلقت من ضلع أعوج، فإذا أراد الرجل أن يقيمها كسرها، وكسرها طلاقها.',
    source: 'شرح رياض الصالحين (3/451)',
    category: 'المعاشرة بالمعروف',
    relevance: ['husband', 'wife', 'both']
  }, {
    name: 'الشيخ الألباني',
    topic: 'ضرب الزوجة',
    quote: 'الضرب المذكور في القرآن هو للتأديب لا للانتقام، وهو آخر العلاج، ولا يكون إلا بعد استنفاد الوسائل الأخرى من الوعظ والهجر، وهو ضرب غير مبرح.',
    source: 'سلسلة الهدى والنور (شريط رقم 835)',
    category: 'المعاملة',
    relevance: ['husband', 'both']
  }, {
    name: 'الشيخ صالح الفوزان',
    topic: 'حق الزوج على زوجته',
    quote: 'من حق الزوج على زوجته: طاعته في غير معصية الله، وحفظ بيته وماله وعرضه، وعدم الخروج من بيته إلا بإذنه، وعدم إدخال من يكره في بيته.',
    source: 'الملخص الفقهي (2/354)',
    category: 'الطاعة',
    relevance: ['wife', 'both']
  }, {
    name: 'الشيخ محمد متولي الشعراوي',
    topic: 'التفاهم بين الزوجين',
    quote: 'الحياة الزوجية قائمة على التفاهم والتكامل، فالرجل قوّام على المرأة بما فضل الله بعضهم على بعض، وهذه القوامة تكليف وليست تشريفاً، فهي مسؤولية وأمانة.',
    source: 'تفسير الشعراوي (سورة النساء)',
    category: 'القوامة',
    relevance: ['husband', 'wife', 'both']
  }, {
    name: 'الشيخ ابن باز',
    topic: 'توفير الخادمة للزوجة',
    quote: 'إذا كانت الزوجة ممن لا تخدم نفسها في العادة، أو كانت مريضة أو ضعيفة، أو كان البيت كبيراً يحتاج إلى خدم، وكان الزوج موسراً، فيلزمه توفير خادمة لها. أما إذا كانت ممن تخدم نفسها عادة، أو كان الزوج معسراً، فلا يلزمه ذلك.',
    source: 'مجموع فتاوى ابن باز (21/252)',
    category: 'النفقة والخدمة',
    relevance: ['husband', 'wife', 'both']
  }, {
    name: 'الشيخ ابن عثيمين',
    topic: 'الإنفاق على الزوجة',
    quote: 'النفقة واجبة على الزوج لزوجته بالمعروف حسب حاله من اليسر والعسر، لقوله تعالى: "لِيُنْفِقْ ذُو سَعَةٍ مِنْ سَعَتِهِ وَمَنْ قُدِرَ عَلَيْهِ رِزْقُهُ فَلْيُنْفِقْ مِمَّا آتَاهُ اللَّهُ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا مَا آتَاهَا"، فالنفقة تختلف باختلاف حال الزوج، وليس للزوجة أن تطالبه بما لا يقدر عليه.',
    source: 'الشرح الممتع (13/288)',
    category: 'النفقة',
    relevance: ['husband', 'both']
  }, {
    name: 'الدكتورة رقية المحارب',
    topic: 'الحياة الزوجية الناجحة',
    quote: 'من أهم مقومات نجاح الحياة الزوجية هو فهم كل طرف لطبيعة الطرف الآخر، وخاصة فهم الزوجة لطبيعة الرجل واحتياجاته، وفهم الزوج لطبيعة المرأة ومشاعرها. وكلما زاد هذا الفهم المتبادل، كلما قلت الخلافات وزاد التوافق.',
    source: 'كتاب أسرار السعادة الزوجية',
    category: 'التفاهم',
    relevance: ['wife', 'both']
  }, {
    name: 'الشيخة سعاد صالح',
    topic: 'حقوق الزوج',
    quote: 'من أهم حقوق الزوج على زوجته أن تحفظه في نفسها وماله، وأن تطيعه في غير معصية الله، وأن تحسن تدبير شؤون البيت، وأن تحترمه وتقدره وتعينه على طاعة الله. وإذا قامت المرأة بهذه الواجبات، فإنها تكون قد أدت ما عليها تجاه زوجها.',
    source: 'محاضرات في فقه الأسرة',
    category: 'الطاعة',
    relevance: ['wife', 'both']
  }];
  const toggleExpand = (index: number) => {
    setExpandedOpinion(expandedOpinion === index ? null : index);
  };
  const toggleSave = (index: number) => {
    if (savedOpinions.includes(index)) {
      setSavedOpinions(savedOpinions.filter(i => i !== index));
    } else {
      setSavedOpinions([...savedOpinions, index]);
    }
  };
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'النفقة':
      case 'النفقة والخدمة':
      case 'النفقة والمعاشرة':
        return 'emerald';
      case 'المعاشرة بالمعروف':
      case 'التفاهم':
        return 'sky';
      case 'المعاملة':
        return 'amber';
      case 'الطاعة':
        return 'purple';
      case 'القوامة':
        return 'rose';
      default:
        return 'slate';
    }
  };
  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const prefix = type === 'bg' ? 'bg' : type === 'text' ? 'text' : 'border';
    const shade = type === 'bg' ? '100' : type === 'text' ? '700' : '300';
    return `${prefix}-${color}-${shade}`;
  };
  const getUserTypeIcon = (relevance: string[]) => {
    if (relevance.includes('husband') && relevance.includes('wife')) {
      return <UsersIcon className="h-4 w-4 text-amber-500" />;
    } else if (relevance.includes('husband') && !relevance.includes('wife')) {
      return <UserIcon className="h-4 w-4 text-sky-500" />;
    } else if (relevance.includes('wife') && !relevance.includes('husband')) {
      return <UserIcon className="h-4 w-4 text-rose-500" />;
    } else {
      return <UsersIcon className="h-4 w-4 text-amber-500" />;
    }
  };
  const getUserTypeLabel = (relevance: string[]) => {
    if (relevance.includes('husband') && relevance.includes('wife')) {
      return 'للجميع';
    } else if (relevance.includes('husband') && !relevance.includes('wife')) {
      return 'للزوج';
    } else if (relevance.includes('wife') && !relevance.includes('husband')) {
      return 'للزوجة';
    } else {
      return 'للجميع';
    }
  };
  const categories = Array.from(new Set(scholars.map(s => s.category)));
  const handleShare = (scholar: any) => {
    const shareTitle = `رأي ${scholar.name} في ${scholar.topic}`;
    const shareText = `${scholar.quote}\n\nالمصدر: ${scholar.source}`;
    return {
      title: shareTitle,
      text: shareText
    };
  };
  const toggleRelevanceFilter = (filter: string) => {
    if (relevanceFilter === filter) {
      setRelevanceFilter(null);
    } else {
      setRelevanceFilter(filter);
    }
  };
  const filteredScholars = scholars.filter(scholar => {
    const matchesUserType = scholar.relevance.includes(userType) || scholar.relevance.includes('both');
    const matchesRelevanceFilter = !relevanceFilter || scholar.relevance.includes(relevanceFilter);
    return matchesUserType && matchesRelevanceFilter;
  });
  return <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-sky-900">
        فتاوى وآراء العلماء
      </h2>
      <div className="mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-sky-900">تصنيف الفتاوى</h3>
            <button onClick={() => setShowRelevanceFilter(!showRelevanceFilter)} className="text-sm text-sky-600 hover:text-sky-800 transition-colors duration-200">
              {showRelevanceFilter ? 'إخفاء تصنيف المسار' : 'تصنيف حسب المسار'}
            </button>
          </div>
          {showRelevanceFilter && <div className="mb-4 flex flex-wrap gap-2">
              <button onClick={() => toggleRelevanceFilter('husband')} className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center ${relevanceFilter === 'husband' ? 'bg-sky-100 text-sky-700' : 'bg-gray-100 text-gray-700 hover:bg-sky-50'}`}>
                <UserIcon className="h-4 w-4 ml-1.5 text-sky-500" />
                <span>للزوج</span>
              </button>
              <button onClick={() => toggleRelevanceFilter('wife')} className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center ${relevanceFilter === 'wife' ? 'bg-rose-100 text-rose-700' : 'bg-gray-100 text-gray-700 hover:bg-rose-50'}`}>
                <UserIcon className="h-4 w-4 ml-1.5 text-rose-500" />
                <span>للزوجة</span>
              </button>
              <button onClick={() => toggleRelevanceFilter('both')} className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center ${relevanceFilter === 'both' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-700 hover:bg-amber-50'}`}>
                <UsersIcon className="h-4 w-4 ml-1.5 text-amber-500" />
                <span>للجميع</span>
              </button>
            </div>}
          <h4 className="font-medium text-slate-700 mb-2">
            تصنيف حسب الموضوع:
          </h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => <div key={index} className={`px-3 py-1.5 rounded-full text-sm font-medium ${getColorClass(getCategoryColor(category), 'bg')} ${getColorClass(getCategoryColor(category), 'text')}`}>
                {category}
              </div>)}
          </div>
        </div>
      </div>
      {filteredScholars.length === 0 ? <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-slate-600 mb-2">
            لا توجد فتاوى متاحة بناءً على التصنيف المحدد
          </p>
          <button onClick={() => setRelevanceFilter(null)} className="text-sky-600 hover:text-sky-800 underline">
            عرض جميع الفتاوى المتاحة لمسارك
          </button>
        </div> : <div className="space-y-6">
          {filteredScholars.map((scholar, index) => {
        const color = getCategoryColor(scholar.category);
        const isSaved = savedOpinions.includes(index);
        const isExpanded = expandedOpinion === index;
        return <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${isExpanded ? 'ring-2 ' + getColorClass(color, 'border') : ''}`}>
                <div className={`border-r-4 ${getColorClass(color, 'border')}`}>
                  <div className="flex justify-between items-start p-5">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className={`px-2 py-0.5 text-xs font-medium rounded-full ${getColorClass(color, 'bg')} ${getColorClass(color, 'text')} ml-2`}>
                          {scholar.category}
                        </div>
                        <div className="flex items-center ml-2">
                          {getUserTypeIcon(scholar.relevance)}
                          <span className="text-xs font-medium mr-1 text-gray-600">
                            {getUserTypeLabel(scholar.relevance)}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg">{scholar.name}</h3>
                      </div>
                      <p className="text-sm text-slate-600">{scholar.topic}</p>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <button onClick={() => toggleSave(index)} className={`p-2 rounded-full transition-colors duration-200 ${isSaved ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:text-amber-500 hover:bg-amber-50'}`} aria-label={isSaved ? 'إزالة من المحفوظات' : 'حفظ الفتوى'}>
                        <BookmarkIcon className="h-5 w-5" />
                      </button>
                      <ShareButton {...handleShare(scholar)} color={color as any} />
                      <button onClick={() => toggleExpand(index)} className={`p-2 rounded-full transition-colors duration-200 ${isExpanded ? getColorClass(color, 'bg') + ' ' + getColorClass(color, 'text') : 'text-slate-400 hover:bg-slate-100'}`}>
                        <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'transform rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
                  <div className={`p-5 border-t border-slate-100 ${getColorClass(color, 'bg')}`}>
                    <blockquote className="text-right mb-4 text-slate-700 leading-relaxed">
                      "{scholar.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-200">
                      <div className="flex items-center">
                        <BookOpenIcon className="h-4 w-4 text-slate-500 ml-2" />
                        <p className="text-sm text-slate-500">
                          {scholar.source}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>;
      })}
        </div>}
      {savedOpinions.length > 0 && <div className="mt-8 p-5 bg-amber-50 rounded-lg border border-amber-200">
          <h3 className="font-bold text-amber-800 mb-3">
            الفتاوى المحفوظة ({savedOpinions.length})
          </h3>
          <div className="space-y-2">
            {savedOpinions.map(index => <div key={index} className="flex justify-between bg-white p-3 rounded-md border border-amber-100">
                <span className="font-medium">
                  {scholars[index].name} - {scholars[index].topic}
                </span>
                <button onClick={() => toggleExpand(index)} className="text-sky-600 hover:underline text-sm">
                  عرض
                </button>
              </div>)}
          </div>
        </div>}
    </div>;
}