
import React, { useState } from 'react';
import { Translations } from '../localization';
import { Language } from '../types';
import { FinleyTheOwlIcon } from './icons/FinleyTheOwlIcon';

interface OnboardingQuizProps {
  onComplete: (answers: Record<string, string>) => void;
  t: Translations['zh'];
  language: Language;
}

export const OnboardingQuiz: React.FC<OnboardingQuizProps> = ({ onComplete, t, language }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const quizData = t.onboardingQuiz;
  const totalQuestions = quizData.questions.length;
  const currentQuestion = quizData.questions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    const questionId = currentQuestion.id;
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-4 px-2">
          <p className="font-bold text-green-600 mb-2">{quizData.progress(currentQuestionIndex + 1, totalQuestions)}</p>
          <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="relative pt-16">
            <div className="absolute left-1/2 -translate-x-1/2 -top-0">
                <FinleyTheOwlIcon className="w-28 h-28 text-[#58a700]" />
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full text-center mt-12">
              <h2 key={currentQuestionIndex} className="text-2xl font-bold text-slate-800 mb-8 animate-fade-in-up">
                {currentQuestion.question}
              </h2>

              <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left p-4 border-2 rounded-2xl text-slate-700 font-bold transition-all text-base md:text-lg bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
