import React, { useState, createElement } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { CalendarIcon, UsersIcon, BookOpenIcon, MessageCircleIcon, PieChartIcon, BarChartIcon, TrendingUpIcon, FilterIcon, RefreshCwIcon } from 'lucide-react';
export function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState<'day' | 'week' | 'month' | 'year'>('month');
  const [isLoading, setIsLoading] = useState(false);
  const refreshData = () => {
    setIsLoading(true);
    // In a real app, this would fetch fresh data from an API
    setTimeout(() => {
      setIsLoading(false);
      // Show success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-24 right-1/2 transform translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-lg z-50 animate-fadeIn';
      notification.textContent = 'تم تحديث البيانات بنجاح';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.classList.add('opacity-0');
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 2000);
    }, 1000);
  };
  // Sample data - in a real app, this would come from an API
  const visitorData = [{
    name: 'السبت',
    visitors: 1200,
    pageViews: 3800
  }, {
    name: 'الأحد',
    visitors: 1800,
    pageViews: 4800
  }, {
    name: 'الإثنين',
    visitors: 1600,
    pageViews: 4200
  }, {
    name: 'الثلاثاء',
    visitors: 1400,
    pageViews: 3900
  }, {
    name: 'الأربعاء',
    visitors: 1700,
    pageViews: 4500
  }, {
    name: 'الخميس',
    visitors: 1900,
    pageViews: 5100
  }, {
    name: 'الجمعة',
    visitors: 2100,
    pageViews: 5800
  }];
  const userTypeData = [{
    name: 'الزوج',
    value: 35,
    color: '#0284c7'
  }, {
    name: 'الزوجة',
    value: 40,
    color: '#ec4899'
  }, {
    name: 'المقبلين على الزواج',
    value: 25,
    color: '#8b5cf6'
  }];
  const contentInteractionData = [{
    name: 'بطاقات معرفية',
    views: 5200,
    interactions: 2800
  }, {
    name: 'مقارنة الحقوق',
    views: 3800,
    interactions: 1900
  }, {
    name: 'سيناريوهات واقعية',
    views: 4500,
    interactions: 2400
  }, {
    name: 'فيديوهات توعوية',
    views: 6200,
    interactions: 3500
  }, {
    name: 'أدوات زوجية',
    views: 3200,
    interactions: 1700
  }];
  const consultantData = [{
    name: 'د. وائل المومني',
    consultations: 28
  }, {
    name: 'د. موسى القطامي',
    consultations: 22
  }, {
    name: 'د. عصام محمد الجراح',
    consultations: 18
  }, {
    name: 'د. خالد البداينة',
    consultations: 15
  }];
  const overviewStats = [{
    title: 'إجمالي الزيارات',
    value: '14,352',
    icon: <UsersIcon className="h-6 w-6 text-sky-600" />,
    change: '+12%',
    color: 'text-green-600'
  }, {
    title: 'مشاهدات الصفحات',
    value: '38,521',
    icon: <BookOpenIcon className="h-6 w-6 text-purple-600" />,
    change: '+8%',
    color: 'text-green-600'
  }, {
    title: 'طلبات الاستشارة',
    value: '83',
    icon: <CalendarIcon className="h-6 w-6 text-amber-600" />,
    change: '+15%',
    color: 'text-green-600'
  }, {
    title: 'رسائل التواصل',
    value: '127',
    icon: <MessageCircleIcon className="h-6 w-6 text-rose-600" />,
    change: '-3%',
    color: 'text-red-600'
  }];
  return <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-sky-900">
          لوحة التحليلات والإحصائيات
        </h2>
        <div className="flex items-center gap-3">
          <div className="bg-slate-100 rounded-lg p-1 flex">
            <button onClick={() => setDateRange('day')} className={`px-3 py-1.5 rounded-md text-sm ${dateRange === 'day' ? 'bg-white shadow-sm text-sky-700' : 'text-slate-600 hover:bg-slate-200'}`}>
              اليوم
            </button>
            <button onClick={() => setDateRange('week')} className={`px-3 py-1.5 rounded-md text-sm ${dateRange === 'week' ? 'bg-white shadow-sm text-sky-700' : 'text-slate-600 hover:bg-slate-200'}`}>
              الأسبوع
            </button>
            <button onClick={() => setDateRange('month')} className={`px-3 py-1.5 rounded-md text-sm ${dateRange === 'month' ? 'bg-white shadow-sm text-sky-700' : 'text-slate-600 hover:bg-slate-200'}`}>
              الشهر
            </button>
            <button onClick={() => setDateRange('year')} className={`px-3 py-1.5 rounded-md text-sm ${dateRange === 'year' ? 'bg-white shadow-sm text-sky-700' : 'text-slate-600 hover:bg-slate-200'}`}>
              السنة
            </button>
          </div>
          <button onClick={refreshData} disabled={isLoading} className="flex items-center px-3 py-2 bg-sky-100 text-sky-700 rounded-md hover:bg-sky-200 transition-colors duration-200">
            {isLoading ? <>
                <div className="h-4 w-4 border-2 border-sky-600 border-t-transparent rounded-full animate-spin ml-2"></div>
                <span>جاري التحديث...</span>
              </> : <>
                <RefreshCwIcon className="h-4 w-4 ml-2" />
                <span>تحديث البيانات</span>
              </>}
          </button>
        </div>
      </div>
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {overviewStats.map((stat, index) => <div key={index} className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 text-sm mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold text-slate-800">
                  {stat.value}
                </h3>
                <p className={`text-xs mt-1 ${stat.color}`}>
                  {stat.change} مقارنة بالفترة السابقة
                </p>
              </div>
              <div className="p-3 bg-slate-100 rounded-lg">{stat.icon}</div>
            </div>
          </div>)}
      </div>
      {/* Visitors Chart */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center">
            <TrendingUpIcon className="h-5 w-5 ml-2 text-sky-600" />
            <span>الزيارات ومشاهدات الصفحات</span>
          </h3>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={visitorData} margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5
            }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="visitors" name="الزيارات" fill="#0ea5e9" />
                <Bar dataKey="pageViews" name="مشاهدات الصفحات" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* User Types and Content Interaction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center">
              <PieChartIcon className="h-5 w-5 ml-2 text-purple-600" />
              <span>توزيع المستخدمين</span>
            </h3>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={userTypeData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" label={({
                  name,
                  percent
                }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                    {userTypeData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center">
              <BarChartIcon className="h-5 w-5 ml-2 text-amber-600" />
              <span>تفاعل المحتوى</span>
            </h3>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={contentInteractionData} margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" width={120} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="views" name="المشاهدات" fill="#f59e0b" />
                  <Bar dataKey="interactions" name="التفاعلات" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      {/* Consultant Performance */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center">
            <UsersIcon className="h-5 w-5 ml-2 text-rose-600" />
            <span>أداء الاستشاريين</span>
          </h3>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={consultantData} margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5
            }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="consultations" name="عدد الاستشارات" fill="#ec4899" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-slate-500 mt-6">
        <p>
          آخر تحديث للبيانات:{' '}
          {new Date().toLocaleDateString('ar-EG', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
        </p>
      </div>
    </div>;
}