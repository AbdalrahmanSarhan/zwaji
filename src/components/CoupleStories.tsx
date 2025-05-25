import React, { useState } from 'react';
import { HeartIcon, UsersIcon, ChevronRightIcon, ChevronLeftIcon, UserIcon } from 'lucide-react';
import { ShareButton } from './ShareButton';
interface CoupleStoriesProps {
  userType: 'husband' | 'wife' | 'both';
}
export function CoupleStories({
  userType
}: CoupleStoriesProps) {
  const [activeStory, setActiveStory] = useState(0);
  const [relevanceFilter, setRelevanceFilter] = useState<string | null>(null);
  const allStories = [{
    title: 'من سيرة النبي ﷺ مع خديجة رضي الله عنها',
    content: 'كانت خديجة رضي الله عنها نِعم الزوجة للنبي ﷺ، آزرته في دعوته وواسته عندما عاد خائفاً من غار حراء، وقالت له: "كلا والله ما يخزيك الله أبداً، إنك لتصل الرحم، وتحمل الكَلّ، وتكسب المعدوم، وتقري الضيف، وتعين على نوائب الحق". وكان النبي ﷺ يذكرها بالخير بعد وفاتها ويكرم صديقاتها، حتى قالت عائشة: "ما غرت على امرأة ما غرت على خديجة".',
    lesson: 'الوفاء بين الزوجين والدعم المتبادل أساس نجاح العلاقة الزوجية.',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&auto=format',
    relevance: ['husband', 'wife', 'both']
  }, {
    title: 'من حياة علي وفاطمة رضي الله عنهما',
    content: 'كان علي وفاطمة رضي الله عنهما مثالاً للتعاون في الحياة الزوجية، فقد قسم النبي ﷺ العمل بينهما، فجعل عمل البيت على فاطمة، وجعل ما كان خارج البيت على علي. وكانا يعيشان في بيت متواضع، لكنه مليء بالسعادة والرضا. وعندما جاءت فاطمة تشكو إلى أبيها كثرة العمل، علمها وعلي التسبيح الذي هو خير من الخادم.',
    lesson: 'التعاون والتكامل بين الزوجين وقناعتهما بما قسم الله لهما سبب للسعادة الزوجية.',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&auto=format',
    relevance: ['husband', 'both']
  }, {
    title: 'من حياة عمر بن الخطاب رضي الله عنه',
    content: 'روي أن رجلاً جاء إلى عمر بن الخطاب رضي الله عنه يشكو زوجته، فوقف الرجل على باب عمر ينتظر، فسمع امرأة عمر تستطيل عليه بلسانها وهو ساكت، فانصرف الرجل وقال: إذا كان هذا حال أمير المؤمنين مع زوجته، فكيف حالي؟ فخرج عمر فرآه منصرفاً فناداه: ما حاجتك؟ قال: جئت أشكو زوجتي واستطالتها علي، فسمعت زوجتك كذلك، فانصرفت. فقال عمر: يا أخي، إني أحتملها لح��وقها علي: هي طباخة لطعامي، خبازة لخبزي، غسالة لثيابي، مرضعة لولدي، وليس ذلك بواجب عليها، ويسكن قلبي بها عن الحرام، فأنا أحتملها لذلك.',
    lesson: 'الصبر على الزوجة وتقدير ما تقوم به من أعمال، حتى وإن لم تكن واجبة عليها، يقوي الرابطة الزوجية.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format',
    relevance: ['husband', 'both']
  }, {
    title: 'قصة معاصرة: زوجان في الشدة والرخاء',
    content: 'تزوج أحمد وفاطمة وهما في بداية حياتهما العملية، وكانت ظروفهما المادية صعبة. عملا معاً وتعاونا على مواجهة الصعاب. كانت فاطمة تعمل وتساعد في نفقات البيت رغم أنها غير ملزمة بذلك، وكان أحمد يساعدها في أعمال المنزل رغم مشقة عمله. وعندما رزقهما الله بالأولاد، كانا يتشاركان في تربيتهم وتعليمهم. وبعد سنوات من الكفاح، وسّع الله عليهما في الرزق، فلم ينسيا أيام الشدة، واستمرا في التعاون والتفاهم، فكانت حياتهما مثالاً للسعادة الزوجية.',
    lesson: 'التعاون بين الزوجين في السراء والضراء، والتضحية من أجل الأسرة، يبني بيتاً سعيداً مستقراً.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format',
    relevance: ['husband', 'wife', 'both']
  }, {
    title: 'نموذج للزوجة الصالحة',
    content: 'كانت أم سليم رضي الله عنها مثالاً للزوجة الحكيمة، فقد أسلمت قبل زوجها وحرصت على دعوته للإسلام بالحكمة. وعندما استشهد زوجها، صبرت واحتسبت، ثم تزوجها أبو طلحة وكان لا يزال على الشرك، فاشترطت عليه الإسلام مهراً لها، فأسلم وتزوجها. وعندما توفي ابنها، لم تخبر زوجها مباشرة بل هيأته لتلقي الخبر بصبر وحكمة، فدعا لها النبي ﷺ ورزقهما الله بعبد الله بن أبي طلحة الذي أنجب عشرة من حفاظ القرآن.',
    lesson: 'حكمة الزوجة وصبرها وحسن تعاملها مع زوجها من أسباب استقرار الأسرة ونيل رضا الله تعالى.',
    image: 'https://images.unsplash.com/photo-1623091410901-00e2d268901f?w=800&auto=format',
    relevance: ['wife', 'both']
  }, {
    title: 'نموذج للزوج الصالح',
    content: 'كان أبو الدرداء رضي الله عنه مثالاً للزوج الصالح، فقد كان يراعي مشاعر زوجته أم الدرداء ويشاركها في أعمال البيت. وكان يقول: "إني لأتجمل لامرأتي كما تتجمل لي، وما أحب أن أستطيل عليها بحقي الذي لي عليها، لأن الله تعالى يقول: وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ". وكان يحافظ على صلة الرحم من جهتها، ويكرم أهلها، ويشاورها في أموره، ويعلمها أمور دينها.',
    lesson: 'مراعاة الزوج لمشاعر زوجته وإكرامها وإشراكها في أموره من أسباب المودة والرحمة بين الزوجين.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format',
    relevance: ['husband', 'both']
  }];
  const filteredStories = allStories.filter(story => {
    const matchesUserType = story.relevance.includes(userType) || story.relevance.includes('both');
    const matchesRelevanceFilter = !relevanceFilter || story.relevance.includes(relevanceFilter);
    return matchesUserType && matchesRelevanceFilter;
  });
  const stories = filteredStories.length > 0 ? filteredStories : allStories.filter(story => story.relevance.includes(userType) || story.relevance.includes('both'));
  const handleShare = (story: any) => {
    const shareTitle = `قصة زوجية: ${story.title}`;
    const shareText = `${story.content}\n\nالعبرة: ${story.lesson}`;
    return {
      title: shareTitle,
      text: shareText
    };
  };
  const nextStory = () => {
    setActiveStory(prev => prev === stories.length - 1 ? 0 : prev + 1);
  };
  const prevStory = () => {
    setActiveStory(prev => prev === 0 ? stories.length - 1 : prev - 1);
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
  const currentStory = stories[activeStory] || allStories[0];
  return <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-sky-900">
        يوميات زوجين ناجحين
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          <button onClick={() => toggleRelevanceFilter('husband')} className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center ${relevanceFilter === 'husband' ? 'bg-sky-100 text-sky-700' : 'bg-gray-100 text-gray-700 hover:bg-sky-50'}`}>
            <UserIcon className="h-4 w-4 ml-1.5 text-sky-500" />
            <span>قصص للزوج</span>
          </button>
          <button onClick={() => toggleRelevanceFilter('wife')} className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center ${relevanceFilter === 'wife' ? 'bg-rose-100 text-rose-700' : 'bg-gray-100 text-gray-700 hover:bg-rose-50'}`}>
            <UserIcon className="h-4 w-4 ml-1.5 text-rose-500" />
            <span>قصص للزوجة</span>
          </button>
          <button onClick={() => toggleRelevanceFilter('both')} className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center ${relevanceFilter === 'both' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-700 hover:bg-amber-50'}`}>
            <UsersIcon className="h-4 w-4 ml-1.5 text-amber-500" />
            <span>قصص للجميع</span>
          </button>
        </div>
      </div>
      {stories.length === 0 ? <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-slate-600 mb-2">
            لا توجد قصص متاحة بناءً على التصنيف المحدد
          </p>
          <button onClick={() => setRelevanceFilter(null)} className="text-sky-600 hover:text-sky-800 underline">
            عرض جميع القصص المتاحة لمسارك
          </button>
        </div> : <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="relative h-56 md:h-72 overflow-hidden">
            <img src={currentStory.image} alt={currentStory.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 w-full">
                <h3 className="font-bold text-xl text-white mb-2">
                  {currentStory.title}
                </h3>
                <div className="flex items-center">
                  {getUserTypeIcon(currentStory.relevance)}
                  <span className="text-white/90 text-sm mr-2">
                    {getUserTypeLabel(currentStory.relevance)}
                  </span>
                  <span className="mx-2 text-white/50">|</span>
                  <p className="text-white/90 text-sm">
                    قصة {activeStory + 1} من {stories.length}
                  </p>
                </div>
              </div>
            </div>
            <button onClick={prevStory} className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center hover:bg-white/50 transition-colors duration-200" aria-label="القصة السابقة">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </button>
            <button onClick={nextStory} className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center hover:bg-white/50 transition-colors duration-200" aria-label="القصة التالية">
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <p className="text-right mb-6 text-slate-700 leading-relaxed">
                {currentStory.content}
              </p>
              <ShareButton {...handleShare(currentStory)} variant="button" color="amber" className="ml-4 flex-shrink-0" />
            </div>
            <div className="bg-sky-50 p-4 rounded-md border border-sky-100">
              <p className="text-right text-sky-800 font-medium flex items-start">
                <HeartIcon className="h-5 w-5 text-sky-600 ml-2 flex-shrink-0 mt-1" />
                <span>
                  <span className="font-bold">العبرة: </span>
                  {currentStory.lesson}
                </span>
              </p>
            </div>
          </div>
        </div>}
      <div className="flex justify-center">
        <div className="flex space-x-2">
          {stories.map((_, index) => <button key={index} onClick={() => setActiveStory(index)} className={`w-3 h-3 rounded-full transition-colors duration-200 ${activeStory === index ? 'bg-sky-600' : 'bg-sky-200 hover:bg-sky-300'}`} aria-label={`الانتقال إلى القصة ${index + 1}`}></button>)}
        </div>
      </div>
    </div>;
}