import React, { useMemo } from 'react';
import { FinleyTheOwlIcon } from './icons/FinleyTheOwlIcon';
import { Translations } from '../localization';
import { Question, Language } from '../types';

interface MascotNotificationProps {
  status: 'correct' | 'incorrect' | 'level-up';
  question: Question;
  language: Language;
  levelUpMessage: string;
  onNext: () => void;
  t: Translations['zh']['quiz'];
}

export const MascotNotification: React.FC<MascotNotificationProps> = ({ status, question, language, levelUpMessage, onNext, t }) => {
  const encouragementMessage = useMemo(() => {
    const messages = t.encouragement.correct;
    return messages[Math.floor(Math.random() * messages.length)];
  }, [t.encouragement.correct]);

  let title = '';
  let message = '';
  let buttonText = t.nextQuestion;
  let bgColor = 'bg-green-500';
  let containerBgColor = 'bg-green-100';

  if (status === 'correct') {
    title = encouragementMessage;
    message = `+10 ${t.scoreBonus.replace('+10', '')}`;
  } else if (status === 'incorrect') {
    title = t.incorrect;
    message = `${t.encouragement.incorrect}\n"${question.options.find(o => o.key === question.correctAnswer)!.text[language]}"\n\n${question.explanation[language]}`;
    buttonText = t.finishChallenge;
    bgColor = 'bg-red-500';
    containerBgColor = 'bg-red-100';
  } else if (status === 'level-up') {
    title = levelUpMessage;
    message = t.scoreBonus;
  }
  
  return (
    <div className={`w-full p-4 md:p-6 transition-transform duration-300 ease-out ${containerBgColor} border-t-2 border-slate-200`}>
        <div className="flex items-start gap-4">
            <FinleyTheOwlIcon className="w-20 h-20 text-[#58a700] flex-shrink-0" />
            <div className="relative bg-white rounded-xl p-4 flex-grow shadow-lg">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white transform rotate-45"></div>
            <h3 className="font-extrabold text-lg text-slate-800">{title}</h3>
            <p className="text-slate-600 whitespace-pre-wrap">{message}</p>
            </div>
        </div>
        <div className="mt-4">
            <button 
            onClick={onNext}
            className={`w-full text-white font-extrabold py-3 px-6 rounded-2xl text-lg uppercase tracking-wider transform transition-all shadow-lg border-b-4 border-black/20 ${bgColor}`}
            >
                {buttonText}
            </button>
        </div>
    </div>
  );
};