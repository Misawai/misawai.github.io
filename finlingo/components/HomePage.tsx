import React from 'react';
import { CountdownTimer } from './CountdownTimer';
import { StarIcon } from './icons/StarIcon';
import { LeaderboardIcon } from './icons/LeaderboardIcon';
import { ChatIcon } from './icons/ChatIcon';
import { LogoutIcon } from './icons/LogoutIcon';
import { User, Language } from '../types';
import { Translations } from '../localization';

interface LanguageSwitcherProps {
    currentLang: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, setLanguage }) => {
    const languages: { code: Language, name: string }[] = [
        { code: 'zh', name: '繁' },
        { code: 'en', name: 'EN' },
        { code: 'ja', name: '日' }
    ];

    return (
        <div className="flex items-center space-x-1 bg-slate-100 rounded-full p-1">
            {languages.map(lang => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1 text-sm font-bold rounded-full transition-colors ${
                        currentLang === lang.code 
                        ? 'bg-white text-[#58a700] shadow-sm' 
                        : 'text-slate-500 hover:bg-slate-200'
                    }`}
                >
                    {lang.name}
                </button>
            ))}
        </div>
    );
};

const UserLevelBadge: React.FC<{ level: 'easy' | 'medium' | 'hard', t: Translations['zh']['home']['levels'] }> = ({ level, t }) => {
    const config = {
        easy: { text: t.easy, bg: 'bg-green-100', textColor: 'text-green-800' },
        medium: { text: t.medium, bg: 'bg-yellow-100', textColor: 'text-yellow-800' },
        hard: { text: t.hard, bg: 'bg-red-100', textColor: 'text-red-800' },
    };
    const { text, bg, textColor } = config[level] || config.easy;
    return <span className={`ml-2 px-2 py-1 text-xs font-bold rounded-full ${bg} ${textColor}`}>{text}</span>;
};


interface HomePageProps {
  user: User;
  onStartChallenge: () => void;
  onShowLeaderboard: () => void;
  onShowChat: () => void;
  onLogout: () => void;
  t: Translations['zh'];
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ user, onStartChallenge, onShowLeaderboard, onShowChat, onLogout, t, language, setLanguage }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <header className="p-4 flex justify-between items-center bg-white border-b border-slate-200">
        <LanguageSwitcher currentLang={language} setLanguage={setLanguage} />
        <div className="flex items-center space-x-4">
           <button onClick={onShowLeaderboard} className="text-slate-500 hover:text-[#58a700] transition-colors" aria-label={t.leaderboard.title}>
               <LeaderboardIcon className="w-7 h-7" />
           </button>
           <button onClick={onLogout} className="text-slate-500 hover:text-red-500 transition-colors" aria-label={t.home.logout}>
              <LogoutIcon className="w-7 h-7" />
           </button>
           <div className="flex items-center bg-yellow-100 text-yellow-600 font-bold px-3 py-1.5 rounded-full">
            <StarIcon className="w-5 h-5 text-yellow-400 mr-2" />
            <span>{user.score}</span>
          </div>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <div className="w-full max-w-md space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-2 flex items-center justify-center flex-wrap">
                    {t.home.greeting(user.username)}
                    <UserLevelBadge level={user.level || 'easy'} t={t.home.levels} />
                </h2>
                <p className="text-slate-500 mb-6">{t.home.challengePrompt}</p>
                <button
                    onClick={onStartChallenge}
                    className="w-full bg-[#58CC02] text-white font-extrabold py-4 px-6 rounded-2xl text-lg uppercase tracking-wider hover:bg-[#61E002] transform hover:-translate-y-1 transition-all shadow-[0_5px_0_0_#48A402] active:shadow-none active:translate-y-0"
                >
                    {t.home.challengeButton}
                </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-left">
                <div className="flex items-center">
                    <div className="bg-sky-100 p-3 rounded-full mr-4">
                        <ChatIcon className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800">{t.home.askCoachTitle}</h3>
                        <p className="text-slate-500 text-sm">{t.home.askCoachPrompt}</p>
                    </div>
                    <button
                        onClick={onShowChat}
                        className="ml-auto bg-sky-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-sky-600 transition-colors"
                    >
                        {t.home.askCoachButton}
                    </button>
                </div>
            </div>
        </div>
      </main>
      
      <footer className="w-full p-4">
        <CountdownTimer t={t} />
      </footer>
    </div>
  );
};