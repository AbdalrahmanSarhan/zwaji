import React, { useState } from 'react';
import { ScaleIcon, CheckIcon, XIcon, UserIcon, UsersIcon, BookOpenIcon, ChevronDownIcon } from 'lucide-react';
export function RightsComparison() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedEvidence, setExpandedEvidence] = useState<string | null>(null);
  const categories = [{
    id: 'financial',
    title: 'الحقوق المالية',
    color: 'emerald',
    rights: [{
      title: 'النفقة',
      husband: 'واجبة عليه حسب قدرته',
      wife: 'ليست واجبة عليها',
      note: 'يجب على الزوج الإنفاق على زوجته وأولاده بالمعروف',
      evidence: {
        quran: 'قال تعالى: "لِيُنفِقْ ذُو سَعَةٍ مِّن سَعَتِهِ وَمَن قُدِرَ عَلَيْهِ رِزْقُهُ فَلْيُنفِقْ مِمَّا آتَاهُ ال��َّهُ" [الطلاق: 7]',
        hadith: 'قال النبي ﷺ: "ولهن عليكم رزقهن وكسوتهن بالمعروف" [رواه مسلم]'
      }
    }, {
      title: 'المهر',
      husband: 'واجب عليه دفعه',
      wife: 'من حقها استلامه كاملاً',
      note: 'المهر حق خالص للزوجة',
      evidence: {
        quran: 'قال تعالى: "وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً" [النساء: 4]',
        hadith: 'قال النبي ﷺ: "أعطها ولو خاتماً من حديد" [متفق عليه]'
      }
    }, {
      title: 'السكن',
      husband: 'واجب عليه توفيره',
      wife: 'ليس واجباً عليها',
      note: 'يجب أن يكون السكن مناسباً وآمناً',
      evidence: {
        quran: 'قال تعالى: "أَسْكِنُوهُنَّ مِنْ حَيْثُ سَكَنتُم مِّن وُجْدِكُمْ" [الطلاق: 6]',
        hadith: 'قال النبي ﷺ: "اتقوا الله في النساء فإنكم أخذتموهن بأمان الله واستحللتم فروجهن بكلمة الله" [رواه مسلم]'
      }
    }]
  }, {
    id: 'social',
    title: 'الحقوق الاجتماعية',
    color: 'sky',
    rights: [{
      title: 'زيارة الأهل',
      husband: 'لا يجوز منعها بدون سبب شرعي',
      wife: 'تستأذن زوجها للخروج',
      note: 'صلة الرحم واجبة مع مراعاة حقوق الزوجية',
      evidence: {
        quran: 'قال تعالى: "وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ" [النساء: 1]',
        hadith: 'قال النبي ﷺ: "لا يحل لامرأة تؤمن بالله واليوم الآخر أن تسافر مسيرة يوم إلا مع ذي محرم" [متفق عليه]'
      }
    }, {
      title: 'العمل',
      husband: 'له حق الموافقة أو الرفض',
      wife: 'لها العمل بشروط شرعية',
      note: 'يجب أن يكون العمل مناسباً وغير مخل بالواجبات الزوجية',
      evidence: {
        quran: 'قال تعالى: "وَقَرْنَ فِي بُيُوتِكُنَّ" [الأحزاب: 33]',
        hadith: 'عن عائشة رضي الله عنها أن النبي ﷺ كان يأذن للظعن أن يخرجن لحوائجهن [رواه البخاري]'
      }
    }]
  }, {
    id: 'personal',
    title: 'الحقوق الشخصية',
    color: 'amber',
    rights: [{
      title: 'المعاشرة بالمعروف',
      husband: 'واجبة عليه',
      wife: 'واجبة عليها',
      note: 'المعاملة الحسنة حق متبادل بين الزوجين',
      evidence: {
        quran: 'قال تعالى: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ" [النساء: 19]',
        hadith: 'قال النبي ﷺ: "خيركم خيركم لأهله وأنا خيركم لأهلي" [رواه الترمذي]'
      }
    }, {
      title: 'حفظ الأسرار',
      husband: 'واجب عليه',
      wife: 'واجب عليها',
      note: 'يحرم إفشاء أسرار الحياة الزوجية',
      evidence: {
        quran: 'قال تعالى: "هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَهُنَّ" [البقرة: 187]',
        hadith: 'قال النبي ﷺ: "إن من أشر الناس عند الله منزلة يوم القيامة الرجل يفضي إلى امرأته وتفضي إليه ثم ينشر سرها" [رواه مسلم]'
      }
    }]
  }];
  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const prefix = type === 'bg' ? 'bg' : type === 'text' ? 'text' : 'border';
    const shade = type === 'bg' ? '50' : type === 'text' ? '600' : '200';
    return `${prefix}-${color}-${shade}`;
  };
  const toggleEvidence = (rightTitle: string) => {
    setExpandedEvidence(expandedEvidence === rightTitle ? null : rightTitle);
  };
  return <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-8">
          <ScaleIcon className="h-8 w-8 text-sky-600 ml-3" />
          <h2 className="text-2xl font-bold text-sky-900">
            مقارنة حقوق الزوجين
          </h2>
        </div>
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeCategory === category.id ? getColorClass(category.color, 'bg') + ' ' + getColorClass(category.color, 'text') : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>
                {category.title}
              </button>)}
          </div>
        </div>
        <div className="space-y-6">
          {categories.filter(category => !activeCategory || activeCategory === category.id).map(category => <div key={category.id} className="animate-fadeIn">
                <h3 className={`text-lg font-bold mb-4 ${getColorClass(category.color, 'text')}`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.rights.map((right, index) => <div key={index} className={`p-4 rounded-lg border ${getColorClass(category.color, 'border')} ${getColorClass(category.color, 'bg')}`}>
                      <div className="flex flex-col md:flex-row md:items-start md:space-x-4 rtl:space-x-reverse">
                        <div className="mb-4 md:mb-0 md:w-1/4">
                          <h4 className="font-bold text-slate-900">
                            {right.title}
                          </h4>
                        </div>
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-3 bg-white rounded-md border border-slate-200">
                            <div className="flex items-center mb-2">
                              <UserIcon className="h-5 w-5 text-sky-500 ml-2" />
                              <span className="font-medium text-slate-700">
                                الزوج:
                              </span>
                            </div>
                            <p className="text-slate-600">{right.husband}</p>
                          </div>
                          <div className="p-3 bg-white rounded-md border border-slate-200">
                            <div className="flex items-center mb-2">
                              <UserIcon className="h-5 w-5 text-rose-500 ml-2" />
                              <span className="font-medium text-slate-700">
                                الزوجة:
                              </span>
                            </div>
                            <p className="text-slate-600">{right.wife}</p>
                          </div>
                        </div>
                      </div>
                      {right.note && <div className="mt-4 pt-3 border-t border-slate-200">
                          <p className="text-sm text-slate-600">
                            <span className="font-bold ml-1">ملاحظة:</span>
                            {right.note}
                          </p>
                        </div>}
                      <div className="mt-4 pt-3 border-t border-slate-200">
                        <button onClick={() => toggleEvidence(right.title)} className={`w-full flex items-center justify-between p-2 rounded-md transition-colors duration-200 ${expandedEvidence === right.title ? getColorClass(category.color, 'bg') : 'hover:bg-white/50'}`}>
                          <div className="flex items-center">
                            <BookOpenIcon className="h-5 w-5 ml-2 text-slate-600" />
                            <span className="font-medium text-slate-700">
                              الأدلة الشرعية
                            </span>
                          </div>
                          <ChevronDownIcon className={`h-5 w-5 text-slate-600 transition-transform duration-200 ${expandedEvidence === right.title ? 'transform rotate-180' : ''}`} />
                        </button>
                        {expandedEvidence === right.title && <div className="mt-3 space-y-3 animate-fadeIn">
                            <div className="p-3 bg-emerald-50 rounded-md border border-emerald-100">
                              <h5 className="font-bold text-emerald-800 mb-2">
                                من القرآن الكريم:
                              </h5>
                              <p className="text-slate-700">
                                {right.evidence.quran}
                              </p>
                            </div>
                            <div className="p-3 bg-sky-50 rounded-md border border-sky-100">
                              <h5 className="font-bold text-sky-800 mb-2">
                                من السنة النبوية:
                              </h5>
                              <p className="text-slate-700">
                                {right.evidence.hadith}
                              </p>
                            </div>
                          </div>}
                      </div>
                    </div>)}
                </div>
              </div>)}
        </div>
      </div>
    </div>;
}