import React, { useState } from 'react';
import { SendIcon, LightbulbIcon, AlertCircleIcon, MessageCircleIcon, CheckCircleIcon, XIcon } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { SectionSuggestions } from './SectionSuggestions';
type FeedbackType = 'problem' | 'idea' | 'general';
export function FeedbackForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('general');
  const [feedbackText, setFeedbackText] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setShowSuccessModal(true);
      // Reset form
      setFeedbackText('');
      setFeedbackType('general');
      setName('');
      setEmail('');
    }, 1500);
  };
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };
  const feedbackSuggestions = [{
    id: 'suggestion-1',
    text: 'كن محدداً في وصف المشكلة أو الفكرة، وقدم أمثلة واقعية عندما يكون ذلك ممكناً.'
  }, {
    id: 'suggestion-2',
    text: 'عند الإبلاغ عن مشكلة، اذكر الخطوات التي اتبعتها والنتيجة المتوقعة مقابل ما حدث فعلاً.'
  }, {
    id: 'suggestion-3',
    text: 'إذا كانت لديك فكرة لتحسين التطبيق، اشرح كيف يمكن أن تفيد المستخدمين الآخرين أيضاً.'
  }, {
    id: 'suggestion-4',
    text: 'لا تتردد في إرسال أي ملاحظات، فهدفنا هو تحسين التطبيق بناءً على تجارب المستخدمين الحقيقية.'
  }];
  const problemSuggestions = [{
    id: 'problem-1',
    text: 'وصف المشكلة بشكل دقيق: ما الذي حدث؟ وأين حدث؟'
  }, {
    id: 'problem-2',
    text: 'هل المشكلة متكررة أم حدثت مرة واحدة فقط؟'
  }, {
    id: 'problem-3',
    text: 'ما هو الجهاز ونوع المتصفح الذي تستخدمه؟'
  }, {
    id: 'problem-4',
    text: 'هل جربت حلولاً أخرى قبل الإبلاغ عن المشكلة؟'
  }];
  const ideaSuggestions = [{
    id: 'idea-1',
    text: 'ما هي الفكرة التي تقترحها لتحسين التطبيق؟'
  }, {
    id: 'idea-2',
    text: 'كيف يمكن لهذه الفكرة أن تفيد المستخدمين؟'
  }, {
    id: 'idea-3',
    text: 'هل رأيت هذه الفكرة مطبقة في تطبيقات أخرى؟'
  }, {
    id: 'idea-4',
    text: 'ما مدى أهمية هذه الفكرة بالنسبة لك؟'
  }];
  const getActiveSuggestions = () => {
    switch (feedbackType) {
      case 'problem':
        return problemSuggestions;
      case 'idea':
        return ideaSuggestions;
      default:
        return feedbackSuggestions;
    }
  };
  const getPageTitle = () => {
    switch (feedbackType) {
      case 'problem':
        return 'الإبلاغ عن مشكلة';
      case 'idea':
        return 'اقتراح فكرة';
      default:
        return 'إرسال ملاحظات';
    }
  };
  const getPageDescription = () => {
    switch (feedbackType) {
      case 'problem':
        return 'ساعدنا في تحسين التطبيق من خلال الإبلاغ عن المشاكل التي تواجهها';
      case 'idea':
        return 'شاركنا أفكارك لتطوير التطبيق وإضافة ميزات جديدة';
      default:
        return 'نرحب بملاحظاتك واقتراحاتك لتحسين تجربتك في استخدام التطبيق';
    }
  };
  const getIcon = () => {
    switch (feedbackType) {
      case 'problem':
        return <AlertCircleIcon className="h-6 w-6" />;
      case 'idea':
        return <LightbulbIcon className="h-6 w-6" />;
      default:
        return <MessageCircleIcon className="h-6 w-6" />;
    }
  };
  const getColor = () => {
    switch (feedbackType) {
      case 'problem':
        return 'rose';
      case 'idea':
        return 'amber';
      default:
        return 'sky';
    }
  };
  return <div className="max-w-4xl mx-auto">
      <PageHeader title={getPageTitle()} description={getPageDescription()} icon={getIcon()} color={getColor()} />
      <SectionSuggestions title={`اقتراحات لإرسال ${feedbackType === 'problem' ? 'المشكلة' : feedbackType === 'idea' ? 'الفكرة' : 'الملاحظات'} بشكل فعال`} suggestions={getActiveSuggestions()} color={getColor()} />
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-wrap gap-3 mb-6">
          <button onClick={() => setFeedbackType('general')} className={`px-4 py-2 rounded-full flex items-center text-sm font-medium transition-colors ${feedbackType === 'general' ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-600 hover:bg-sky-50 hover:text-sky-600'}`}>
            <MessageCircleIcon className="h-4 w-4 ml-2" />
            <span>ملاحظات عامة</span>
          </button>
          <button onClick={() => setFeedbackType('problem')} className={`px-4 py-2 rounded-full flex items-center text-sm font-medium transition-colors ${feedbackType === 'problem' ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-600'}`}>
            <AlertCircleIcon className="h-4 w-4 ml-2" />
            <span>الإبلاغ عن مشكلة</span>
          </button>
          <button onClick={() => setFeedbackType('idea')} className={`px-4 py-2 rounded-full flex items-center text-sm font-medium transition-colors ${feedbackType === 'idea' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-600'}`}>
            <LightbulbIcon className="h-4 w-4 ml-2" />
            <span>اقتراح فكرة</span>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="feedback" className="block text-sm font-medium text-slate-700 mb-2">
              {feedbackType === 'problem' ? 'وصف المشكلة' : feedbackType === 'idea' ? 'وصف الفكرة' : 'الملاحظات'}
            </label>
            <textarea id="feedback" value={feedbackText} onChange={e => setFeedbackText(e.target.value)} rows={6} className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" placeholder={feedbackType === 'problem' ? 'اشرح المشكلة التي تواجهها بالتفصيل...' : feedbackType === 'idea' ? 'اشرح فكرتك وكيف يمكن أن تحسن التطبيق...' : 'اكتب ملاحظاتك هنا...'} required></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                الاسم (اختياري)
              </label>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" placeholder="اكتب اسمك هنا..." />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                البريد الإلكتروني (اختياري)
              </label>
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" placeholder="example@example.com" />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" disabled={isSubmitting || !feedbackText.trim()} className={`px-6 py-2.5 rounded-md flex items-center font-medium transition-colors ${!feedbackText.trim() ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : feedbackType === 'problem' ? 'bg-rose-600 hover:bg-rose-700 text-white' : feedbackType === 'idea' ? 'bg-amber-600 hover:bg-amber-700 text-white' : 'bg-sky-600 hover:bg-sky-700 text-white'}`}>
              {isSubmitting ? <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                  <span>جاري الإرسال...</span>
                </> : <>
                  <SendIcon className="h-4 w-4 ml-2" />
                  <span>إرسال</span>
                </>}
            </button>
          </div>
        </form>
      </div>
      {/* Success Modal */}
      {showSuccessModal && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-fadeIn">
            <div className="p-4 bg-green-50 border-b border-green-100 flex justify-between items-center">
              <h3 className="font-bold text-green-800">تم الإرسال بنجاح</h3>
              <button onClick={handleCloseSuccessModal} className="p-1.5 rounded-full hover:bg-green-100 text-slate-500 hover:text-slate-700 transition-colors">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-lg text-slate-800 mb-2">
                شكراً لك على ملاحظاتك!
              </h4>
              <p className="text-slate-600 mb-6">
                {feedbackType === 'problem' ? 'تم استلام بلاغك عن المشكلة بنجاح وسنعمل على حلها في أقرب وقت ممكن.' : feedbackType === 'idea' ? 'تم استلام اقتراحك بنجاح وسندرسه لتطوير التطبيق مستقبلاً.' : 'تم استلام ملاحظاتك بنجاح وسنأخذها بعين الاعتبار لتحسين التطبيق.'}
              </p>
              <button onClick={handleCloseSuccessModal} className="px-6 py-2.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200">
                حسناً
              </button>
            </div>
          </div>
        </div>}
    </div>;
}