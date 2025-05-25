import React, { useCallback, memo } from 'react';
import { XIcon, CheckCircleIcon, InfoIcon, StarIcon, ShareIcon, VideoIcon, HeartIcon } from 'lucide-react';
interface UpdateItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const UpdateItem = memo(({
  icon,
  title,
  description
}: UpdateItemProps) => <div className="flex">
    {icon}
    <div>
      <p className="font-medium text-slate-800">{title}</p>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  </div>);
interface UpdatesDialogProps {
  onClose: () => void;
}
export const UpdatesDialog = memo(({
  onClose
}: UpdatesDialogProps) => {
  const handleShare = useCallback(async () => {
    try {
      const shareData = {
        title: 'تطبيق الإرشاد الزوجي الإسلامي',
        text: 'تطبيق شامل للإرشاد الزوجي من منظور إسلامي - تحديثات جديدة متاحة الآن!',
        url: window.location.href
      };
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        alert('تم نسخ رابط التطبيق إلى الحافظة');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  }, []);
  return <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[80vh] overflow-hidden flex flex-col animate-fadeIn">
        <div className="p-5 bg-gradient-to-r from-amber-50 to-amber-100 border-b border-amber-100 flex justify-between items-center">
          <div className="flex items-center">
            <div className="p-2 bg-amber-200 rounded-full mr-3">
              <InfoIcon className="h-6 w-6 text-amber-700" />
            </div>
            <h2 className="text-xl font-bold text-amber-900">
              التحديثات الأخيرة
            </h2>
          </div>
          <div className="flex items-center">
            <button onClick={handleShare} className="p-2 rounded-full hover:bg-amber-200 transition-colors mr-2" aria-label="مشاركة التطبيق">
              <ShareIcon className="h-5 w-5 text-amber-700" />
            </button>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-amber-200 transition-colors" aria-label="إغلاق">
              <XIcon className="h-5 w-5 text-amber-700" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="p-1.5 bg-sky-100 rounded-full mr-3">
                <StarIcon className="h-5 w-5 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-sky-800">الإصدار 1.1</h3>
            </div>
            <div className="space-y-4 text-slate-700">
              <UpdateItem icon={<CheckCircleIcon className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1 ml-3" />} title="إضافة قسم 'بطاقات معرفية'" description="مجموعة من البطاقات المعرفية حول حقوق الزوجين في الإسلام" />
              <div className="flex">
                <CheckCircleIcon className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1 ml-3" />
                <div>
                  <p className="font-medium text-slate-800">
                    إضافة قسم "مرحلة الخطوبة"
                  </p>
                  <p className="text-sm text-slate-600">
                    دليل شامل للخاطبين حول آداب وأحكام وضوابط الخطوبة في الإسلام
                  </p>
                </div>
              </div>
              <div className="flex">
                <CheckCircleIcon className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1 ml-3" />
                <div>
                  <p className="font-medium text-slate-800">
                    إضافة قسم "الاستعداد للحياة الزوجية"
                  </p>
                  <p className="text-sm text-slate-600">
                    إرشادات وتوجيهات للمقبلين على الزواج للاستعداد النفسي
                    والاجتماعي والمادي للحياة الزوجية
                  </p>
                </div>
              </div>
              <div className="flex">
                <VideoIcon className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1 ml-3" />
                <div>
                  <p className="font-medium text-slate-800">
                    إضافة مكتبة الفيديوهات التوعوية
                  </p>
                  <p className="text-sm text-slate-600">
                    مجموعة من الفيديوهات التعليمية والإرشادية حول مختلف جوانب
                    الحياة الزوجية من منظور إسلامي
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1 ml-3" />
                <div>
                  <p className="font-medium text-slate-800">
                    إضافة مكتبة الأدوات الزوجية
                  </p>
                  <p className="text-sm text-slate-600">
                    مجموعة من الأدوات العملية لتحسين التواصل وحل المشكلات وتعزيز
                    العلاقة بين الزوجين
                  </p>
                </div>
              </div>
              <div className="flex">
                <HeartIcon className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1 ml-3" />
                <div>
                  <p className="font-medium text-slate-800">
                    إضافة قسم "حقوق الأبناء"
                  </p>
                  <p className="text-sm text-slate-600">
                    دليل شامل حول حقوق الأبناء في الإسلام وكيفية تربيتهم تربية
                    إسلامية صحيحة
                  </p>
                </div>
              </div>
              <div className="flex">
                <CheckCircleIcon className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1 ml-3" />
                <div>
                  <p className="font-medium text-slate-800">
                    إضافة زر المشاركة
                  </p>
                  <p className="text-sm text-slate-600">
                    الآن يمكنك مشاركة التطبيق بسهولة مع العائلة والأصدقاء
                  </p>
                </div>
              </div>
              <div className="flex">
                <CheckCircleIcon className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1 ml-3" />
                <div>
                  <p className="font-medium text-slate-800">
                    تحسينات في الواجهة والتصميم
                  </p>
                  <p className="text-sm text-slate-600">
                    تحسينات متعددة في واجهة المستخدم لتسهيل التصفح والاستخدام
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-4">
              <div className="p-1.5 bg-purple-100 rounded-full mr-3">
                <InfoIcon className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-purple-800">قادم قريباً</h3>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
                <span>قسم خاص بالأسئلة الشائعة حول الحياة الزوجية</span>
              </li>
              <li className="flex items-start">
                <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
                <span>مقالات توعوية حول التربية الإسلامية للأبناء</span>
              </li>
              <li className="flex items-start">
                <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
                <span>أداة تفاعلية لحل المشكلات الزوجية الشائعة</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button onClick={onClose} className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition-colors font-medium">
            حسناً، فهمت
          </button>
        </div>
      </div>
    </div>;
});
UpdatesDialog.displayName = 'UpdatesDialog';