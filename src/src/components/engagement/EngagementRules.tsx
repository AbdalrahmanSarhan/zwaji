import React from 'react';
import { HandIcon, AlertTriangleIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';
export function EngagementRules() {
  return <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-emerald-100">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-emerald-100 ml-3">
            <HandIcon className="h-6 w-6 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-emerald-900">
            ضوابط الخطبة في الإسلام
          </h2>
        </div>
        <p className="text-slate-600 text-sm">
          أحكام وقواعد يجب مراعاتها أثناء فترة الخطوبة
        </p>
      </div>
      <div className="p-6">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-emerald-800 mb-3">
            الضوابط الشرعية للخطبة
          </h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            وضع الإسلام ضوابط وأحكاماً للخطبة لحماية الأسرة وصون كرامة المرأة،
            ومن أهم هذه الضوابط:
          </p>
          <ul className="list-disc pr-6 space-y-3 text-slate-700">
            <li className="pb-2 border-b border-slate-100">
              <span className="font-bold text-emerald-700">
                عدم خطبة المرأة على خطبة أخيه المسلم:
              </span>
              <p className="mt-1">
                قال صلى الله عليه وسلم: "لا يخطب أحدكم على خطبة أخيه حتى يترك
                الخاطب قبله أو يأذن له الخاطب" متفق عليه.
              </p>
            </li>
            <li className="pb-2 border-b border-slate-100">
              <span className="font-bold text-emerald-700">
                عدم الخلوة بالمخطوبة:
              </span>
              <p className="mt-1">
                المخطوبة لا تزال أجنبية عن الخاطب، فلا تجوز الخلوة بها، ويجب
                وجود محرم معها عند اللقاء.
              </p>
            </li>
            <li className="pb-2 border-b border-slate-100">
              <span className="font-bold text-emerald-700">
                الالتزام بغض البصر:
              </span>
              <p className="mt-1">
                لا يجوز للخاطب النظر إلا للوجه والكفين فقط، لقوله صلى الله عليه
                وسلم: "انظر إليها فإنه أحرى أن يؤدم بينكما" رواه الترمذي.
              </p>
            </li>
            <li className="pb-2 border-b border-slate-100">
              <span className="font-bold text-emerald-700">
                عدم التوسع في الهدايا والمصاريف:
              </span>
              <p className="mt-1">
                ينبغي الاعتدال في الهدايا والمصاريف بما لا يرهق الخاطب، وعدم
                المبالغة في ذلك.
              </p>
            </li>
            <li className="pb-2 border-b border-slate-100">
              <span className="font-bold text-emerald-700">الصدق والوضوح:</span>
              <p className="mt-1">
                يجب على كل من الخاطبين الصدق في بيان حالهما، وعدم إخفاء العيوب
                التي قد تؤثر في الحياة الزوجية.
              </p>
            </li>
            <li>
              <span className="font-bold text-emerald-700">
                عدم خطبة المرأة المحرمة:
              </span>
              <p className="mt-1">
                لا يجوز خطبة المرأة المعتدة من طلاق رجعي، ولا يجوز التصريح بخطبة
                المرأة المعتدة من طلاق بائن أو وفاة، وإنما يجوز التعريض فقط.
              </p>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-emerald-800 mb-3">
            أنواع النساء من حيث جواز خطبتهن
          </h3>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <CheckCircleIcon className="h-5 w-5 text-emerald-500 ml-2" />
              <h4 className="font-bold text-emerald-700">
                نساء يجوز خطبتهن تصريحاً:
              </h4>
            </div>
            <ul className="list-disc pr-8 space-y-1 text-slate-700">
              <li>الخالية من الزوج (غير المتزوجة)</li>
              <li>المنقضية عدتها من طلاق بائن أو وفاة</li>
              <li>المخلوعة التي انتهت عدتها</li>
            </ul>
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <AlertTriangleIcon className="h-5 w-5 text-amber-500 ml-2" />
              <h4 className="font-bold text-amber-700">
                نساء يجوز خطبتهن تعريضاً لا تصريحاً:
              </h4>
            </div>
            <ul className="list-disc pr-8 space-y-1 text-slate-700">
              <li>المعتدة من طلاق بائن</li>
              <li>المعتدة من وفاة زوجها</li>
              <p className="text-sm mt-2">
                مثال التعريض: "إني أريد الزواج" أو "رب راغب فيكِ إذا انقضت عدتك"
              </p>
            </ul>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <XCircleIcon className="h-5 w-5 text-red-500 ml-2" />
              <h4 className="font-bold text-red-700">
                نساء لا يجوز خطبتهن مطلقاً:
              </h4>
            </div>
            <ul className="list-disc pr-8 space-y-1 text-slate-700">
              <li>المتزوجة</li>
              <li>المعتدة من طلاق رجعي</li>
              <li>المخطوبة لغيره إلا إذا أذن الخاطب الأول أو ترك الخطبة</li>
              <li>المحرمات نسباً أو رضاعاً أو مصاهرة</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-emerald-800 mb-3">
            حكم قراءة الفاتحة في الخطبة
          </h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            قراءة الفاتحة عند الخطبة من العادات الحسنة للتبرك والتيمن، لكنها
            ليست من الأمور الواجبة شرعاً، وليس لها أثر في إلزام الخاطبين بإتمام
            الزواج. وقراءة الفاتحة لا تجعل المخطوبة زوجة للخاطب، فهي لا تزال
            أجنبية عنه.
          </p>
        </div>
        <div className="p-4 bg-red-50 rounded-lg border border-red-100">
          <h4 className="font-bold text-red-800 mb-2">تنبيه مهم:</h4>
          <p className="text-slate-700">
            المخطوبة لا تزال أجنبية عن الخاطب ولا تحل له شرعاً إلا بعد عقد
            النكاح، فلا يجوز له الخلوة بها، ولا لمسها، ولا السفر معها، ولا
            الخروج معها منفردين دون محرم.
          </p>
        </div>
      </div>
    </div>;
}