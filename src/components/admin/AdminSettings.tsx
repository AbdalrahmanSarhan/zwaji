import React, { useState } from 'react';
import { SaveIcon, RefreshCwIcon, ShieldIcon, BellIcon, UserIcon, MailIcon, SettingsIcon } from 'lucide-react';
export function AdminSettings() {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'حقوق الزوجين في الإسلام',
    siteDescription: 'منصة توعوية عن حقوق الزوجين في الإسلام',
    contactEmail: 'admin@example.com',
    supportPhone: '0777123456',
    enableRegistration: true,
    maintenanceMode: false
  });
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    newConsultationAlert: true,
    newContactMessageAlert: true,
    dailySummary: false,
    weeklySummary: true
  });
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: 60,
    maxLoginAttempts: 5,
    passwordExpiry: 90
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const handleGeneralSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value,
      type
    } = e.target;
    setGeneralSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  const handleNotificationSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      checked
    } = e.target;
    setNotificationSettings(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  const handleSecuritySettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value,
      type
    } = e.target;
    setSecuritySettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : type === 'number' ? parseInt(value) : value
    }));
  };
  const saveSettings = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      // Save to localStorage for demo purposes
      localStorage.setItem('adminGeneralSettings', JSON.stringify(generalSettings));
      localStorage.setItem('adminNotificationSettings', JSON.stringify(notificationSettings));
      localStorage.setItem('adminSecuritySettings', JSON.stringify(securitySettings));
      setIsSubmitting(false);
      setSuccessMessage('تم حفظ الإعدادات بنجاح');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }, 1000);
  };
  return <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-sky-900">إعدادات النظام</h2>
        <button onClick={saveSettings} disabled={isSubmitting} className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200 flex items-center">
          {isSubmitting ? <>
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
              <span>جاري الحفظ...</span>
            </> : <>
              <SaveIcon className="h-4 w-4 ml-2" />
              <span>حفظ الإعدادات</span>
            </>}
        </button>
      </div>
      {successMessage && <div className="mb-6 bg-green-100 text-green-800 p-3 rounded-md flex items-center">
          <span>{successMessage}</span>
        </div>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center">
            <SettingsIcon className="h-5 w-5 text-slate-600 ml-2" />
            <h3 className="font-bold text-slate-800">الإعدادات العامة</h3>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                اسم الموقع
              </label>
              <input type="text" name="siteName" value={generalSettings.siteName} onChange={handleGeneralSettingsChange} className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                وصف الموقع
              </label>
              <textarea name="siteDescription" value={generalSettings.siteDescription} onChange={handleGeneralSettingsChange} className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" rows={3}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                البريد الإلكتروني للتواصل
              </label>
              <input type="email" name="contactEmail" value={generalSettings.contactEmail} onChange={handleGeneralSettingsChange} className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                رقم هاتف الدعم الفني
              </label>
              <input type="text" name="supportPhone" value={generalSettings.supportPhone} onChange={handleGeneralSettingsChange} className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="enableRegistration" id="enableRegistration" checked={generalSettings.enableRegistration} onChange={e => setGeneralSettings(prev => ({
              ...prev,
              enableRegistration: e.target.checked
            }))} className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-300 rounded ml-2" />
              <label htmlFor="enableRegistration" className="text-sm text-slate-700">
                تفعيل تسجيل المستخدمين الجدد
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="maintenanceMode" id="maintenanceMode" checked={generalSettings.maintenanceMode} onChange={e => setGeneralSettings(prev => ({
              ...prev,
              maintenanceMode: e.target.checked
            }))} className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-300 rounded ml-2" />
              <label htmlFor="maintenanceMode" className="text-sm text-slate-700">
                وضع الصيانة
              </label>
            </div>
          </div>
        </div>
        {/* Notification Settings */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center">
            <BellIcon className="h-5 w-5 text-slate-600 ml-2" />
            <h3 className="font-bold text-slate-800">إعدادات الإشعارات</h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center">
              <input type="checkbox" name="emailNotifications" id="emailNotifications" checked={notificationSettings.emailNotifications} onChange={handleNotificationSettingsChange} className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-300 rounded ml-2" />
              <label htmlFor="emailNotifications" className="text-sm text-slate-700">
                تفعيل الإشعارات عبر البريد الإلكتروني
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="newConsultationAlert" id="newConsultationAlert" checked={notificationSettings.newConsultationAlert} onChange={handleNotificationSettingsChange} className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-300 rounded ml-2" />
              <label htmlFor="newConsultationAlert" className="text-sm text-slate-700">
                تنبيه عند وجود طلب استشارة جديد
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="newContactMessageAlert" id="newContactMessageAlert" checked={notificationSettings.newContactMessageAlert} onChange={handleNotificationSettingsChange} className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-300 rounded ml-2" />
              <label htmlFor="newContactMessageAlert" className="text-sm text-slate-700">
                تنبيه عند وجود رسالة تواصل جديدة
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="dailySummary" id="dailySummary" checked={notificationSettings.dailySummary} onChange={handleNotificationSettingsChange} className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-300 rounded ml-2" />
              <label htmlFor="dailySummary" className="text-sm text-slate-700">
                ملخص يومي للنشاطات
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="weeklySummary" id="weeklySummary" checked={notificationSettings.weeklySummary} onChange={handleNotificationSettingsChange} className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-300 rounded ml-2" />
              <label htmlFor="weeklySummary" className="text-sm text-slate-700">
                ملخص أسبوعي للنشاطات
              </label>
            </div>
          </div>
        </div>
        {/* Security Settings */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center">
            <ShieldIcon className="h-5 w-5 text-slate-600 ml-2" />
            <h3 className="font-bold text-slate-800">إعدادات الأمان</h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center">
              <input type="checkbox" name="twoFactorAuth" id="twoFactorAuth" checked={securitySettings.twoFactorAuth} onChange={e => setSecuritySettings(prev => ({
              ...prev,
              twoFactorAuth: e.target.checked
            }))} className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-300 rounded ml-2" />
              <label htmlFor="twoFactorAuth" className="text-sm text-slate-700">
                تفعيل التحقق الثنائي
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                مدة انتهاء الجلسة (بالدقائق)
              </label>
              <input type="number" name="sessionTimeout" value={securitySettings.sessionTimeout} onChange={e => setSecuritySettings(prev => ({
              ...prev,
              sessionTimeout: parseInt(e.target.value)
            }))} className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                الحد الأقصى لمحاولات تسجيل الدخول
              </label>
              <input type="number" name="maxLoginAttempts" value={securitySettings.maxLoginAttempts} onChange={e => setSecuritySettings(prev => ({
              ...prev,
              maxLoginAttempts: parseInt(e.target.value)
            }))} className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                مدة صلاحية كلمة المرور (بالأيام)
              </label>
              <input type="number" name="passwordExpiry" value={securitySettings.passwordExpiry} onChange={e => setSecuritySettings(prev => ({
              ...prev,
              passwordExpiry: parseInt(e.target.value)
            }))} className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
            </div>
          </div>
        </div>
      </div>
    </div>;
}