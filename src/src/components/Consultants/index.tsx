import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchIcon, FilterIcon, CalendarIcon } from 'lucide-react';
import { ConsultantCard } from './ConsultantCard';
import { BookingForm } from './BookingForm';
import { SEO } from '../SEO';
import { PageHeader } from '../PageHeader';
interface ConsultantsProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
}
export function Consultants({
  userType
}: ConsultantsProps) {
  const [selectedConsultant, setSelectedConsultant] = useState<Consultant | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<string | null>(null);
  const location = useLocation();
  const path = location.pathname;
  // Determine which consultants to show based on path
  const getPathType = () => {
    if (path.includes('/husband/consultants')) {
      return 'husband';
    } else if (path.includes('/couple/consultants')) {
      return 'couple';
    } else if (path.includes('/stories/consultants')) {
      return 'stories';
    } else {
      return 'default';
    }
  };
  const pathType = getPathType();
  // Get appropriate title and description based on path
  const getPageTitle = () => {
    switch (pathType) {
      case 'husband':
        return 'استشاريون للأزواج';
      case 'couple':
        return 'استشاريون للأزواج والزوجات';
      case 'stories':
        return 'قصص نجاح مع الاستشاريين';
      default:
        return 'استشاريون متخصصون';
    }
  };
  const getPageDescription = () => {
    switch (pathType) {
      case 'husband':
        return 'استشاريون متخصصون في مساعدة الأزواج على تحسين علاقاتهم الزوجية';
      case 'couple':
        return 'استشاريون متخصصون في العلاج الزوجي للأزواج معاً';
      case 'stories':
        return 'قصص نجاح حقيقية مع استشاريين مختصين في العلاقات الزوجية';
      default:
        return 'يمكنك التواصل مع استشاريين متخصصين في العلاقات الزوجية، سواء كنت تواجه تحديات في علاقتك الزوجية أو ترغب في الاستعداد للزواج بشكل أفضل.';
    }
  };
  // Filter consultants based on path type
  const getFilteredConsultantsByPath = () => {
    if (pathType === 'husband') {
      return consultants.filter(c => c.specialization.some(s => s.includes('الأزواج') || s.includes('الرجال')));
    } else if (pathType === 'couple') {
      return consultants.filter(c => c.specialization.some(s => s.includes('العلاج الزوجي') || s.includes('الاستشارات الزوجية')));
    } else if (pathType === 'stories') {
      return consultants.filter(c => c.reviewCount > 10000); // Only show consultants with many reviews for "success stories"
    } else {
      return consultants;
    }
  };
  const handleBooking = (consultant: Consultant) => {
    setSelectedConsultant(consultant);
    setShowBookingForm(true);
  };
  const closeBookingForm = () => {
    setShowBookingForm(false);
  };
  const filteredConsultants = getFilteredConsultantsByPath().filter(consultant => {
    const matchesSearch = searchQuery === '' || consultant.name.includes(searchQuery) || consultant.specialization.some(s => s.includes(searchQuery)) || consultant.bio.includes(searchQuery);
    const matchesFilter = !filter || consultant.specialization.includes(filter);
    return matchesSearch && matchesFilter;
  });
  return <div className="max-w-4xl mx-auto">
      <SEO title={getPageTitle()} description={getPageDescription()} path={path} />
      <PageHeader title={getPageTitle()} description={getPageDescription()} icon={<CalendarIcon className="h-6 w-6" />} color="sky" />
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="ابحث عن استشاري..." className="w-full px-4 py-2 pr-10 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" />
            <SearchIcon className="absolute top-2.5 right-3 h-5 w-5 text-slate-400" />
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setFilter(filter === 'العلاقات الزوجية' ? null : 'العلاقات الزوجية')} className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center ${filter === 'العلاقات الزوجية' ? 'bg-sky-100 text-sky-700' : 'bg-gray-100 text-gray-700 hover:bg-sky-50'}`}>
              <span>العلاقات الزوجية</span>
            </button>
            <button onClick={() => setFilter(filter === 'الإرشاد الأسري' ? null : 'الإرشاد الأسري')} className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center ${filter === 'الإرشاد الأسري' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700 hover:bg-purple-50'}`}>
              <span>الإرشاد الأسري</span>
            </button>
            <button onClick={() => setFilter(filter === 'ما قبل الزواج' ? null : 'ما قبل الزواج')} className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center ${filter === 'ما قبل الزواج' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700 hover:bg-emerald-50'}`}>
              <span>ما قبل الزواج</span>
            </button>
          </div>
        </div>
      </div>
      {filteredConsultants.length === 0 ? <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="text-slate-500 mb-3">لا يوجد استشاريين مطابقين لبحثك</p>
          <button onClick={() => {
        setSearchQuery('');
        setFilter(null);
      }} className="px-4 py-2 bg-sky-100 hover:bg-sky-200 text-sky-700 rounded-md transition-colors duration-200">
            عرض جميع الاستشاريين
          </button>
        </div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredConsultants.map(consultant => <ConsultantCard key={consultant.id} consultant={consultant} onBooking={() => handleBooking(consultant)} />)}
        </div>}
      {showBookingForm && selectedConsultant && <BookingForm consultant={selectedConsultant} onClose={closeBookingForm} userType={userType} />}
    </div>;
}
export interface Consultant {
  id: number;
  name: string;
  title: string;
  image: string;
  specialization: string[];
  rating: number;
  reviewCount: number;
  experience: string;
  bio: string;
  availability: {
    days: string[];
    hours: string[];
  };
  price: {
    inPerson: string;
    online: string;
  };
  languages: string[];
  location: string;
  duration: string;
  discount: string;
  badges?: string[];
  onlineAvailable?: boolean;
  inPersonAvailable?: boolean;
}
const consultants: Consultant[] = [{
  id: 1,
  name: 'د. وائل المومني',
  title: 'أخصائي الطب النفسي وعلاج الإدمان',
  image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  specialization: ['العلاج النفسي', 'علاج الإدمان', 'الاستشارات الزوجية', 'العلاج الزوجي'],
  rating: 5.0,
  reviewCount: 11522,
  experience: '١٤ سنة خبرة',
  bio: 'دكتور نفسي متخصص في استشارات ما قبل الزواج نفسي كلينيكي',
  availability: {
    days: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
    hours: ['صباحاً', 'مساءً']
  },
  price: {
    inPerson: '50 دينار',
    online: '35 دينار'
  },
  location: 'عمان - مجمع شيرين الطبي - بجانب المستشفى السعودي - الطابق الرابع',
  duration: '20 دقيقة',
  languages: ['العربية', 'الإنجليزية'],
  discount: 'تخفيض 50٪ على جميع الخدمات!',
  onlineAvailable: true,
  inPersonAvailable: true
}, {
  id: 2,
  name: 'د. موسى القطامي',
  title: 'أخصائي الطب النفسي وعلاج الإدمان',
  image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  specialization: ['العلاج النفسي', 'علاج الإدمان', 'الاستشارات الزوجية', 'الأزواج'],
  rating: 5.0,
  reviewCount: 9777,
  experience: '١٣ سنة خبرة',
  bio: 'دكتور نفسي متخصص في استشارات ما قبل الزواج نفسي كلينيكي',
  availability: {
    days: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
    hours: ['صباحاً', 'مساءً']
  },
  price: {
    inPerson: '50 دينار',
    online: '30 دينار'
  },
  location: 'عمان - مقابل مبنى الضمان الصحي - المدينة الرياضية بجانب مطعم',
  duration: '20 دقيقة',
  languages: ['العربية', 'الإنجليزية'],
  discount: 'تخفيض 50٪ على جميع الخدمات!',
  badges: ['زيارة المنزل متوفرة'],
  onlineAvailable: true,
  inPersonAvailable: true
}, {
  id: 3,
  name: 'د. عصام محمد الجراح',
  title: 'استشاري الطب النفسي وعلاج الإدمان',
  image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  specialization: ['العلاج النفسي', 'علاج الإدمان', 'الاستشارات الزوجية', 'الرجال'],
  rating: 5.0,
  reviewCount: 12277,
  experience: '١٣ سنة خبرة',
  bio: 'دكتور نفسي متخصص في استشارات ما قبل الزواج نفسي كلينيكي',
  availability: {
    days: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
    hours: ['صباحاً', 'مساءً']
  },
  price: {
    inPerson: '60 دينار',
    online: '40 دينار'
  },
  location: 'عمان - بجانب مستشفى الخالدي - مجمع نقابة طبيب نفسي الطابق',
  duration: '30 دقيقة',
  languages: ['العربية', 'الإنجليزية'],
  discount: 'تخفيض 50٪ على جميع الخدمات!',
  onlineAvailable: true,
  inPersonAvailable: true
}, {
  id: 4,
  name: 'د. خالد البداينة',
  title: 'استشاري الطب النفسي وعلاج الإدمان',
  image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  specialization: ['العلاج النفسي', 'علاج الإدمان', 'الاستشارات الزوجية', 'العلاج الزوجي'],
  rating: 5.0,
  reviewCount: 12667,
  experience: '١٥ سنة خبرة',
  bio: 'دكتور نفسي متخصص في استشارات ما قبل الزواج نفسي كلينيكي',
  availability: {
    days: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
    hours: ['صباحاً', 'مساءً']
  },
  price: {
    inPerson: '55 دينار',
    online: '35 دينار'
  },
  location: 'عمان - شارع الخالدي - عمارة المشعل - الطابق الأول',
  duration: '30 دقيقة',
  languages: ['العربية', 'الإنجليزية'],
  discount: 'تخفيض 50٪ على جميع الخدمات!',
  onlineAvailable: true,
  inPersonAvailable: false
}];