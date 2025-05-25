import React, { useEffect, useState, createElement } from 'react';
import { ChevronRightIcon, ChevronLeftIcon, BookmarkIcon, FilterIcon, SearchIcon, XIcon, ArrowLeftIcon, ArrowRightIcon, UserIcon, UsersIcon } from 'lucide-react';
import { ShareButton } from './ShareButton';
interface CardViewProps {
  userType: 'husband' | 'wife' | 'both';
}
export function CardView({
  userType
}: CardViewProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [savedCards, setSavedCards] = useState<number[]>([]);
  const [flipped, setFlipped] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);
  const [showSavedCardsPanel, setShowSavedCardsPanel] = useState(false);
  const allCards = [{
    type: 'verse',
    content: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
    source: 'سورة الروم، الآية 21',
    explanation: 'من مظاهر قدرة الله تعالى أنه خلق للرجال زوجات من جنسهم ليحصل السكن والطمأنينة بينهما، وجعل بينهما المودة والرحمة، وهذا يدل على أن أساس العلاقة الزوجية في الإسلام هو المودة والرحمة.',
    relevance: ['husband', 'wife', 'both'],
    tags: ['المودة', 'الرحمة', 'السكن']
  }, {
    type: 'verse',
    content: 'لِيُنْفِقْ ذُو سَعَةٍ مِنْ سَعَتِهِ وَمَنْ قُدِرَ عَلَيْهِ رِزْقُهُ فَلْيُنْفِقْ مِمَّا آتَاهُ اللَّهُ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا مَا آتَاهَا',
    source: 'سورة الطلاق، الآية 7',
    explanation: 'هذه الآية الكريمة تبين أن النفقة على الزوجة واجبة على الزوج حسب قدرته وطاقته المالية. فالزوج الغني ينفق بسعة وكرم، والزوج محدود الدخل ينفق بقدر استطاعته، ولا يكلف الله نفساً فوق طاقتها. وهذا من عدل الإسلام ورحمته.',
    relevance: ['husband', 'both'],
    tags: ['النفقة', 'الإنفاق', 'العدل']
  }, {
    type: 'hadith',
    content: 'خيركم خيركم لأهله، وأنا خيركم لأهلي',
    source: 'رواه الترمذي',
    explanation: 'يبين هذا الحديث أن من صفات المسلم الصالح أن يكون محسناً إلى أهله، وأن النبي صلى الله عليه وسلم كان قدوة في حسن معاملة أهله.',
    relevance: ['husband', 'both'],
    tags: ['حسن المعاملة', 'الإحسان', 'القدوة']
  }, {
    type: 'wisdom',
    content: 'المعاملة بالمعروف حق مشترك بين الزوجين',
    explanation: 'من حقوق كل من الزوجين على الآخر المعاشرة بالمعروف، وهذا يشمل حسن الكلام، وطيب المعاملة، والصبر على ما قد يصدر من الآخر.',
    relevance: ['husband', 'both'],
    tags: ['المعاشرة بالمعروف', 'الصبر', 'حسن الكلام']
  }, {
    type: 'hadith',
    content: 'استوصوا بالنساء خيراً',
    source: 'متفق عليه',
    explanation: 'وصية النب�� صلى الله عليه وسلم للرجال بالإحسان إلى النساء ومعاملتهن معاملة طيبة، وهذا يدل على مكانة المرأة في الإسلام.',
    relevance: ['husband', 'both'],
    tags: ['الإحسان للنساء', 'حقوق المرأة', 'الوصية']
  }, {
    type: 'verse',
    content: 'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',
    source: 'سورة البقرة، الآية 228',
    explanation: 'للزوجات من الحقوق على أزواجهن مثل ما للأزواج من الحقوق على زوجاتهن، وهذا يدل على عدالة الإسلام في تنظيم العلاقة بين الزوجين.',
    relevance: ['husband', 'wife', 'both'],
    tags: ['العدالة', 'الحقوق المتبادلة', 'المساواة']
  }, {
    type: 'verse',
    content: 'وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ',
    source: 'سورة النساء، الآية 19',
    explanation: 'أمر الله تعالى الأزواج بمعاشرة زوجاتهم بالمعروف، وهذا يشمل حسن الخلق، وطيب الكلام، وجميل الصحبة، وبذل الندى، وكف الأذى.',
    relevance: ['husband', 'both'],
    tags: ['المعاشرة بالمعروف', 'حسن الخلق', 'الرفق']
  }, {
    type: 'hadith',
    content: 'إنما النساء شقائق الرجال',
    source: 'رواه أبو داود والترمذي',
    explanation: 'النساء نظائر الرجال ومثيلاتهم في الخلقة والطبيعة والحقوق، وهذا يدل على أن المرأة مكرمة في الإسلام وليست مهانة.',
    relevance: ['wife', 'both'],
    tags: ['المساواة', 'التكريم', 'الحقوق']
  }, {
    type: 'wisdom',
    content: 'الزواج نصف الدين',
    explanation: 'الزواج يحفظ نصف دين الإنسان بحفظ فرجه وغض بصره وإعفاف نفسه، ويعينه على تقوى الله في النصف الآخر.',
    relevance: ['husband', 'wife', 'both'],
    tags: ['فضل الزواج', 'حفظ الدين', 'العفة']
  }, {
    type: 'ruling',
    content: 'هل يجب على الزوج إحضار خادمة للزوجة؟',
    explanation: 'اختلف الفقهاء في هذه المسألة: فذهب الحنفية والمالكية إلى أنه لا يجب على الزوج إحضار خادمة للزوجة، إلا إذا كانت من بنات الأشراف الذين لا يخدمون أنفسهم عادة، أو كانت مريضة، وكان الزوج موسراً. وذهب الشافعية والحنابلة إلى أنه يجب على الزوج الموسر توفير خادمة للزوجة إذا كانت ممن لا تخدم نفسها في العادة، أو كانت مريضة أو ضعيفة. والراجح أن هذا يختلف باختلاف عرف الناس وعاداتهم وحال الزوجة وقدرة الزوج المالية.',
    source: 'ملخص من كتب الفقه المعتمدة',
    relevance: ['husband', 'wife', 'both'],
    tags: ['الخدمة', 'النفقة', 'حقوق الزوجة']
  }];
  const handleShare = () => {
    const currentCard = cards[currentCardIndex];
    const cardType = getCardTypeLabel(currentCard.type);
    const shareTitle = `حقوق الزوجين في الإسلام - ${cardType}`;
    const shareText = `${currentCard.content}\n\n${currentCard.explanation || ''}\n\n${currentCard.source || ''}`;
    return {
      title: shareTitle,
      text: shareText
    };
  };
  const filteredCards = allCards.filter(card => {
    const matchesUserType = card.relevance.includes(userType);
    const matchesFilter = !activeFilter || card.type === activeFilter;
    const matchesSearch = !searchQuery || card.content.includes(searchQuery) || card.explanation && card.explanation.includes(searchQuery) || card.source && card.source.includes(searchQuery) || card.tags && card.tags.some(tag => tag.includes(searchQuery));
    return matchesUserType && matchesFilter && matchesSearch;
  });
  const cards = filteredCards.length > 0 ? filteredCards : allCards.filter(card => card.relevance.includes(userType));
  useEffect(() => {
    if (currentCardIndex >= cards.length) {
      setCurrentCardIndex(0);
    }
  }, [activeFilter, searchQuery, cards.length, currentCardIndex]);
  useEffect(() => {
    if (animateCard) {
      const timer = setTimeout(() => {
        setAnimateCard(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [animateCard]);
  const handleNext = () => {
    if (currentCardIndex < cards.length - 1) {
      setFlipped(false);
      setAnimateCard(true);
      setTimeout(() => {
        setCurrentCardIndex(currentCardIndex + 1);
      }, 200);
    }
  };
  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setFlipped(false);
      setAnimateCard(true);
      setTimeout(() => {
        setCurrentCardIndex(currentCardIndex - 1);
      }, 200);
    }
  };
  const handleSave = () => {
    if (!savedCards.includes(currentCardIndex)) {
      setSavedCards([...savedCards, currentCardIndex]);
      const notification = document.createElement('div');
      notification.className = 'fixed top-24 right-1/2 transform translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-lg z-50 animate-fadeIn';
      notification.textContent = 'تم حفظ البطاقة';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.classList.add('opacity-0');
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 2000);
    } else {
      setSavedCards(savedCards.filter(index => index !== currentCardIndex));
    }
  };
  const toggleFlip = () => {
    setFlipped(!flipped);
  };
  const handleFilterChange = (filter: string | null) => {
    setActiveFilter(filter === activeFilter ? null : filter);
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery('');
    }
  };
  const toggleSavedCardsPanel = () => {
    setShowSavedCardsPanel(!showSavedCardsPanel);
  };
  const resetFilters = () => {
    setActiveFilter(null);
    setSearchQuery('');
    setCurrentCardIndex(0);
  };
  const currentCard = cards[currentCardIndex];
  const isSaved = savedCards.includes(currentCardIndex);
  const getCardTypeColor = (type: string) => {
    switch (type) {
      case 'verse':
        return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'hadith':
        return 'text-sky-600 bg-sky-50 border-sky-200';
      case 'wisdom':
        return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'ruling':
        return 'text-purple-600 bg-purple-50 border-purple-200';
      default:
        return 'text-sky-600 bg-sky-50 border-sky-200';
    }
  };
  const getCardTypeLabel = (type: string) => {
    switch (type) {
      case 'verse':
        return 'آية قرآنية';
      case 'hadith':
        return 'حديث شريف';
      case 'wisdom':
        return 'حكمة';
      case 'ruling':
        return 'حكم فقهي';
      default:
        return '';
    }
  };
  const getCardTypeIcon = (type: string) => {
    switch (type) {
      case 'verse':
        return '📖';
      case 'hadith':
        return '🗣️';
      case 'wisdom':
        return '✨';
      case 'ruling':
        return '⚖️';
      default:
        return '📝';
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
  return <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-right text-sky-900 mb-4 md:mb-0">
          بطاقات معرفية
        </h2>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className="relative">
            <button onClick={() => handleFilterChange('verse')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === 'verse' ? 'bg-emerald-100 text-emerald-700' : 'bg-white text-slate-600 hover:bg-emerald-50'}`}>
              آيات
            </button>
          </div>
          <div className="relative">
            <button onClick={() => handleFilterChange('hadith')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === 'hadith' ? 'bg-sky-100 text-sky-700' : 'bg-white text-slate-600 hover:bg-sky-50'}`}>
              أحاديث
            </button>
          </div>
          <div className="relative">
            <button onClick={() => handleFilterChange('wisdom')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === 'wisdom' ? 'bg-amber-100 text-amber-700' : 'bg-white text-slate-600 hover:bg-amber-50'}`}>
              حكم
            </button>
          </div>
          <div className="relative">
            <button onClick={() => handleFilterChange('ruling')} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === 'ruling' ? 'bg-purple-100 text-purple-700' : 'bg-white text-slate-600 hover:bg-purple-50'}`}>
              أحكام
            </button>
          </div>
          <button onClick={toggleSearch} className={`p-2 rounded-full transition-colors duration-200 ${showSearch ? 'bg-sky-100 text-sky-700' : 'bg-white text-slate-600 hover:bg-sky-50'}`} aria-label="بحث">
            {showSearch ? <XIcon className="h-5 w-5" /> : <SearchIcon className="h-5 w-5" />}
          </button>
          <button onClick={toggleSavedCardsPanel} className={`p-2 rounded-full transition-colors duration-200 relative ${showSavedCardsPanel ? 'bg-amber-100 text-amber-700' : 'bg-white text-slate-600 hover:bg-amber-50'}`} aria-label="البطاقات المحفوظة">
            <BookmarkIcon className="h-5 w-5" />
            {savedCards.length > 0 && <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {savedCards.length}
              </span>}
          </button>
        </div>
      </div>
      {showSearch && <div className="mb-6 animate-fadeIn">
          <div className="relative">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="ابحث في البطاقات..." className="w-full px-4 py-3 pr-12 rounded-lg border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none transition-all duration-200" />
            <SearchIcon className="absolute top-3.5 right-4 h-5 w-5 text-slate-400" />
            {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute top-3.5 left-4 h-5 w-5 text-slate-400 hover:text-slate-600">
                <XIcon className="h-5 w-5" />
              </button>}
          </div>
          {searchQuery && filteredCards.length === 0 && <div className="mt-4 text-center">
              <p className="text-slate-500 mb-3">لا توجد نتائج مطابقة لبحثك</p>
              <button onClick={resetFilters} className="px-4 py-2 bg-sky-100 hover:bg-sky-200 text-sky-700 rounded-md transition-colors duration-200 inline-flex items-center">
                <ArrowRightIcon className="h-4 w-4 ml-1.5" />
                <span>عرض جميع البطاقات</span>
              </button>
            </div>}
        </div>}
      {activeFilter || searchQuery && <div className="mb-4 flex justify-center">
            <button onClick={resetFilters} className="px-3 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-full text-sm transition-colors duration-200 inline-flex items-center">
              <XIcon className="h-3.5 w-3.5 ml-1" />
              <span>إلغاء التصفية</span>
            </button>
          </div>}
      <div className={`relative h-[450px] w-full mb-8 transition-all duration-500 perspective-1000 ${animateCard ? 'opacity-90 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="absolute -top-2 left-0 right-0 h-1 bg-slate-100 rounded-full overflow-hidden z-10">
          <div className="h-full bg-sky-500 transition-all duration-300 ease-out" style={{
          width: `${(currentCardIndex + 1) / cards.length * 100}%`
        }}></div>
        </div>
        <div className={`absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform backface-hidden ${flipped ? 'rotate-y-180 opacity-0 pointer-events-none' : 'rotate-y-0 opacity-100'}`}>
          <div className="p-6 md:p-8 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <div className={`text-sm font-medium px-3 py-1.5 rounded-full inline-flex items-center ${getCardTypeColor(currentCard.type)}`}>
                  <span className="mr-1.5">
                    {getCardTypeIcon(currentCard.type)}
                  </span>
                  <span>{getCardTypeLabel(currentCard.type)}</span>
                </div>
                <div className="mr-2 text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700 flex items-center">
                  {getUserTypeIcon(currentCard.relevance)}
                  <span className="mr-1">
                    {getUserTypeLabel(currentCard.relevance)}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <button onClick={handleSave} className={`p-2 rounded-full transition-colors duration-200 ${isSaved ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:text-amber-500 hover:bg-amber-50'}`} aria-label={isSaved ? 'إزالة من المحفوظات' : 'حفظ البطاقة'}>
                  <BookmarkIcon className="h-5 w-5" />
                </button>
                <ShareButton {...handleShare()} color={currentCard.type === 'verse' ? 'emerald' : currentCard.type === 'hadith' ? 'sky' : currentCard.type === 'wisdom' ? 'amber' : currentCard.type === 'ruling' ? 'purple' : 'sky'} />
              </div>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center mb-6 relative">
              <div className="absolute top-0 right-0 left-0 h-10 bg-gradient-to-b from-white to-transparent"></div>
              <div className="absolute bottom-0 right-0 left-0 h-10 bg-gradient-to-t from-white to-transparent"></div>
              <div className="overflow-y-auto max-h-56 px-2 py-4 w-full">
                <p className="text-2xl md:text-3xl font-bold mb-4 text-center leading-relaxed">
                  {currentCard.content}
                </p>
                {currentCard.source && <p className="text-slate-600 text-sm text-center mt-2">
                    {currentCard.source}
                  </p>}
              </div>
              {currentCard.tags && <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {currentCard.tags.map((tag, index) => <span key={index} className="text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded-full border border-slate-200">
                      {tag}
                    </span>)}
                </div>}
            </div>
            <button onClick={toggleFlip} className="w-full py-3.5 text-center bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-md transition-colors duration-200 font-medium flex items-center justify-center">
              <span>اضغط للشرح</span>
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
            </button>
          </div>
        </div>
        <div className={`absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform backface-hidden ${flipped ? 'rotate-y-0 opacity-100' : 'rotate-y-180 opacity-0 pointer-events-none'}`}>
          <div className="p-6 md:p-8 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <div className={`text-sm font-medium px-3 py-1.5 rounded-full inline-flex items-center ${getCardTypeColor(currentCard.type)}`}>
                  <span className="mr-1.5">💡</span>
                  <span>الشرح</span>
                </div>
                <div className="mr-2 text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700 flex items-center">
                  {getUserTypeIcon(currentCard.relevance)}
                  <span className="mr-1">
                    {getUserTypeLabel(currentCard.relevance)}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <button onClick={handleSave} className={`p-2 rounded-full transition-colors duration-200 ${isSaved ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:text-amber-500 hover:bg-amber-50'}`} aria-label={isSaved ? 'إزالة من المحفوظات' : 'حفظ البطاقة'}>
                  <BookmarkIcon className="h-5 w-5" />
                </button>
                <ShareButton {...handleShare()} color={currentCard.type === 'verse' ? 'emerald' : currentCard.type === 'hadith' ? 'sky' : currentCard.type === 'wisdom' ? 'amber' : currentCard.type === 'ruling' ? 'purple' : 'sky'} />
              </div>
            </div>
            <div className="flex-grow overflow-y-auto mb-6 relative">
              <div className="absolute top-0 right-0 left-0 h-10 bg-gradient-to-b from-white to-transparent z-10"></div>
              <div className="absolute bottom-0 right-0 left-0 h-10 bg-gradient-to-t from-white to-transparent z-10"></div>
              <div className="p-6 bg-amber-50 rounded-lg mb-4 border border-amber-100 relative z-0">
                <p className="text-slate-700 text-right leading-relaxed text-lg">
                  {currentCard.explanation}
                </p>
              </div>
              {currentCard.source && <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-slate-600 text-sm text-right">
                    <span className="font-bold">المصدر: </span>
                    {currentCard.source}
                  </p>
                </div>}
            </div>
            <button onClick={toggleFlip} className="w-full py-3.5 text-center bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-md transition-colors duration-200 font-medium flex items-center justify-center">
              <span>العودة للبطاقة</span>
              <ArrowRightIcon className="h-4 w-4 mr-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button onClick={handlePrevious} disabled={currentCardIndex === 0} className={`flex items-center px-4 py-2.5 rounded-md transition-all duration-200 ${currentCardIndex === 0 ? 'text-slate-400 cursor-not-allowed opacity-50' : 'text-sky-600 hover:bg-sky-50 hover:shadow-sm'}`}>
          <ChevronLeftIcon className="h-5 w-5 ml-1" />
          <span>السابق</span>
        </button>
        <div className="flex items-center bg-white px-4 py-2 rounded-full text-sm shadow-sm">
          <span className="font-medium text-sky-600">
            {currentCardIndex + 1}
          </span>
          <span className="mx-1.5 text-slate-400">/</span>
          <span className="text-slate-500">{cards.length}</span>
        </div>
        <button onClick={handleNext} disabled={currentCardIndex === cards.length - 1} className={`flex items-center px-4 py-2.5 rounded-md transition-all duration-200 ${currentCardIndex === cards.length - 1 ? 'text-slate-400 cursor-not-allowed opacity-50' : 'text-sky-600 hover:bg-sky-50 hover:shadow-sm'}`}>
          <span>التالي</span>
          <ChevronRightIcon className="h-5 w-5 mr-1" />
        </button>
      </div>
      {showSavedCardsPanel && savedCards.length > 0 && <div className="mt-10 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-amber-800">
                البطاقات المحفوظة
              </h3>
              <button onClick={toggleSavedCardsPanel} className="text-slate-400 hover:text-slate-600">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {savedCards.map(index => {
            const card = allCards[index];
            return <button key={index} onClick={() => {
              setCurrentCardIndex(index);
              setFlipped(false);
              toggleSavedCardsPanel();
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="p-3 text-right rounded-lg bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-200 transition-colors duration-200 group">
                    <div className="flex items-start mb-2">
                      <div className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCardTypeColor(card.type)}`}>
                        {getCardTypeLabel(card.type)}
                      </div>
                    </div>
                    <p className="text-sm font-medium text-slate-700 line-clamp-2 group-hover:text-amber-800 transition-colors duration-200">
                      {card.content}
                    </p>
                  </button>;
          })}
            </div>
          </div>
        </div>}
      {showSavedCardsPanel && savedCards.length === 0 && <div className="mt-10 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100 text-center">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-amber-800">
                البطاقات المحفوظة
              </h3>
              <button onClick={toggleSavedCardsPanel} className="text-slate-400 hover:text-slate-600">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="py-8">
              <div className="w-16 h-16 mx-auto mb-4 text-slate-300">
                <BookmarkIcon className="w-full h-full" />
              </div>
              <p className="text-slate-500">لم تقم بحفظ أي بطاقات بعد</p>
              <p className="text-slate-400 text-sm mt-2">
                اضغط على أيقونة الحفظ لإضافة البطاقات إلى قائمة المحفوظات
              </p>
            </div>
          </div>
        </div>}
    </div>;
}