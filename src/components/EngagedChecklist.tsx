import React, { useState } from 'react';
import { CheckIcon, XIcon, PlusIcon, CheckSquareIcon } from 'lucide-react';
export function EngagedChecklist() {
  const [completedItems, setCompletedItems] = useState<number[]>([]);
  const [customItems, setCustomItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');
  const toggleItem = (index: number) => {
    if (completedItems.includes(index)) {
      setCompletedItems(completedItems.filter(i => i !== index));
    } else {
      setCompletedItems([...completedItems, index]);
    }
  };
  const toggleCustomItem = (index: number) => {
    const actualIndex = index + checklistItems.length;
    if (completedItems.includes(actualIndex)) {
      setCompletedItems(completedItems.filter(i => i !== actualIndex));
    } else {
      setCompletedItems([...completedItems, actualIndex]);
    }
  };
  const addCustomItem = () => {
    if (newItem.trim()) {
      setCustomItems([...customItems, newItem.trim()]);
      setNewItem('');
    }
  };
  const removeCustomItem = (index: number) => {
    const actualIndex = index + checklistItems.length;
    setCompletedItems(completedItems.filter(i => i !== actualIndex));
    setCustomItems(customItems.filter((_, i) => i !== index));
  };
  const calculateProgress = () => {
    const total = checklistItems.length + customItems.length;
    return total > 0 ? Math.round(completedItems.length / total * 100) : 0;
  };
  const checklistItems = [{
    title: 'التثقيف الشرعي',
    items: ['قراءة كتاب عن فقه الأسرة في الإسلام', 'حضور دورة تأهيلية للزواج', 'معرفة الحقوق والواجبات الزوجية', 'فهم أحكام العشرة الزوجية'],
    color: 'purple'
  }, {
    title: 'الاتفاقات المالية',
    items: ['تحديد قيمة المهر وطريقة دفعه', 'الاتفاق على تكاليف الزواج', 'وضع ميزانية مستقبلية للأسرة', 'مناقشة المسؤوليات المالية لكل طرف'],
    color: 'emerald'
  }, {
    title: 'التواصل والتوقعات',
    items: ['مناقشة التوقعات من الحياة الزوجية', 'الاتفاق على أسلوب حل الخلافات', 'تحديد أولويات الحياة المشتركة', 'مناقشة الأهداف المستقبلية (الدراسة، العمل، الإنجاب)'],
    color: 'sky'
  }, {
    title: 'الترتيبات العملية',
    items: ['اختيار مكان السكن المناسب', 'تجهيز المنزل بالأثاث والأدوات الأساسية', 'الاتفاق على توزيع المسؤوليات المنزلية', 'تحديد شكل العلاقة مع العائلتين'],
    color: 'amber'
  }, {
    title: 'الصحة والاستعداد النفسي',
    items: ['إجراء الفحوصات الطبية قبل الزواج', 'الاستعداد النفسي للحياة الزوجية', 'مناقشة القضايا الصحية المهمة مع الشريك', 'تعلم مهارات إدارة الضغوط والتوتر'],
    color: 'rose'
  }];
  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const prefix = type === 'bg' ? 'bg' : type === 'text' ? 'text' : 'border';
    const shade = type === 'bg' ? type === 'bg' && color === 'white' ? '' : '100' : type === 'text' ? '700' : '200';
    return color === 'white' ? `${prefix}-white` : `${prefix}-${color}-${shade}`;
  };
  return <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-purple-900">
        قائمة التحضير للزواج
      </h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <CheckSquareIcon className="h-7 w-7 text-purple-600 ml-3" />
            <h3 className="text-xl font-bold text-purple-800">
              قائمتك الشخصية
            </h3>
          </div>
          <div className="flex items-center">
            <div className="ml-3">
              <span className="text-sm text-slate-600">اكتمال التحضير:</span>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                <div className="h-full rounded-full bg-purple-600 transition-all duration-500" style={{
                width: `${calculateProgress()}%`
              }}></div>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="font-bold text-purple-700">
                {calculateProgress()}%
              </span>
            </div>
          </div>
        </div>
        <p className="text-slate-700 mb-6">
          استخدم هذه القائمة لتتبع تحضيراتك للزواج. يمكنك إضافة عناصر خاصة بك
          وتحديث حالة كل عنصر حسب إنجازك له.
        </p>
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="flex-1 relative">
              <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="أضف عنصراً جديداً لقائمتك..." className="w-full px-4 py-3 pr-12 rounded-lg border border-slate-200 focus:border-purple-300 focus:ring focus:ring-purple-100 focus:outline-none transition-all duration-200" />
            </div>
            <button onClick={addCustomItem} disabled={!newItem.trim()} className={`mr-3 p-3 rounded-lg transition-colors duration-200 ${newItem.trim() ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}>
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        {checklistItems.map((section, sectionIndex) => <div key={sectionIndex} className="mb-8">
            <h4 className={`font-bold text-lg mb-4 ${getColorClass(section.color, 'text')}`}>
              {section.title}
            </h4>
            <div className="space-y-3">
              {section.items.map((item, itemIndex) => {
            const index = sectionIndex * 4 + itemIndex;
            const isCompleted = completedItems.includes(index);
            return <div key={itemIndex} className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isCompleted ? getColorClass(section.color, 'bg') : 'bg-white border border-slate-200'}`}>
                    <button onClick={() => toggleItem(index)} className={`ml-3 w-6 h-6 rounded-md flex items-center justify-center ${isCompleted ? getColorClass(section.color, 'bg') + ' border ' + getColorClass(section.color, 'border') : 'bg-white border border-slate-300'}`}>
                      {isCompleted && <CheckIcon className="h-4 w-4 text-white" />}
                    </button>
                    <span className={`${isCompleted ? 'line-through ' + getColorClass(section.color, 'text') : 'text-slate-700'}`}>
                      {item}
                    </span>
                  </div>;
          })}
            </div>
          </div>)}
        {customItems.length > 0 && <div className="mb-8">
            <h4 className="font-bold text-lg mb-4 text-indigo-700">
              العناصر المخصصة
            </h4>
            <div className="space-y-3">
              {customItems.map((item, index) => {
            const actualIndex = index + checklistItems.length * 4;
            const isCompleted = completedItems.includes(actualIndex);
            return <div key={index} className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isCompleted ? 'bg-indigo-100' : 'bg-white border border-slate-200'}`}>
                    <button onClick={() => toggleCustomItem(index)} className={`ml-3 w-6 h-6 rounded-md flex items-center justify-center ${isCompleted ? 'bg-indigo-500 border border-indigo-200' : 'bg-white border border-slate-300'}`}>
                      {isCompleted && <CheckIcon className="h-4 w-4 text-white" />}
                    </button>
                    <span className={`flex-1 ${isCompleted ? 'line-through text-indigo-700' : 'text-slate-700'}`}>
                      {item}
                    </span>
                    <button onClick={() => removeCustomItem(index)} className="p-1 text-slate-400 hover:text-red-500">
                      <XIcon className="h-4 w-4" />
                    </button>
                  </div>;
          })}
            </div>
          </div>}
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
          <p className="text-amber-800 text-sm">
            <span className="font-bold">نصيحة: </span>
            احرص على مراجعة قائمة التحضير بشكل دوري مع شريك حياتك المستقبلي،
            وناقشا معاً العناصر التي تحتاج إلى اهتمام أكبر.
          </p>
        </div>
      </div>
    </div>;
}