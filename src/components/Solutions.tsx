import React, { useState } from 'react';
import { SunIcon, ChevronRightIcon, CheckIcon, UserIcon, UsersIcon } from 'lucide-react';
import { ShareButton } from './ShareButton';
interface SolutionsProps {
  userType: 'husband' | 'wife' | 'both';
}
export function Solutions({
  userType
}: SolutionsProps) {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);
  const [appliedSolutions, setAppliedSolutions] = useState<number[]>([]);
  const [relevanceFilter, setRelevanceFilter] = useState<string | null>(null);
  const allProblems = [{
    title: 'الخلافات المالية',
    solutions: ['الاتفاق المسبق على طريقة إدارة الأموال في البيت.', 'وضع ميزانية شهرية بالتشاور بين الزوجين.', 'احترام مبدأ أن مال الزوجة ملك لها ومال الزوج عليه واجب النفقة.', 'تجنب المقارنات المادية مع الآخرين والقناعة بما قسم الله.', 'التشاور قبل المصروفات الكبيرة.'],
    islamic_guidance: 'قال تعالى: "وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً فَإِنْ طِبْنَ لَكُمْ عَنْ شَيْءٍ مِنْهُ نَفْسًا فَكُلُوهُ هَنِيئًا مَرِيئًا" [النساء: 4]. ومن هدي النبي ﷺ أنه كان يشاور زوجاته في الأمور.',
    color: 'emerald',
    relevance: ['husband', 'wife', 'both']
  }, {
    title: 'تدخل الأهل في الحياة الزوجية',
    solutions: ['وضع حدود واضحة للعلاقة مع الأهل من بداية الزواج.', 'احترام أهل الطرف الآخر والتعامل معهم بالحسنى.', 'عدم نقل الخلافات الزوجية للأهل إلا عند الضرورة القصوى.', 'مناقشة مشاكل تدخل الأهل بهدوء بين الزوجين.', 'تذكير الأهل بلطف بحدود العلاقة إذا تجاوزوها.'],
    islamic_guidance: 'قال النبي ﷺ: "رحم الله رجلاً قام من الليل فصلى وأيقظ امرأته فصلت، فإن أبت نضح في وجهها الماء، ورحم الله امرأة قامت من الليل فصلت وأيقظت زوجها فصلى، فإن أبى نضحت في وجهه الماء" [رواه أبو داود]. وهذا يدل على أهمية استقلالية الحياة الزوجية.',
    color: 'sky',
    relevance: ['husband', 'wife', 'both']
  }, {
    title: 'الإهمال العاطفي',
    solutions: ['تخصيص وقت يومي للتواصل والحوار بين الزوجين.', 'التعبير المستمر عن الحب والتقدير بالكلمات والأفعال.', 'الاهتمام بالمناسبات الخاصة بينهما.', 'المبادرة بالمصالحة عند حدوث خلاف.', 'تجديد الحياة الزوجية بأنشطة مشتركة.'],
    islamic_guidance: 'قال النبي ﷺ لجابر عندما تزوج: "هلا بكراً تلاعبها وتلاعبك" [متفق عليه]. وكان النبي ﷺ يداعب زوجاته ويمازحهن ويسابق عائشة رضي الله عنها.',
    color: 'rose',
    relevance: ['husband', 'wife', 'both']
  }, {
    title: 'اختلاف أساليب تربية الأبناء',
    solutions: ['الاتفاق على مبادئ أساسية في التربية قبل الإنجاب إن أمكن.', 'تجنب ا��تناقض أمام الأبناء وعدم إظهار الخلاف أمامهم.', 'الاطلاع على أساليب التربية الإسلامية الصحيحة.', 'التشاور المستمر حول قضايا الأبناء.', 'احترام دور كل من الأب والأم في التربية.'],
    islamic_guidance: 'قال النبي ﷺ: "كلكم راعٍ وكلكم مسؤول عن رعيته، الرجل راعٍ في أهله ومسؤول عن رعيته، والمرأة راعية في بيت زوجها ومسؤولة عن رعيتها" [متفق عليه].',
    color: 'amber',
    relevance: ['husband', 'wife', 'both']
  }, {
    title: 'الغضب وسوء التواصل',
    solutions: ['التحكم في الغضب والابتعاد عن الجدال وقت الانفعال.', 'استخدام أسلوب "أنا أشعر" بدلاً من توجيه اللوم.', 'الإنصات الجيد للطرف الآخر وعدم مقاطعته.', 'تجنب الألفاظ الجارحة والتجريح.', 'اختيار الوقت المناسب للنقاش في القضايا الخلافية.'],
    islamic_guidance: 'قال النبي ﷺ: "لا تغضب" [رواه البخاري]. وقال أيضاً: "ليس الشديد بالصرعة، إنما الشديد الذي يملك نفسه عند الغضب" [متفق عليه].',
    color: 'purple',
    relevance: ['husband', 'wife', 'both']
  }, {
    title: 'تعامل الزوج مع غيرة الزوجة',
    solutions: ['تفهم طبيعة الغيرة لدى المرأة والتعامل معها بحكمة.', 'تجنب ما يثير الغيرة دون داع كالحديث عن نساء أخريات.', 'طمأنة الزوجة وإشعارها بمكانتها المميزة.', 'الصبر على الغيرة المعتدلة وعدم تضخيمها.', 'الحوار الهادئ حول المخاوف والأسباب الحقيقية للغيرة.'],
    islamic_guidance: 'كان النبي ﷺ يتعامل مع غيرة زوجاته بحكمة ورحمة، فقد غارت عائشة رضي الله عنها مرارًا، فكان يتلطف معها ويبتسم ولا يغضب. وقال: "إن الغيرة من الإيمان" [رواه أحمد].',
    color: 'sky',
    relevance: ['husband', 'both']
  }, {
    title: 'تعامل الزوجة مع انشغال الزوج',
    solutions: ['تقدير مسؤوليات الزوج وضغوط العمل التي يواجهها.', 'اختيار الأوقات المناسبة للحديث عن الاحتياجات العاطفية.', 'المشاركة في الاهتمامات المشتركة لزيادة وقت التواصل.', 'إشعار الزوج بالتقدير لجهوده في توفير احتياجات الأسرة.', 'تهيئة جو منزلي هادئ يساعده على الاسترخاء بعد يوم عمل شاق.'],
    islamic_guidance: 'كانت خديجة رضي الله عنها نموذجًا في دعم النبي ﷺ ومساندته في دعوته وانشغاله بها، وكانت تخفف عنه أعباء الحياة وتقف إلى جانبه في الشدائد.',
    color: 'rose',
    relevance: ['wife', 'both']
  }];
  const filteredProblems = allProblems?.filter(problem => {
    const matchesUserType = problem.relevance?.includes(userType) || problem.relevance?.includes('both');
    const matchesRelevanceFilter = !relevanceFilter || problem.relevance?.includes(relevanceFilter);
    return matchesUserType && matchesRelevanceFilter;
  }) || [];
  const problems = filteredProblems.length > 0 ? filteredProblems : allProblems.filter(problem => problem.relevance.includes(userType) || problem.relevance.includes('both'));
  const handleShare = (problem: any) => {
    const shareTitle = `حلول لمشكلة: ${problem.title}`;
    const shareText = `المشكلة: ${problem.title}\n\nالحلول المقترحة:\n${problem.solutions.map((s: string, i: number) => `${i + 1}. ${s}`).join('\n')}\n\nالتوجيه الإسلامي: ${problem.islamic_guidance}`;
    return {
      title: shareTitle,
      text: shareText
    };
  };
  const toggleSolutionApplied = (solutionIndex: number) => {
    if (appliedSolutions.includes(solutionIndex)) {
      setAppliedSolutions(appliedSolutions.filter(index => index !== solutionIndex));
    } else {
      setAppliedSolutions([...appliedSolutions, solutionIndex]);
    }
  };
  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const prefix = type === 'bg' ? 'bg' : type === 'text' ? 'text' : 'border';
    const shade = type === 'bg' ? '100' : type === 'text' ? '700' : '300';
    return `${prefix}-${color}-${shade}`;
  };
  const toggleRelevanceFilter = (filter: string) => {
    if (relevanceFilter === filter) {
      setRelevanceFilter(null);
    } else {
      setRelevanceFilter(filter);
    }
  };
  const getUserTypeIcon = (relevance: string[]) => {
    if (relevance.includes('husband') && relevance.includes('wife') && relevance.includes('both')) {
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
    if (relevance.includes('husband') && relevance.includes('wife') && relevance.includes('both')) {
      return 'للجميع';
    } else if (relevance.includes('husband') && !relevance.includes('wife')) {
      return 'للزوج';
    } else if (relevance.includes('wife') && !relevance.includes('husband')) {
      return 'للزوجة';
    } else {
      return 'للجميع';
    }
  };
  return <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-sky-900">
        الحلول الهادئة
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="font-bold text-lg mb-4 text-sky-900">تصنيف المشكلات</h3>
        <div className="flex flex-wrap gap-2">
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
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-5 bg-gradient-to-r from-amber-50 to-amber-100 border-b border-amber-200">
          <p className="text-right text-amber-800">
            اختر إحدى المشكلات الشائعة بين الأزواج لتجد حلولاً إسلامية هادئة
            لها:
          </p>
        </div>
        {problems.length === 0 ? <div className="p-8 text-center">
            <p className="text-slate-600 mb-2">
              لا توجد مشكلات متاحة بناءً على التصنيف المحدد
            </p>
            <button onClick={() => setRelevanceFilter(null)} className="text-sky-600 hover:text-sky-800 underline">
              عرض جميع المشكلات المتاحة لمسارك
            </button>
          </div> : <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problems.map((problem, index) => <button key={index} onClick={() => setSelectedProblem(index)} className={`p-5 rounded-lg text-right flex justify-between items-center transition-all duration-300 transform ${selectedProblem === index ? `${getColorClass(problem.color, 'bg')} ${getColorClass(problem.color, 'border')} border shadow-md -translate-y-1` : 'bg-gray-50 border border-gray-200 hover:border-sky-300 hover:-translate-y-1 hover:shadow-md'}`}>
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${getColorClass(problem.color, 'bg')}`}></div>
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{problem.title}</span>
                      <div className="flex items-center mt-1">
                        {getUserTypeIcon(problem.relevance)}
                        <span className="text-xs text-gray-500 mr-1">
                          {getUserTypeLabel(problem.relevance)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRightIcon className={`h-5 w-5 ${selectedProblem === index ? getColorClass(problem.color, 'text') : 'text-sky-600'}`} />
                </button>)}
            </div>
          </div>}
      </div>
      {selectedProblem !== null && selectedProblem < problems.length && <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn">
          <div className={`p-4 ${getColorClass(problems[selectedProblem].color, 'bg')} border-b ${getColorClass(problems[selectedProblem].color, 'border')} flex justify-between items-center`}>
            <div className="flex items-center">
              <SunIcon className={`h-6 w-6 ${getColorClass(problems[selectedProblem].color, 'text')} ml-3`} />
              <div className="flex flex-col">
                <h3 className={`font-bold text-lg ${getColorClass(problems[selectedProblem].color, 'text')}`}>
                  {problems[selectedProblem].title}
                </h3>
                <div className="flex items-center mt-1">
                  {getUserTypeIcon(problems[selectedProblem].relevance)}
                  <span className="text-xs text-gray-600 mr-1">
                    {getUserTypeLabel(problems[selectedProblem].relevance)}
                  </span>
                </div>
              </div>
            </div>
            <ShareButton {...handleShare(problems[selectedProblem])} color={problems[selectedProblem].color as any} />
          </div>
          <div className="p-6">
            <h4 className={`font-bold mb-4 ${getColorClass(problems[selectedProblem].color, 'text')} text-right`}>
              الحلول المقترحة:
            </h4>
            <div className="space-y-3 mb-6">
              {problems[selectedProblem].solutions.map((solution, index) => {
            const solutionKey = selectedProblem * 100 + index;
            const isApplied = appliedSolutions.includes(solutionKey);
            return <button key={index} onClick={() => toggleSolutionApplied(solutionKey)} className={`w-full p-3 rounded-md text-right flex justify-between items-center transition-all duration-200 ${isApplied ? `${getColorClass(problems[selectedProblem].color, 'bg')} ${getColorClass(problems[selectedProblem].color, 'border')} border` : 'bg-gray-50 border border-gray-200 hover:border-sky-200'}`}>
                    <span className="text-slate-700">{solution}</span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isApplied ? `${getColorClass(problems[selectedProblem].color, 'bg')} border ${getColorClass(problems[selectedProblem].color, 'border')}` : 'bg-white border border-gray-300'}`}>
                      {isApplied && <CheckIcon className={`h-4 w-4 ${getColorClass(problems[selectedProblem].color, 'text')}`} />}
                    </div>
                  </button>;
          })}
            </div>
            <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
              <h4 className="font-bold mb-2 text-amber-800 text-right">
                التوجيه الإسلامي:
              </h4>
              <p className="text-slate-700 text-right">
                {problems[selectedProblem].islamic_guidance}
              </p>
            </div>
          </div>
        </div>}
    </div>;
}