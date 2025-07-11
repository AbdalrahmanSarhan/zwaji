import React, { useState, useContext } from 'react';
import { ConsultantsList } from './ConsultantsList';
import { ConsultantForm } from './ConsultantForm';
import { DeleteConfirmation } from './DeleteConfirmation';
import { UserIcon, LogOutIcon, PlayIcon, UsersIcon, VideoIcon, CalendarCheckIcon, BarChartIcon, MessageCircleIcon, SettingsIcon, HomeIcon } from 'lucide-react';
import { ConsultantsProvider } from './ConsultantsContext';
import { VideosProvider } from './VideosContext';
import { VideosList } from './VideosList';
import { VideoForm } from './VideoForm';
import { DeleteVideoConfirmation } from './DeleteVideoConfirmation';
import { ConsultationRequestsProvider } from './ConsultationRequestsContext';
import { ConsultationRequestsList } from './ConsultationRequestsList';
import { ConsultationDetails } from './ConsultationDetails';
import { ContactProvider } from './ContactContext';
import { ContactList } from './ContactList';
import { AnalyticsDashboard } from './AnalyticsDashboard';
import { AdminSettings } from './AdminSettings';
export function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedConsultant, setSelectedConsultant] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  // Dashboard state
  const [activeTab, setActiveTab] = useState<'dashboard' | 'consultants' | 'videos' | 'consultations' | 'contact' | 'analytics' | 'settings'>('dashboard');
  const [showVideoForm, setShowVideoForm] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [showDeleteVideoConfirm, setShowDeleteVideoConfirm] = useState(false);
  // Consultation state
  const [selectedConsultationRequest, setSelectedConsultationRequest] = useState<any>(null);
  const [showConsultationDetails, setShowConsultationDetails] = useState(false);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Update authentication check with new credentials
    if (username === 'عبدالرحمن' && password === '123') {
      setIsAuthenticated(true);
    } else {
      alert('بيانات الدخول غير صحيحة');
    }
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };
  if (!isAuthenticated) {
    return <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserIcon className="h-8 w-8 text-sky-600" />
            </div>
            <h1 className="text-2xl font-bold text-sky-900">
              تسجيل الدخول للإدارة
            </h1>
            <p className="text-slate-600 mt-2">الرجاء إدخال بيانات الدخول</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  اسم المستخدم
                </label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  كلمة المرور
                </label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" required />
              </div>
            </div>
            <button type="submit" className="w-full mt-6 bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors duration-200">
              دخول
            </button>
          </form>
        </div>
      </div>;
  }
  return <ConsultantsProvider>
      <VideosProvider>
        <ConsultationRequestsProvider>
          <ContactProvider>
            <div className="min-h-screen bg-slate-50 flex">
              {/* Sidebar */}
              <div className="w-64 bg-white shadow-md h-screen sticky top-0 z-30 border-l border-slate-200">
                <div className="p-4 border-b border-slate-200">
                  <h1 className="text-xl font-bold text-sky-900 flex items-center">
                    <UserIcon className="h-6 w-6 ml-2 text-sky-600" />
                    لوحة الإدارة
                  </h1>
                </div>
                <nav className="p-4 space-y-1">
                  <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center py-2 px-3 rounded-md transition-colors duration-200 ${activeTab === 'dashboard' ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                    <HomeIcon className="h-5 w-5 ml-3" />
                    <span>الرئيسية</span>
                  </button>
                  <button onClick={() => setActiveTab('consultants')} className={`w-full flex items-center py-2 px-3 rounded-md transition-colors duration-200 ${activeTab === 'consultants' ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                    <UsersIcon className="h-5 w-5 ml-3" />
                    <span>الاستشاريين</span>
                  </button>
                  <button onClick={() => setActiveTab('videos')} className={`w-full flex items-center py-2 px-3 rounded-md transition-colors duration-200 ${activeTab === 'videos' ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                    <VideoIcon className="h-5 w-5 ml-3" />
                    <span>الفيديوهات</span>
                  </button>
                  <button onClick={() => setActiveTab('consultations')} className={`w-full flex items-center py-2 px-3 rounded-md transition-colors duration-200 ${activeTab === 'consultations' ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                    <CalendarCheckIcon className="h-5 w-5 ml-3" />
                    <span>طلبات الاستشارة</span>
                  </button>
                  <button onClick={() => setActiveTab('contact')} className={`w-full flex items-center py-2 px-3 rounded-md transition-colors duration-200 ${activeTab === 'contact' ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                    <MessageCircleIcon className="h-5 w-5 ml-3" />
                    <span>رسائل التواصل</span>
                  </button>
                  <button onClick={() => setActiveTab('analytics')} className={`w-full flex items-center py-2 px-3 rounded-md transition-colors duration-200 ${activeTab === 'analytics' ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                    <BarChartIcon className="h-5 w-5 ml-3" />
                    <span>التحليلات</span>
                  </button>
                  <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center py-2 px-3 rounded-md transition-colors duration-200 ${activeTab === 'settings' ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                    <SettingsIcon className="h-5 w-5 ml-3" />
                    <span>الإعدادات</span>
                  </button>
                  <div className="pt-4 mt-4 border-t border-slate-200">
                    <button onClick={handleLogout} className="w-full flex items-center py-2 px-3 rounded-md text-red-600 hover:bg-red-50 transition-colors duration-200">
                      <LogOutIcon className="h-5 w-5 ml-3" />
                      <span>تسجيل خروج</span>
                    </button>
                  </div>
                </nav>
              </div>
              {/* Main Content */}
              <div className="flex-1 min-h-screen">
                <header className="bg-white shadow-sm border-b border-slate-200 p-4 sticky top-0 z-20">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-sky-900">
                      {activeTab === 'dashboard' && 'الرئيسية'}
                      {activeTab === 'consultants' && 'إدارة الاستشاريين'}
                      {activeTab === 'videos' && 'إدارة الفيديوهات التوعوية'}
                      {activeTab === 'consultations' && 'طلبات الاستشارة'}
                      {activeTab === 'contact' && 'رسائل التواصل'}
                      {activeTab === 'analytics' && 'التحليلات والإحصائيات'}
                      {activeTab === 'settings' && 'إعدادات النظام'}
                    </h2>
                    <div className="flex items-center">
                      <span className="text-slate-600 ml-2">
                        مرحباً، عبدالرحمن
                      </span>
                      <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                        <UserIcon className="h-4 w-4 text-sky-600" />
                      </div>
                    </div>
                  </div>
                </header>
                <main className="p-6">
                  {activeTab === 'dashboard' && <div className="mb-6">
                      <AdminDashboardHome />
                    </div>}
                  {activeTab === 'consultants' && <ConsultantsList onEdit={consultant => {
                  setSelectedConsultant(consultant);
                  setShowForm(true);
                }} onDelete={consultant => {
                  setSelectedConsultant(consultant);
                  setShowDeleteConfirm(true);
                }} onAdd={() => {
                  setSelectedConsultant(null);
                  setShowForm(true);
                }} />}
                  {activeTab === 'videos' && <VideosList onEdit={video => {
                  setSelectedVideo(video);
                  setShowVideoForm(true);
                }} onDelete={video => {
                  setSelectedVideo(video);
                  setShowDeleteVideoConfirm(true);
                }} onAdd={() => {
                  setSelectedVideo(null);
                  setShowVideoForm(true);
                }} />}
                  {activeTab === 'consultations' && <ConsultationRequestsList onViewDetails={request => {
                  setSelectedConsultationRequest(request);
                  setShowConsultationDetails(true);
                }} />}
                  {activeTab === 'contact' && <ContactList />}
                  {activeTab === 'analytics' && <AnalyticsDashboard />}
                  {activeTab === 'settings' && <AdminSettings />}
                </main>
              </div>
              {showForm && <ConsultantForm consultant={selectedConsultant} onClose={() => {
              setShowForm(false);
              setSelectedConsultant(null);
            }} />}
              {showDeleteConfirm && <DeleteConfirmation consultant={selectedConsultant} onClose={() => {
              setShowDeleteConfirm(false);
              setSelectedConsultant(null);
            }} />}
              {showVideoForm && <VideoForm video={selectedVideo} onClose={() => {
              setShowVideoForm(false);
              setSelectedVideo(null);
            }} />}
              {showDeleteVideoConfirm && selectedVideo && <DeleteVideoConfirmation video={selectedVideo} onClose={() => {
              setShowDeleteVideoConfirm(false);
              setSelectedVideo(null);
            }} />}
              {showConsultationDetails && selectedConsultationRequest && <ConsultationDetails request={selectedConsultationRequest} onClose={() => {
              setShowConsultationDetails(false);
              setSelectedConsultationRequest(null);
            }} />}
            </div>
          </ContactProvider>
        </ConsultationRequestsProvider>
      </VideosProvider>
    </ConsultantsProvider>;
}
function AdminDashboardHome() {
  const {
    contactMessages
  } = useContact();
  const {
    consultationRequests
  } = useConsultationRequests();
  const {
    consultants
  } = useConsultants();
  const {
    videos
  } = useVideos();
  const newContactMessages = contactMessages.filter(m => m.status === 'new').length;
  const pendingConsultations = consultationRequests.filter(r => r.status === 'pending').length;
  return <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">الاستشاريين</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">
                {consultants.length}
              </h3>
            </div>
            <div className="p-3 bg-sky-100 rounded-lg">
              <UsersIcon className="h-6 w-6 text-sky-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">الفيديوهات</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">
                {videos.length}
              </h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <VideoIcon className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">طلبات الاستشارة الجديدة</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">
                {pendingConsultations}
              </h3>
            </div>
            <div className="p-3 bg-amber-100 rounded-lg">
              <CalendarCheckIcon className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">رسائل جديدة</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">
                {newContactMessages}
              </h3>
            </div>
            <div className="p-3 bg-rose-100 rounded-lg">
              <MessageCircleIcon className="h-6 w-6 text-rose-600" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
            <CalendarCheckIcon className="h-5 w-5 ml-2 text-amber-600" />
            <span>آخر طلبات الاستشارة</span>
          </h3>
          <div className="space-y-4">
            {consultationRequests.slice(0, 5).map(request => <div key={request.id} className="border-b border-slate-100 pb-3 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-slate-800">
                      {request.userName}
                    </p>
                    <p className="text-sm text-slate-500">
                      {request.consultantName}
                    </p>
                  </div>
                  <div className="text-xs">
                    {request.status === 'pending' && <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                        قيد الانتظار
                      </span>}
                    {request.status === 'confirmed' && <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                        مؤكد
                      </span>}
                    {request.status === 'completed' && <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
                        مكتمل
                      </span>}
                    {request.status === 'cancelled' && <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full">
                        ملغي
                      </span>}
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {new Date(request.createdAt).toLocaleDateString('ar-EG')}
                </p>
              </div>)}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
            <MessageCircleIcon className="h-5 w-5 ml-2 text-rose-600" />
            <span>آخر رسائل التواصل</span>
          </h3>
          <div className="space-y-4">
            {contactMessages.slice(0, 5).map(message => <div key={message.id} className="border-b border-slate-100 pb-3 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-slate-800">{message.name}</p>
                    <p className="text-sm text-slate-500 line-clamp-1">
                      {message.subject}
                    </p>
                  </div>
                  <div className="text-xs">
                    {message.status === 'new' && <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                        جديد
                      </span>}
                    {message.status === 'read' && <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                        مقروء
                      </span>}
                    {message.status === 'replied' && <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
                        تم الرد
                      </span>}
                    {message.status === 'archived' && <span className="px-2 py-1 bg-slate-100 text-slate-800 rounded-full">
                        مؤرشف
                      </span>}
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {new Date(message.createdAt).toLocaleDateString('ar-EG')}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}
function useConsultants() {
  const context = useContext(ConsultantsContext);
  if (context === undefined) {
    throw new Error('useConsultants must be used within a ConsultantsProvider');
  }
  return context;
}
function useVideos() {
  const context = useContext(VideosContext);
  if (context === undefined) {
    throw new Error('useVideos must be used within a VideosProvider');
  }
  return context;
}
function useConsultationRequests() {
  const context = useContext(ConsultationRequestsContext);
  if (context === undefined) {
    throw new Error('useConsultationRequests must be used within a ConsultationRequestsProvider');
  }
  return context;
}
function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
}
// Import needed contexts

import { ConsultantsContext } from './ConsultantsContext';
import { VideosContext } from './VideosContext';
import { ConsultationRequestsContext } from './ConsultationRequestsContext';
import { ContactContext } from './ContactContext';