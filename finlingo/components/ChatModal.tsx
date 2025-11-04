import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { ChatIcon } from './icons/ChatIcon';
import { Translations } from '../localization';

interface ChatModalProps {
  history: ChatMessage[];
  isLoading: boolean;
  onSendMessage: (message: string) => void;
  onClose: () => void;
  t: Translations['zh'];
}

const TypingIndicator = () => (
    <div className="flex items-center space-x-1 p-3">
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
    </div>
);

export const ChatModal: React.FC<ChatModalProps> = ({ history, isLoading, onSendMessage, onClose, t }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [history, isLoading]);

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg h-[80vh] flex flex-col">
        <header className="p-4 border-b border-slate-200 flex justify-between items-center">
          <div className="flex items-center">
            <ChatIcon className="w-6 h-6 text-[#58a700] mr-2" />
            <h2 className="text-xl font-bold text-slate-800">{t.chat.title}</h2>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800 font-bold text-2xl">&times;</button>
        </header>

        <main className="flex-1 p-4 overflow-y-auto bg-slate-50">
          <div className="space-y-4">
            {history.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-sm">Fin</div>}
                <div
                  className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-blue-500 text-white rounded-br-none'
                      : 'bg-slate-200 text-slate-800 rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-sm">Fin</div>
                <div className="bg-slate-200 rounded-2xl rounded-bl-none"><TypingIndicator /></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </main>

        <footer className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.chat.placeholder}
              className="flex-1 border border-slate-300 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#58a700]"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-[#58CC02] text-white font-bold py-2 px-4 rounded-xl hover:bg-[#61E002] disabled:bg-slate-300 transition-colors"
            >
              {t.chat.send}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
