
import React from 'react';
import { Translations } from '../localization';
import { FinleyTheOwlIcon } from './icons/FinleyTheOwlIcon';
import { User } from '../types';

interface MascotIntroProps {
  user: User;
  onGetStarted: () => void;
  t: Translations['zh'];
}

export const MascotIntro: React.FC<MascotIntroProps> = ({ user, onGetStarted, t }) => {
  const intro = t.mascotIntro;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 text-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full animate-fade-in-up">
        <FinleyTheOwlIcon className="w-32 h-32 mx-auto mb-4 text-[#58a700]" />
        
        <h1 className="text-3xl font-extrabold text-[#4c4c4c] mb-2">{intro.title}</h1>
        <h2 className="text-xl font-bold text-slate-600 mb-4">{intro.greeting(user.username)}</h2>
        
        <p className="text-slate-500 mb-8">{intro.introduction}</p>
        
        <button
          onClick={onGetStarted}
          className="w-full bg-[#58CC02] text-white font-extrabold py-3 px-4 rounded-xl hover:bg-[#61E002] transition-all shadow-[0_4px_0_0_#48A402] active:shadow-none active:translate-y-0.5"
        >
          {intro.buttonText}
        </button>
      </div>
    </div>
  );
};
