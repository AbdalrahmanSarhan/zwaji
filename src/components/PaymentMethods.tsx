import React, { useState } from 'react';
import { AlertCircleIcon } from 'lucide-react';
interface PaymentMethodsProps {
  amount: number;
  title: string;
  description: string;
  buttonText: string;
  onPaymentComplete: (data: {
    method: string;
  }) => void;
}
export function PaymentMethods({
  amount,
  title,
  description,
  buttonText,
  onPaymentComplete
}: PaymentMethodsProps) {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const handlePaymentSubmit = () => {
    if (selectedMethod) {
      onPaymentComplete({
        method: selectedMethod
      });
    }
  };
  return <div className="animate-fadeIn">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
        <div className="mt-3 inline-block bg-slate-100 px-4 py-2 rounded-full">
          <span className="font-bold text-slate-900">{amount} دينار</span>
        </div>
      </div>
      <div className="space-y-4 mb-6">
        <button onClick={() => setSelectedMethod('cliq')} className={`w-full p-4 border rounded-lg text-right flex items-center transition-all duration-200 ${selectedMethod === 'cliq' ? 'bg-green-50 border-green-300 ring-2 ring-green-100' : 'bg-white hover:bg-green-50 hover:border-green-200'}`}>
          <div className="w-12 h-12 ml-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">📱</span>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-1">الدفع عبر CliQ</h4>
            <p className="text-sm text-slate-500">
              طريقة سهلة وسريعة للدفع من خلال تطبيق البنك الخاص بك
            </p>
          </div>
        </button>
        <button onClick={() => setSelectedMethod('bank-transfer')} className={`w-full p-4 border rounded-lg text-right flex items-center transition-all duration-200 ${selectedMethod === 'bank-transfer' ? 'bg-blue-50 border-blue-300 ring-2 ring-blue-100' : 'bg-white hover:bg-blue-50 hover:border-blue-200'}`}>
          <div className="w-12 h-12 ml-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">🏦</span>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-1">تحويل بنكي</h4>
            <p className="text-sm text-slate-500">
              تحويل مباشر إلى الحساب البنكي للمشروع
            </p>
          </div>
        </button>
      </div>
      <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200 mb-6">
        <div className="flex items-start">
          <AlertCircleIcon className="h-5 w-5 text-amber-500 mt-0.5 ml-2 flex-shrink-0" />
          <p className="text-sm text-amber-700">
            جميع التبرعات تستخدم لتطوير المحتوى وتحسين المشروع. سيتم تأكيد
            استلام التبرع خلال 24 ساعة عمل.
          </p>
        </div>
      </div>
      <button onClick={handlePaymentSubmit} disabled={!selectedMethod} className={`w-full py-3 px-4 rounded-md font-medium transition-colors duration-200 ${!selectedMethod ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-700 text-white'}`}>
        {buttonText}
      </button>
    </div>;
}