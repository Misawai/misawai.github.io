import React from 'react';
import { User } from '../types';
import { StarIcon } from './icons/StarIcon';
import { Translations } from '../localization';


interface LeaderboardModalProps {
  users: User[];
  currentUser: User;
  onClose: () => void;
  t: Translations['zh'];
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({ users, currentUser, onClose, t }) => {
  const sortedUsers = [...users].sort((a, b) => b.score - a.score);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800">{t.leaderboard.title}</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800">&times;</button>
        </div>
        <ul className="p-4 space-y-2 max-h-[60vh] overflow-y-auto">
          {sortedUsers.map((user, index) => (
            <li
              key={user.username}
              className={`flex items-center p-3 rounded-lg ${user.username === currentUser.username ? 'bg-green-100' : 'bg-slate-50'}`}
            >
              <span className="font-bold text-slate-500 w-8">{index + 1}</span>
              <span className="flex-grow font-bold text-slate-700">{user.username}</span>
              <div className="flex items-center font-bold text-yellow-600">
                <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                <span>{user.score}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
