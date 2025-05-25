import React, { useEffect, useState, createElement } from 'react';
import { XIcon, PlusIcon, TrashIcon, MonitorIcon, UsersIcon } from 'lucide-react';
import { Consultant } from '../Consultants';
import { useConsultants } from './ConsultantsContext';
interface ConsultantFormProps {
  consultant: Consultant | null;
  onClose: () => void;
}
export function ConsultantForm({
  consultant,
  onClose
}: ConsultantFormProps) {
  const {
    addConsultant,
    updateConsultant
  } = useConsultants();
  const [formData, setFormData] = useState<Partial<Consultant>>({
    name: '',
    title: '',
    image: '',
    specialization: [],
    rating: 5.0,
    reviewCount: 0,
    experience: '',
    bio: '',
    availability: {
      days: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
      hours: ['صباحاً', 'مساءً']
    },
    price: {
      inPerson: '',
      online: ''
    },
    location: '',
    duration: '',
    languages: ['العربية'],
    discount: '',
    badges: [],
    onlineAvailable: true,
    inPersonAvailable: true
  });
  const [newSpecialization, setNewSpecialization] = useState('');
  const [newBadge, setNewBadge] = useState('');
  const [newLanguage, setNewLanguage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    if (consultant) {
      setFormData(consultant);
    }
  }, [consultant]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    if (name === 'onlinePrice') {
      setFormData({
        ...formData,
        price: {
          ...formData.price,
          online: value
        }
      });
    } else if (name === 'inPersonPrice') {
      setFormData({
        ...formData,
        price: {
          ...formData.price,
          inPerson: value
        }
      });
    } else if (name === 'onlineAvailable') {
      setFormData({
        ...formData,
        onlineAvailable: (e.target as HTMLInputElement).checked
      });
    } else if (name === 'inPersonAvailable') {
      setFormData({
        ...formData,
        inPersonAvailable: (e.target as HTMLInputElement).checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  const addSpecialization = () => {
    if (newSpecialization.trim() && formData.specialization) {
      setFormData({
        ...formData,
        specialization: [...formData.specialization, newSpecialization.trim()]
      });
      setNewSpecialization('');
    }
  };
  const removeSpecialization = (index: number) => {
    if (formData.specialization) {
      const updatedSpecializations = [...formData.specialization];
      updatedSpecializations.splice(index, 1);
      setFormData({
        ...formData,
        specialization: updatedSpecializations
      });
    }
  };
  const addBadge = () => {
    if (newBadge.trim()) {
      setFormData({
        ...formData,
        badges: [...(formData.badges || []), newBadge.trim()]
      });
      setNewBadge('');
    }
  };
  const removeBadge = (index: number) => {
    if (formData.badges) {
      const updatedBadges = [...formData.badges];
      updatedBadges.splice(index, 1);
      setFormData({
        ...formData,
        badges: updatedBadges
      });
    }
  };
  const addLanguage = () => {
    if (newLanguage.trim() && formData.languages) {
      setFormData({
        ...formData,
        languages: [...formData.languages, newLanguage.trim()]
      });
      setNewLanguage('');
    }
  };
  const removeLanguage = (index: number) => {
    if (formData.languages) {
      const updatedLanguages = [...formData.languages];
      updatedLanguages.splice(index, 1);
      setFormData({
        ...formData,
        languages: updatedLanguages
      });
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Validate required fields
      if (!formData.name || !formData.title || !formData.image || !formData.experience) {
        throw new Error('يرجى ملء جميع الحقول المطلوبة');
      }
      // Validate at least one consultation type is available
      if (!formData.onlineAvailable && !formData.inPersonAvailable) {
        throw new Error('يجب تفعيل نوع واحد على الأقل من الاستشارات');
      }
      // Validate prices for enabled consultation types
      if (formData.onlineAvailable && !formData.price?.online) {
        throw new Error('يرجى تحديد سعر الاستشارة الأونلاين');
      }
      if (formData.inPersonAvailable && !formData.price?.inPerson) {
        throw new Error('يرجى تحديد سعر الاستشارة الوجاهية');
      }
      if (consultant) {
        updateConsultant(consultant.id, formData as Consultant);
      } else {
        addConsultant(formData as Omit<Consultant, 'id'>);
      }
      // Show success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-24 right-1/2 transform translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-lg z-50 animate-fadeIn';
      notification.textContent = consultant ? 'تم تحديث بيانات الاستشاري بنجاح' : 'تمت إضافة الاستشاري بنجاح';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.classList.add('opacity-0');
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 2000);
      onClose();
    } catch (error) {
      alert(error instanceof Error ? error.message : 'حدث خطأ أثناء حفظ البيانات');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-4 bg-sky-50 border-b border-sky-100 flex justify-between items-center sticky top-0 z-10">
          <h3 className="font-bold text-sky-900">
            {consultant ? 'تعديل بيانات استشاري' : 'إضافة استشاري جديد'}
          </h3>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-sky-100 text-slate-500 hover:text-slate-700 transition-colors">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-6" style={{
        maxHeight: 'calc(90vh - 70px)'
      }}>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                <h4 className="text-lg font-medium text-sky-800 mb-4 pb-2 border-b border-sky-100">
                  المعلومات الأساسية
                </h4>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  الاسم
                </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  اللقب الوظيفي
                </label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  رابط الصورة
                </label>
                <input type="url" name="image" value={formData.image} onChange={handleChange} required className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="https://example.com/image.jpg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  سنوات الخبرة
                </label>
                <input type="text" name="experience" value={formData.experience} onChange={handleChange} required className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="١٥ سنة خبرة" />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  نبذة تعريفية
                </label>
                <textarea name="bio" value={formData.bio} onChange={handleChange} required rows={3} className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  التخصصات
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.specialization?.map((spec, index) => <div key={index} className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full flex items-center">
                      <span>{spec}</span>
                      <button type="button" onClick={() => removeSpecialization(index)} className="ml-2 text-sky-500 hover:text-sky-700">
                        <XIcon className="h-4 w-4" />
                      </button>
                    </div>)}
                </div>
                <div className="flex">
                  <input type="text" value={newSpecialization} onChange={e => setNewSpecialization(e.target.value)} className="flex-1 px-3 py-2 rounded-l-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="أضف تخصصاً جديداً" />
                  <button type="button" onClick={addSpecialization} className="px-3 py-2 bg-sky-600 text-white rounded-r-md hover:bg-sky-700">
                    <PlusIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2">
                <h4 className="text-lg font-medium text-sky-800 mb-4 pb-2 border-b border-sky-100 mt-4">
                  معلومات الاستشارة
                </h4>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  العنوان
                </label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  مدة الجلسة
                </label>
                <input type="text" name="duration" value={formData.duration} onChange={handleChange} required className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="30 دقيقة" />
              </div>
              <div className="col-span-1 md:col-span-2">
                <h4 className="text-lg font-medium text-green-800 mb-4 pb-2 border-b border-green-100 mt-4 flex items-center">
                  <MonitorIcon className="h-5 w-5 ml-2" />
                  استشارة أونلاين
                </h4>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="onlineAvailable" name="onlineAvailable" checked={formData.onlineAvailable} onChange={handleChange} className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="onlineAvailable" className="ml-2 block text-sm text-gray-900">
                  متاح للاستشارات الأونلاين
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  سعر الاستشارة أونلاين
                </label>
                <input type="text" name="onlinePrice" value={formData.price?.online} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="35 دينار" disabled={!formData.onlineAvailable} />
              </div>
              <div className="col-span-1 md:col-span-2">
                <h4 className="text-lg font-medium text-purple-800 mb-4 pb-2 border-b border-purple-100 mt-4 flex items-center">
                  <UsersIcon className="h-5 w-5 ml-2" />
                  استشارة وجاهية (شخصية)
                </h4>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="inPersonAvailable" name="inPersonAvailable" checked={formData.inPersonAvailable} onChange={handleChange} className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                <label htmlFor="inPersonAvailable" className="ml-2 block text-sm text-gray-900">
                  متاح للاستشارات الوجاهية
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  سعر الاستشارة الوجاهية
                </label>
                <input type="text" name="inPersonPrice" value={formData.price?.inPerson} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="50 دينار" disabled={!formData.inPersonAvailable} />
              </div>
              <div className="col-span-1 md:col-span-2">
                <h4 className="text-lg font-medium text-sky-800 mb-4 pb-2 border-b border-sky-100 mt-4">
                  معلومات إضافية
                </h4>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  التقييم
                </label>
                <input type="number" name="rating" value={formData.rating} onChange={handleChange} min="1" max="5" step="0.1" className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  عدد التقييمات
                </label>
                <input type="number" name="reviewCount" value={formData.reviewCount} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  خصم (إن وجد)
                </label>
                <input type="text" name="discount" value={formData.discount} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="تخفيض 50٪ على جميع الخدمات!" />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  اللغات
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.languages?.map((lang, index) => <div key={index} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full flex items-center">
                      <span>{lang}</span>
                      <button type="button" onClick={() => removeLanguage(index)} className="ml-2 text-amber-500 hover:text-amber-700">
                        <XIcon className="h-4 w-4" />
                      </button>
                    </div>)}
                </div>
                <div className="flex">
                  <input type="text" value={newLanguage} onChange={e => setNewLanguage(e.target.value)} className="flex-1 px-3 py-2 rounded-l-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="أضف لغة جديدة" />
                  <button type="button" onClick={addLanguage} className="px-3 py-2 bg-amber-600 text-white rounded-r-md hover:bg-amber-700">
                    <PlusIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  شارات خاصة
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.badges?.map((badge, index) => <div key={index} className="bg-rose-50 text-rose-700 px-3 py-1 rounded-full flex items-center">
                      <span>{badge}</span>
                      <button type="button" onClick={() => removeBadge(index)} className="ml-2 text-rose-500 hover:text-rose-700">
                        <XIcon className="h-4 w-4" />
                      </button>
                    </div>)}
                </div>
                <div className="flex">
                  <input type="text" value={newBadge} onChange={e => setNewBadge(e.target.value)} className="flex-1 px-3 py-2 rounded-l-md border border-slate-200 focus:border-sky-300 focus:ring focus:ring-sky-100 focus:outline-none" placeholder="أضف شارة جديدة" />
                  <button type="button" onClick={addBadge} className="px-3 py-2 bg-rose-600 text-white rounded-r-md hover:bg-rose-700">
                    <PlusIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 flex gap-3">
              <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-md font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors duration-200">
                إلغاء
              </button>
              <button type="submit" disabled={isSubmitting} className="flex-1 py-2.5 rounded-md font-medium bg-sky-600 hover:bg-sky-700 text-white transition-colors duration-200 flex items-center justify-center">
                {isSubmitting ? <>
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                    <span>جاري الحفظ...</span>
                  </> : <span>{consultant ? 'تحديث البيانات' : 'إضافة استشاري'}</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
}