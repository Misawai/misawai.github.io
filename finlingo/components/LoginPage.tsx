import React, { useState } from 'react';
import { Translations } from '../localization';
import { GoogleIcon } from './icons/GoogleIcon';

interface LoginPageProps {
  onLogin: (username: string) => void;
  t: Translations['zh']; // Use one language as the shape for the type
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin, t }) => {
  const [username, setUsername] = useState('');

  const handleNicknameLogin = () => {
    if (username.trim()) {
      onLogin(username.trim());
    } else {
      alert(t.login.enterNickname);
    }
  };
  
  const handleGoogleLogin = () => {
    // Simulate Google Login by using a default username
    onLogin('Google User'); 
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleNicknameLogin();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#78c800] to-[#58a700] p-4 text-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full">
        <h1 className="text-4xl font-extrabold text-[#4c4c4c] mb-2">Finlingo</h1>
        <p className="text-slate-500 mb-8">{t.login.subtitle}</p>
        
        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center bg-white border border-slate-300 text-slate-700 font-bold py-3 px-4 rounded-xl hover:bg-slate-50 transition-all"
          >
            <GoogleIcon className="w-5 h-5 mr-3" />
            {t.login.googleButton}
          </button>
          
          <div className="flex items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-slate-400 text-xs font-bold uppercase">{t.login.orDivider}</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>
          
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t.login.placeholder}
            className="w-full border border-slate-300 text-slate-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#58a700]"
          />
          <button
            onClick={handleNicknameLogin}
            className="w-full bg-[#58CC02] text-white font-extrabold py-3 px-4 rounded-xl hover:bg-[#61E002] transition-all shadow-[0_4px_0_0_#48A402] active:shadow-none active:translate-y-0.5 disabled:bg-slate-300 disabled:shadow-none"
            disabled={!username.trim()}
          >
            {t.login.button}
          </button>
        </div>
      </div>
    </div>
  );
};