import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIcon, UsersIcon, HeartIcon, SparklesIcon } from 'lucide-react';
import { urlMappings } from '../utils/urlMappings';
interface WelcomeProps {
  onSelectUserType: (type: 'husband' | 'wife' | 'both' | 'engaged') => void;
}
export function Welcome({
  onSelectUserType
}: WelcomeProps) {
  const navigate = useNavigate();
  const handleSelectUserType = (type: 'husband' | 'wife' | 'both' | 'engaged') => {
    onSelectUserType(type);
    navigate(`/${urlMappings.userTypePaths[type]}`);
  };
  return <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px'
      }} />
      </div>
      <div className="max-w-4xl mx-auto relative">
        <div className="mb-12 animate-fadeIn">
          <div className="relative mx-auto w-32 h-32 mb-8">
            <div className="absolute inset-0 bg-rose-200 rounded-full animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-sky-500 rounded-full opacity-20 animate-pulse delay-100" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <HeartIcon className="h-20 w-20 text-rose-500 transform hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="text-2xl font-arabic text-white">الله</span>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-sky-900 leading-tight font-arabic">
            حقوق الزوجين في الإسلام
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-700 max-w-2xl mx-auto leading-relaxed">
            <span className="text-rose-600">❝</span>
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
            لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
            <span className="text-rose-600">❞</span>
          </p>
        </div>
        <div className="mb-12 animate-fadeIn animation-delay-300">
          <h2 className="text-2xl font-bold mb-8 text-sky-800">اختر مسارك</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button onClick={() => handleSelectUserType('husband')} className="group relative bg-white hover:bg-sky-50 border-2 border-sky-200 rounded-lg p-8 shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-sky-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-sky-100 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
                  <UserIcon className="absolute inset-0 h-20 w-20 text-sky-700 p-4 transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="text-xl font-medium text-sky-900 block">
                  أنا زوج
                </span>
                <span className="text-sm text-sky-600 mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  اعرف حقوقك وواجباتك
                </span>
              </div>
            </button>
            <button onClick={() => handleSelectUserType('wife')} className="group relative bg-white hover:bg-rose-50 border-2 border-rose-200 rounded-lg p-8 shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-rose-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-rose-100 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
                  <UserIcon className="absolute inset-0 h-20 w-20 text-rose-700 p-4 transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="text-xl font-medium text-rose-900 block">
                  أنا زوجة
                </span>
                <span className="text-sm text-rose-600 mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  اعرفي حقوقك وواجباتك
                </span>
              </div>
            </button>
            <button onClick={() => handleSelectUserType('engaged')} className="group relative bg-white hover:bg-purple-50 border-2 border-purple-200 rounded-lg p-8 shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-purple-100 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
                  <SparklesIcon className="absolute inset-0 h-20 w-20 text-purple-700 p-4 transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="text-xl font-medium text-purple-900 block">
                  مقبل على الزواج
                </span>
                <span className="text-sm text-purple-600 mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  استعد للحياة الزوجية
                </span>
              </div>
            </button>
            <button onClick={() => handleSelectUserType('both')} className="group relative bg-white hover:bg-amber-50 border-2 border-amber-200 rounded-lg p-8 shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-amber-100 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
                  <UsersIcon className="absolute inset-0 h-20 w-20 text-amber-700 p-4 transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="text-xl font-medium text-amber-900 block">
                  معرفة عامة
                </span>
                <span className="text-sm text-amber-600 mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  تعلم أسس الحياة الزوجية
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="text-slate-600 mt-12 animate-fadeIn animation-delay-600 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <p className="text-lg">
            <span className="text-sky-600">❖</span> مبني على تعاليم القرآن
            الكريم والسنة النبوية الشريفة{' '}
            <span className="text-sky-600">❖</span>
          </p>
        </div>
      </div>
    </div>;
}