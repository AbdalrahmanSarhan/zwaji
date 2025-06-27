import React, { useState } from 'react';
import { XIcon, HeartIcon, AlertCircleIcon, CheckIcon } from 'lucide-react';
import { PaymentMethods } from './PaymentMethods';
interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function DonationModal({
  isOpen,
  onClose
}: DonationModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [showPaymentInstructions, setShowPaymentInstructions] = useState(false);
  if (!isOpen) return null;
  const handleDonationComplete = (data: any) => {
    console.log('Donation completed:', data);
    if (data.method === 'cliq' || data.method === 'bank-transfer') {
      setPaymentMethod(data.method);
      setShowPaymentInstructions(true);
    } else {
      setPaymentComplete(true);
      setTimeout(() => {
        onClose();
        // Reset state after modal closes
        setTimeout(() => {
          setPaymentComplete(false);
          setSelectedAmount(null);
          setCustomAmount('');
        }, 300);
      }, 3000);
    }
  };
  const handleCompletePayment = () => {
    setShowPaymentInstructions(false);
    setPaymentComplete(true);
    setTimeout(() => {
      onClose();
      // Reset state after modal closes
      setTimeout(() => {
        setPaymentComplete(false);
        setSelectedAmount(null);
        setCustomAmount('');
        setShowPaymentInstructions(false);
        setPaymentMethod(null);
      }, 300);
    }, 3000);
  };
  const donationAmounts = [5, 10, 20, 50];
  const finalAmount = selectedAmount === -1 && customAmount ? parseFloat(customAmount) : selectedAmount || 0;
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, '');
    setCustomAmount(value);
    setSelectedAmount(-1);
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="p-4 bg-rose-50 border-b border-rose-100 flex justify-between items-center sticky top-0 z-10">
          <h3 className="font-bold text-rose-900 flex items-center">
            <HeartIcon className="h-5 w-5 ml-2 text-rose-600" />
            <span>دعم المشروع</span>
          </h3>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-rose-100 text-slate-500 hover:text-slate-700 transition-colors">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-6" style={{
        maxHeight: 'calc(90vh - 70px)'
      }}>
          {paymentComplete ? <div className="text-center py-8 animate-fadeIn">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckIcon className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-green-700 mb-2">
                تم التبرع بنجاح!
              </h4>
              <p className="text-slate-600 mb-6">
                شكراً لدعمكم المشروع بمبلغ {finalAmount} دينار
              </p>
              <p className="text-slate-500 text-sm">
                تبرعك سيساعدنا في تطوير المحتوى وتحسين التطبيق
              </p>
            </div> : !showPaymentInstructions && selectedAmount === null ? <div className="text-center">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  ادعم مشروع حقوق الزوجين
                </h2>
                <p className="text-slate-600">
                  تبرعك يساعدنا في استمرار تطوير المحتوى التوعوي وتحسين التطبيق
                  لخدمة المزيد من المستفيدين.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="font-bold text-slate-700 mb-4">
                  اختر قيمة التبرع:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {donationAmounts.map(amount => <button key={amount} onClick={() => setSelectedAmount(amount)} className="py-3 px-4 border rounded-lg hover:bg-rose-50 hover:border-rose-300 transition-colors">
                      <span className="block text-xl font-bold text-rose-700">
                        {amount} دينار
                      </span>
                    </button>)}
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    أو أدخل قيمة أخرى:
                  </label>
                  <div className="flex">
                    <input type="text" value={customAmount} onChange={handleCustomAmountChange} placeholder="0.00" className="flex-1 px-3 py-2 rounded-r-none rounded-md border border-slate-200 focus:border-rose-300 focus:ring focus:ring-rose-100 focus:outline-none" />
                    <div className="bg-slate-100 border border-slate-200 border-r-0 rounded-l-md px-3 flex items-center">
                      <span className="text-slate-600">دينار</span>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={() => setSelectedAmount(customAmount ? -1 : 10)} disabled={selectedAmount === -1 && !customAmount} className={`w-full py-3 px-4 rounded-md font-medium text-white transition-colors ${selectedAmount === -1 && !customAmount ? 'bg-slate-300 cursor-not-allowed' : 'bg-rose-600 hover:bg-rose-700'}`}>
                متابعة
              </button>
            </div> : showPaymentInstructions ? <div className="animate-fadeIn">
              <div className="p-6 border border-slate-200 rounded-lg bg-slate-50 mb-6">
                <h3 className="font-bold text-lg text-slate-800 mb-4">
                  تعليمات الدفع عبر{' '}
                  {paymentMethod === 'cliq' ? 'CliQ' : 'التحويل البنكي'}
                </h3>
                {paymentMethod === 'cliq' && <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <p className="font-medium text-slate-700 mb-2">
                        خطوات الدفع عبر CliQ:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                        <li>قم بتسجيل الدخول إلى تطبيق البنك الخاص بك</li>
                        <li>انقر على إجراء الدفع/التحويل باستخدام CliQ</li>
                        <li>
                          اكتب معرف الاسم المستعار الخاص بنا:{' '}
                          <span className="font-bold">familyguide</span>
                        </li>
                        <li>
                          قم بكتابة مبلغ التبرع:{' '}
                          <span className="font-bold">{finalAmount} دينار</span>
                        </li>
                        <li>اختر البنك الإسلامي الأردني</li>
                        <li>
                          بعد إتمام عملية الدفع، انقر على "تم الدفع" أدناه
                        </li>
                      </ol>
                    </div>
                  </div>}
                {paymentMethod === 'bank-transfer' && <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <p className="font-medium text-slate-700 mb-2">
                        تفاصيل الحساب البنكي:
                      </p>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex flex-col">
                          <span className="font-bold">اسم البنك:</span>
                          <span>البنك الإسلامي الأردني</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold">اسم المستفيد:</span>
                          <span>مركز الإرشاد الأسري للاستشارات</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold">رقم الحساب:</span>
                          <span>1234567890</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold">رقم الآيبان (IBAN):</span>
                          <div className="bg-amber-50 p-2 rounded border border-amber-100 my-1 font-mono text-center">
                            JO94 JIBA 0130 0000 0012 3456 7890
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-4">
                  <p className="font-medium text-amber-800 mb-2">للتأكيد:</p>
                  <p className="text-sm text-amber-700">
                    بعد إتمام التحويل، يرجى التواصل معنا على الرقم: 0779958770
                    لتأكيد استلام المبلغ
                  </p>
                </div>
                <div className="bg-sky-50 p-4 rounded-lg border border-sky-200 mt-4">
                  <div className="flex items-start">
                    <AlertCircleIcon className="h-5 w-5 text-sky-500 mt-0.5 ml-2 flex-shrink-0" />
                    <p className="text-sm text-sky-700">شكراً لدعمكم للمشروع</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowPaymentInstructions(false)} className="flex-1 py-2.5 rounded-md font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors duration-200">
                  رجوع
                </button>
                <button onClick={handleCompletePayment} className="flex-1 py-2.5 rounded-md font-medium bg-green-600 hover:bg-green-700 text-white transition-colors duration-200">
                  تم الدفع
                </button>
              </div>
            </div> : <PaymentMethods amount={finalAmount} title="تبرع لدعم المشروع" description="اختر طريقة الدفع المناسبة لإتمام التبرع" buttonText="تبرع الآن" onPaymentComplete={handleDonationComplete} />}
        </div>
      </div>
    </div>;
}