import React, { useEffect, useState } from 'react';
import { XIcon, CalendarIcon, ClockIcon, CheckIcon, UserIcon, MonitorIcon, UsersIcon } from 'lucide-react';
import { Consultant } from './index';
interface BookingFormProps {
  consultant: Consultant;
  onClose: () => void;
  userType: 'husband' | 'wife' | 'both' | 'engaged';
}
export function BookingForm({
  consultant,
  onClose,
  userType
}: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [consultationType, setConsultationType] = useState<'online' | 'inPerson' | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  // Set default consultation type based on availability
  useEffect(() => {
    if (consultant.onlineAvailable) {
      setConsultationType('online');
    } else if (consultant.inPersonAvailable) {
      setConsultationType('inPerson');
    }
  }, [consultant]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };
  const getConsultationPrice = () => {
    if (!consultationType) return '';
    return consultant.price[consultationType];
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden">
        <div className="p-4 bg-sky-50 border-b border-sky-100 flex justify-between items-center sticky top-0 z-10">
          <h3 className="font-bold text-sky-900">
            {step === 1 ? 'اختر موعداً مناسباً' : step === 2 ? 'أكمل بيانات الحجز' : isSuccess ? 'تم الحجز بنجاح' : 'حجز موعد'}
          </h3>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-sky-100 text-slate-500 hover:text-slate-700 transition-colors">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-6" style={{
        maxHeight: 'calc(90vh - 120px)'
      }}>
          {step === 1 && <div className="animate-fadeIn">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-sky-100">
                  <img src={consultant.image} alt={consultant.name} className="w-full h-full object-cover" />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-lg">{consultant.name}</h4>
                  <p className="text-slate-600">{consultant.title}</p>
                </div>
              </div>
              <div className="mb-6">
                <h5 className="font-medium text-slate-800 mb-2">
                  نوع الاستشارة:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {consultant.onlineAvailable && <button onClick={() => setConsultationType('online')} className={`px-3 py-2 rounded-md text-sm flex items-center ${consultationType === 'online' ? 'bg-green-100 border-green-300 text-green-700 font-medium' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-green-50'} border transition-colors duration-200`}>
                      <MonitorIcon className="h-4 w-4 ml-2" />
                      <div>
                        <span>عن بعد (أونلاين)</span>
                        <div className="text-xs mt-1">
                          {consultant.price.online}
                        </div>
                      </div>
                    </button>}
                  {consultant.inPersonAvailable && <button onClick={() => setConsultationType('inPerson')} className={`px-3 py-2 rounded-md text-sm flex items-center ${consultationType === 'inPerson' ? 'bg-purple-100 border-purple-300 text-purple-700 font-medium' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-purple-50'} border transition-colors duration-200`}>
                      <UsersIcon className="h-4 w-4 ml-2" />
                      <div>
                        <span>وجاهي (شخصي)</span>
                        <div className="text-xs mt-1">
                          {consultant.price.inPerson}
                        </div>
                      </div>
                    </button>}
                </div>
              </div>
              <div className="mb-6">
                <h5 className="font-medium text-slate-800 mb-2">
                  الأيام المتاحة:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {consultant.availability.days.map((day, index) => <button key={index} onClick={() => setSelectedDay(day)} className={`px-3 py-2 rounded-md text-sm ${selectedDay === day ? 'bg-sky-100 border-sky-300 text-sky-700 font-medium' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-sky-50'} border transition-colors duration-200`}>
                      {day}
                    </button>)}
                </div>
              </div>
              {selectedDay && <div className="mb-6 animate-fadeIn">
                  <h5 className="font-medium text-slate-800 mb-2">
                    الأوقات المتاحة:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {consultant.availability.hours.map((time, index) => <button key={index} onClick={() => setSelectedTime(time)} className={`px-3 py-2 rounded-md text-sm ${selectedTime === time ? 'bg-sky-100 border-sky-300 text-sky-700 font-medium' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-sky-50'} border transition-colors duration-200`}>
                        {time}
                      </button>)}
                  </div>
                </div>}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <button onClick={() => setStep(2)} disabled={!selectedDay || !selectedTime || !consultationType} className={`w-full py-2.5 rounded-md font-medium transition-colors duration-200 ${selectedDay && selectedTime && consultationType ? 'bg-sky-600 hover:bg-sky-700 text-white' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}>
                  التالي
                </button>
              </div>
            </div>}
          {step === 2 && <form onSubmit={handleSubmit} className="animate-fadeIn">
              <div className="bg-sky-50 p-3 rounded-md mb-6 border border-sky-100">
                <div className="flex items-center mb-2">
                  <CalendarIcon className="h-4 w-4 text-sky-600 ml-2" />
                  <span className="font-medium text-sky-800">
                    الموعد المختار:
                  </span>
                </div>
                <p className="text-slate-700">
                  {selectedDay} - {selectedTime} مع {consultant.name}
                </p>
                <div className="flex items-center mt-2 pt-2 border-t border-sky-100">
                  {consultationType === 'online' ? <MonitorIcon className="h-4 w-4 text-green-600 ml-2" /> : <UsersIcon className="h-4 w-4 text-purple-600 ml-2" />}
                  <span className="font-medium text-sky-800">
                    نوع الاستشارة:{' '}
                    {consultationType === 'online' ? 'عن بعد (أونلاين)' : 'وجاهي (شخصي)'}
                  </span>
                </div>
                <p className="text-slate-700 mt-1 font-medium">
                  السعر: {getConsultationPrice()}
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    الاسم
                  </label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} required className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="الاسم الكامل" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    رقم الهاتف
                  </label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="05xxxxxxxx" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    البريد الإلكتروني
                  </label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="example@domain.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    موضوع الاستشارة
                  </label>
                  <textarea value={topic} onChange={e => setTopic(e.target.value)} required rows={3} className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="اكتب نبذة مختصرة عن موضوع الاستشارة..." />
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="flex-1 py-2.5 rounded-md font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors duration-200">
                  السابق
                </button>
                <button type="submit" disabled={isSubmitting} className="flex-1 py-2.5 rounded-md font-medium bg-sky-600 hover:bg-sky-700 text-white transition-colors duration-200 flex items-center justify-center">
                  {isSubmitting ? <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                      <span>جاري الحجز...</span>
                    </> : <span>تأكيد الحجز</span>}
                </button>
              </div>
            </form>}
          {isSuccess && <div className="text-center py-6 animate-fadeIn">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckIcon className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-green-700 mb-2">
                تم الحجز بنجاح!
              </h4>
              <p className="text-slate-600 mb-2">
                تم تأكيد حجز موعدك مع {consultant.name} يوم {selectedDay} الساعة{' '}
                {selectedTime}
              </p>
              <p className="text-slate-600 mb-6">
                نوع الاستشارة:{' '}
                {consultationType === 'online' ? 'عن بعد (أونلاين)' : 'وجاهي (شخصي)'}{' '}
                - {getConsultationPrice()}
              </p>
              <div className="bg-amber-50 p-4 rounded-md border border-amber-100 text-right mb-6">
                <p className="text-amber-800 text-sm">
                  سيتم التواصل معك قريباً على رقم الهاتف أو البريد الإلكتروني
                  لتأكيد الموعد
                </p>
                {consultationType === 'online' && <p className="text-amber-800 text-sm mt-2">
                    سيتم إرسال رابط الجلسة الأونلاين قبل الموعد بساعة إلى بريدك
                    الإلكتروني
                  </p>}
              </div>
              <button onClick={onClose} className="px-6 py-2.5 rounded-md font-medium bg-sky-600 hover:bg-sky-700 text-white transition-colors duration-200">
                إغلاق
              </button>
            </div>}
        </div>
      </div>
    </div>;
}