import React from 'react';
import { BookOpenIcon } from 'lucide-react';
export function EngagementDefinition() {
  return <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-purple-100">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-purple-100 ml-3">
            <BookOpenIcon className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-purple-900">
            تعريف الخطبة في الإسلام
          </h2>
        </div>
        <p className="text-slate-600 text-sm">
          ماهيّة الخطبة وحكمها الشرعي والحكمة منها
        </p>
      </div>
      <div className="p-6">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-purple-800 mb-3">
            تعريف الخطبة
          </h3>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mb-4">
            <p className="text-slate-700 leading-relaxed">
              الخطبة في الإسلام هي طلب الرجل يد امرأة معينة للزواج بها، والتقدم
              إليها أو إلى وليها لهذا الغرض. وهي وعد بالزواج وليست عقداً ملزماً،
              فلكل من الطرفين الحق في العدول عنها.
            </p>
          </div>
          <p className="text-slate-700 mb-4 leading-relaxed">
            الخِطبة - بكسر الخاء - هي طلب الزواج من امرأة معينة والتقدم إليها أو
            إلى وليها بهذا الطلب. وهي مقدمة للزواج وليست زواجاً، ولا يترتب عليها
            أي من أحكام الزواج.
          </p>
          <p className="text-slate-700 leading-relaxed">
            قال تعالى: "وَلَا جُنَاحَ عَلَيْكُمْ فِيمَا عَرَّضْتُم بِهِ مِنْ
            خِطْبَةِ النِّسَاءِ" [البقرة: 235]
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-purple-800 mb-3">
            حكم الخطبة في الإسلام
          </h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            الخطبة مشروعة في الإسلام، وهي من السنن المستحبة قبل الزواج، لما فيها
            من التعارف بين الطرفين ضمن الضوابط الشرعية.
          </p>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
            <p className="text-slate-700 leading-relaxed">
              قال صلى الله عليه وسلم: "إذا خطب أحدكم امرأة، فإن استطاع أن ينظر
              إلى ما يدعوه إلى نكاحها فليفعل" رواه أبو داود وأحمد.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-purple-800 mb-3">
            الحكمة من مشروعية الخطبة
          </h3>
          <ul className="list-disc pr-6 space-y-3 text-slate-700">
            <li>التعرف على الطرف الآخر قبل الارتباط الرسمي</li>
            <li>التأكد من التوافق بين الطرفين في الأفكار والتطلعات</li>
            <li>إتاحة الفرصة للتفكير والاستخارة قبل اتخاذ قرار الزواج</li>
            <li>تهيئة الأسرتين للمصاهرة والقرابة الجديدة</li>
            <li>الاستعداد النفسي والمادي للزواج</li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-purple-800 mb-3">
            الفرق بين الخطبة والزواج
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-50">
                  <th className="border border-purple-200 p-3 text-right">
                    وجه المقارنة
                  </th>
                  <th className="border border-purple-200 p-3 text-right">
                    الخطبة
                  </th>
                  <th className="border border-purple-200 p-3 text-right">
                    الزواج
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-purple-200 p-3 bg-purple-50 font-medium">
                    التعريف
                  </td>
                  <td className="border border-purple-200 p-3">وعد بالزواج</td>
                  <td className="border border-purple-200 p-3">
                    عقد شرعي بين الرجل والمرأة
                  </td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-3 bg-purple-50 font-medium">
                    الإلزام
                  </td>
                  <td className="border border-purple-200 p-3">
                    غير ملزمة، يمكن العدول عنها
                  </td>
                  <td className="border border-purple-200 p-3">
                    عقد ملزم لا يجوز فسخه إلا بطلاق أو خلع
                  </td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-3 bg-purple-50 font-medium">
                    الأحكام المترتبة
                  </td>
                  <td className="border border-purple-200 p-3">
                    لا تبيح الخلوة ولا الاتصال الجسدي
                  </td>
                  <td className="border border-purple-200 p-3">
                    يحل للزوج ما حرم عليه قبل العقد
                  </td>
                </tr>
                <tr>
                  <td className="border border-purple-200 p-3 bg-purple-50 font-medium">
                    العلاقة بين الطرفين
                  </td>
                  <td className="border border-purple-200 p-3">
                    لا تزال المرأة أجنبية عن الرجل
                  </td>
                  <td className="border border-purple-200 p-3">
                    تصبح المرأة زوجة للرجل
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="font-bold text-blue-800 mb-2">ملاحظة مهمة:</h4>
          <p className="text-slate-700">
            الخطبة ليست عقداً ملزماً، بل هي وعد بالزواج، ويجوز لأي من الطرفين
            العدول عنها إذا تبين له عدم المناسبة، مع مراعاة الأخلاق الإسلامية في
            ذلك.
          </p>
        </div>
      </div>
    </div>;
}