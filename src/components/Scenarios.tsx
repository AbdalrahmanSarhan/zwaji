import React, { useState } from 'react';
import { ChevronDownIcon, HelpCircleIcon } from 'lucide-react';
import { ShareButton } from './ShareButton';
interface ScenariosProps {
  userType: 'husband' | 'wife' | 'both';
}
export function Scenarios({
  userType
}: ScenariosProps) {
  const [openScenario, setOpenScenario] = useState<number | null>(null);
  const handleShare = (scenario: any) => {
    const shareTitle = 'سيناريو من حقوق الزوجين في الإسلام';
    const shareText = `سؤال: ${scenario.question}\n\nالإجابة: ${scenario.answer}\n\nالمصدر: ${scenario.source}`;
    return {
      title: shareTitle,
      text: shareText
    };
  };
  const scenarios = [{
    question: 'إذا اختلف الزوجان حول مكان السكن، فمن له حق اتخاذ القرار النهائي؟',
    answer: 'الأصل أن الزوج هو من يختار مكان السكن، لكن يجب أن يكون مناسباً وآمناً للزوجة وألا يضر بها. وينبغي أن يتشاور الزوجان ويتفقا على ما يناسبهما معاً. وإذا كان هناك شرط في عقد الزواج يتعلق بمكان السكن، فيجب الوفاء به.',
    source: 'استناداً إلى قوله تعالى: "أَسْكِنُوهُنَّ مِنْ حَيْثُ سَكَنْتُمْ مِنْ وُجْدِكُمْ" [الطلاق: 6]',
    relevance: userType === 'both' ? 'both' : userType
  }, {
    question: 'هل يحق للزوجة الخروج من المنزل دون إذن زوجها؟',
    answer: 'الأصل أن الزوجة تستأذن زوجها عند الخروج من البيت، وهذا من حسن العشرة. لكن إذا أذن لها زوجها إذناً عاماً بالخروج لحاجاتها المعتادة، أو كان عملها يتطلب الخروج وقد وافق عليه، فلا حرج في ذلك. ولا يجوز للزوج منعها من زيارة والديها أو صلة أرحامها بالمعروف.',
    source: 'استناداً إلى مبدأ المعاشرة بالمعروف في قوله تعالى: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ" [النساء: 19]',
    relevance: userType === 'both' ? 'both' : userType === 'wife' ? 'wife' : 'both'
  }, {
    question: 'هل يجب على الزوجة طاعة زوجها في كل شيء؟',
    answer: 'طاعة الزوجة لزوجها واجبة في غير معصية الله، فلا طاعة لمخلوق في معصية الخالق. وإذا أمرها بمعصية فلا تطيعه، وإذا أمرها بما فيه ضرر عليها أو على أولادها فلا تطيعه. والطاعة تكون في المعروف وبما لا يتعارض مع أحكام الشريعة الإسلامية.',
    source: 'لقول النبي صلى الله عليه وسلم: "لا طاعة في معصية الله، إنما الطاعة في المعروف" [متفق عليه]',
    relevance: userType === 'both' ? 'both' : userType
  }, {
    question: 'هل يحق للزوج منع زوجته من العمل؟',
    answer: 'الأصل أن عمل المرأة مباح إذا كان في بيئة مناسبة وبشروط شرعية. إذا كان في عقد الزواج شرط يتيح لها العمل، فيجب الوفاء به. وإن لم يكن، فللزوج حق منعها إذا كان العمل يتعارض مع مصلحة الأسرة أو واجباتها الأساسية. والأفضل أن يتشاور الزوجان ويتفقا على ما يحقق مصلحتهما معاً.',
    source: 'استناداً إلى مبدأ المشاورة والتراضي بين الزوجين',
    relevance: userType === 'both' ? 'both' : userType
  }, {
    question: 'ما حكم امتناع أحد الزوجين عن العلاقة الزوجية؟',
    answer: 'العلاقة الزوجية حق مشترك بين الزوجين، ولا يحق لأحدهما الامتناع ع��ها دون عذر شرعي كالمرض أو التعب الشديد. فالامتناع المستمر بغير عذر يعتبر ظلماً للطرف الآخر. وينبغي أن تكون العلاقة بينهم قائمة على المودة والرحمة والتفاهم، وليس على الإكراه.',
    source: 'لقول النبي صلى الله عليه وسلم: "إذا دعا الرجل امرأته إلى فراشه فأبت فبات غضبان عليها، لعنتها الملائكة حتى تصبح" [متفق عليه]',
    relevance: 'both'
  }];
  const filteredScenarios = scenarios.filter(scenario => scenario.relevance === 'both' || scenario.relevance === userType);
  const toggleScenario = (index: number) => {
    if (openScenario === index) {
      setOpenScenario(null);
    } else {
      setOpenScenario(index);
    }
  };
  return <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center text-sky-900">
        سيناريوهات واقعية
      </h2>
      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 mb-6 flex items-start">
        <HelpCircleIcon className="h-6 w-6 text-amber-600 ml-3 flex-shrink-0 mt-1" />
        <p className="text-right text-amber-800">
          هذه السيناريوهات مبنية على المنظور الإسلامي للعلاقات الزوجية. تم
          تخصيصها لمسار{' '}
          <span className="font-bold">
            {userType === 'husband' ? 'الزوج' : userType === 'wife' ? 'الزوجة' : 'الزوجين'}
          </span>{' '}
          الذي اخترته.
        </p>
      </div>
      <div className="space-y-4">
        {filteredScenarios.map((scenario, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-lg">
            <button className="w-full text-right p-5 flex justify-between items-center focus:outline-none" onClick={() => toggleScenario(index)}>
              <span className="font-medium text-lg">{scenario.question}</span>
              <div className="flex items-center">
                {openScenario === index && <ShareButton {...handleShare(scenario)} className="ml-2" color="amber" />}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${openScenario === index ? 'bg-sky-100' : 'bg-gray-100'}`}>
                  <ChevronDownIcon className={`h-5 w-5 text-sky-600 transition-transform duration-300 ${openScenario === index ? 'transform rotate-180' : ''}`} />
                </div>
              </div>
            </button>
            <div className={`transition-all duration-500 overflow-hidden ${openScenario === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-5 bg-gradient-to-b from-amber-50 to-white border-t border-amber-100">
                <p className="mb-4 text-right leading-relaxed">
                  {scenario.answer}
                </p>
                <div className="bg-sky-50 p-3 rounded-md border border-sky-100">
                  <p className="text-sm text-sky-800 text-right">
                    <span className="font-bold">المصدر: </span>
                    {scenario.source}
                  </p>
                </div>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}