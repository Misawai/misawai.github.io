
import React, { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI } from "@google/genai";
import { LoginPage } from './components/LoginPage';
import { HomePage } from './components/HomePage';
import { MascotIntro } from './components/MascotIntro';
import { OnboardingQuiz } from './components/OnboardingQuiz';
import { LearningPlan } from './components/LearningPlan';
import { LearningPlanConfirmation } from './components/LearningPlanConfirmation';
import { SubscriptionUpsell } from './components/SubscriptionUpsell';
import { QuizModal } from './components/QuizModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { ChatModal } from './components/ChatModal';
import { QUIZ_QUESTIONS } from './constants';
import { translations } from './localization';
import { Question, User, ChatMessage, Language } from './types';

// Let's assume the API_KEY is set in the environment
const API_KEY = process.env.API_KEY;

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [language, setLanguage] = useState<Language>('zh');
  const [showMascotIntro, setShowMascotIntro] = useState(false);
  const [showOnboardingQuiz, setShowOnboardingQuiz] = useState(false);
  const [showLearningPlan, setShowLearningPlan] = useState(false);
  const [showLearningPlanConfirmation, setShowLearningPlanConfirmation] = useState(false);
  const [showSubscriptionUpsell, setShowSubscriptionUpsell] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerStatus, setAnswerStatus] = useState<'unanswered' | 'correct' | 'incorrect'>('unanswered');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isGeminiLoading, setIsGeminiLoading] = useState(false);
  const [justLeveledUp, setJustLeveledUp] = useState(false);

  const t = translations[language];
  
  const updateUser = useCallback((updatedUser: User) => {
      setCurrentUser(updatedUser);
      setUsers(prevUsers => prevUsers.map(u => u.username === updatedUser.username ? updatedUser : u));
  }, []);

  // Load users, language and check for a logged-in user on mount
  useEffect(() => {
    const savedUsers = localStorage.getItem('finlingo_users');
    const allUsers: User[] = savedUsers ? JSON.parse(savedUsers) : [];
    setUsers(allUsers);
    
    const savedLang = localStorage.getItem('finlingo_language') as Language;
    if (savedLang && ['zh', 'en', 'ja'].includes(savedLang)) {
        setLanguage(savedLang);
    }

    const currentUsername = localStorage.getItem('finlingo_currentUser');
    if (currentUsername) {
      const user = allUsers.find((u: User) => u.username === currentUsername);
      if (user) {
        const userProfile: User = { 
            ...user, 
            seenQuestions: user.seenQuestions || [],
            level: user.level || 'easy',
            correctAnswersInARow: user.correctAnswersInARow || 0,
            hasSeenIntro: user.hasSeenIntro || false,
            hasCompletedOnboarding: user.hasCompletedOnboarding || false,
            hasSetLearningPlan: user.hasSetLearningPlan || false,
            hasSeenSubscriptionUpsell: user.hasSeenSubscriptionUpsell || false,
        };
        setCurrentUser(userProfile);
        if (!userProfile.hasSeenIntro) {
            setShowMascotIntro(true);
        } else if (!userProfile.hasCompletedOnboarding) {
            setShowOnboardingQuiz(true);
        } else if (!userProfile.hasSetLearningPlan) {
            setShowLearningPlan(true);
        } else if (!userProfile.hasSeenSubscriptionUpsell) {
            setShowSubscriptionUpsell(true);
        }
      }
    }
  }, []);

  // Persist users to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem('finlingo_users', JSON.stringify(users));
  }, [users]);
  
  // Persist language to localStorage
  useEffect(() => {
    localStorage.setItem('finlingo_language', language);
  }, [language]);

  const handleLogin = useCallback((username: string) => {
    const existingUser = users.find(u => u.username === username);
    let userToLogin: User;
    if (existingUser) {
        userToLogin = { 
          ...existingUser, 
          seenQuestions: existingUser.seenQuestions || [],
          level: existingUser.level || 'easy',
          correctAnswersInARow: existingUser.correctAnswersInARow || 0,
          hasSeenIntro: existingUser.hasSeenIntro || false,
          hasCompletedOnboarding: existingUser.hasCompletedOnboarding || false,
          hasSetLearningPlan: existingUser.hasSetLearningPlan || false,
          hasSeenSubscriptionUpsell: existingUser.hasSeenSubscriptionUpsell || false,
      };
    } else {
      const newUser: User = { 
        username, 
        score: 0, 
        seenQuestions: [], 
        level: 'easy', 
        correctAnswersInARow: 0, 
        hasSeenIntro: false,
        hasCompletedOnboarding: false,
        hasSetLearningPlan: false,
        hasSeenSubscriptionUpsell: false,
      };
      userToLogin = newUser;
      setUsers(prev => [...prev, newUser]);
    }
    setCurrentUser(userToLogin);
    localStorage.setItem('finlingo_currentUser', username);
    
    if (!userToLogin.hasSeenIntro) {
        setShowMascotIntro(true);
    } else if (!userToLogin.hasCompletedOnboarding) {
        setShowOnboardingQuiz(true);
    } else if (!userToLogin.hasSetLearningPlan) {
        setShowLearningPlan(true);
    } else if (!userToLogin.hasSeenSubscriptionUpsell) {
        setShowSubscriptionUpsell(true);
    }
  }, [users]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('finlingo_currentUser');
    setCurrentUser(null);
    setChatHistory([]);
  }, []);

  const handleCompleteIntro = useCallback(() => {
    if (!currentUser) return;
    updateUser({ ...currentUser, hasSeenIntro: true });
    setShowMascotIntro(false);
    setShowOnboardingQuiz(true);
  }, [currentUser, updateUser]);

  const handleCompleteOnboarding = useCallback((answers: Record<string, string>) => {
    if (!currentUser) return;

    const selfAssessedLevel = answers['level']; 
    let startingLevel: 'easy' | 'medium' | 'hard' = 'easy';
    let levelName = t.onboardingQuiz.questions[2].options[0];
    
    if (selfAssessedLevel === t.onboardingQuiz.questions[2].options[1]) {
      startingLevel = 'medium';
      levelName = t.onboardingQuiz.questions[2].options[1];
    } else if (selfAssessedLevel === t.onboardingQuiz.questions[2].options[2]) {
      startingLevel = 'hard';
      levelName = t.onboardingQuiz.questions[2].options[2];
    }

    const updatedUser = { 
      ...currentUser, 
      hasCompletedOnboarding: true,
      onboardingAnswers: answers,
      level: startingLevel,
    };
    updateUser(updatedUser);
    setShowOnboardingQuiz(false);
    setShowLearningPlan(true);
    
    alert(t.onboardingQuiz.levelSet(levelName));
  }, [currentUser, updateUser, t]);

  const handleSetLearningPlan = useCallback((plan: 'casual' | 'regular' | 'serious') => {
    if (!currentUser) return;
    updateUser({ ...currentUser, hasSetLearningPlan: true, learningPlan: plan });
    setShowLearningPlan(false);
    setShowLearningPlanConfirmation(true);
  }, [currentUser, updateUser]);

  const handleCompleteLearningPlanConfirmation = useCallback(() => {
    setShowLearningPlanConfirmation(false);
    setShowSubscriptionUpsell(true);
  }, []);

  const handleCompleteSubscriptionUpsell = useCallback(() => {
    if (!currentUser) return;
    updateUser({ ...currentUser, hasSeenSubscriptionUpsell: true });
    setShowSubscriptionUpsell(false);
  }, [currentUser, updateUser]);


  const handleStartChallenge = useCallback(() => {
    if (!currentUser) return;
    
    setJustLeveledUp(false);
    const userLevel = currentUser.level || 'easy';
    const levelQuestions = QUIZ_QUESTIONS.filter(q => q.difficulty === userLevel);
    let questionsToChooseFrom = levelQuestions.filter(q => !(currentUser.seenQuestions || []).includes(q.id));

    if (questionsToChooseFrom.length === 0) {
        questionsToChooseFrom = levelQuestions;
    }
    
    const randomIndex = Math.floor(Math.random() * questionsToChooseFrom.length);
    const question = questionsToChooseFrom[randomIndex];
    
    setCurrentQuestion(question);
    setSelectedAnswer(null);
    setAnswerStatus('unanswered');
    setShowQuiz(true);
  }, [currentUser]);

  const handleCheckAnswer = useCallback(() => {
    if (!selectedAnswer || !currentQuestion || !currentUser) return;

    setJustLeveledUp(false);
    let scoreUpdate = currentUser.score;
    let correctAnswersUpdate = currentUser.correctAnswersInARow || 0;
    let levelUpdate = currentUser.level || 'easy';

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setAnswerStatus('correct');
      scoreUpdate += 10;
      correctAnswersUpdate++;

      const previousLevel = levelUpdate;

      if (levelUpdate === 'easy' && correctAnswersUpdate >= 3) {
          levelUpdate = 'medium';
          correctAnswersUpdate = 0;
      } else if (levelUpdate === 'medium' && correctAnswersUpdate >= 3) {
          levelUpdate = 'hard';
          correctAnswersUpdate = 0;
      }
      
      if (levelUpdate !== previousLevel) {
        setJustLeveledUp(true);
      }

    } else {
      setAnswerStatus('incorrect');
      correctAnswersUpdate = 0; // Reset streak
    }
    
    const updatedUser: User = {
        ...currentUser,
        score: scoreUpdate,
        seenQuestions: Array.from(new Set([...(currentUser.seenQuestions || []), currentQuestion.id])),
        level: levelUpdate,
        correctAnswersInARow: correctAnswersUpdate,
    };
    updateUser(updatedUser);

  }, [selectedAnswer, currentQuestion, currentUser, updateUser]);
  
  const handleNextQuestion = useCallback(() => {
    if (answerStatus === 'incorrect') {
        setShowQuiz(false);
        return;
    }

    if (answerStatus === 'correct' && currentUser) {
        const userLevel = currentUser.level || 'easy';
        const levelQuestions = QUIZ_QUESTIONS.filter(q => q.difficulty === userLevel);
        const unseenQuestions = levelQuestions.filter(q => !(currentUser.seenQuestions || []).includes(q.id));

        if (unseenQuestions.length > 0) {
            const randomIndex = Math.floor(Math.random() * unseenQuestions.length);
            const nextQuestion = unseenQuestions[randomIndex];

            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
            setAnswerStatus('unanswered');
            setJustLeveledUp(false);
        } else {
            alert(t.challenge.allLevelQuestionsCompleted);
            setShowQuiz(false);
        }
    }
  }, [answerStatus, currentUser, t]);
  
  const handleSelectAnswer = useCallback((option: string) => {
    if (answerStatus === 'unanswered') {
        setSelectedAnswer(option);
    }
  }, [answerStatus]);

  const handleAskGemini = useCallback(async (prompt: string) => {
    if (!prompt) return;
    
    const userMessage: ChatMessage = { role: 'user', content: prompt };
    setChatHistory(prev => [...prev, userMessage]);
    setIsGeminiLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: prompt }] }
        ],
        config: {
          systemInstruction: t.gemini.systemInstruction,
        }
      });
      const modelMessage: ChatMessage = { role: 'model', content: response.text };
      setChatHistory(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage: ChatMessage = { role: 'model', content: t.gemini.error };
      setChatHistory(prev => [...prev, errorMessage]);
    } finally {
      setIsGeminiLoading(false);
    }
  }, [t]);

  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} t={t} />;
  }

  if (showMascotIntro) {
    return <MascotIntro user={currentUser} onGetStarted={handleCompleteIntro} t={t} />;
  }

  if (showOnboardingQuiz) {
    return <OnboardingQuiz onComplete={handleCompleteOnboarding} t={t} language={language} />;
  }

  if (showLearningPlan) {
    return <LearningPlan onSetPlan={handleSetLearningPlan} t={t} />;
  }

  if (showLearningPlanConfirmation && currentUser.learningPlan) {
    return <LearningPlanConfirmation plan={currentUser.learningPlan} onComplete={handleCompleteLearningPlanConfirmation} t={t} />;
  }
  
  if (showSubscriptionUpsell) {
    return <SubscriptionUpsell onComplete={handleCompleteSubscriptionUpsell} t={t} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <HomePage
        user={currentUser}
        onStartChallenge={handleStartChallenge}
        onShowLeaderboard={() => setShowLeaderboard(true)}
        onShowChat={() => setShowChat(true)}
        onLogout={handleLogout}
        t={t}
        language={language}
        setLanguage={setLanguage}
      />
      {showQuiz && currentQuestion && (
        <QuizModal
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          answerStatus={answerStatus}
          onSelectAnswer={handleSelectAnswer}
          onCheckAnswer={handleCheckAnswer}
          onNextQuestion={handleNextQuestion}
          onClose={() => setShowQuiz(false)}
          t={t}
          language={language}
          userLevel={currentUser.level}
          justLeveledUp={justLeveledUp}
        />
      )}
      {showLeaderboard && (
          <LeaderboardModal 
            users={users} 
            currentUser={currentUser}
            onClose={() => setShowLeaderboard(false)}
            t={t}
          />
      )}
      {showChat && (
        <ChatModal
          history={chatHistory}
          isLoading={isGeminiLoading}
          onSendMessage={handleAskGemini}
          onClose={() => setShowChat(false)}
          t={t}
        />
      )}
    </div>
  );
}

export default App;
