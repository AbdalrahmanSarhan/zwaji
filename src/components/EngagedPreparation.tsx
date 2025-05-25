import React from 'react';
import { HeartIcon, BookIcon, HomeIcon, UsersIcon, ShieldIcon, HeartHandshakeIcon } from 'lucide-react';
export function EngagedPreparation() {
  return <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-purple-900">
        الاستعداد للحياة الزوجية
      </h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <HeartIcon className="h-8 w-8 text-purple-600 ml-4" />
          <h3 className="text-xl font-bold text-purple-800">
            أهمية التحضير للزواج
          </h3>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          الزواج في الإسلام ليس مجرد علاقة عابرة، بل هو ميثاق غليظ وعهد مقدس.
          والإعداد الجيد للزواج يساعد في بناء أسرة مستقرة وسعيدة. قال تعالى:
          "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
          لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً".
        </p>
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
          <p className="text-purple-800 text-sm">
            <span className="font-bold">نصيحة: </span>
            استثمر وقتاً كافياً في فترة الخطوبة للتعرف على الطرف الآخر ضمن
            الضوابط الشرعية، وتعلم المزيد عن حقوق وواجبات الزوجين.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-500">
          <div className="flex items-center mb-4">
            <BookIcon className="h-6 w-6 text-purple-600 ml-3" />
            <h3 className="font-bold text-lg text-purple-800">
              التثقيف الشرعي
            </h3>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span className="text-slate-700">
                تعلم أحكام الزواج في الإسلام
              </span>
            </li>
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span className="text-slate-700">فهم مقاصد الزواج وأهدافه</span>
            </li>
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span className="text-slate-700">معرفة آداب الحياة الزوجية</span>
            </li>
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500 mt-2"></span>
              <span className="text-slate-700">حضور دورات تأهيلية للزواج</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-sky-500">
          <div className="flex items-center mb-4">
            <HeartHandshakeIcon className="h-6 w-6 text-sky-600 ml-3" />
            <h3 className="font-bold text-lg text-sky-800">التواصل الفعال</h3>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2"></span>
              <span className="text-slate-700">تعلم مهارات الاستماع الجيد</span>
            </li>
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2"></span>
              <span className="text-slate-700">
                التعبير عن المشاعر بشكل صحي
              </span>
            </li>
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2"></span>
              <span className="text-slate-700">مناقشة التوقعات المستقبلية</span>
            </li>
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-sky-500 mt-2"></span>
              <span className="text-slate-700">
                تعلم حل الخلافات بطرق إيجابية
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-rose-500">
          <div className="flex items-center mb-4">
            <HomeIcon className="h-6 w-6 text-rose-600 ml-3" />
            <h3 className="font-bold text-lg text-rose-800">التخطيط المالي</h3>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-rose-500 mt-2"></span>
              <span className="text-slate-700">وضع ميزانية مشتركة</span>
            </li>
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-rose-500 mt-2"></span>
              <span className="text-slate-700">تحديد أولويات الإنفاق</span>
            </li>
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-rose-500 mt-2"></span>
              <span className="text-slate-700">
                فهم المسؤوليات المالية لكل طرف
              </span>
            </li>
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-rose-500 mt-2"></span>
              <span className="text-slate-700">
                الاتفاق على طريقة إدارة الأموال
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
          <div className="flex items-center mb-4">
            <UsersIcon className="h-6 w-6 text-amber-600 ml-3" />
            <h3 className="font-bold text-lg text-amber-800">
              العلاقات الأسرية
            </h3>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-amber-500 mt-2"></span>
              <span className="text-slate-700">تحديد شكل العلاقة مع الأهل</span>
            </li>
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-amber-500 mt-2"></span>
              <span className="text-slate-700">وضع حدود صحية مع العائلتين</span>
            </li>
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-amber-500 mt-2"></span>
              <span className="text-slate-700">
                التعرف على عائلة الطرف الآخر
              </span>
            </li>
            <li className="flex items-start">
              <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-amber-500 mt-2"></span>
              <span className="text-slate-700">
                تعلم فن التعامل مع أهل الزوج/الزوجة
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <ShieldIcon className="h-8 w-8 text-green-600 ml-4" />
          <h3 className="text-xl font-bold text-green-800">
            الشروط والحقوق في عقد الزواج
          </h3>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          من المهم فهم أن عقد الزواج في الإسلام يمكن أن يتضمن شروطاً مشروعة يتفق
          عليها الطرفان. قال النبي ﷺ: "إن أحق الشروط أن توفوا به ما استحللتم به
          الفروج".
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <h4 className="font-bold text-green-800 mb-2">
              من حق المرأة أن تشترط:
            </h4>
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mt-2"></span>
                <span className="text-slate-700">إكمال دراستها</span>
              </li>
              <li className="flex items-start">
                <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mt-2"></span>
                <span className="text-slate-700">العمل في مجال تخصصها</span>
              </li>
              <li className="flex items-start">
                <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mt-2"></span>
                <span className="text-slate-700">سكن مستقل عن أهل الزوج</span>
              </li>
              <li className="flex items-start">
                <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mt-2"></span>
                <span className="text-slate-700">
                  عدم السفر بها بعيداً عن أهلها
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-2">
              من حق الرجل أن يشترط:
            </h4>
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 mt-2"></span>
                <span className="text-slate-700">
                  عدم عمل الزوجة في مكان معين
                </span>
              </li>
              <li className="flex items-start">
                <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 mt-2"></span>
                <span className="text-slate-700">
                  المشاركة في نفقات البيت إن كانت موظفة
                </span>
              </li>
              <li className="flex items-start">
                <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 mt-2"></span>
                <span className="text-slate-700">
                  تحديد عدد مرات زيارة الأهل
                </span>
              </li>
              <li className="flex items-start">
                <span className="ml-2 flex-shrink-0 h-2 w-2 rounded-full bg-blue-500 mt-2"></span>
                <span className="text-slate-700">الإقامة في مدينة معينة</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
          <p className="text-amber-800 text-sm">
            <span className="font-bold">ملاحظة هامة: </span>
            الشروط في عقد الزواج ملزمة إذا كانت موافقة للشرع ووافق عليها
            الطرفان. وينبغي مناقشتها بصراحة قبل العقد لتجنب المشاكل المستقبلية.
          </p>
        </div>
      </div>
      <div className="bg-purple-700 text-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-center">
          نصائح ذهبية للمقبلين على الزواج
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-800 bg-opacity-50 p-4 rounded-lg">
            <p className="mb-2 font-bold">الصدق والوضوح منذ البداية</p>
            <p className="text-purple-100 text-sm">
              تجنب إخفاء الحقائق المهمة عن شريك حياتك المستقبلي، وكن واضحاً بشأن
              توقعاتك وأهدافك.
            </p>
          </div>
          <div className="bg-purple-800 bg-opacity-50 p-4 rounded-lg">
            <p className="mb-2 font-bold">تعلم فن التنازل</p>
            <p className="text-purple-100 text-sm">
              الحياة الزوجية تقوم على التنازلات المتبادلة، فتعلم متى تتنازل ومتى
              تتمسك برأيك.
            </p>
          </div>
          <div className="bg-purple-800 bg-opacity-50 p-4 rounded-lg">
            <p className="mb-2 font-bold">الاستعداد النفسي</p>
            <p className="text-purple-100 text-sm">
              الزواج مسؤولية كبيرة تتطلب استعداداً نفسياً للانتقال من حياة
              العزوبية إلى حياة الشراكة.
            </p>
          </div>
          <div className="bg-purple-800 bg-opacity-50 p-4 rounded-lg">
            <p className="mb-2 font-bold">التعلم المستمر</p>
            <p className="text-purple-100 text-sm">
              اقرأ عن الحياة الزوجية الناجحة، وتعلم من تجارب الآخرين، واحضر
              دورات تأهيلية للزواج.
            </p>
          </div>
        </div>
      </div>
    </div>;
}