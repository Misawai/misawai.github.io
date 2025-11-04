
import React from 'react';
import { Translations } from '../localization';
import { FinleyTheOwlIcon } from './icons/FinleyTheOwlIcon';

interface LearningPlanConfirmationProps {
  plan: 'casual' | 'regular' | 'serious';
  onComplete: () => void;
  t: Translations['zh'];
}

export const LearningPlanConfirmation: React.FC<LearningPlanConfirmationProps> = ({ plan, onComplete, t }) => {
    const content = t.learningPlanConfirmation;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 text-center">
            <div className="w-full max-w-md animate-fade-in-up">
                <FinleyTheOwlIcon className="w-28 h-28 mx-auto mb-4 text-[#58a700]" />
                <h1 className="text-3xl font-extrabold text-slate-800 mb-4">{content.title}</h1>
                
                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                    <h2 className="font-bold text-green-600 mb-2">{content.threeMonthGoal}</h2>
                    <p className="text-slate-600">
                        {content.outcomes[plan]}
                    </p>
                </div>
                
                <button
                    onClick={onComplete}
                    className="w-full bg-[#58CC02] text-white font-extrabold py-3 px-4 rounded-xl hover:bg-[#61E002] transition-all shadow-[0_4px_0_0_#48A402] active:shadow-none active:translate-y-0.5 mt-8"
                >
                    {content.button}
                </button>
            </div>
        </div>
    );
};
