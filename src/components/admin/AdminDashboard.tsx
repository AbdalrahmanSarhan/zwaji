import React, { useState } from 'react';
import { ConsultantsList } from './ConsultantsList';
import { ConsultantForm } from './ConsultantForm';
import { DeleteConfirmation } from './DeleteConfirmation';
import { UserIcon, LogOutIcon, PlayIcon, UsersIcon, VideoIcon } from 'lucide-react';
import { ConsultantsProvider } from './ConsultantsContext';
import { VideosProvider } from './VideosContext';
import { VideosList } from './VideosList';
import { VideoForm } from './VideoForm';
import { DeleteVideoConfirmation } from './DeleteVideoConfirmation';
export function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedConsultant, setSelectedConsultant] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  // New state for videos management
  const [activeTab, setActiveTab] = useState<'consultants' | 'videos'>('consultants');
  const [showVideoForm, setShowVideoForm] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [showDeleteVideoConfirm, setShowDeleteVideoConfirm] = useState(false);
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
        <div className="min-h-screen bg-slate-50">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-sky-900">
                  لوحة الإدارة
                </h1>
                <button onClick={handleLogout} className="flex items-center px-4 py-2 text-slate-600 hover:text-slate-900 focus:outline-none">
                  <LogOutIcon className="h-5 w-5 ml-2" />
                  <span>تسجيل خروج</span>
                </button>
              </div>
            </div>
          </header>
          {/* Tab Navigation */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 rtl:space-x-reverse" aria-label="Tabs">
                <button onClick={() => setActiveTab('consultants')} className={`py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm ${activeTab === 'consultants' ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                  <UsersIcon className="h-5 w-5 ml-2" />
                  إدارة الاستشاريين
                </button>
                <button onClick={() => setActiveTab('videos')} className={`py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm ${activeTab === 'videos' ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                  <VideoIcon className="h-5 w-5 ml-2" />
                  إدارة الفيديوهات التوعوية
                </button>
              </nav>
            </div>
          </div>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          </main>
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
        </div>
      </VideosProvider>
    </ConsultantsProvider>;
}