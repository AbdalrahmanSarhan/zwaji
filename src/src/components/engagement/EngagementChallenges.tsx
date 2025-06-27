import React from 'react';
import { ShieldIcon } from 'lucide-react';
export function EngagementChallenges() {
  return <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-red-100">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-red-100 ml-3">
            <ShieldIcon className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-red-900">
            تحديات شائعة في فترة الخطوبة
          </h2>
        </div>
        <p className="text-slate-600 text-sm">
          مشكلات قد تواجه الخاطبين وكيفية التعامل معها
        </p>
      </div>
      <div className="p-6">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-red-800 mb-3">
            التحديات الشائعة أثناء فترة الخطوبة
          </h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            قد تواجه الخاطبين بعض التحديات خلال فترة الخطوبة، ومن المهم التعرف
            عليها والاستعداد لمواجهتها بحكمة وصبر.
          </p>
        </div>
        <div className="space-y-6 mb-8">
          <div className="bg-red-50 p-5 rounded-lg border border-red-100">
            <h4 className="font-bold text-red-800 mb-3">تدخل الأهل المفرط</h4>
            <div className="mb-3">
              <p className="text-slate-700 mb-2">
                <strong>المشكلة:</strong> قد يتدخل الأهل بشكل مفرط في تفاصيل
                العلاقة بين الخاطبين، مما قد يسبب توتراً وخلافات.
              </p>
            </div>
            <div>
              <p className="font-bold text-red-700 mb-1">كيفية التعامل:</p>
              <ul className="list-disc pr-6 space-y-1 text-slate-700">
                <li>التحلي بالحكمة والصبر في التعامل مع تدخلات الأهل</li>
                <li>
                  إشراك الأهل في بعض القرارات مع الاحتفاظ باستقلالية القرارات
                  المصيرية
                </li>
                <li>توضيح الحدود بطريقة مهذبة ولبقة</li>
                <li>الاستعانة بشخص حكيم من العائلة للتوسط إذا لزم الأمر</li>
                <li>
                  تقدير نصائح الأهل والاستفادة من خبراتهم مع الاحتفاظ
                  بالاستقلالية
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-red-50 p-5 rounded-lg border border-red-100">
            <h4 className="font-bold text-red-800 mb-3">
              اكتشاف اختلافات جوهرية
            </h4>
            <div className="mb-3">
              <p className="text-slate-700 mb-2">
                <strong>المشكلة:</strong> قد يكتشف الخاطبان خلال فترة الخطوبة
                وجود اختلافات جوهرية في الشخصية أو القيم أو الأهداف.
              </p>
            </div>
            <div>
              <p className="font-bold text-red-700 mb-1">كيفية التعامل:</p>
              <ul className="list-disc pr-6 space-y-1 text-slate-700">
                <li>مناقشة الاختلافات بصراحة وموضوعية</li>
                <li>
                  تحديد ما إذا كانت هذه الاختلافات يمكن التعايش معها أو التوفيق
                  بينها
                </li>
                <li>استشارة شخص حكيم أو مرشد زواجي إسلامي</li>
                <li>عدم التسرع في اتخاذ قرار بإنهاء الخطوبة أو المضي فيها</li>
                <li>صلاة الاستخارة والدعاء لله بالتوفيق</li>
              </ul>
            </div>
          </div>
          <div className="bg-red-50 p-5 rounded-lg border border-red-100">
            <h4 className="font-bold text-red-800 mb-3">طول فترة الخطوبة</h4>
            <div className="mb-3">
              <p className="text-slate-700 mb-2">
                <strong>المشكلة:</strong> قد تطول فترة الخطوبة لأسباب مختلفة،
                مما قد يؤدي إلى ملل أو توتر أو مشكلات أخرى.
              </p>
            </div>
            <div>
              <p className="font-bold text-red-700 mb-1">كيفية التعامل:</p>
              <ul className="list-disc pr-6 space-y-1 text-slate-700">
                <li>
                  تحديد موعد للزواج منذ البداية وعدم إطالة فترة الخطوبة دون داعٍ
                </li>
                <li>استثمار فترة الخطوبة في التعرف أكثر والاستعداد للزواج</li>
                <li>الاتفاق على خطة زمنية واضحة لإتمام متطلبات الزواج</li>
                <li>الحفاظ على الحماس والتواصل الإيجابي خلال فترة الانتظار</li>
                <li>تجنب المواقف التي قد تؤدي إلى الوقوع في المحظور الشرعي</li>
              </ul>
            </div>
          </div>
          <div className="bg-red-50 p-5 rounded-lg border border-red-100">
            <h4 className="font-bold text-red-800 mb-3">
              المبالغة في التكاليف
            </h4>
            <div className="mb-3">
              <p className="text-slate-700 mb-2">
                <strong>المشكلة:</strong> قد تتسبب المبالغة في تكاليف الزواج
                والمهر والشبكة في إرهاق الخاطب مادياً وتأخير الزواج.
              </p>
            </div>
            <div>
              <p className="font-bold text-red-700 mb-1">كيفية التعامل:</p>
              <ul className="list-disc pr-6 space-y-1 text-slate-700">
                <li>
                  الاتفاق المسبق على التكاليف المعقولة التي تناسب إمكانيات
                  الطرفين
                </li>
                <li>تذكير الأهل بالسنة النبوية في تيسير الزواج</li>
                <li>التركيز على جوهر الزواج وليس المظاهر</li>
                <li>وضع ميزانية واضحة والالتزام بها</li>
                <li>
                  البحث عن بدائل اقتصادية مناسبة دون الإخلال بالمظهر اللائق
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-red-50 p-5 rounded-lg border border-red-100">
            <h4 className="font-bold text-red-800 mb-3">الخلافات والمشاجرات</h4>
            <div className="mb-3">
              <p className="text-slate-700 mb-2">
                <strong>المشكلة:</strong> قد تحدث خلافات ومشاجرات بين الخاطبين
                خلال فترة الخطوبة، مما قد يؤثر على العلاقة المستقبلية.
              </p>
            </div>
            <div>
              <p className="font-bold text-red-700 mb-1">كيفية التعامل:</p>
              <ul className="list-disc pr-6 space-y-1 text-slate-700">
                <li>تعلم فن إدارة الخلافات بطريقة إيجابية</li>
                <li>عدم التسرع في الغضب واتخاذ القرارات</li>
                <li>الاستماع الجيد لوجهة نظر الطرف الآخر</li>
                <li>التركيز على حل المشكلة وليس على توجيه اللوم</li>
                <li>الاعتذار عند الخطأ والتسامح عند وقوع الإساءة</li>
                <li>استشارة شخص حكيم عند استمرار الخلاف</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-red-800 mb-3">
            علامات تستدعي إعادة النظر في الخطوبة
          </h3>
          <p className="text-slate-700 mb-4">
            هناك بعض العلامات التي قد تستدعي إعادة النظر في استمرار الخطوبة،
            منها:
          </p>
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
            <ul className="list-disc pr-6 space-y-3 text-slate-700">
              <li>
                <strong>الكذب وعدم الصدق:</strong> إذا اكتشف أحد الطرفين أن
                الآخر غير صادق في أمور جوهرية
              </li>
              <li>
                <strong>الاختلاف الشديد في القيم الدينية والأخلاقية:</strong>{' '}
                مما قد يؤثر على استقرار الحياة الزوجية مستقبلاً
              </li>
              <li>
                <strong>ظهور سلوكيات عدوانية أو مسيئة:</strong> مثل العنف اللفظي
                أو الجسدي أو التسلط والتحكم
              </li>
              <li>
                <strong>الإدمان:</strong> اكتشاف إدمان أحد الطرفين على المخدرات
                أو الكحول أو القمار
              </li>
              <li>
                <strong>إخفاء معلومات جوهرية:</strong> مثل مرض مزمن أو إعاقة أو
                مشكلات نفسية خطيرة
              </li>
              <li>
                <strong>عدم القدرة على التواصل الفعال:</strong> وفشل محاولات
                التفاهم المتكررة
              </li>
              <li>
                <strong>التدخل المفرط من الأهل:</strong> بشكل يهدد استقلالية
                الحياة الزوجية المستقبلية
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="font-bold text-blue-800 mb-2">نصيحة:</h4>
          <p className="text-slate-700">
            إذا قررت إنهاء الخطوبة، فينبغي أن يتم ذلك بأسلوب مهذب وأخلاقي، مع
            مراعاة مشاعر الطرف الآخر وأهله، وإرجاع الهدايا التي يمكن إرجاعها،
            والحفاظ على أسرار الطرف الآخر، وعدم تشويه سمعته.
          </p>
        </div>
      </div>
    </div>;
}