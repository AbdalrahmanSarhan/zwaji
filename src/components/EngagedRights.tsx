import React, { useState } from 'react';
import { ShieldIcon, ChevronDownIcon, ArrowRightIcon } from 'lucide-react';
export function EngagedRights() {
  const [expandedSection, setExpandedSection] = useState<string | null>('intro');
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  const rights = [{
    id: 'intro',
    title: 'مقدمة عن حقوق الزوجين',
    content: <>
          <p className="mb-4">
            الزواج في الإسلام ميثاق غليظ، وقد نظم الإسلام العلاقة بين الزوجين
            بشكل دقيق، وحدد حقوق وواجبات كل منهما. وقد قال الله تعالى:
            "وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ" [البقرة: 228].
          </p>
          <p className="mb-4">
            من المهم للمقبلين على الزواج أن يتعرفوا على هذه الحقوق والواجبات قبل
            الزواج، ليكون كل منهما على بينة من أمره، وليستعد نفسياً وعملياً
            للقيام بمسؤولياته.
          </p>
          <div className="p-4 bg-purple-50 rounded-md border border-purple-100">
            <p className="text-purple-800">
              <span className="font-bold">ملاحظة هامة: </span>
              الحقوق والواجبات الزوجية ليست مجرد قواعد قانونية، بل هي إطار
              أخلاقي وروحي للعلاقة بين الزوجين، والأصل فيها المودة والرحمة
              والتعاون، وليس التنازع والمطالبة.
            </p>
          </div>
        </>,
    color: 'purple'
  }, {
    id: 'wife-rights',
    title: 'حقوق الزوجة على زوجها',
    content: <>
          <div className="space-y-4">
            <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
              <h4 className="font-bold text-rose-800 mb-2">
                1. الحقوق المالية:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-rose-500 mt-2"></span>
                  <div>
                    <span className="font-medium">المهر: </span>
                    <span className="text-slate-700">
                      هو حق خالص للزوجة، يجب على الزوج دفعه كاملاً، ولا يحل له
                      أخذ شيء منه إلا برضاها.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-rose-500 mt-2"></span>
                  <div>
                    <span className="font-medium">النفقة: </span>
                    <span className="text-slate-700">
                      تشمل الطعام والكسوة والسكن وكل ما تحتاجه الزوجة بالمعروف
                      حسب قدرة الزوج.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-rose-500 mt-2"></span>
                  <div>
                    <span className="font-medium">السكن المستقل: </span>
                    <span className="text-slate-700">
                      من حقها أن يوفر لها سكناً مستقلاً مناسباً لها ولأولادها.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
              <h4 className="font-bold text-sky-800 mb-2">
                2. الحقوق المعنوية:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2"></span>
                  <div>
                    <span className="font-medium">حسن المعاشرة: </span>
                    <span className="text-slate-700">
                      قال تعالى: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ" [النساء: 19]،
                      ويشمل ذلك الكلام الطيب والمعاملة اللطيفة.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2"></span>
                  <div>
                    <span className="font-medium">العدل: </span>
                    <span className="text-slate-700">
                      إذا كان متزوجاً بأكثر من واحدة، فيجب عليه العدل بينهن في
                      المبيت والنفقة والمعاملة.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2"></span>
                  <div>
                    <span className="font-medium">
                      الستر وعدم إفشاء الأسرار:{' '}
                    </span>
                    <span className="text-slate-700">
                      من حقها أن يستر عيوبها ولا يفشي أسرارها.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <h4 className="font-bold text-amber-800 mb-2">
                3. الحقوق الاجتماعية:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-amber-500 mt-2"></span>
                  <div>
                    <span className="font-medium">
                      زيارة الأهل وصلة الرحم:{' '}
                    </span>
                    <span className="text-slate-700">
                      من حقها زيارة والديها وأقاربها بالمعروف.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-amber-500 mt-2"></span>
                  <div>
                    <span className="font-medium">التعليم: </span>
                    <span className="text-slate-700">
                      من حقها التعلم وتثقيف نفسها بما ينفعها في دينها ودنياها.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-amber-500 mt-2"></span>
                  <div>
                    <span className="font-medium">العمل: </span>
                    <span className="text-slate-700">
                      يمكن للزوجة العمل بشرط موافقة الزوج وأن يكون العمل مناسباً
                      ولا يتعارض مع واجباتها الأساسية.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </>,
    color: 'rose'
  }, {
    id: 'husband-rights',
    title: 'حقوق الزوج على زوجته',
    content: <>
          <div className="space-y-4">
            <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
              <h4 className="font-bold text-sky-800 mb-2">
                1. الطاعة في المعروف:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2"></span>
                  <div>
                    <span className="font-medium">طاعة الزوج: </span>
                    <span className="text-slate-700">
                      يجب على الزوجة طاعة زوجها في غير معصية الله، لقول النبي ﷺ:
                      "لا طاعة لمخلوق في معصية الخالق".
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2"></span>
                  <div>
                    <span className="font-medium">الاستئذان عند الخروج: </span>
                    <span className="text-slate-700">
                      من حق الزوج أن تستأذنه زوجته عند الخروج من البيت.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2"></span>
                  <div>
                    <span className="font-medium">القوامة: </span>
                    <span className="text-slate-700">
                      الزوج هو القوّام على أسرته، وله حق الرعاية والإشراف، قال
                      تعالى: "الرِّجَالُ قَوَّامُونَ عَلَى النِّسَاءِ" [النساء:
                      34].
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <h4 className="font-bold text-emerald-800 mb-2">
                2. رعاية البيت والأولاد:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-emerald-500 mt-2"></span>
                  <div>
                    <span className="font-medium">رعاية شؤون البيت: </span>
                    <span className="text-slate-700">
                      من واجبات الزوجة الاهتمام بشؤون البيت وتنظيمه، وإن كان هذا
                      من باب التعاون وليس الإلزام الفقهي.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-emerald-500 mt-2"></span>
                  <div>
                    <span className="font-medium">حفظ مال الزوج: </span>
                    <span className="text-slate-700">
                      من حق الزوج على زوجته أن تحفظ ماله ولا تتصرف فيه إلا
                      بإذنه.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-emerald-500 mt-2"></span>
                  <div>
                    <span className="font-medium">رعاية الأولاد: </span>
                    <span className="text-slate-700">
                      من واجبات الزوجة تربية الأولاد ورعايتهم، بالتعاون مع
                      الزوج.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <h4 className="font-bold text-amber-800 mb-2">
                3. المعاشرة بالمعروف:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-amber-500 mt-2"></span>
                  <div>
                    <span className="font-medium">حسن المعاملة: </span>
                    <span className="text-slate-700">
                      من حق الزوج على زوجته أن تعامله معاملة حسنة، وتحترمه
                      وتقدره.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-amber-500 mt-2"></span>
                  <div>
                    <span className="font-medium">عدم إفشاء الأسرار: </span>
                    <span className="text-slate-700">
                      من حقه أن تحفظ أسراره ولا تفشيها لأحد.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-amber-500 mt-2"></span>
                  <div>
                    <span className="font-medium">الاهتمام بمظهرها: </span>
                    <span className="text-slate-700">
                      من حقه أن تهتم الزوجة بمظهرها ونظافتها، وأن تتزين له في
                      البيت.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </>,
    color: 'sky'
  }, {
    id: 'mutual-rights',
    title: 'الحقوق المشتركة بين الزوجين',
    content: <>
          <div className="space-y-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <h4 className="font-bold text-amber-800 mb-2">1. حسن العشرة:</h4>
              <p className="mb-3 text-slate-700">
                قال تعالى: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ" [النساء: 19]، وقال
                أيضاً: "وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ"
                [البقرة: 228].
              </p>
              <p className="text-slate-700">
                من حق كل من الزوجين على الآخر المعاملة الحسنة، والكلام الطيب،
                والبشاشة، والتغافل عن الهفوات، والصبر على الأخطاء.
              </p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <h4 className="font-bold text-emerald-800 mb-2">
                2. حفظ الأسرار:
              </h4>
              <p className="text-slate-700">
                من حق كل من الزوجين على الآخر أن يحفظ أسراره، وألا يفشي ما يكون
                بينهما من أمور خاصة، لقول النبي ﷺ: "إن من أشر الناس عند الله
                منزلة يوم القيامة الرجل يفضي إلى امرأته وتفضي إليه ثم ينشر سرها"
                [رواه مسلم].
              </p>
            </div>
            <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
              <h4 className="font-bold text-sky-800 mb-2">
                3. التعاون على طاعة الله:
              </h4>
              <p className="text-slate-700">
                من حق كل من الزوجين على الآخر أن يعينه على طاعة الله، ويذكره
                بها، ويشجعه عليها، قال تعالى: "وَتَعَاوَنُوا عَلَى الْبِرِّ
                وَالتَّقْوَى" [المائدة: 2].
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h4 className="font-bold text-purple-800 mb-2">
                4. التشاور في أمور الأسرة:
              </h4>
              <p className="text-slate-700">
                من الحقوق المشتركة التشاور في أمور الأسرة، وخاصة ما يتعلق
                بالأولاد وتربيتهم، قال تعالى: "وَأْتَمِرُوا بَيْنَكُم
                بِمَعْرُوفٍ" [الطلاق: 6].
              </p>
            </div>
            <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
              <h4 className="font-bold text-rose-800 mb-2">5. الاستمتاع:</h4>
              <p className="text-slate-700">
                من حق كل من الزوجين على الآخر الاستمتاع به، وهو حق متبادل
                بينهما، قال تعالى: "هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ
                لَّهُنَّ" [البقرة: 187].
              </p>
            </div>
          </div>
        </>,
    color: 'amber'
  }, {
    id: 'conditions',
    title: 'الشروط في عقد الزواج',
    content: <>
          <p className="mb-4">
            يمكن لكل من الزوجين أن يشترط في عقد الزواج شروطاً لا تخالف مقتضى
            العقد ولا تحل حراماً أو تحرم حلالاً. وهذه الشروط ملزمة إذا وافق
            عليها الطرفان.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
              <h4 className="font-bold text-rose-800 mb-2">
                شروط يمكن للزوجة اشتراطها:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-rose-500 mt-2"></span>
                  <span className="text-slate-700">
                    ألا يمنعها من إكمال دراستها
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-rose-500 mt-2"></span>
                  <span className="text-slate-700">
                    ألا يمنعها من العمل في مجال تخصصها
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-rose-500 mt-2"></span>
                  <span className="text-slate-700">
                    أن يكون لها سكن مستقل عن أهل الزوج
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-rose-500 mt-2"></span>
                  <span className="text-slate-700">ألا يتزوج عليها</span>
                </li>
              </ul>
            </div>
            <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
              <h4 className="font-bold text-sky-800 mb-2">
                شروط يمكن للزوج اشتراطها:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2"></span>
                  <span className="text-slate-700">
                    أن تساهم في نفقات البيت إذا كانت تعمل
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2"></span>
                  <span className="text-slate-700">
                    أن تعيش معه في بلد معين
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2"></span>
                  <span className="text-slate-700">
                    تحديد عدد مرات زيارة أهلها
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2"></span>
                  <span className="text-slate-700">
                    ألا تعمل في مكان معين أو وظيفة معينة
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
            <p className="text-amber-800">
              <span className="font-bold">ملاحظة هامة: </span>
              يجب مناقشة الشروط بوضوح وصراحة قبل العقد، وتوثيقها في العقد لتجنب
              الخلافات المستقبلية. والأفضل استشارة عالم شرعي لمعرفة الشروط
              المقبولة شرعاً.
            </p>
          </div>
        </>,
    color: 'green'
  }, {
    id: 'advice',
    title: 'نصائح للمقبلين على الزواج',
    content: <>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <p className="text-purple-800 mb-3 font-bold">
                1. تعلموا حقوق وواجبات الزوجين قبل الزواج:
              </p>
              <p className="text-slate-700">
                المعرفة المسبقة بالحقوق والواجبات تساعد في تجنب الكثير من
                المشاكل والخلافات. اقرؤوا كتباً موثوقة عن الزواج في الإسلام،
                واحضروا دورات تأهيلية للزواج.
              </p>
            </div>
            <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
              <p className="text-sky-800 mb-3 font-bold">
                2. ناقشوا توقعاتكما من الحياة الزوجية:
              </p>
              <p className="text-slate-700">
                تحدثوا بصراحة عن توقعاتكما من الحياة الزوجية، وعن أدوار كل منكما
                في البيت، وعن الأمور المالية، وتربية الأطفال، وغيرها من القضايا
                المهمة.
              </p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <p className="text-emerald-800 mb-3 font-bold">
                3. استشيروا من تثقون بعلمهم وخبرتهم:
              </p>
              <p className="text-slate-700">
                استشيروا العلماء والمختصين في قضايا الزواج، واستفيدوا من خبرات
                من سبقوكم في الزواج، خاصة الوالدين والأقارب الناجحين في حياتهم
                الزوجية.
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <p className="text-amber-800 mb-3 font-bold">
                4. ضعوا الله نصب أعينكم:
              </p>
              <p className="text-slate-700">
                تذكروا دائماً أن الزواج عبادة وطاعة لله، وأن الهدف منه هو السكن
                والمودة والرحمة. فاحرصوا على تقوى الله في معاملة بعضكم البعض.
              </p>
            </div>
            <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
              <p className="text-rose-800 mb-3 font-bold">
                5. تعلموا فن التنازل والتسامح:
              </p>
              <p className="text-slate-700">
                الحياة الزوجية قائمة على التنازلات المتبادلة والتسامح. فتعلموا
                متى تتنازلون ومتى تتمسكون برأيكم، وكيف تتسامحون مع أخطاء بعضكم
                البعض.
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <a href="#" className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-lg">
              <span>احجز استشارة مع مختص</span>
              <ArrowRightIcon className="h-4 w-4 mr-2" />
            </a>
          </div>
        </>,
    color: 'purple'
  }];
  return <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-purple-900">
        حقوق الزوجين للمقبلين على الزواج
      </h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-6">
          <ShieldIcon className="h-8 w-8 text-purple-600 ml-4" />
          <h3 className="text-xl font-bold text-purple-800">
            تعرف على حقوقك وواجباتك قبل الزواج
          </h3>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          المعرفة بحقوق وواجبات الزوجين في الإسلام من أهم خطوات الاستعداد
          للزواج. تساعدك هذه المعرفة على بناء توقعات واقعية، وتجنب الخلافات
          المستقبلية، وبناء أسرة مستقرة وسعيدة.
        </p>
        <div className="space-y-4">
          {rights.map(section => <div key={section.id} className={`bg-white rounded-lg border transition-all duration-300 ${expandedSection === section.id ? `border-${section.color}-300 shadow-md` : 'border-slate-200'}`}>
              <button onClick={() => toggleSection(section.id)} className="w-full p-4 flex justify-between items-center focus:outline-none">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 bg-${section.color}-500`}></div>
                  <h3 className="font-bold text-lg">{section.title}</h3>
                </div>
                <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${expandedSection === section.id ? 'transform rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${expandedSection === section.id ? 'max-h-[2000px]' : 'max-h-0'}`}>
                <div className="p-4 border-t border-gray-100">
                  {section.content}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}