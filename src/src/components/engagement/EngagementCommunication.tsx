import React from 'react';
import { MessageCircleIcon, CheckIcon, XIcon } from 'lucide-react';
export function EngagementCommunication() {
  return <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-blue-100">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-blue-100 ml-3">
            <MessageCircleIcon className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-blue-900">
            التواصل الفعال أثناء الخطوبة
          </h2>
        </div>
        <p className="text-slate-600 text-sm">
          كيفية التواصل الإيجابي ضمن الضوابط الشرعية
        </p>
      </div>
      <div className="p-6">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-blue-800 mb-3">
            أهمية التواصل في فترة الخطوبة
          </h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            من أهم عوامل نجاح فترة الخطوبة هو التواصل الفعال بين الخاطبين، وذلك
            بمعرفة توقعات كل طرف، والتحدث بصراحة عن الأهداف المستقبلية والرؤية
            المشتركة للحياة الزوجية.
          </p>
          <p className="text-slate-700 mb-4 leading-relaxed">
            ينبغي أن يكون هذا التواصل ضمن الضوابط الشرعية، مع وجود محرم، وعدم
            الخلوة، والالتزام بآداب الحديث والحشمة في الكلام والنظر.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-blue-800 mb-3">
            موضوعات مهمة للنقاش أثناء الخطوبة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-2">
                الجانب الديني والأخلاقي
              </h4>
              <ul className="list-disc pr-6 space-y-1 text-slate-700">
                <li>الالتزام الديني والأخلاقي</li>
                <li>القيم والمبادئ المشتركة</li>
                <li>نظرة كل طرف للحياة والدين</li>
                <li>مدى الالتزام بالعبادات والأخلاق</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-2">الجانب الاجتماعي</h4>
              <ul className="list-disc pr-6 space-y-1 text-slate-700">
                <li>العلاقة مع أهل الزوج والزوجة</li>
                <li>الصداقات والعلاقات الاجتماعية</li>
                <li>طريقة قضاء وقت الفراغ</li>
                <li>العادات والتقاليد العائلية</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-2">الجانب المادي</h4>
              <ul className="list-disc pr-6 space-y-1 text-slate-700">
                <li>تكاليف الزواج والمهر</li>
                <li>السكن وتأثيثه</li>
                <li>إدارة الميزانية المشتركة</li>
                <li>الطموحات المالية المستقبلية</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-2">الجانب الشخصي</h4>
              <ul className="list-disc pr-6 space-y-1 text-slate-700">
                <li>الطباع والشخصية</li>
                <li>الهوايات والاهتمامات</li>
                <li>الطموحات والأهداف المستقبلية</li>
                <li>الصحة النفسية والجسدية</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-bold text-blue-700 mb-2">
              الحياة الأسرية المستقبلية
            </h4>
            <ul className="list-disc pr-6 space-y-1 text-slate-700">
              <li>الرغبة في الإنجاب وعدد الأطفال</li>
              <li>أسلوب تربية الأطفال</li>
              <li>توزيع المسؤوليات المنزلية</li>
              <li>عمل المرأة خارج المنزل</li>
              <li>طبيعة السكن المستقبلي (مستقل أو مع الأهل)</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-blue-800 mb-3">
            آداب وضوابط التواصل أثناء الخطوبة
          </h3>
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <CheckIcon className="h-5 w-5 text-emerald-500 ml-2 flex-shrink-0" />
              <h4 className="font-bold text-emerald-700">ما ينبغي فعله:</h4>
            </div>
            <ul className="list-disc pr-8 space-y-2 text-slate-700">
              <li>التواصل بحضور محرم للمخطوبة</li>
              <li>الحديث عن الأمور المهمة للحياة الزوجية المستقبلية</li>
              <li>الصدق والوضوح في الإجابة عن الأسئلة</li>
              <li>الاعتدال في مدة المكالمات والزيارات</li>
              <li>الحفاظ على الاحترام المتبادل في الحوار</li>
              <li>مراعاة الحشمة والأدب في الكلام</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center mb-3">
              <XIcon className="h-5 w-5 text-red-500 ml-2 flex-shrink-0" />
              <h4 className="font-bold text-red-700">ما ينبغي تجنبه:</h4>
            </div>
            <ul className="list-disc pr-8 space-y-2 text-slate-700">
              <li>الخلوة بالمخطوبة دون وجود محرم</li>
              <li>تبادل عبارات الغزل والإطراء المبالغ فيه</li>
              <li>التواصل المستمر عبر الهاتف أو وسائل التواصل الاجتماعي</li>
              <li>مشاركة الأسرار الخاصة جداً قبل الزواج</li>
              <li>الإكثار من المزاح والضحك بطريقة غير لائقة</li>
              <li>تناول موضوعات حساسة لا تليق بمرحلة الخطوبة</li>
              <li>الكذب أو إخفاء معلومات مهمة عن الطرف الآخر</li>
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
          <h4 className="font-bold text-amber-800 mb-3">
            نصائح للتواصل الفعال:
          </h4>
          <ul className="space-y-3 text-slate-700">
            <li className="flex">
              <span className="inline-block bg-amber-200 text-amber-800 rounded-full w-6 h-6 text-center ml-2 flex-shrink-0">
                1
              </span>
              <span>استمع أكثر مما تتكلم، واهتم بفهم وجهة نظر الطرف الآخر</span>
            </li>
            <li className="flex">
              <span className="inline-block bg-amber-200 text-amber-800 rounded-full w-6 h-6 text-center ml-2 flex-shrink-0">
                2
              </span>
              <span>تجنب المقاطعة أثناء حديث الطرف الآخر</span>
            </li>
            <li className="flex">
              <span className="inline-block bg-amber-200 text-amber-800 rounded-full w-6 h-6 text-center ml-2 flex-shrink-0">
                3
              </span>
              <span>اطرح أسئلة واضحة ومباشرة في القضايا المهمة</span>
            </li>
            <li className="flex">
              <span className="inline-block bg-amber-200 text-amber-800 rounded-full w-6 h-6 text-center ml-2 flex-shrink-0">
                4
              </span>
              <span>عبّر عن مشاعرك وأفكارك بصدق وشفافية</span>
            </li>
            <li className="flex">
              <span className="inline-block bg-amber-200 text-amber-800 rounded-full w-6 h-6 text-center ml-2 flex-shrink-0">
                5
              </span>
              <span>تجنب الانتقاد الجارح والتعميم في الأحكام</span>
            </li>
            <li className="flex">
              <span className="inline-block bg-amber-200 text-amber-800 rounded-full w-6 h-6 text-center ml-2 flex-shrink-0">
                6
              </span>
              <span>لا تتسرع في الحكم على الطرف الآخر من موقف واحد</span>
            </li>
          </ul>
        </div>
      </div>
    </div>;
}