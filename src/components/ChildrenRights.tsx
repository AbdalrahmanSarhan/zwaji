import React, { useState, Children } from 'react';
import { BookOpenIcon, HeartIcon, SchoolIcon, HomeIcon, ShieldIcon, BookIcon, ChevronDownIcon, SmileIcon, HeartHandshakeIcon, BabyIcon, StarIcon, UserIcon, LightbulbIcon, HandIcon, PencilIcon, ArrowRightIcon } from 'lucide-react';
export function ChildrenRights() {
  const [expandedSection, setExpandedSection] = useState<string | null>('intro');
  const [activeTab, setActiveTab] = useState<string>('all');
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setTimeout(() => setExpandedSection(sectionId), 500);
    }
  };
  return <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="inline-block p-3 bg-amber-100 rounded-full mb-6 animate-bounce-slow">
            <ShieldIcon className="h-10 w-10 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900 animate-fade-in">
            حقوق الأبناء في الإسلام
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto leading-relaxed">
            "مَنْ لم يَرْحَمْ صَغِيرَنَا وَيَعْرِفْ شَرَفَ كَبِيرِنَا فَلَيْسَ
            مِنَّا"
          </p>
        </div>
        {/* Quick Navigation */}
        <div className="sticky top-4 z-10 mb-8 overflow-hidden">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3 border border-amber-100">
            <div className="flex justify-center mb-3">
              <h2 className="text-lg font-semibold text-amber-800">
                تصفح سريع
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              <button onClick={() => scrollToSection('intro')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${expandedSection === 'intro' ? 'bg-amber-100 text-amber-800' : 'hover:bg-amber-50 text-slate-600'}`}>
                المقدمة
              </button>
              <button onClick={() => scrollToSection('play')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${expandedSection === 'play' ? 'bg-purple-100 text-purple-800' : 'hover:bg-purple-50 text-slate-600'}`}>
                اللعب والترفيه
              </button>
              <button onClick={() => scrollToSection('education')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${expandedSection === 'education' ? 'bg-sky-100 text-sky-800' : 'hover:bg-sky-50 text-slate-600'}`}>
                التعليم والتربية
              </button>
              <button onClick={() => scrollToSection('respect')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${expandedSection === 'respect' ? 'bg-indigo-100 text-indigo-800' : 'hover:bg-indigo-50 text-slate-600'}`}>
                الاحترام والهوية
              </button>
              <button onClick={() => scrollToSection('financial')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${expandedSection === 'financial' ? 'bg-emerald-100 text-emerald-800' : 'hover:bg-emerald-50 text-slate-600'}`}>
                الحقوق المالية
              </button>
              <button onClick={() => scrollToSection('emotional')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${expandedSection === 'emotional' ? 'bg-rose-100 text-rose-800' : 'hover:bg-rose-50 text-slate-600'}`}>
                الحقوق العاطفية
              </button>
            </div>
          </div>
        </div>
        {/* Introduction Card */}
        <div id="intro" className="bg-white rounded-2xl shadow-lg p-8 mb-16 border border-amber-100 transform transition-all duration-500 hover:shadow-xl">
          <div className="flex items-center mb-8">
            <div className="bg-amber-100 p-4 rounded-xl">
              <BookOpenIcon className="h-10 w-10 text-amber-600" />
            </div>
            <div className="mr-6">
              <h2 className="text-2xl font-bold text-amber-800 mb-2">
                أهمية رعاية حقوق الأبناء
              </h2>
              <p className="text-amber-600">الأبناء أمانة في أعناق الوالدين</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8 text-lg">
            الأبناء أمانة في أعناق الوالدين، وقد أولى الإسلام اهتماماً بالغاً
            بحقوق الأبناء وحسن تربيتهم. قال النبي صلى الله عليه وسلم: "كلكم راعٍ
            وكلكم مسؤول عن رعيته"، ومن أعظم الرعاية رعاية الأبناء والقيام
            بحقوقهم المادية والمعنوية.
          </p>
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200/50 transform transition-all duration-300 hover:scale-102">
            <p className="text-amber-800 leading-relaxed">
              معرفة حقوق الأبناء وتطبيقها بشكل صحيح يساعد في بناء جيل صالح
              متوازن نفسياً وعاطفياً واجتماعياً.
            </p>
          </div>
        </div>
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Right to Life */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-4 rounded-xl">
                  <HeartIcon className="h-8 w-8 text-amber-600" />
                </div>
                <div className="mr-4">
                  <h3 className="font-bold text-xl text-amber-800">
                    حق الحياة
                  </h3>
                  <p className="text-amber-600/80 mt-1">الحق الأول للأبناء</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                حرم الإسلام وأد البنات وقتل الأولاد، وجعل لكل إنسان حق الحياة
                والكرامة. قال تعالى: "وَلَا تَقْتُلُوا أَوْلَادَكُمْ خَشْيَةَ
                إِمْلَاقٍ نَحْنُ نَرْزُقُهُمْ وَإِيَّاكُمْ"
              </p>
            </div>
            <div className="bg-amber-50 p-4 border-t border-amber-100">
              <div className="flex justify-end">
                <button className="text-amber-600 hover:text-amber-800 text-sm font-medium flex items-center transition-colors duration-200">
                  <span>اقرأ المزيد</span>
                  <ArrowRightIcon className="h-4 w-4 mr-1" />
                </button>
              </div>
            </div>
          </div>
          {/* Right to Lineage */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-4 rounded-xl">
                  <BabyIcon className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="mr-4">
                  <h3 className="font-bold text-xl text-emerald-800">
                    حق النسب
                  </h3>
                  <p className="text-emerald-600/80 mt-1">
                    الانتساب إلى الوالدين
                  </p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                من حق الطفل أن ينسب إلى والديه الحقيقيين، قال تعالى: "ادْعُوهُمْ
                لِآبَائِهِمْ هُوَ أَقْسَطُ عِنْدَ اللَّهِ" وحرم الإسلام التبني
                بمعنى نسبة الطفل لغير أبيه.
              </p>
            </div>
            <div className="bg-emerald-50 p-4 border-t border-emerald-100">
              <div className="flex justify-end">
                <button className="text-emerald-600 hover:text-emerald-800 text-sm font-medium flex items-center transition-colors duration-200">
                  <span>اقرأ المزيد</span>
                  <ArrowRightIcon className="h-4 w-4 mr-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* NEW SECTION: Right to Play and Recreation */}
        <div id="play" className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-purple-100 transform transition-all duration-500 hover:shadow-xl">
          <div className="flex items-center mb-8">
            <div className="bg-purple-100 p-4 rounded-xl animate-pulse-slow">
              <SmileIcon className="h-10 w-10 text-purple-600" />
            </div>
            <div className="mr-6">
              <h2 className="text-2xl font-bold text-purple-800 mb-2">
                حق اللعب والترفيه
              </h2>
              <p className="text-purple-600">تنمية المهارات من خلال اللعب</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100 transition-all duration-300 hover:bg-purple-50">
              <h4 className="font-bold text-lg text-purple-700 mb-4 flex items-center">
                <SmileIcon className="h-5 w-5 ml-2 text-purple-500" />
                أهمية اللعب في الإسلام
              </h4>
              <p className="text-slate-600 mb-4 leading-relaxed">
                أقر الإسلام حق الطفل في اللعب والترفيه، وكان النبي صلى الله عليه
                وسلم يمازح الأطفال ويلاعبهم. فاللعب ضروري لتنمية مهارات الطفل
                الجسدية والعقلية والاجتماعية.
              </p>
              <p className="text-slate-600 leading-relaxed">
                كان النبي صلى الله عليه وسلم يحمل الحسن والحسين على ظهره ويقول:
                "نعم الجمل جملكما ونعم العدلان أنتما"، وكان يسابق عائشة رضي الله
                عنها.
              </p>
            </div>
            <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100 transition-all duration-300 hover:bg-purple-50">
              <h4 className="font-bold text-lg text-purple-700 mb-4 flex items-center">
                <ShieldIcon className="h-5 w-5 ml-2 text-purple-500" />
                الضوابط الشرعية للعب
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-purple-700 transition-colors duration-200">
                    أن يكون اللعب خالياً من المحرمات كالميسر والقمار
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-purple-700 transition-colors duration-200">
                    ألا يؤدي اللعب إلى إيذاء الطفل أو غيره من الأطفال
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-purple-700 transition-colors duration-200">
                    ألا يشغل اللعب الطفل عن واجباته الدينية والدراسية
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-purple-700 transition-colors duration-200">
                    أن يكون اللعب هادفاً ومفيداً قدر الإمكان
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-200/50 transform transition-all duration-300 hover:scale-102">
            <div className="flex items-start">
              <StarIcon className="h-6 w-6 text-purple-500 ml-4 flex-shrink-0 mt-1" />
              <p className="text-purple-700 leading-relaxed">
                اللعب المتوازن يساعد في بناء شخصية سوية للطفل، ويعزز قدراته
                الإبداعية والاجتماعية. وقد أكدت الدراسات الحديثة ما أقره الإسلام
                منذ قرون من أهمية اللعب في نمو الأطفال وتطورهم.
              </p>
            </div>
          </div>
        </div>
        {/* Education and Care Section */}
        <div id="education" className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-sky-100 transform transition-all duration-500 hover:shadow-xl">
          <div className="flex items-center mb-8">
            <div className="bg-sky-100 p-4 rounded-xl">
              <SchoolIcon className="h-10 w-10 text-sky-600" />
            </div>
            <div className="mr-6">
              <h2 className="text-2xl font-bold text-sky-800 mb-2">
                حق التعليم والتربية
              </h2>
              <p className="text-sky-600">بناء شخصية متوازنة للطفل</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-sky-50/50 p-6 rounded-xl border border-sky-100 transition-all duration-300 hover:bg-sky-50">
              <h4 className="font-bold text-lg text-sky-700 mb-4 flex items-center">
                <BookIcon className="h-5 w-5 ml-2 text-sky-500" />
                التعليم الديني
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-sky-700 transition-colors duration-200">
                    تعليم الطفل أصول الدين والعقيدة الصحيحة
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-sky-700 transition-colors duration-200">
                    تحفيظه القرآن الكريم والأحاديث النبوية
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-sky-700 transition-colors duration-200">
                    تعليمه الصلاة والعبادات في سن مبكرة
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-sky-50/50 p-6 rounded-xl border border-sky-100 transition-all duration-300 hover:bg-sky-50">
              <h4 className="font-bold text-lg text-sky-700 mb-4 flex items-center">
                <SchoolIcon className="h-5 w-5 ml-2 text-sky-500" />
                التعليمدنيوي
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-sky-700 transition-colors duration-200">
                    توفير التعليم المناسب لقدرات الطفل
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-sky-700 transition-colors duration-200">
                    تنمية مواهبه وقدراته الفكرية
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-sky-700 transition-colors duration-200">
                    تشجيعه على طلب العلم والمعرفة
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-sky-50 p-6 rounded-xl border border-sky-200/50 transform transition-all duration-300 hover:scale-102">
            <div className="flex items-start">
              <StarIcon className="h-6 w-6 text-sky-500 ml-4 flex-shrink-0 mt-1" />
              <p className="text-sky-700 leading-relaxed">
                قال النبي صلى الله عليه وسلم: "ما نحل والد ولدا من نحل أفضل من
                أدب حسن"، وكان السلف الصالح يهتمون بتعليم أولادهم وتأديبهم قبل
                العلوم الدنيوية.
              </p>
            </div>
          </div>
        </div>
        {/* NEW SECTION: Right to Respect and Individual Identity */}
        <div id="respect" className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-indigo-100 transform transition-all duration-500 hover:shadow-xl">
          <div className="flex items-center mb-8">
            <div className="bg-indigo-100 p-4 rounded-xl">
              <HandIcon className="h-10 w-10 text-indigo-600" />
            </div>
            <div className="mr-6">
              <h2 className="text-2xl font-bold text-indigo-800 mb-2">
                حق الاحترام والهوية الفردية
              </h2>
              <p className="text-indigo-600">تقدير شخصية الطفل وكرامته</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 transition-all duration-300 hover:bg-indigo-50">
              <h4 className="font-bold text-lg text-indigo-700 mb-4 flex items-center">
                <UserIcon className="h-5 w-5 ml-2 text-indigo-500" />
                احترام شخصية الطفل
              </h4>
              <p className="text-slate-600 mb-4 leading-relaxed">
                من حق الطفل أن يُعامل باحترام وتقدير، وأن يُنظر إليه كإنسان له
                كرامته وشخصيته المستقلة. وكان النبي صلى الله عليه وسلم يستأذن
                الأطفال ويستشيرهم في بعض الأمور، ويخاطبهم بألطف الخطاب.
              </p>
              <p className="text-slate-600 leading-relaxed">
                قال صلى الله عليه وسلم: "أكرموا أولادكم وأحسنوا أدبهم"، وكان
                يسلم على الصبيان إذا مر بهم، مم�� يدل على تقديره لهم واحترامه
                لشخصياتهم.
              </p>
            </div>
            <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 transition-all duration-300 hover:bg-indigo-50">
              <h4 className="font-bold text-lg text-indigo-700 mb-4 flex items-center">
                <HandIcon className="h-5 w-5 ml-2 text-indigo-500" />
                مظاهر احترام شخصية الطفل
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-indigo-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-indigo-700 transition-colors duration-200">
                    الاستماع إليه وإعطاؤه فرصة للتعبير عن رأيه
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-indigo-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-indigo-700 transition-colors duration-200">
                    عدم السخرية منه أو التقليل من شأنه أمام الآخرين
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-indigo-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-indigo-700 transition-colors duration-200">
                    مناداته بأحب الأسماء إليه وتجنب الألقاب السيئة
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-indigo-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-indigo-700 transition-colors duration-200">
                    احترام خصوصيته وممتلكاته الشخصية
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200/50 transform transition-all duration-300 hover:scale-102">
            <div className="flex items-start">
              <PencilIcon className="h-6 w-6 text-indigo-500 ml-4 flex-shrink-0 mt-1" />
              <p className="text-indigo-700 leading-relaxed">
                الطفل الذي ينشأ في بيئة تحترم شخصيته وتقدر آراءه يكون أكثر ثقة
                بنفسه، وأقدر على تحمل المسؤولية، وأكثر احتراماً للآخرين. وهذا من
                أهم أسس بناء الشخصية السوية المتوازنة.
              </p>
            </div>
          </div>
        </div>
        {/* Financial Rights Section */}
        <div id="financial" className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-emerald-100 transform transition-all duration-500 hover:shadow-xl">
          <div className="flex items-center mb-8">
            <div className="bg-emerald-100 p-4 rounded-xl">
              <HomeIcon className="h-10 w-10 text-emerald-600" />
            </div>
            <div className="mr-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-2">
                الحقوق المالية للأبناء
              </h2>
              <p className="text-emerald-600">النفقة والإنفاق والميراث</p>
            </div>
          </div>
          <div className="space-y-6 mb-8">
            <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100 transition-all duration-300 hover:bg-emerald-50">
              <h4 className="font-bold text-lg text-emerald-700 mb-3 flex items-center">
                <HomeIcon className="h-5 w-5 ml-2 text-emerald-500" />
                النفقة الواجبة
              </h4>
              <p className="text-slate-600 leading-relaxed">
                يجب على الأب الإنفاق على أبنائه وتوفير المأكل والمشرب والملبس
                والمسكن المناسب لهم حتى يبلغوا سن الرشد، وعلى البنات حتى يتزوجن.
                قال تعالى: "وَعَلَى الْمَوْلُودِ لَهُ رِزْقُهُنَّ
                وَكِسْوَتُهُنَّ بِالْمَعْرُوفِ"
              </p>
            </div>
            <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100 transition-all duration-300 hover:bg-emerald-50">
              <h4 className="font-bold text-lg text-emerald-700 mb-3 flex items-center">
                <BookIcon className="h-5 w-5 ml-2 text-emerald-500" />
                حق الميراث
              </h4>
              <p className="text-slate-600 leading-relaxed">
                للأبناء حق في ميراث والديهم بعد وفاتهم حسب الأنصبة الشرعية
                المحددة في القرآن الكريم، ولا يجوز حرمانهم من الميراث أو الإنقاص
                من أنصبتهم.
              </p>
            </div>
          </div>
          <div className="p-6 bg-amber-50 rounded-xl border border-amber-200/50 transform transition-all duration-300 hover:scale-102">
            <div className="flex items-start">
              <StarIcon className="h-6 w-6 text-amber-500 ml-4 flex-shrink-0 mt-1" />
              <p className="text-amber-700 leading-relaxed">
                من الأفضل أن يعدل الوالدان بين أبنائهم في العطايا والهبات في
                حياتهم، فقد قال النبي صلى الله عليه وسلم: "اتقوا الله واعدلوا
                بين أولادكم"
              </p>
            </div>
          </div>
        </div>
        {/* Emotional Rights Section */}
        <div id="emotional" className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-rose-100 transform transition-all duration-500 hover:shadow-xl">
          <div className="flex items-center mb-8">
            <div className="bg-rose-100 p-4 rounded-xl">
              <HeartHandshakeIcon className="h-10 w-10 text-rose-600" />
            </div>
            <div className="mr-6">
              <h2 className="text-2xl font-bold text-rose-800 mb-2">
                الحقوق العاطفية والنفسية
              </h2>
              <p className="text-rose-600">الحب والرحمة والعدل بين الأبناء</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-rose-50/50 p-6 rounded-xl border border-rose-100 transition-all duration-300 hover:bg-rose-50 transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <HeartIcon className="h-8 w-8 text-rose-500" />
              </div>
              <h4 className="font-bold text-lg text-rose-700 mb-3 text-center">
                الحب والحنان
              </h4>
              <p className="text-slate-600 text-center">
                من حق الطفل أن يشعر بحب والديه له، وأن يعبرا له عن هذا الحب
                بالقول والفعل
              </p>
            </div>
            <div className="bg-rose-50/50 p-6 rounded-xl border border-rose-100 transition-all duration-300 hover:bg-rose-50 transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <SmileIcon className="h-8 w-8 text-rose-500" />
              </div>
              <h4 className="font-bold text-lg text-rose-700 mb-3 text-center">
                الرحمة والرفق
              </h4>
              <p className="text-slate-600 text-center">
                الرحمة بالأبناء والرفق بهم من هدي النبي صلى الله عليه وسلم في
                التعامل مع الأطفال
              </p>
            </div>
            <div className="bg-rose-50/50 p-6 rounded-xl border border-rose-100 transition-all duration-300 hover:bg-rose-50 transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <UserIcon className="h-8 w-8 text-rose-500" />
              </div>
              <h4 className="font-bold text-lg text-rose-700 mb-3 text-center">
                العدل والمساواة
              </h4>
              <p className="text-slate-600 text-center">
                العدل بين الأبناء في المعاملة والعطايا واجب على الوالدين، وعدم
                التفريق بينهم
              </p>
            </div>
          </div>
          <div className="p-6 bg-rose-50 rounded-xl transition-all duration-300 hover:bg-rose-100">
            <p className="text-slate-600 leading-relaxed text-center">
              قال النبي صلى الله عليه وسلم: "ما نحل والد ولدا أفضل من أدب حسن"،
              وكان يقبل الحسن والحسين ويظهر حبه لهما، وعندما سأله الأقرع بن
              حابس: "أتقبلون صبيانكم؟ فوالله إن لي عشرة من الولد ما قبلت منهم
              أحدا"، فقال صلى الله عليه وسلم: "أو أملك لك أن نزع الله من قلبك
              الرحمة".
            </p>
          </div>
        </div>
        {/* NEW SECTION: Practical Applications */}
        <div id="practical" className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-teal-100 transform transition-all duration-500 hover:shadow-xl">
          <div className="flex items-center mb-8">
            <div className="bg-teal-100 p-4 rounded-xl">
              <LightbulbIcon className="h-10 w-10 text-teal-600" />
            </div>
            <div className="mr-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-2">
                تطبيقات عملية لحقوق الأبناء
              </h2>
              <p className="text-teal-600">
                كيف نطبق هذه الحقوق في حياتنا اليومية
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-teal-50/50 p-6 rounded-xl border border-teal-100 transition-all duration-300 hover:bg-teal-50">
              <h4 className="font-bold text-lg text-teal-700 mb-4 flex items-center">
                <LightbulbIcon className="h-5 w-5 ml-2 text-teal-500" />
                تطبيقات يومية للآباء
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-teal-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-teal-700 transition-colors duration-200">
                    تخصيص وقت يومي للجلوس مع الأبناء والاستماع إليهم
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-teal-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-teal-700 transition-colors duration-200">
                    التعبير المنتظم عن الحب والتقدير للطفل بالكلمات والأفعال
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-teal-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-teal-700 transition-colors duration-200">
                    إشراك الأبناء في القرارات العائلية المناسبة لسنهم
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-teal-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-teal-700 transition-colors duration-200">
                    تعليم الأبناء مهارات الحياة اليومية المناسبة لأعمارهم
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-teal-50/50 p-6 rounded-xl border border-teal-100 transition-all duration-300 hover:bg-teal-50">
              <h4 className="font-bold text-lg text-teal-700 mb-4 flex items-center">
                <HeartHandshakeIcon className="h-5 w-5 ml-2 text-teal-500" />
                أنشطة تعزز حقوق الأبناء
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-teal-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-teal-700 transition-colors duration-200">
                    تخصيص يوم أسبوعي للنشاط العائلي المشترك
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-teal-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-teal-700 transition-colors duration-200">
                    إنشاء مكتبة منزلية تناسب اهتمامات الأبناء وأعمارهم
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-teal-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-teal-700 transition-colors duration-200">
                    تشجيع الأبناء على ممارسة الهوايات المفيدة وتوفير أدواتها
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-teal-500 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-slate-600 group-hover:text-teal-700 transition-colors duration-200">
                    تنظيم زيارات للأقارب وتعزيز صلة الرحم
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-teal-50 p-6 rounded-xl border border-teal-200/50 transform transition-all duration-300 hover:scale-102">
            <div className="flex items-start">
              <StarIcon className="h-6 w-6 text-teal-500 ml-4 flex-shrink-0 mt-1" />
              <p className="text-teal-700 leading-relaxed">
                التطبيق العملي لحقوق الأبناء في الحياة اليومية يحتاج إلى وعي
                ومتابعة مستمرة من الوالدين. ومن المهم أن يكون الوالدان قدوة
                لأبنائهم في التعامل الحسن واحترام حقوق الآخرين.
              </p>
            </div>
          </div>
        </div>
        {/* Conclusion Section */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-2xl shadow-xl p-10 transform transition-all duration-500 hover:shadow-2xl hover:from-amber-700 hover:to-amber-800">
          <h3 className="text-2xl font-bold mb-6 text-center">ختاماً</h3>
          <div className="max-w-2xl mx-auto">
            <p className="mb-8 text-center leading-relaxed text-lg">
              رعاية حقوق الأبناء من أعظم الأعمال التي يتقرب بها العبد إلى الله
              تعالى. وهي استثمار للدنيا والآخرة، فالابن الصالح من أعظم ما يبقى
              للإنسان بعد موته.
            </p>
            <div className="w-20 h-0.5 bg-white/30 mx-auto mb-8" />
            <p className="text-center text-white/90 italic text-lg">
              قال النبي صلى الله عليه وسلم: "إذا مات ابن آدم انقطع عمله إلا من
              ثلاث: صدقة جارية، أو علم ينتفع به، أو ولد صالح يدعو له"
            </p>
          </div>
        </div>
      </div>
    </div>;
}
// Add these animations to your global CSS
// @keyframes bounce-slow {
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(-10px); }
// }
// @keyframes pulse-slow {
//   0%, 100% { opacity: 1; }
//   50% { opacity: 0.8; }
// }
// @keyframes fade-in {
//   0% { opacity: 0; }
//   100% { opacity: 1; }
// }
// .animate-bounce-slow {
//   animation: bounce-slow 3s ease-in-out infinite;
// }
// .animate-pulse-slow {
//   animation: pulse-slow 3s ease-in-out infinite;
// }
// .animate-fade-in {
//   animation: fade-in 1.5s ease-out;
// }
// .hover\:scale-102:hover {
//   transform: scale(1.02);
// }