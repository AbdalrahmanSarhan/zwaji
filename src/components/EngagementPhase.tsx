import React, { useCallback, useEffect, useMemo, useState, useRef, memo, createElement } from 'react';
import { HeartIcon, BookOpenIcon, CalendarIcon, HandIcon, AlertTriangleIcon, CheckCircleIcon, XCircleIcon, GiftIcon, MessageCircleIcon, ShieldIcon, HeadphonesIcon, UserIcon, UsersIcon, ChevronUpIcon, ArrowRightIcon, ChevronDownIcon, BookIcon, LightbulbIcon, StarIcon, MoonIcon, SunIcon, PrinterIcon, ShareIcon, HomeIcon, SearchIcon, XIcon } from 'lucide-react';
// Memoized section component
const Section = memo(({
  id,
  title,
  subtitle,
  icon: Icon,
  color,
  isExpanded,
  onToggle,
  children,
  darkMode
}) => {
  return <div className={`rounded-lg shadow-md overflow-hidden mb-8 transition-all duration-500 hover:shadow-lg ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <button onClick={() => onToggle(id)} className={`w-full p-4 text-right flex items-center transition-colors duration-200 ${isExpanded ? darkMode ? `bg-${color}-900/50` : `bg-${color}-100` : darkMode ? 'hover:bg-slate-700' : `hover:bg-${color}-50`}`}>
          <div className={`p-2 rounded-full ml-3 ${darkMode ? `bg-${color}-900` : `bg-${color}-100`}`}>
            <Icon className={`h-6 w-6 ${darkMode ? `text-${color}-400` : `text-${color}-600`}`} />
          </div>
          <div className="flex-1">
            <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : `text-${color}-800`}`}>
              {title}
            </h3>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {subtitle}
            </p>
          </div>
          <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${darkMode ? `text-${color}-400` : `text-${color}-600`} ${isExpanded ? 'transform rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          {children}
        </div>
      </div>;
});
// Memoized navigation component
const Navigation = memo(({
  sections,
  activeTopic,
  onSectionClick,
  isSticky,
  darkMode
}) => {
  return <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {Object.entries(sections).map(([id, {
      name,
      color
    }]) => <button key={id} onClick={() => onSectionClick(id)} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTopic === id ? darkMode ? `bg-${color}-900 text-${color}-300` : `bg-${color}-100 text-${color}-800` : darkMode ? 'hover:bg-slate-700 text-slate-300' : `hover:bg-${color}-50 text-slate-600`}`}>
            {name}
          </button>)}
      </div>;
});
export function EngagementPhase() {
  const [expandedSection, setExpandedSection] = useState<string | null>('definition');
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [highlightedSections, setHighlightedSections] = useState<string[]>([]);
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
  // Memoized section data
  const sectionData = useMemo(() => ({
    definition: {
      name: 'تعريف الخطبة',
      color: 'purple'
    },
    communication: {
      name: 'التواصل الفعال',
      color: 'blue'
    },
    rules: {
      name: 'ضوابط الخطبة',
      color: 'emerald'
    },
    allowed: {
      name: 'ما يجوز وما لا يجوز في فترة الخطوبة',
      color: 'sky'
    },
    challenges: {
      name: 'تحديات شائعة في فترة الخطوبة',
      color: 'red'
    },
    customs: {
      name: 'عادات وتقاليد الخطوبة',
      color: 'rose'
    },
    tips: {
      name: 'نصائح لنجاح فترة الخطوبة',
      color: 'amber'
    }
  }), []);
  // Optimized event handlers with useCallback
  const toggleSection = useCallback((section: string) => {
    setExpandedSection(prev => prev === section ? null : section);
  }, []);
  const scrollToSection = useCallback((section: string) => {
    const element = sectionRefs.current[section]?.current;
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setTimeout(() => setExpandedSection(section), 500);
      setActiveTopic(section);
    }
  }, []);
  const handleSearch = useCallback(() => {
    if (!searchQuery.trim()) {
      setHighlightedSections([]);
      return;
    }
    const sections = Object.keys(sectionRefs.current).filter(section => {
      const element = sectionRefs.current[section].current;
      return element?.textContent?.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setHighlightedSections(sections);
    if (sections.length > 0) {
      scrollToSection(sections[0]);
    }
  }, [searchQuery, scrollToSection]);
  // Use IntersectionObserver for scroll tracking
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveTopic(sectionId);
        }
      });
    }, {
      threshold: 0.3
    });
    Object.keys(sectionRefs.current).forEach(section => {
      const element = sectionRefs.current[section].current;
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
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
  // Build sections object for navigation
  const sections = useMemo(() => {
    const obj: any = {};
    Object.keys(sectionData).forEach(section => {
      obj[section] = {
        name: sectionData[section].name,
        color: sectionData[section].color
      };
    });
    return obj;
  }, [sectionData]);
  const handleShare = async () => {
    try {
      // Get only the text content we want to share
      const content = Object.keys(sectionRefs.current).map(section => {
        const element = sectionRefs.current[section].current;
        const title = sectionData[section]?.name;
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
  return <div className={`max-w-4xl mx-auto transition-colors duration-300 ${darkMode ? 'dark-mode text-slate-200' : ''}`}>
      {/* Page Header */}
      <div className={`relative mb-8 ${darkMode ? 'bg-slate-800' : 'bg-gradient-to-r from-purple-50 to-indigo-50'} rounded-xl p-8 shadow-md transition-all duration-300`}>
        <div className="absolute top-4 left-4 flex space-x-2 rtl:space-x-reverse">
          <button onClick={() => setDarkMode(prev => !prev)} className={`p-2 rounded-full transition-colors duration-200 ${darkMode ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' : 'bg-white text-slate-700 hover:bg-purple-100'}`} aria-label={darkMode ? 'وضع النهار' : 'وضع القراءة الليلي'}>
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button onClick={() => setShowSearch(prev => !prev)} className={`p-2 rounded-full transition-colors duration-200 ${showSearch ? darkMode ? 'bg-slate-700 text-blue-400' : 'bg-blue-100 text-blue-700' : darkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-white text-slate-700 hover:bg-purple-100'}`} aria-label="بحث في المحتوى">
            {showSearch ? <XIcon className="h-5 w-5" /> : <SearchIcon className="h-5 w-5" />}
          </button>
          <button onClick={() => {
          window.print();
        }} className={`p-2 rounded-full transition-colors duration-200 ${darkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-white text-slate-700 hover:bg-purple-100'}`} aria-label="طباعة المحتوى">
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
          <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-purple-900'}`}>
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
                    {sectionData[section]?.name}
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
          <Navigation sections={sections} activeTopic={activeTopic} onSectionClick={scrollToSection} isSticky={isNavigationSticky} darkMode={darkMode} />
        </div>
      </div>
      {/* Sections using the memoized Section component */}
      <Section id="definition" title="تعريف الخطبة في الإسلام" subtitle="ماهيّة الخطبة وحكمها الشرعي" icon={BookOpenIcon} color="purple" isExpanded={expandedSection === 'definition'} onToggle={toggleSection} darkMode={darkMode}>
        {/* Content for definition section */}
        <div className={`p-6 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-purple-50 border-purple-100'}`}>
          <p className={`mb-4 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            الخطبة في الإسلام هي طلب الرجل يد امرأة معينة للزواج بها، والتقدم
            إليها أو إلى وليها لهذا الغرض. وهي وعد بالزواج وليست عقداً ملزماً,
            فلكل من الطرفين الحق في العدول عنها.
          </p>
          {/* Additional content can be added here */}
        </div>
      </Section>
      <Section id="communication" title="التواصل الفعال أثناء الخطوبة" subtitle="كيفية التواصل الإيجابي ضمن الضوابط الشرعية" icon={MessageCircleIcon} color="blue" isExpanded={expandedSection === 'communication'} onToggle={toggleSection} darkMode={darkMode}>
        {/* Content for communication section */}
        <div className={`p-6 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-blue-50 border-blue-100'}`}>
          {/* ... */}
        </div>
      </Section>
      <Section id="rules" title="ضوابط الخطبة في الإسلام" subtitle="أحكام وقواعد يجب مراعاتها أثناء فترة الخطوبة" icon={HandIcon} color="emerald" isExpanded={expandedSection === 'rules'} onToggle={toggleSection} darkMode={darkMode}>
        {/* Content for rules section */}
        <div className={`p-6 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-emerald-50 border-emerald-100'}`}>
          {/* ... */}
        </div>
      </Section>
      <Section id="allowed" title="ما يجوز وما لا يجوز في فترة الخطوبة" subtitle="حدود العلاقة بين الخاطبين" icon={CheckCircleIcon} color="sky" isExpanded={expandedSection === 'allowed'} onToggle={toggleSection} darkMode={darkMode}>
        {/* Content for allowed section */}
        <div className={`p-6 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-sky-50 border-sky-100'}`}>
          {/* ... */}
        </div>
      </Section>
      <Section id="challenges" title="تحديات شائعة في فترة الخطوبة" subtitle="مشكلات قد تواجه الخاطبين وكيفية التعامل معها" icon={ShieldIcon} color="red" isExpanded={expandedSection === 'challenges'} onToggle={toggleSection} darkMode={darkMode}>
        {/* Content for challenges section */}
        <div className={`p-6 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-red-50 border-red-100'}`}>
          {/* ... */}
        </div>
      </Section>
      <Section id="customs" title="عادات وتقاليد الخطوبة" subtitle="ما يراعى من أعراف وتقاليد مع الضوابط الشرعية" icon={GiftIcon} color="rose" isExpanded={expandedSection === 'customs'} onToggle={toggleSection} darkMode={darkMode}>
        {/* Content for customs section */}
        <div className={`p-6 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-rose-50 border-rose-100'}`}>
          {/* ... */}
        </div>
      </Section>
      <Section id="tips" title="نصائح لنجاح فترة الخطوبة" subtitle="كيف تستثمر هذه الفترة بشكل إيجابي" icon={CalendarIcon} color="amber" isExpanded={expandedSection === 'tips'} onToggle={toggleSection} darkMode={darkMode}>
        {/* Content for tips section */}
        <div className={`p-6 border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-amber-50 border-amber-100'}`}>
          {/* ... */}
        </div>
      </Section>
      {/* Progress Indicator */}
      <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 bg-opacity-90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg transition-all duration-300 ${showScrollTop ? 'opacity-100' : 'opacity-0'} ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="flex space-x-1 rtl:space-x-reverse">
          {Object.keys(sectionRefs.current).map(section => <button key={section} onClick={() => scrollToSection(section)} className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTopic === section ? darkMode ? `bg-${sectionData[section]?.color}-500 w-4` : `bg-${sectionData[section]?.color}-600 w-4` : darkMode ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-300 hover:bg-slate-400'}`} aria-label={`انتقل إلى قسم ${sectionData[section]?.name}`} />)}
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