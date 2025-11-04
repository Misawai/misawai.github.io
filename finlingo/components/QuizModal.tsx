import React from 'react';
import { Question, Language } from '../types';
import { Translations } from '../localization';
import { MascotNotification } from './MascotNotification';

interface QuizModalProps {
  question: Question;
  selectedAnswer: string | null;
  answerStatus: 'unanswered' | 'correct' | 'incorrect';
  onSelectAnswer: (option: string) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  onClose: () => void;
  t: Translations['zh'];
  language: Language;
  userLevel: 'easy' | 'medium' | 'hard';
  justLeveledUp: boolean;
}

const DifficultyBadge: React.FC<{ difficulty: 'easy' | 'medium' | 'hard', t: Translations['zh']['quiz']['difficulty'] }> = ({ difficulty, t }) => {
    const config = {
        easy: { text: t.easy, bg: 'bg-green-100', text_color: 'text-green-800' },
        medium: { text: t.medium, bg: 'bg-yellow-100', text_color: 'text-yellow-800' },
        hard: { text: t.hard, bg: 'bg-red-100', text_color: 'text-red-800' },
    }
    const { text, bg, text_color } = config[difficulty];
    return (
        <span className={`px-2 py-1 text-xs font-bold rounded-full ${bg} ${text_color}`}>
            {text}
        </span>
    )
}

const UserLevelBadge: React.FC<{ level: 'easy' | 'medium' | 'hard', t: Translations['zh']['home']['levels'] }> = ({ level, t }) => {
    const config = {
        easy: { text: t.easy, bg: 'bg-green-100', textColor: 'text-green-800' },
        medium: { text: t.medium, bg: 'bg-yellow-100', textColor: 'text-yellow-800' },
        hard: { text: t.hard, bg: 'bg-red-100', textColor: 'text-red-800' },
    };
    const { text, bg, textColor } = config[level] || config.easy;
    return <span className={`px-2 py-1 text-xs font-bold rounded-full ${bg} ${textColor}`}>{text}</span>;
};


export const QuizModal: React.FC<QuizModalProps> = ({
  question,
  selectedAnswer,
  answerStatus,
  onSelectAnswer,
  onCheckAnswer,
  onNextQuestion,
  onClose,
  t,
  language,
  userLevel,
  justLeveledUp,
}) => {

  const getOptionClasses = (optionKey: string) => {
    let baseClasses = "w-full text-left p-4 border-2 rounded-2xl text-slate-700 font-bold transition-all text-base md:text-lg";
    
    if (answerStatus !== 'unanswered') {
        if (optionKey === question.correctAnswer) {
            return `${baseClasses} bg-green-100 border-green-300 text-green-800`;
        }
        if (optionKey === selectedAnswer && optionKey !== question.correctAnswer) {
            return `${baseClasses} bg-red-100 border-red-300 text-red-800`;
        }
        return `${baseClasses} bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed`;
    }
    
    if (selectedAnswer === optionKey) {
        return `${baseClasses} bg-blue-100 border-blue-400`;
    }

    return `${baseClasses} bg-white border-slate-200 hover:bg-slate-50`;
  };
  
  const levelUpMessage = 
    justLeveledUp && userLevel === 'medium' ? t.levelUp.toMedium :
    justLeveledUp && userLevel === 'hard' ? t.levelUp.toHard : '';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-end z-50">
      <div className="w-full h-full flex flex-col" onClick={onClose}></div>
      <div className="w-full flex-grow flex flex-col justify-end">
        <div className="bg-slate-100 w-full max-w-4xl mx-auto rounded-t-2xl p-4 md:p-8 flex flex-col">
            <div className="flex justify-between items-start gap-4 mb-6">
                <div className="flex items-center flex-wrap gap-2">
                    <UserLevelBadge level={userLevel} t={t.home.levels} />
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800">{question.question[language]}</h2>
                </div>
                 <div className="flex-shrink-0">
                    <DifficultyBadge difficulty={question.difficulty} t={t.quiz.difficulty} />
                 </div>
            </div>
         
          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.key}
                onClick={() => onSelectAnswer(option.key)}
                className={getOptionClasses(option.key)}
                disabled={answerStatus !== 'unanswered'}
              >
                {option.text[language]}
              </button>
            ))}
          </div>
        </div>
      </div>
        {answerStatus === 'unanswered' ? (
            <div className="w-full max-w-4xl mx-auto p-4 md:p-6 bg-slate-100 border-t-2 border-slate-200">
                <button
                    onClick={onCheckAnswer}
                    disabled={!selectedAnswer}
                    className="w-full bg-[#58CC02] text-white font-extrabold py-3 px-6 rounded-2xl text-lg uppercase tracking-wider disabled:bg-slate-300 disabled:shadow-none disabled:cursor-not-allowed hover:bg-[#61E002] transform transition-all shadow-[0_4px_0_0_#48A402] active:shadow-none active:translate-y-0.5"
                >
                    {t.quiz.checkAnswer}
                </button>
            </div>
        ) : (
            <div className="w-full max-w-4xl mx-auto">
                <MascotNotification 
                    status={justLeveledUp ? 'level-up' : answerStatus}
                    question={question}
                    language={language}
                    levelUpMessage={levelUpMessage}
                    onNext={onNextQuestion}
                    t={t.quiz}
                />
            </div>
        )}
    </div>
  );
};