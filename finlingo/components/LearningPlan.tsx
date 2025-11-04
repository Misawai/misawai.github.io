
import React from 'react';
import { Translations } from '../localization';
import { FinleyTheOwlIcon } from './icons/FinleyTheOwlIcon';

interface LearningPlanProps {
  onSetPlan: (plan: 'casual' | 'regular' | 'serious') => void;
  t: Translations['zh'];
}

type PlanKey = 'casual' | 'regular' | 'serious';

export const LearningPlan: React.FC<LearningPlanProps> = ({ onSetPlan, t }) => {
    const plan = t.learningPlan;
    const options: PlanKey[] = ['casual', 'regular', 'serious'];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 text-center">
            <div className="w-full max-w-md animate-fade-in-up">
                <FinleyTheOwlIcon className="w-28 h-28 mx-auto mb-4 text-[#58a700]" />
                <h1 className="text-3xl font-extrabold text-slate-800 mb-2">{plan.title}</h1>
                <p className="text-slate-500 mb-8">{plan.description}</p>
                
                <div className="space-y-3">
                    {options.map(key => (
                         <button
                            key={key}
                            onClick={() => onSetPlan(key)}
                            className="w-full text-left p-4 border-2 rounded-2xl transition-all bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300 flex items-center"
                        >
                            <span className="font-bold text-slate-700 text-lg flex-grow">{plan.options[key].title}</span>
                            <span className="text-slate-500 font-semibold">{plan.options[key].duration}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
