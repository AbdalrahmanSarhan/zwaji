import React, { useState } from 'react';
import { CheckCircleIcon, XCircleIcon, ArrowRightIcon } from 'lucide-react';
interface QuizProps {
  userType: 'husband' | 'wife' | 'both' | 'engaged';
}
export function Quiz({
  userType
}: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const questions = [{
    question: 'ما هو حكم النفقة على الزوجة؟',
    answers: ['واجبة على الزوج حسب قدرته', 'مستحبة', 'واجبة على الزوجين بالتساوي', 'تطوعية حسب الاتفاق'],
    correctAnswer: 0,
    explanation: 'النفقة واجبة على الزوج لقوله تعالى: "لِيُنفِقْ ذُو سَعَةٍ مِّن سَعَتِهِ"',
    relevance: ['husband', 'wife', 'both', 'engaged']
  }, {
    question: 'ما حكم طاعة الزوجة لزوجها؟',
    answers: ['واجبة في كل الأحوال', 'واجبة في غير معصية الله', 'مستحبة فقط', 'غير واجبة مطلقاً'],
    correctAnswer: 1,
    explanation: 'طاعة الزوجة لزوجها واجبة في غير معصية الله، لحديث "لا طاعة لمخلوق في معصية الخالق"',
    relevance: ['wife', 'both', 'engaged']
  }, {
    question: 'متى يجوز للزوجة الخروج من بيت الزوجية؟',
    answers: ['في أي وقت تشاء', 'لا يجوز مطلقاً', 'بإذن الزوج إلا للضرورة', 'في النهار فقط'],
    correctAnswer: 2,
    explanation: 'يجوز للزوجة الخروج بإذن زوجها، وفي حالات الضرورة لا يشترط الإذن',
    relevance: ['wife', 'both', 'engaged']
  }];
  const filteredQuestions = questions.filter(q => q.relevance.includes(userType));
  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    if (answerIndex === filteredQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };
  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setShowExplanation(false);
  };
  const getScoreMessage = () => {
    const percentage = score / filteredQuestions.length * 100;
    if (percentage === 100) return 'ممتاز! إجابات صحيحة بالكامل';
    if (percentage >= 75) return 'أداء جيد جداً!';
    if (percentage >= 50) return 'أداء جيد، واصل التعلم';
    return 'تحتاج إلى مراجعة المعلومات';
  };
  if (showResult) {
    return <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-sky-900 mb-6">
            نتيجة الاختبار
          </h2>
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-sky-600">
                {Math.round(score / filteredQuestions.length * 100)}%
              </span>
            </div>
            <p className="text-lg font-medium text-slate-800 mb-2">
              {getScoreMessage()}
            </p>
            <p className="text-slate-600">
              أجبت على {score} من أصل {filteredQuestions.length} أسئلة بشكل صحيح
            </p>
          </div>
          <button onClick={resetQuiz} className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200">
            <div className="h-5 w-5 ml-2" />
            <span>إعادة الاختبار</span>
          </button>
        </div>
      </div>;
  }
  return <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-sky-900">اختبر معلوماتك</h2>
            <span className="text-slate-600">
              السؤال {currentQuestion + 1} من {filteredQuestions.length}
            </span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full">
            <div className="h-full bg-sky-500 rounded-full transition-all duration-300" style={{
            width: `${(currentQuestion + 1) / filteredQuestions.length * 100}%`
          }}></div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-medium text-slate-800 mb-4">
            {filteredQuestions[currentQuestion].question}
          </h3>
          <div className="space-y-3">
            {filteredQuestions[currentQuestion].answers.map((answer, index) => <button key={index} onClick={() => handleAnswer(index)} disabled={selectedAnswer !== null} className={`w-full text-right p-4 rounded-lg border transition-all duration-200 ${selectedAnswer === null ? 'hover:bg-sky-50 border-slate-200' : selectedAnswer === index ? index === filteredQuestions[currentQuestion].correctAnswer ? 'bg-green-50 border-green-200' : 'bg-rose-50 border-rose-200' : index === filteredQuestions[currentQuestion].correctAnswer ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center">
                  {selectedAnswer !== null && <>
                      {index === filteredQuestions[currentQuestion].correctAnswer ? <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> : selectedAnswer === index ? <XCircleIcon className="h-5 w-5 text-rose-500 ml-2" /> : null}
                    </>}
                  <span>{answer}</span>
                </div>
              </button>)}
          </div>
        </div>
        {showExplanation && <div className="mb-8 animate-fadeIn">
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
              <p className="text-amber-800">
                <span className="font-bold">التوضيح: </span>
                {filteredQuestions[currentQuestion].explanation}
              </p>
            </div>
          </div>}
        <div className="flex justify-end">
          <button onClick={handleNext} disabled={selectedAnswer === null} className={`inline-flex items-center px-6 py-3 rounded-md transition-all duration-200 ${selectedAnswer === null ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-sky-600 text-white hover:bg-sky-700'}`}>
            <span>
              {currentQuestion === filteredQuestions.length - 1 ? 'إنهاء الاختبار' : 'السؤال التالي'}
            </span>
            <ArrowRightIcon className="h-5 w-5 mr-2" />
          </button>
        </div>
      </div>
    </div>;
}