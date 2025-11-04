
import React from 'react';
import { Translations } from '../localization';
import { RocketIcon } from './icons/RocketIcon';
import { StarIcon } from './icons/StarIcon';

interface SubscriptionUpsellProps {
  onComplete: () => void;
  t: Translations['zh'];
}

export const SubscriptionUpsell: React.FC<SubscriptionUpsellProps> = ({ onComplete, t }) => {
    const content = t.subscriptionUpsell;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 text-center">
            <div className="w-full max-w-md animate-fade-in-up">
                <h1 className="text-3xl font-extrabold text-slate-800 mb-8">{content.title}</h1>
                
                <div className="space-y-4">
                    <button 
                        onClick={onComplete}
                        className="w-full text-left p-4 border-2 border-purple-500 bg-purple-50 rounded-2xl transition-all hover:bg-purple-100 flex items-start gap-4"
                    >
                        <RocketIcon className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="font-bold text-purple-800 text-lg">{content.super.title}</h2>
                            <p className="text-purple-700">{content.super.description}</p>
                        </div>
                    </button>
                    
                    <button 
                        onClick={onComplete}
                        className="w-full text-left p-4 border-2 border-slate-300 bg-white rounded-2xl transition-all hover:bg-slate-50 flex items-start gap-4"
                    >
                        <StarIcon className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                         <div>
                            <h2 className="font-bold text-slate-800 text-lg">{content.free.title}</h2>
                            <p className="text-slate-600">{content.free.description}</p>
                        </div>
                    </button>
                </div>
                
                 <button
                    onClick={onComplete}
                    className="w-full bg-slate-400 text-white font-bold py-3 px-4 rounded-xl hover:bg-slate-500 transition-all mt-8"
                >
                    {content.button}
                </button>
            </div>
        </div>
    );
};
