import React, { useEffect, useState, useRef, createElement } from 'react';
import { HeartIcon, BookOpenIcon, CalendarIcon, HandIcon, AlertTriangleIcon, CheckCircleIcon, XCircleIcon, GiftIcon, MessageCircleIcon, ShieldIcon, HeadphonesIcon, UserIcon, UsersIcon, ChevronUpIcon, ArrowRightIcon, ChevronDownIcon, BookIcon, LightbulbIcon, StarIcon, MoonIcon, SunIcon, PrinterIcon, ShareIcon, HomeIcon, SearchIcon, XIcon } from 'lucide-react';
export function EngagementPhase() {
  const [expandedSection, setExpandedSection] = useState<string | null>('definition');
  const [activeTab, setActiveTab] = useState<string>('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [highlightedSections, setHighlightedSections] = useState<string[]>([]);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [isNavigationSticky, setIsNavigationSticky] = useState(false);
  const sectionRefs = useRef<{
    [key: string]: React.RefObject<HTMLDivElement>;
  }>({
    definition: React.createRef(),
    communication: React.createRef(),
    rules: React.createRef(),
    allowed: React.createRef(),
    challenges: React.createRef(),
    customs: React.createRef(),
    tips: React.createRef()
  });
  const navRef = useRef<HTMLDivElement>(null);
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  const scrollToSection = (section: string) => {
    if (sectionRefs.current[section] && sectionRefs.current[section].current) {
      sectionRefs.current[section].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setTimeout(() => setExpandedSection(section), 500);
      setActiveTopic(section);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery('');
      setHighlightedSections([]);
    }
  };
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setHighlightedSections([]);
      return;
    }
    const sections: string[] = [];
    // Search in each section content
    Object.keys(sectionRefs.current).forEach(section => {
      const sectionElement = sectionRefs.current[section].current;
      if (sectionElement && sectionElement.textContent?.toLowerCase().includes(searchQuery.toLowerCase())) {
        sections.push(section);
      }
    });
    setHighlightedSections(sections);
    // If found sections, scroll to the first one
    if (sections.length > 0) {
      scrollToSection(sections[0]);
    }
  };
  const handlePrint = () => {
    window.print();
  };
  const handleShare = async () => {
    try {
      // Get only the text content we want to share
      const content = Object.keys(sectionRefs.current).map(section => {
        const element = sectionRefs.current[section].current;
        const title = sectionNames[section];
        return element ? `${title}\n${element.textContent}\n\n` : '';
      }).join('');
      // Try to use Web Share API first
      if (navigator.share) {
        await navigator.share({
          title: 'مرحلة الخطوبة في الإسلام',
          text: content
        });
        showNotification('تمت المشاركة بنجاح', false);
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(content);
        showNotification('تم نسخ المحتوى للحافظة', false);
      }
    } catch (err) {
      console.error('Error sharing content:', err);
      showNotification('حدث خطأ أثناء المشاركة', true);
    }
  };
  const showNotification = (message: string, isError = false) => {
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-1/2 transform translate-x-1/2 px-4 py-2 rounded-full shadow-lg z-50 animate-fadeIn ${darkMode ? isError ? 'bg-red-900 text-red-100' : 'bg-green-900 text-green-100' : isError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.add('opacity-0');
      notification.style.transition = 'opacity 300ms ease-in-out';
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 2000);
  };
  const checkScrollPosition = () => {
    if (navRef.current) {
      const navPosition = navRef.current.getBoundingClientRect().top;
      setIsNavigationSticky(navPosition <= 0);
    }
    setShowScrollTop(window.pageYOffset > 300);
    // Update active topic based on scroll position
    const scrollPosition = window.scrollY + 200;
    let currentTopic: string | null = null;
    Object.keys(sectionRefs.current).forEach(section => {
      const element = sectionRefs.current[section].current;
      if (element) {
        const position = element.offsetTop;
        if (scrollPosition >= position) {
          currentTopic = section;
        }
      }
    });
    if (currentTopic !== activeTopic) {
      setActiveTopic(currentTopic);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, [activeTopic]);
  const sectionNames: {
    [key: string]: string;
  } = {
    definition: 'تعريف الخطبة',
    communication: 'التواصل الفعال',
    rules: 'ضوابط الخطبة',
    allowed: 'المسموح والممنوع',
    challenges: 'تحديات شائعة',
    customs: 'عادات وتقاليد',
    tips: 'نصائح للنجاح'
  };
  const sectionColors: {
    [key: string]: string;
  } = {
    definition: 'purple',
    communication: 'blue',
    rules: 'emerald',
    allowed: 'sky',
    challenges: 'red',
    customs: 'rose',
    tips: 'amber'
  };
  return <div className={`max-w-4xl mx-auto transition-colors duration-300 ${darkMode ? 'dark-mode text-slate-200' : ''}`}>
      {/* Page Header */}
      <div className={`relative mb-8 ${darkMode ? 'bg-slate-800' : 'bg-gradient-to-r from-purple-50 to-indigo-50'} rounded-xl p-8 shadow-md transition-all duration-300`}>
        <div className="absolute top-4 left-4 flex space-x-2 rtl:space-x-reverse">
          <button onClick={toggleDarkMode} className={`p-2 rounded-full transition-colors duration-200 ${darkMode ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' : 'bg-white text-slate-700 hover:bg-purple-100'}`} aria-label={darkMode ? 'وضع النهار' : 'وضع القراءة الليلي'}>
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button onClick={toggleSearch} className={`p-2 rounded-full transition-colors duration-200 ${showSearch ? darkMode ? 'bg-slate-700 text-blue-400' : 'bg-blue-100 text-blue-700' : darkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-white text-slate-700 hover:bg-purple-100'}`} aria-label="بحث في المحتوى">
            {showSearch ? <XIcon className="h-5 w-5" /> : <SearchIcon className="h-5 w-5" />}
          </button>
          <button onClick={handlePrint} className={`p-2 rounded-full transition-colors duration-200 ${darkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-white text-slate-700 hover:bg-purple-100'}`} aria-label="طباعة المحتوى">
            <PrinterIcon className="h-5 w-5" />
          </button>
          <button onClick={handleShare} className={`p-2 rounded-full transition-colors duration-200 ${darkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-white text-slate-700 hover:bg-purple-100'}`} aria-label="مشاركة المحتوى">
            <ShareIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} animate-pulse-slow`}>
              <HeartIcon className={`h-8 w-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            </div>
          </div>
          <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-purple-900'} animate-fade-in`}>
            مرحلة الخطوبة في الإسلام
          </h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-slate-300' : 'text-purple-600/80'}`}>
            دليل شامل للخاطبين حول آداب وأحكام وضوابط الخطوبة في الإسلام
          </p>
        </div>
      </div>
      {/* Search Bar */}
      {showSearch && <div className={`mb-6 p-4 rounded-lg shadow-md animate-fadeIn transition-colors duration-300 ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white'}`}>
          <div className="flex items-center">
            <div className="relative flex-1">
              <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="ابحث في محتوى الصفحة..." className={`w-full px-4 py-3 pr-12 rounded-lg transition-colors duration-300 ${darkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500' : 'border border-slate-200 focus:border-purple-300 focus:ring focus:ring-purple-100'} focus:outline-none`} onKeyDown={e => e.key === 'Enter' && handleSearch()} />
              <SearchIcon className={`absolute top-3.5 right-4 h-5 w-5 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`} />
            </div>
            <button onClick={handleSearch} className={`mr-2 px-4 py-3 rounded-lg transition-colors duration-200 ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}>
              بحث
            </button>
          </div>
          {highlightedSections.length > 0 && <div className="mt-4">
              <p className={`text-sm mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                نتائج البحث ({highlightedSections.length}):
              </p>
              <div className="flex flex-wrap gap-2">
                {highlightedSections.map(section => <button key={section} onClick={() => scrollToSection(section)} className={`px-3 py-1.5 text-sm rounded-full transition-colors duration-200 ${darkMode ? 'bg-slate-700 text-blue-400 hover:bg-slate-600' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}>
                    {sectionNames[section]}
                  </button>)}
              </div>
            </div>}
          {searchQuery && highlightedSections.length === 0 && <p className={`mt-3 text-center ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              لم يتم العثور على نتائج مطابقة
            </p>}
        </div>}
      {/* Quick Navigation */}
      <div ref={navRef} className={`transition-all duration-300 ${isNavigationSticky ? 'sticky top-0 z-30 py-2' : 'relative z-10 mb-8'}`}>
        <div className={`rounded-xl shadow-lg p-3 border transition-colors duration-300 ${isNavigationSticky ? 'animate-slideDown' : ''} ${darkMode ? 'bg-slate-800/95 backdrop-blur-sm border-slate-700' : 'bg-white/90 backdrop-blur-sm border-purple-100'}`}>
          <div className="flex justify-between items-center mb-3">
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-purple-800'}`}>
              محتويات الصفحة
            </h3>
            {isNavigationSticky && <button onClick={scrollToTop} className={`flex items-center text-sm px-3 py-1 rounded-full transition-colors duration-200 ${darkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-purple-50 text-purple-700 hover:bg-purple-100'}`}>
                <HomeIcon className="h-3.5 w-3.5 ml-1.5" />
                <span>العودة للأعلى</span>
              </button>}
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {Object.keys(sectionRefs.current).map(section => <button key={section} onClick={() => scrollToSection(section)} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTopic === section ? darkMode ? `bg-${sectionColors[section]}-900 text-${sectionColors[section]}-300` : `bg-${sectionColors[section]}-100 text-${sectionColors[section]}-800` : darkMode ? 'hover:bg-slate-700 text-slate-300' : `hover:bg-${sectionColors[section]}-50 text-slate-600`}`}>
                {sectionNames[section]}
              </button>)}
          </div>
        </div>
      </div>
      <div className={`rounded-lg shadow-lg p-6 mb-8 transform transition-all duration-300 hover:shadow-xl ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white'}`}>
        <div className="flex items-center mb-6">
          <div className={`p-4 rounded-xl animate-pulse-slow ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
            <HeartIcon className={`h-8 w-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
          <div className="mr-4">
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-purple-800'}`}>
              فترة الخطوبة: خطوة تمهيدية للزواج
            </h3>
            <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-purple-600/80'}`}>
              مرحلة مهمة للتعارف والاستعداد
            </p>
          </div>
        </div>
        <p className={`leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
          الخطوبة في الإسلام هي فترة تسبق عقد النكاح، وهي وعد بالزواج وليست
          زواجاً. تهدف هذه المرحلة إلى التعارف بين الخاطبين ضمن الضوابط الشرعية,
          واكتشاف مدى التوافق بينهما قبل الارتباط الرسمي. وقد شرع الإسلام الخطبة
          حتى يكون كل من الخاطبين على بينة من أمره قبل الإقدام على الزواج.
        </p>
        <div className={`p-4 rounded-lg border transform transition-all duration-300 hover:scale-[1.01] ${darkMode ? 'bg-purple-900/30 border-purple-800' : 'bg-purple-50 border-purple-100 hover:bg-purple-100/70'}`}>
          <div className="flex items-start">
            <StarIcon className={`h-6 w-6 ml-3 flex-shrink-0 mt-1 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`} />
            <p className={darkMode ? 'text-purple-300' : 'text-purple-800'}>
              الخطبة في الإسلام ليست عقداً ملزماً، بل هي وعد بالزواج يمكن لأي من
              الطرفين العدول عنه إذا تبين عدم التوافق.
            </p>
          </div>
        </div>
      </div>
      <div ref={sectionRefs.current.definition} id="definition" className={`rounded-lg shadow-md overflow-hidden mb-8 transition-all duration-500 hover:shadow-lg ${highlightedSections.includes('definition') ? darkMode ? 'ring-2 ring-purple-500' : 'ring-2 ring-purple-300' : ''} ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <button onClick={() => toggleSection('definition')} className={`w-full p-4 text-right flex items-center transition-colors duration-200 ${expandedSection === 'definition' ? darkMode ? 'bg-purple-900/50' : 'bg-purple-100' : darkMode ? 'hover:bg-slate-700' : 'hover:bg-purple-50'}`}>
          <div className={`p-2 rounded-full ml-3 ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
            <BookOpenIcon className={`h-6 w-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
          <div className="flex-1">
            <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-purple-800'}`}>
              تعريف الخطبة في الإسلام
            </h3>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              ماهية الخطبة وحكمها الشرعي
            </p>
          </div>
          <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${darkMode ? 'text-purple-400' : 'text-purple-600'} ${expandedSection === 'definition' ? 'transform rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ${expandedSection === 'definition' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`p-6 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-purple-50 border-purple-100'}`}>
            <p className={`mb-4 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              الخطبة في الإسلام هي طلب الرجل يد امرأة معينة للزواج بها، والتقدم
              إليها أو إلى وليها لهذا الغرض. وهي وعد بالزواج وليست عقداً ملزماً,
              فلكل من الطرفين الحق في العدول عنها.
            </p>
            <div className={`p-5 rounded-lg border mb-4 transition-colors duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-purple-100'}`}>
              <h4 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-purple-400' : 'text-purple-800'}`}>
                <BookIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                حكم الخطبة:
              </h4>
              <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                الخطبة مستحبة في الإسلام، وهي من السنن المستحسنة التي تمهد
                للزواج. قال الله تعالى: "وَلَا جُنَاحَ عَلَيْكُمْ فِيمَا
                عَرَّضْتُم بِهِ مِنْ خِطْبَةِ النِّسَاءِ" [البقرة: 235].
              </p>
            </div>
            <div className={`p-5 rounded-lg border transition-colors duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-sky-50 border-sky-100'}`}>
              <h4 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-sky-400' : 'text-sky-800'}`}>
                <LightbulbIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-sky-400' : 'text-sky-600'}`} />
                فوائد الخطبة:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-sky-400' : 'bg-sky-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-sky-400' : 'text-sky-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    التعرف على الطرف الآخر ضمن الضوابط الشرعية
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-sky-400' : 'bg-sky-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-sky-400' : 'text-sky-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    اكتشاف مدى التوافق في الأفكار والتطلعات
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-sky-400' : 'bg-sky-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-sky-400' : 'text-sky-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    التهيئة النفسية والاجتماعية للزواج
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-sky-400' : 'bg-sky-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-sky-400' : 'text-sky-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    إعلان الرغبة في الزواج أمام الناس
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Communication During Engagement */}
      <div ref={sectionRefs.current.communication} id="communication" className={`rounded-lg shadow-md overflow-hidden mb-8 transition-all duration-500 hover:shadow-lg ${highlightedSections.includes('communication') ? darkMode ? 'ring-2 ring-blue-500' : 'ring-2 ring-blue-300' : ''} ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <button onClick={() => toggleSection('communication')} className={`w-full p-4 text-right flex items-center transition-colors duration-200 ${expandedSection === 'communication' ? darkMode ? 'bg-blue-900/50' : 'bg-blue-100' : darkMode ? 'hover:bg-slate-700' : 'hover:bg-blue-50'}`}>
          <div className={`p-2 rounded-full ml-3 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
            <MessageCircleIcon className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <div className="flex-1">
            <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-blue-800'}`}>
              التواصل الفعال أثناء الخطوبة
            </h3>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              كيفية التواصل الإيجابي ضمن الضوابط الشرعية
            </p>
          </div>
          <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'} ${expandedSection === 'communication' ? 'transform rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ${expandedSection === 'communication' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`p-6 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-blue-50 border-blue-100'}`}>
            <p className={`mb-6 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              يعد التواصل الفعال من أهم عوامل نجاح فترة الخطوبة، حيث يساعد في
              بناء الثقة وتعميق المعرفة بين الطرفين. ومع ذلك، يجب أن يتم هذا
              التواصل ضمن إطار الضوابط الشرعية والآداب الإسلامية.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-100'}`}>
                <h4 className={`font-bold mb-4 flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  <MessageCircleIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  موضوعات مهمة للحوار:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-blue-400' : 'text-blue-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      القيم والمبادئ الشخصية والدينية
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-blue-400' : 'text-blue-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      الأهداف المستقبلية والتطلعات
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-blue-400' : 'text-blue-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      الرؤية المشتركة للحياة الزوجية
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-blue-400' : 'text-blue-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      الأدوار والمسؤوليات المتوقعة بعد الزواج
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-blue-400' : 'text-blue-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      العلاقة مع الأهل وطبيعتها بعد الزواج
                    </span>
                  </li>
                </ul>
              </div>
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-100'}`}>
                <h4 className={`font-bold mb-4 flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  <BookOpenIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  آداب التواصل الإسلامية:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-blue-400' : 'text-blue-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      الصدق والوضوح في الحديث
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-blue-400' : 'text-blue-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      حسن الاستماع وعدم المقاطعة
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-blue-400' : 'text-blue-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      تجنب الجدال والمراء غير المفيد
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-blue-400' : 'text-blue-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      الالتزام بالكلام الطيب وتجنب البذاءة
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-blue-400' : 'text-blue-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      عدم التكلف والتصنع في إظهار الشخصية
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`p-5 rounded-lg border mb-6 shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-100'}`}>
              <h4 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                <HeadphonesIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                وسائل التواصل المناسبة:
              </h4>
              <p className={`mb-4 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                يمكن للخاطبين التواصل عبر وسائل متعددة شرط الالتزام بالضوابط
                الشرعية:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className={`p-3 rounded-md border flex items-center transform transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-blue-900/30 border-blue-800 hover:bg-blue-900/50' : 'bg-blue-50 border-blue-100 hover:bg-blue-100'}`}>
                  <HeadphonesIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                    المكالمات الهاتفية
                  </span>
                </div>
                <div className={`p-3 rounded-md border flex items-center transform transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-blue-900/30 border-blue-800 hover:bg-blue-900/50' : 'bg-blue-50 border-blue-100 hover:bg-blue-100'}`}>
                  <MessageCircleIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                    الرسائل النصية
                  </span>
                </div>
                <div className={`p-3 rounded-md border flex items-center transform transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-blue-900/30 border-blue-800 hover:bg-blue-900/50' : 'bg-blue-50 border-blue-100 hover:bg-blue-100'}`}>
                  <UsersIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                    اللقاءات بحضور المحارم
                  </span>
                </div>
              </div>
            </div>
            <div className={`p-5 rounded-lg border shadow-sm ${darkMode ? 'bg-amber-900/30 border-amber-800' : 'bg-amber-50 border-amber-100'}`}>
              <div className="flex items-center mb-3">
                <AlertTriangleIcon className={`h-5 w-5 ml-3 flex-shrink-0 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                <h4 className={`font-bold ${darkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                  ضوابط شرعية للتواصل:
                </h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-400' : 'bg-amber-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    عدم الخلوة بين الخاطبين دون محرم
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-400' : 'bg-amber-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    الالتزام بالحديث المباح وتجنب المواضيع المثيرة للشهوات
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-400' : 'bg-amber-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    الاعتدال في مدة وتكرار المكالمات والمراسلات
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-400' : 'bg-amber-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    تجنب تبادل الصور الشخصية أو الخاصة
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Rules Section */}
      <div ref={sectionRefs.current.rules} id="rules" className={`rounded-lg shadow-md overflow-hidden mb-8 transition-all duration-500 hover:shadow-lg ${highlightedSections.includes('rules') ? darkMode ? 'ring-2 ring-emerald-500' : 'ring-2 ring-emerald-300' : ''} ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <button onClick={() => toggleSection('rules')} className={`w-full p-4 text-right flex items-center transition-colors duration-200 ${expandedSection === 'rules' ? darkMode ? 'bg-emerald-900/50' : 'bg-emerald-100' : darkMode ? 'hover:bg-slate-700' : 'hover:bg-emerald-50'}`}>
          <div className={`p-2 rounded-full ml-3 ${darkMode ? 'bg-emerald-900' : 'bg-emerald-100'}`}>
            <HandIcon className={`h-6 w-6 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
          </div>
          <div className="flex-1">
            <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-emerald-800'}`}>
              ضوابط الخطبة في الإسلام
            </h3>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              أحكام وقواعد يجب مراعاتها أثناء فترة الخطوبة
            </p>
          </div>
          <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'} ${expandedSection === 'rules' ? 'transform rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ${expandedSection === 'rules' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`p-6 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-emerald-50 border-emerald-100'}`}>
            <h4 className={`font-bold mb-6 flex items-center ${darkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>
              <ShieldIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
              ضوابط شرعية مهمة:
            </h4>
            <div className="space-y-6 mb-6">
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-emerald-100'}`}>
                <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  <span className={`inline-flex justify-center items-center w-6 h-6 rounded-full ml-2 ${darkMode ? 'bg-emerald-900 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                    1
                  </span>
                  من يجوز خطبتها:
                </h5>
                <p className={`mb-3 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  لا يجوز خطبة المرأة المحرمة كالمتزوجة أو المعتدة من طلاق رجعي.
                  ويجوز التعريض (وليس التصريح) بخطبة المعتدة من طلاق بائن أو من
                  وفاة.
                </p>
                <div className={`p-3 rounded-lg border ${darkMode ? 'bg-emerald-900/30 border-emerald-800' : 'bg-emerald-50 border-emerald-100'}`}>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    <span className={`font-semibold ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                      دليل شرعي:{' '}
                    </span>
                    قال النبي ﷺ: "لا يخطب أحدكم على خطبة أخيه حتى ينكح أو يترك"
                    [متفق عليه].
                  </p>
                </div>
              </div>
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-emerald-100'}`}>
                <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  <span className={`inline-flex justify-center items-center w-6 h-6 rounded-full ml-2 ${darkMode ? 'bg-emerald-900 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                    2
                  </span>
                  النظر إلى المخطوبة:
                </h5>
                <p className={`mb-3 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  أباح الإسلام للخاطب أن ينظر إلى مخطوبته بما يظهر منها عادة
                  كالوجه والكفين، ليتبين جمالها ويقرر إن كان يرغب في الزواج
                  منها.
                </p>
                <div className={`p-3 rounded-lg border ${darkMode ? 'bg-emerald-900/30 border-emerald-800' : 'bg-emerald-50 border-emerald-100'}`}>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    <span className={`font-semibold ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                      دليل شرعي:{' '}
                    </span>
                    قال النبي ﷺ لرجل خطب امرأة: "انظر إليها فإنه أحرى أن يؤدم
                    بينكما" [رواه الترمذي].
                  </p>
                </div>
              </div>
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-emerald-100'}`}>
                <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  <span className={`inline-flex justify-center items-center w-6 h-6 rounded-full ml-2 ${darkMode ? 'bg-emerald-900 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                    3
                  </span>
                  الخلوة والاختلاط:
                </h5>
                <p className={`mb-3 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  لا تجوز الخلوة بين الخاطب والمخطوبة، فهي لا تزال أجنبية عنه.
                  ويجب أن يكون اللقاء بينهما بحضور محرم للمخطوبة.
                </p>
                <div className={`p-3 rounded-lg border ${darkMode ? 'bg-emerald-900/30 border-emerald-800' : 'bg-emerald-50 border-emerald-100'}`}>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    <span className={`font-semibold ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                      دليل شرعي:{' '}
                    </span>
                    قال النبي ﷺ: "لا يخلون رجل بامرأة إلا مع ذي محرم" [متفق
                    عليه].
                  </p>
                </div>
              </div>
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-emerald-100'}`}>
                <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  <span className={`inline-flex justify-center items-center w-6 h-6 rounded-full ml-2 ${darkMode ? 'bg-emerald-900 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                    4
                  </span>
                  التواصل والحديث:
                </h5>
                <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  يجوز للخاطبين التحدث بما يساعدهما على التعرف على بعضهما البعض،
                  لكن بضوابط الحديث الشرعي من غير خضوع بالقول أو ميوعة أو تجاوز
                  للحدود الشرعية.
                </p>
              </div>
            </div>
            <div className={`p-5 rounded-lg border shadow-sm ${darkMode ? 'bg-amber-900/30 border-amber-800' : 'bg-amber-50 border-amber-100'}`}>
              <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                <AlertTriangleIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                تنبيه مهم:
              </h5>
              <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                الخطبة لا تبيح ما حرمه الله من خلوة أو لمس أو غيرها من المحرمات،
                فالمخطوبة لا تزال أجنبية عن خاطبها حتى يتم عقد النكاح الشرعي.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Allowed and Not Allowed Section */}
      <div ref={sectionRefs.current.allowed} id="allowed" className={`rounded-lg shadow-md overflow-hidden mb-8 transition-all duration-500 hover:shadow-lg ${highlightedSections.includes('allowed') ? darkMode ? 'ring-2 ring-sky-500' : 'ring-2 ring-sky-300' : ''} ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <button onClick={() => toggleSection('allowed')} className={`w-full p-4 text-right flex items-center transition-colors duration-200 ${expandedSection === 'allowed' ? darkMode ? 'bg-sky-900/50' : 'bg-sky-100' : darkMode ? 'hover:bg-slate-700' : 'hover:bg-sky-50'}`}>
          <div className={`p-2 rounded-full ml-3 ${darkMode ? 'bg-sky-900' : 'bg-sky-100'}`}>
            <CheckCircleIcon className={`h-6 w-6 ${darkMode ? 'text-sky-400' : 'text-sky-600'}`} />
          </div>
          <div className="flex-1">
            <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-sky-800'}`}>
              ما يجوز وما لا يجوز في فترة الخطوبة
            </h3>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              حدود العلاقة بين الخاطبين
            </p>
          </div>
          <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${darkMode ? 'text-sky-400' : 'text-sky-600'} ${expandedSection === 'allowed' ? 'transform rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ${expandedSection === 'allowed' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`p-6 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-sky-50 border-sky-100'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-green-800' : 'bg-white border-green-100'}`}>
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ml-3 ${darkMode ? 'bg-green-900' : 'bg-green-100'}`}>
                    <CheckCircleIcon className={`h-6 w-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  </div>
                  <h4 className={`font-bold ${darkMode ? 'text-green-400' : 'text-green-800'}`}>
                    ما يجوز في فترة الخطوبة:
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      النظر إلى الوجه والكفين للتعرف على المخطوبة
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      الحديث والتواصل بحضور محرم للتعارف
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      الاتفاق على تفاصيل الزواج والمهر والسكن
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      تبادل الهدايا البسيطة بين الأسرتين
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      السؤال عن كل طرف والتحري عنه
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      إقامة حفل الخطوبة المناسب بضوابط شرعية
                    </span>
                  </li>
                </ul>
              </div>
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-red-800' : 'bg-white border-red-100'}`}>
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ml-3 ${darkMode ? 'bg-red-900' : 'bg-red-100'}`}>
                    <XCircleIcon className={`h-6 w-6 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
                  </div>
                  <h4 className={`font-bold ${darkMode ? 'text-red-400' : 'text-red-800'}`}>
                    ما لا يجوز في فترة الخطوبة:
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-red-400' : 'bg-red-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-red-400' : 'text-red-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      الخلوة بين الخاطبين دون محرم
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-red-400' : 'bg-red-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-red-400' : 'text-red-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      اللمس أو التقبيل أو أي تواصل جسدي
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-red-400' : 'bg-red-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-red-400' : 'text-red-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      الخروج منفردين دون محرم
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-red-400' : 'bg-red-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-red-400' : 'text-red-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      التواصل غير المنضبط عبر وسائل التواصل
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-red-400' : 'bg-red-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-red-400' : 'text-red-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      تبادل الصور الخاصة أو المحادثات غير اللائقة
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-red-400' : 'bg-red-500'}`}></span>
                    <span className={`group-hover:${darkMode ? 'text-red-400' : 'text-red-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      الإسراف في الهدايا والمظاهر
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`p-5 rounded-lg border shadow-sm ${darkMode ? 'bg-amber-900/30 border-amber-800' : 'bg-amber-50 border-amber-100'}`}>
              <div className="flex items-center mb-3">
                <AlertTriangleIcon className={`h-5 w-5 ml-3 flex-shrink-0 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                <h4 className={`font-bold ${darkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                  تذكير شرعي:
                </h4>
              </div>
              <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                المخطوبة لا تزال أجنبية عن خاطبها حتى يتم عقد النكاح، فلا يحل له
                منها ما يحل للزوج من زوجته. والتقوى في هذه المرحلة سبب للبركة في
                الزواج المستقبلي بإذن الله.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Challenges Section */}
      <div ref={sectionRefs.current.challenges} id="challenges" className={`rounded-lg shadow-md overflow-hidden mb-8 transition-all duration-500 hover:shadow-lg ${highlightedSections.includes('challenges') ? darkMode ? 'ring-2 ring-red-500' : 'ring-2 ring-red-300' : ''} ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <button onClick={() => toggleSection('challenges')} className={`w-full p-4 text-right flex items-center transition-colors duration-200 ${expandedSection === 'challenges' ? darkMode ? 'bg-red-900/50' : 'bg-red-100' : darkMode ? 'hover:bg-slate-700' : 'hover:bg-red-50'}`}>
          <div className={`p-2 rounded-full ml-3 ${darkMode ? 'bg-red-900' : 'bg-red-100'}`}>
            <ShieldIcon className={`h-6 w-6 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
          </div>
          <div className="flex-1">
            <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-red-800'}`}>
              تحديات شائعة في فترة الخطوبة
            </h3>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              مشكلات قد تواجه الخاطبين وكيفية التعامل معها
            </p>
          </div>
          <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${darkMode ? 'text-red-400' : 'text-red-600'} ${expandedSection === 'challenges' ? 'transform rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ${expandedSection === 'challenges' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`p-6 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-red-50 border-red-100'}`}>
            <p className={`mb-6 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              قد تواجه الخاطبين بعض التحديات والمشكلات خلال فترة الخطوبة، ومن
              المهم التعامل معها بحكمة وروية، والالتزام بالمنهج الإسلامي في حل
              المشكلات.
            </p>
            <div className="space-y-6 mb-6">
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-red-100'}`}>
                <h5 className={`font-bold mb-4 flex items-center ${darkMode ? 'text-red-400' : 'text-red-700'}`}>
                  <span className={`inline-flex justify-center items-center w-6 h-6 rounded-full ml-2 ${darkMode ? 'bg-red-900 text-red-400' : 'bg-red-100 text-red-700'}`}>
                    1
                  </span>
                  تدخل الأهل المفرط:
                </h5>
                <p className={`mb-4 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  قد يتدخل الأهل بشكل مفرط في تفاصيل العلاقة بين الخاطبين، مما
                  قد يسبب توتراً وضغوطاً عليهما.
                </p>
                <div className={`p-4 rounded-lg border ${darkMode ? 'bg-green-900/30 border-green-800' : 'bg-green-50 border-green-100'}`}>
                  <p className={`font-medium mb-2 ${darkMode ? 'text-green-400' : 'text-green-800'}`}>
                    الحلول المقترحة:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start group">
                      <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                      <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        التحدث بأدب واحترام مع الأهل وتوضيح الحدود المناسبة
                      </span>
                    </li>
                    <li className="flex items-start group">
                      <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                      <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        الاستعانة بشخص حكيم من العائلة للتوسط وتقريب وجهات النظر
                      </span>
                    </li>
                    <li className="flex items-start group">
                      <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                      <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        فهم دوافع الأهل وتقدير حرصهم مع توضيح الاحتياجات الشخصية
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-red-100'}`}>
                <h5 className={`font-bold mb-4 flex items-center ${darkMode ? 'text-red-400' : 'text-red-700'}`}>
                  <span className={`inline-flex justify-center items-center w-6 h-6 rounded-full ml-2 ${darkMode ? 'bg-red-900 text-red-400' : 'bg-red-100 text-red-700'}`}>
                    2
                  </span>
                  اكتشاف اختلافات جوهرية:
                </h5>
                <p className={`mb-4 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  قد يكتشف الخاطبان خلال فترة الخطوبة اختلافات جوهرية في الشخصية
                  أو القيم أو الأهداف، مما قد يثير القلق حول مستقبل العلاقة.
                </p>
                <div className={`p-4 rounded-lg border ${darkMode ? 'bg-green-900/30 border-green-800' : 'bg-green-50 border-green-100'}`}>
                  <p className={`font-medium mb-2 ${darkMode ? 'text-green-400' : 'text-green-800'}`}>
                    الحلول المقترحة:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start group">
                      <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                      <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        مناقشة الاختلافات بصراحة وهدوء لفهم مدى تأثيرها على
                        العلاقة
                      </span>
                    </li>
                    <li className="flex items-start group">
                      <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                      <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        استشارة شخص ذي خبرة أو مختص في الاستشارات الزوجية
                      </span>
                    </li>
                    <li className="flex items-start group">
                      <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                      <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        تقييم إمكانية التوافق والتكيف، وعدم التردد في إنهاء
                        الخطبة إذا كانت الاختلافات جوهرية
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-red-100'}`}>
                <h5 className={`font-bold mb-4 flex items-center ${darkMode ? 'text-red-400' : 'text-red-700'}`}>
                  <span className={`inline-flex justify-center items-center w-6 h-6 rounded-full ml-2 ${darkMode ? 'bg-red-900 text-red-400' : 'bg-red-100 text-red-700'}`}>
                    3
                  </span>
                  الخلافات حول تفاصيل الزواج والتكاليف:
                </h5>
                <p className={`mb-4 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  غالباً ما تنشأ خلافات حول تفاصيل حفل الزفاف وتكاليفه، أو حول
                  تجهيزات المنزل والمهر وغيرها من الأمور المادية.
                </p>
                <div className={`p-4 rounded-lg border ${darkMode ? 'bg-green-900/30 border-green-800' : 'bg-green-50 border-green-100'}`}>
                  <p className={`font-medium mb-2 ${darkMode ? 'text-green-400' : 'text-green-800'}`}>
                    الحلول المقترحة:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start group">
                      <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                      <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        وضع ميزانية واضحة ومناسبة لظروف الطرفين
                      </span>
                    </li>
                    <li className="flex items-start group">
                      <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                      <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        التركيز على جوهر الزواج وليس المظاهر والشكليات
                      </span>
                    </li>
                    <li className="flex items-start group">
                      <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></span>
                      <span className={`group-hover:${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        الاقتداء بهدي النبي ﷺ في تيسير أمور الزواج: "خير النكاح
                        أيسره"
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`p-5 rounded-lg border shadow-sm ${darkMode ? 'bg-amber-900/30 border-amber-800' : 'bg-amber-50 border-amber-100'}`}>
              <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                <ShieldIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                نصائح عامة للتعامل مع التحديات:
              </h5>
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-400' : 'bg-amber-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    الدعاء والاستخارة عند مواجهة أي مشكلة أو قرار مهم
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-400' : 'bg-amber-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    التحلي بالصبر والحكمة وعدم التسرع في اتخاذ القرارات
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-400' : 'bg-amber-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    الاستعانة بأهل العلم والخبرة للمشورة والنصح
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-400' : 'bg-amber-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    تذكر أن الخطبة فترة اختبار، وأن إنهاءها أفضل من زواج غير
                    موفق
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Customs Section */}
      <div ref={sectionRefs.current.customs} id="customs" className={`rounded-lg shadow-md overflow-hidden mb-8 transition-all duration-500 hover:shadow-lg ${highlightedSections.includes('customs') ? darkMode ? 'ring-2 ring-rose-500' : 'ring-2 ring-rose-300' : ''} ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <button onClick={() => toggleSection('customs')} className={`w-full p-4 text-right flex items-center transition-colors duration-200 ${expandedSection === 'customs' ? darkMode ? 'bg-rose-900/50' : 'bg-rose-100' : darkMode ? 'hover:bg-slate-700' : 'hover:bg-rose-50'}`}>
          <div className={`p-2 rounded-full ml-3 ${darkMode ? 'bg-rose-900' : 'bg-rose-100'}`}>
            <GiftIcon className={`h-6 w-6 ${darkMode ? 'text-rose-400' : 'text-rose-600'}`} />
          </div>
          <div className="flex-1">
            <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-rose-800'}`}>
              عادات وتقاليد الخطوبة
            </h3>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              ما يراعى من أعراف وتقاليد مع الضوابط الشرعية
            </p>
          </div>
          <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${darkMode ? 'text-rose-400' : 'text-rose-600'} ${expandedSection === 'customs' ? 'transform rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ${expandedSection === 'customs' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`p-6 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-rose-50 border-rose-100'}`}>
            <p className={`mb-6 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              تختلف عادات وتقاليد الخطوبة من مجتمع لآخر، لكن ينبغي أن تكون
              منضبطة بالضوابط الشرعية، وأن يتجنب فيها الإسراف والتكلف والمباهاة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-rose-100'}`}>
                <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-rose-400' : 'text-rose-800'}`}>
                  <GiftIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-rose-400' : 'text-rose-600'}`} />
                  الشبكة (هدايا الخطوبة):
                </h5>
                <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  من العادات الشائعة تقديم الخاطب هدايا للمخطوبة كالذهب والحلي،
                  وهذا جائز شرعاً ما لم يصل لحد الإسراف، ويعتبر من حسن العشرة
                  وإدخال السرور على المخطوبة وأهلها.
                </p>
              </div>
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-rose-100'}`}>
                <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-rose-400' : 'text-rose-800'}`}>
                  <HeartIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-rose-400' : 'text-rose-600'}`} />
                  حفل الخطوبة:
                </h5>
                <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  يمكن إقامة حفل بسيط للخطوبة يجمع العائلتين للتعارف وإعلان
                  الخطبة، مع الالتزام بالضوابط الشرعية من عدم اختلاط، وعدم
                  إسراف، والالتزام باللباس المحتشم والأناشيد المباحة دون موسيقى
                  محرمة.
                </p>
              </div>
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-rose-100'}`}>
                <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-rose-400' : 'text-rose-800'}`}>
                  <BookOpenIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-rose-400' : 'text-rose-600'}`} />
                  قراءة الفاتحة:
                </h5>
                <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  من العادات الشائعة قراءة الفاتحة عند الخطبة، وهي عادة حسنة
                  للتبرك والدعاء بالتوفيق، لكن ينبغي التنبيه أن قراءة الفاتحة
                  ليست عقداً شرعياً يبيح ما حرمه الله.
                </p>
              </div>
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-rose-100'}`}>
                <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-rose-400' : 'text-rose-800'}`}>
                  <UsersIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-rose-400' : 'text-rose-600'}`} />
                  تبادل الزيارات العائلية:
                </h5>
                <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  من المستحسن تبادل الزيارات بين العائلتين للتعارف وتوطيد
                  العلاقات، مع مراعاة الضوابط الشرعية في هذه اللقاءات.
                </p>
              </div>
            </div>
            <div className={`p-5 rounded-lg border shadow-sm ${darkMode ? 'bg-amber-900/30 border-amber-800' : 'bg-amber-50 border-amber-100'}`}>
              <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                <AlertTriangleIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                ضوابط شرعية للعادات:
              </h5>
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-400' : 'bg-amber-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    تجنب الإسراف والتبذير في الهدايا والولائم
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-400' : 'bg-amber-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    الابتعاد عن العادات المخالفة للشرع كالاختلاط المحرم
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-400' : 'bg-amber-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    عدم التكلف وإرهاق الخاطب بمطالب مالية كبيرة
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-400' : 'bg-amber-500'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-700'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    تجنب المظاهر والتفاخر والتباهي بين العائلات
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Tips Section */}
      <div ref={sectionRefs.current.tips} id="tips" className={`rounded-lg shadow-md overflow-hidden mb-8 transition-all duration-500 hover:shadow-lg ${highlightedSections.includes('tips') ? darkMode ? 'ring-2 ring-amber-500' : 'ring-2 ring-amber-300' : ''} ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <button onClick={() => toggleSection('tips')} className={`w-full p-4 text-right flex items-center transition-colors duration-200 ${expandedSection === 'tips' ? darkMode ? 'bg-amber-900/50' : 'bg-amber-100' : darkMode ? 'hover:bg-slate-700' : 'hover:bg-amber-50'}`}>
          <div className={`p-2 rounded-full ml-3 ${darkMode ? 'bg-amber-900' : 'bg-amber-100'}`}>
            <CalendarIcon className={`h-6 w-6 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
          </div>
          <div className="flex-1">
            <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-amber-800'}`}>
              نصائح لنجاح فترة الخطوبة
            </h3>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              كيف تستثمر هذه الفترة بشكل إيجابي
            </p>
          </div>
          <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${darkMode ? 'text-amber-400' : 'text-amber-600'} ${expandedSection === 'tips' ? 'transform rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ${expandedSection === 'tips' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`p-6 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-amber-50 border-amber-100'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-amber-100'}`}>
                <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                  <span className={`inline-flex justify-center items-center w-6 h-6 rounded-full ml-2 ${darkMode ? 'bg-amber-900 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>
                    1
                  </span>
                  استثمار فترة الخطوبة في التعارف:
                </h5>
                <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  اطرح أسئلة مهمة لمعرفة شخصية الطرف الآخر وتفكيره وقيمه وأهدافه
                  في الحياة. ناقش الأمور الأساسية مثل: الدين، التعليم، العمل،
                  الإنجاب، السكن، وغيرها من القضايا المهمة.
                </p>
              </div>
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-amber-100'}`}>
                <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                  <span className={`inline-flex justify-center items-center w-6 h-6 rounded-full ml-2 ${darkMode ? 'bg-amber-900 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>
                    2
                  </span>
                  الاستعداد النفسي للزواج:
                </h5>
                <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  استغل فترة الخطوبة للتهيؤ النفسي للانتقال من حياة العزوبية إلى
                  حياة الزواج، وتقبل فكرة المسؤوليات الجديدة، والاستعداد للتنازل
                  والتضحية من أجل نجاح الحياة الزوجية.
                </p>
              </div>
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-amber-100'}`}>
                <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                  <span className={`inline-flex justify-center items-center w-6 h-6 rounded-full ml-2 ${darkMode ? 'bg-amber-900 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>
                    3
                  </span>
                  التثقيف الشرعي حول الزواج:
                </h5>
                <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  احرص على قراءة الكتب والاستماع للمحاضرات المتعلقة بالحياة
                  الزوجية وآدابها في الإسلام، وتعرف على حقوق وواجبات كل من
                  الزوجين، وكيفية التعامل مع المشكلات الزوجية.
                </p>
              </div>
              <div className={`p-5 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-amber-100'}`}>
                <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                  <span className={`inline-flex justify-center items-center w-6 h-6 rounded-full ml-2 ${darkMode ? 'bg-amber-900 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>
                    4
                  </span>
                  التخطيط المالي والعملي:
                </h5>
                <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  ضع خطة مالية واضحة للزواج والحياة المستقبلية، وناقشها مع
                  شريكك، واتفقا على أسلوب إدارة الميزانية وتوزيع المسؤوليات
                  المالية بينكما.
                </p>
              </div>
            </div>
            <div className={`p-5 rounded-lg border shadow-sm ${darkMode ? 'bg-amber-900/50 border-amber-800' : 'bg-amber-100 border-amber-200'}`}>
              <h5 className={`font-bold mb-3 flex items-center ${darkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                <StarIcon className={`h-5 w-5 ml-2 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                نصائح ذهبية للخاطبين:
              </h5>
              <ul className="space-y-3">
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-500' : 'bg-amber-600'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-800'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    كن صادقاً وواضحاً في تعاملك مع الطرف الآخر
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-500' : 'bg-amber-600'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-800'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    تجنب المثالية المفرطة في توقعاتك عن الطرف الآخر
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-500' : 'bg-amber-600'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-800'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    تعلم فن الاستماع والتواصل الفعال
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-500' : 'bg-amber-600'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-800'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    لا تتردد في إنهاء الخطبة إذا اكتشفت عدم التوافق في أمور
                    جوهرية
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className={`ml-2 flex-shrink-0 h-2 w-2 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 ${darkMode ? 'bg-amber-500' : 'bg-amber-600'}`}></span>
                  <span className={`group-hover:${darkMode ? 'text-amber-400' : 'text-amber-800'} transition-colors duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    استخر الله تعالى واستشر أهل الخبرة قبل اتخاذ القرارات المهمة
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Progress Indicator */}
      <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 bg-opacity-90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg transition-all duration-300 ${showScrollTop ? 'opacity-100' : 'opacity-0'} ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="flex space-x-1 rtl:space-x-reverse">
          {Object.keys(sectionRefs.current).map(section => <button key={section} onClick={() => scrollToSection(section)} className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTopic === section ? darkMode ? `bg-${sectionColors[section]}-500 w-4` : `bg-${sectionColors[section]}-600 w-4` : darkMode ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-300 hover:bg-slate-400'}`} aria-label={`انتقل إلى قسم ${sectionNames[section]}`} />)}
        </div>
      </div>
      {/* Scroll to Top Button */}
      {showScrollTop && <button onClick={scrollToTop} className={`fixed bottom-20 right-8 p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${darkMode ? 'bg-purple-800 text-white hover:bg-purple-700' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
          <ChevronUpIcon className="h-6 w-6" />
        </button>}
      {/* Dark Mode Styles */}
      <style jsx global>{`
        @media print {
          .sticky,
          button,
          .fixed {
            display: none !important;
          }
          * {
            color: black !important;
            background: white !important;
          }
        }
        .dark-mode {
          background-color: #1e293b;
          color: #e2e8f0;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-in-out;
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>;
}