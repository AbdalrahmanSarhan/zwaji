import React from 'react';
import { CheckCircleIcon, XCircleIcon } from 'lucide-react';
export function EngagementAllowed() {
  return <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-sky-100">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-sky-100 ml-3">
            <CheckCircleIcon className="h-6 w-6 text-sky-600" />
          </div>
          <h2 className="text-2xl font-bold text-sky-900">
            ما يجوز وما لا يجوز في فترة الخطوبة
          </h2>
        </div>
        <p className="text-slate-600 text-sm">
          حدود العلاقة بين الخاطبين وفق الشريعة الإسلامية
        </p>
      </div>
      <div className="p-6">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-sky-800 mb-3">
            حدود العلاقة بين الخاطبين
          </h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            يجب التفريق بين ما هو مباح وما هو محرم في فترة الخطبة، فالمخطوبة لا
            تزال أجنبية عن الخاطب، ولا تحل له إلا بعقد النكاح الشرعي.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <CheckCircleIcon className="h-6 w-6 text-emerald-500 ml-2" />
              <h3 className="text-xl font-bold text-emerald-800">
                ما يجوز في فترة الخطوبة
              </h3>
            </div>
            <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100">
              <ul className="space-y-4 text-slate-700">
                <li className="flex">
                  <div className="h-6 w-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 ml-3 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-medium">النظر إلى وجه المخطوبة وكفيها</p>
                    <p className="text-sm mt-1">
                      بقصد التعرف عليها والتأكد من ملاءمتها، لقوله صلى الله عليه
                      وسلم: "انظر إليها فإنه أحرى أن يؤدم بينكما"
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 ml-3 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-medium">
                      التحدث مع المخطوبة بوجود محرم لها
                    </p>
                    <p className="text-sm mt-1">
                      للتعرف على شخصيتها وأفكارها وتطلعاتها، مع الالتزام بالأدب
                      والاحترام
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 ml-3 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-medium">
                      تقديم هدايا معقولة غير مبالغ فيها
                    </p>
                    <p className="text-sm mt-1">
                      كنوع من التعبير عن الرغبة في الزواج، وإدخال السرور على
                      المخطوبة وأهلها
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 ml-3 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="font-medium">
                      زيارة أهل المخطوبة بصحبة الأهل
                    </p>
                    <p className="text-sm mt-1">
                      للتعارف وتوطيد العلاقات بين العائلتين، وإظهار الاحترام
                      لأهل المخطوبة
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 ml-3 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <p className="font-medium">الاتفاق على تفاصيل الزواج</p>
                    <p className="text-sm mt-1">
                      مثل المهر وتكاليف الزواج والسكن وغيرها من الأمور المتعلقة
                      بالزواج
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <XCircleIcon className="h-6 w-6 text-red-500 ml-2" />
              <h3 className="text-xl font-bold text-red-800">
                ما لا يجوز في فترة الخطوبة
              </h3>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border border-red-100">
              <ul className="space-y-4 text-slate-700">
                <li className="flex">
                  <div className="h-6 w-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 ml-3 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-medium">
                      الخلوة بالمخطوبة دون وجود محرم
                    </p>
                    <p className="text-sm mt-1">
                      لقوله صلى الله عليه وسلم: "لا يخلون رجل بامرأة إلا مع ذي
                      محرم"
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 ml-3 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-medium">
                      المصافحة أو اللمس أو أي اتصال جسدي
                    </p>
                    <p className="text-sm mt-1">
                      لأن المخطوبة لا تزال أجنبية عن الخاطب، ولا يحل لمسها بأي
                      شكل من الأشكال
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 ml-3 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-medium">الخروج منفردين دون محرم</p>
                    <p className="text-sm mt-1">
                      سواء للتنزه أو التسوق أو غير ذلك، لأنه من أسباب الوقوع في
                      المحظور
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 ml-3 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="font-medium">تبادل كلمات الغزل والعشق</p>
                    <p className="text-sm mt-1">
                      لأنها قد تثير الغرائز وتؤدي إلى الوقوع في المحظور، وتنافي
                      الحياء والأدب
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 ml-3 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <p className="font-medium">
                      التوسع في النظر لغير الوجه والكفين
                    </p>
                    <p className="text-sm mt-1">
                      لأن المخطوبة لا تزال أجنبية عن الخاطب، ولا يجوز له النظر
                      إلا لما أباحه الشرع
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-sky-800 mb-3">
            هل يجوز السفر مع المخطوبة؟
          </h3>
          <div className="bg-sky-50 p-5 rounded-lg border border-sky-100">
            <p className="text-slate-700 mb-4">
              لا يجوز للخاطب السفر مع مخطوبته، حتى لو كان برفقة أهلها، إلا إذا
              كان معها محرم لها. فالمخطوبة لا تزال أجنبية عن الخاطب، ولا تحل له
              إلا بعد عقد النكاح الشرعي.
            </p>
            <p className="text-slate-700">
              قال صلى الله عليه وسلم: "لا يخلون رجل بامرأة إلا مع ذي محرم، ولا
              تسافر المرأة إلا مع ذي محرم" متفق عليه.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-sky-800 mb-3">
            هل يجوز التواصل عبر الهاتف ووسائل التواصل الاجتماعي؟
          </h3>
          <div className="bg-sky-50 p-5 rounded-lg border border-sky-100">
            <p className="text-slate-700 mb-4">
              يجوز التواصل عبر الهاتف ووسائل التواصل الاجتماعي للضرورة والحاجة،
              مثل الاتفاق على موعد أو مناقشة أمر يتعلق بالزواج، مع الالتزام
              بالآداب الشرعية والاعتدال في ذلك، وتجنب الخلوة الهاتفية المطولة
              والكلام الذي قد يثير الغرائز.
            </p>
            <p className="text-slate-700">
              وينبغي أن يكون ذلك بعلم أهل المخطوبة وإذنهم، وأن يكون في حدود
              الحاجة فقط، وألا يكون وسيلة للخلوة المحرمة.
            </p>
          </div>
        </div>
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
          <h4 className="font-bold text-amber-800 mb-2">تذكير:</h4>
          <p className="text-slate-700">
            الخطبة ليست زواجاً، والمخطوبة لا تزال أجنبية عن الخاطب، فلا يحل له
            منها ما يحل له من زوجته. والالتزام بالضوابط الشرعية في فترة الخطوبة
            يحفظ كرامة الطرفين، ويجنبهما الوقوع في المحظور، ويبارك الله في
            زواجهما.
          </p>
        </div>
      </div>
    </div>;
}