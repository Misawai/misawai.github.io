
export const translations = {
  zh: {
    login: {
      subtitle: '財商界的 Duolingo',
      placeholder: '或使用暱稱繼續',
      button: '開始學習',
      googleButton: '使用 Google 帳戶登入',
      orDivider: '或',
      enterNickname: '請輸入一個暱稱！',
    },
    mascotIntro: {
      title: '歡迎來到 Finlingo！',
      greeting: (name: string) => `你好，${name}！`,
      introduction: '我是芬利教授，你的財商學習夥伴！在這裡，我們將一起透過有趣的挑戰，輕鬆掌握理財知識，讓你一步步邁向財務自由！',
      buttonText: '我準備好了！',
    },
    onboardingQuiz: {
      title: '個人化你的學習計畫',
      progress: (current: number, total: number) => `問題 ${current} / ${total}`,
      questions: [
        {
          id: 'source',
          question: '你是從哪裡知道 Finlingo 的？',
          options: ['朋友推薦', '社群媒體', '應用程式商店', '網路搜尋'],
        },
        {
          id: 'motivation',
          question: '為什麼想學習財商知識？',
          options: ['為了投資理財', '想學習記帳、省錢', '規劃退休生活', '只是好奇看看'],
        },
        {
          id: 'level',
          question: '你覺得自己的財商知識在哪個程度？',
          options: ['完全是新手', '懂一些基礎', '還算有自信'],
        },
        {
          id: 'interest',
          question: '你對哪個主題最感興趣？',
          options: ['股票/基金', '房地產', '預算規劃', '加密貨幣'],
        },
        {
          id: 'goal',
          question: '你的主要財務目標是？',
          options: ['買房或買車', '環遊世界', '達到財務自由', '為教育存錢'],
        },
        {
          id: 'commitment',
          question: '每天願意花多少時間學習？',
          options: ['5 分鐘', '15 分鐘', '30 分鐘', '超過 30 分鐘'],
        },
        {
          id: 'knowledge_check',
          question: '把錢放在銀行活存，最可能遇到的風險是？',
          options: ['銀行倒閉', '錢被偷走', '通貨膨脹導致購買力下降', '沒有風險'],
        },
      ],
      levelSet: (level: string) => `已為您設定初始等級為「${level}」！祝學習愉快！`,
    },
    learningPlan: {
      title: '設定你的每日學習目標',
      description: '養成習慣是成功的關鍵。每天花一點時間，就能帶來巨大的改變！',
      options: {
        casual: {
          title: '休閒',
          duration: '每天 5 分鐘',
        },
        regular: {
          title: '普通',
          duration: '每天 10 分鐘',
        },
        serious: {
          title: '認真',
          duration: '每天 15 分鐘',
        },
      },
      button: '設定目標',
    },
    learningPlanConfirmation: {
      title: '太棒了！這是你的計畫：',
      threeMonthGoal: '三個月後的你：',
      outcomes: {
        casual: '你將能自信地掌握核心財商詞彙，並建立自己的第一個個人預算。',
        regular: '你將能區分不同的投資工具（如股票、ETF），並開始分析你的第一個投資標的。',
        serious: '你將能看懂基礎的公司財報，並為自己建立一個清晰的多元化投資組合策略。',
      },
      button: '開始學習！',
    },
    subscriptionUpsell: {
      title: '你想要怎麼學習？',
      super: {
        title: 'Super Finlingo',
        description: '進步更快，還免廣告',
      },
      free: {
        title: '免費學習',
        description: '有核心學習功能，帶廣告',
      },
      button: '繼續',
    },
    home: {
      greeting: (name: string) => `嗨，${name}！`,
      challengePrompt: '準備好迎接今天的挑戰了嗎？',
      challengeButton: '今日財商挑戰',
      askCoachTitle: '有問題嗎？',
      askCoachPrompt: '隨時詢問你的 AI 財商教練！',
      askCoachButton: '開始',
      logout: '登出',
      levels: {
        easy: '財商新手',
        medium: '理財好手',
        hard: '投資達人',
      },
    },
    leaderboard: {
      title: '排行榜',
      you: '你',
    },
    countdown: {
      title: '明日挑戰倒數',
    },
    quiz: {
      checkAnswer: '檢查答案',
      nextQuestion: '下一題',
      finishChallenge: '完成挑戰',
      correct: '答對了！',
      scoreBonus: '+10分',
      incorrect: '不太對喔！',
      incorrectExplanation: (correctAnswer: string) => `正確答案是：${correctAnswer}`,
      difficulty: {
        easy: '簡單',
        medium: '中等',
        hard: '困難',
      },
      encouragement: {
        correct: ['太棒了！', '做得好！', '繼續加油！', '你真厲害！', '完全正確！'],
        incorrect: '別灰心，正確答案是這個：',
      },
    },
    chat: {
      title: 'AI 財商教練',
      placeholder: '輸入你的問題...',
      send: '傳送',
    },
    challenge: {
      alreadyCompleted: "您今天已經完成挑戰了，請明天再來！",
      allQuestionsCompleted: "恭喜！您已完成所有題目，現在將重新開始。",
      allLevelQuestionsCompleted: "太厲害了！你完成了這個等級的所有題目！",
    },
    levelUp: {
        toMedium: '太棒了！你已晉升為「理財好手」！現在來挑戰中等難度的題目吧！',
        toHard: '恭喜！你已成為「投資達人」！接下來是最困難的挑戰！',
    },
    gemini: {
      systemInstruction: 'You are a friendly and encouraging financial coach named Fin. Your goal is to explain complex financial topics in a simple, easy-to-understand way, like a Duolingo lesson. Use analogies and keep your tone light and positive. Respond in Traditional Chinese.',
      error: '抱歉，我現在無法回答問題。請稍後再試。',
    }
  },
  en: {
    login: {
      subtitle: 'The Duolingo of Financial Literacy',
      placeholder: 'Or continue with a nickname',
      button: 'Start Learning',
      googleButton: 'Sign in with Google',
      orDivider: 'OR',
      enterNickname: 'Please enter a nickname!',
    },
    mascotIntro: {
      title: 'Welcome to Finlingo!',
      greeting: (name: string) => `Hello, ${name}!`,
      introduction: "I'm Professor Finley, your financial learning partner! Here, we'll master financial knowledge together through fun challenges, guiding you step-by-step towards financial freedom!",
      buttonText: "I'm ready!",
    },
    onboardingQuiz: {
      title: 'Personalize Your Learning Plan',
      progress: (current: number, total: number) => `Question ${current} / ${total}`,
      questions: [
        {
          id: 'source',
          question: 'How did you hear about Finlingo?',
          options: ['From a friend', 'Social media', 'App store', 'Web search'],
        },
        {
          id: 'motivation',
          question: 'Why do you want to learn about finance?',
          options: ['To invest', 'To budget and save', 'To plan for retirement', 'Just curious'],
        },
        {
          id: 'level',
          question: 'How would you rate your financial knowledge?',
          options: ['Complete beginner', 'I know some basics', 'Fairly confident'],
        },
        {
          id: 'interest',
          question: 'Which topic are you most interested in?',
          options: ['Stocks/Funds', 'Real estate', 'Budgeting', 'Cryptocurrency'],
        },
        {
          id: 'goal',
          question: 'What is your primary financial goal?',
          options: ['Buy a house/car', 'Travel the world', 'Achieve financial freedom', 'Save for education'],
        },
        {
          id: 'commitment',
          question: 'How much time can you dedicate to learning daily?',
          options: ['5 minutes', '15 minutes', '30 minutes', '30+ minutes'],
        },
        {
          id: 'knowledge_check',
          question: 'What is the most likely risk of keeping money in a savings account?',
          options: ['The bank could fail', 'The money could be stolen', 'Losing purchasing power to inflation', 'There is no risk'],
        },
      ],
      levelSet: (level: string) => `Your starting level has been set to '${level}'! Happy learning!`,
    },
    learningPlan: {
      title: 'Set Your Daily Learning Goal',
      description: 'Building a habit is the key to success. A little time each day makes a huge difference!',
      options: {
        casual: {
          title: 'Casual',
          duration: '5 minutes / day',
        },
        regular: {
          title: 'Regular',
          duration: '10 minutes / day',
        },
        serious: {
          title: 'Serious',
          duration: '15 minutes / day',
        },
      },
      button: 'Set Goal',
    },
    learningPlanConfirmation: {
      title: "Awesome! Here's your plan:",
      threeMonthGoal: 'You in 3 months:',
      outcomes: {
        casual: 'You will confidently master core financial vocabulary and create your first personal budget.',
        regular: "You will be able to distinguish between different investment types (like stocks and ETFs) and start analyzing your first investment.",
        serious: 'You will be able to read a basic company financial statement and build a clear, diversified portfolio strategy for yourself.',
      },
      button: 'Start Learning!',
    },
    subscriptionUpsell: {
      title: 'How do you want to learn?',
      super: {
        title: 'Super Finlingo',
        description: 'Progress faster and remove ads',
      },
      free: {
        title: 'Free Learning',
        description: 'Core features with ads',
      },
      button: 'Continue',
    },
    home: {
      greeting: (name: string) => `Hi, ${name}!`,
      challengePrompt: 'Ready for today\'s challenge?',
      challengeButton: 'Daily Finance Challenge',
      askCoachTitle: 'Have a question?',
      askCoachPrompt: 'Ask your AI financial coach anytime!',
      askCoachButton: 'Start',
      logout: 'Logout',
      levels: {
        easy: 'Finance Novice',
        medium: 'Money Savvy',
        hard: 'Investment Master',
      },
    },
    leaderboard: {
      title: 'Leaderboard',
      you: 'You',
    },
    countdown: {
      title: 'Next Challenge Countdown',
    },
    quiz: {
      checkAnswer: 'Check Answer',
      nextQuestion: 'Next Question',
      finishChallenge: 'Finish Challenge',
      correct: 'Correct!',
      scoreBonus: '+10 points',
      incorrect: 'Not quite!',
      incorrectExplanation: (correctAnswer: string) => `The correct answer is: ${correctAnswer}`,
      difficulty: {
        easy: 'Easy',
        medium: 'Medium',
        hard: 'Hard',
      },
      encouragement: {
        correct: ['Awesome!', 'Great job!', 'Keep it up!', "You're a natural!", 'Perfect!'],
        incorrect: "Don't worry, the correct answer is:",
      },
    },
    chat: {
      title: 'AI Financial Coach',
      placeholder: 'Type your question...',
      send: 'Send',
    },
    challenge: {
        alreadyCompleted: "You have already completed today's challenge. Please come back tomorrow!",
        allQuestionsCompleted: "Congratulations! You've completed all questions. The quiz will now restart.",
        allLevelQuestionsCompleted: "Amazing! You've completed all questions for this level!",
    },
    levelUp: {
        toMedium: 'Awesome! You have been promoted to "Money Savvy"! Get ready for medium questions.',
        toHard: 'Congratulations! You have become an "Investment Master"! Here come the hardest challenges!',
    },
    gemini: {
      systemInstruction: 'You are a friendly and encouraging financial coach named Fin. Your goal is to explain complex financial topics in a simple, easy-to-understand way, like a Duolingo lesson. Use analogies and keep your tone light and positive. Respond in English.',
      error: 'Sorry, I am unable to answer right now. Please try again later.',
    }
  },
  ja: {
    login: {
      subtitle: '金融リテラシー界のDuolingo',
      placeholder: 'またはニックネームで続ける',
      button: '学習を始める',
      googleButton: 'Googleアカウントでログイン',
      orDivider: 'または',
      enterNickname: 'ニックネームを入力してください！',
    },
    mascotIntro: {
      title: 'Finlingoへようこそ！',
      greeting: (name: string) => `こんにちは、${name}さん！`,
      introduction: '私はフィンリー教授、あなたの金融学習パートナーです！ここでは、楽しいチャレンジを通じて金融知識を一緒にマスターし、経済的自由への道を一歩ずつ進んでいきましょう！',
      buttonText: '準備OK！',
    },
    onboardingQuiz: {
      title: '学習プランをカスタマイズ',
      progress: (current: number, total: number) => `質問 ${current} / ${total}`,
      questions: [
        {
          id: 'source',
          question: 'Finlingoをどこで知りましたか？',
          options: ['友達から', 'ソーシャルメディア', 'アプリストア', 'ウェブ検索'],
        },
        {
          id: 'motivation',
          question: 'なぜ金融について学びたいですか？',
          options: ['投資のため', '予算管理と貯金', '退職後の計画', '興味本位'],
        },
        {
          id: 'level',
          question: 'ご自身の金融知識はどのレベルだと思いますか？',
          options: ['全くの初心者', '基礎は少し知っている', 'まあまあ自信がある'],
        },
        {
          id: 'interest',
          question: 'どのトピックに最も興味がありますか？',
          options: ['株式/ファンド', '不動産', '予算計画', '暗号資産'],
        },
        {
          id: 'goal',
          question: '主な経済的な目標は何ですか？',
          options: ['家や車を買う', '世界旅行', '経済的自由を達成する', '教育資金を貯める'],
        },
        {
          id: 'commitment',
          question: '毎日どのくらい学習に時間を割けますか？',
          options: ['5分', '15分', '30分', '30分以上'],
        },
        {
          id: 'knowledge_check',
          question: 'お金を普通預金口座に預けておくことの最大のリスクは何ですか？',
          options: ['銀行が破綻する可能性', 'お金が盗まれる可能性', 'インフレによる購買力の低下', 'リスクはない'],
        },
      ],
      levelSet: (level: string) => `初期レベルを「${level}」に設定しました！学習をお楽しみください！`,
    },
    learningPlan: {
      title: '毎日の学習目標を設定する',
      description: '習慣を身につけることが成功の鍵です。毎日の少しの時間が、大きな違いを生みます！',
      options: {
        casual: {
          title: 'カジュアル',
          duration: '1日5分',
        },
        regular: {
          title: '普通',
          duration: '1日10分',
        },
        serious: {
          title: '本気',
          duration: '1日15分',
        },
      },
      button: '目標を設定',
    },
    learningPlanConfirmation: {
      title: '素晴らしい！これがあなたの計画です：',
      threeMonthGoal: '3ヶ月後のあなた：',
      outcomes: {
        casual: '主要な金融用語を自信を持って使いこなし、初めての個人予算を作成できるようになります。',
        regular: 'さまざまな投資商品（株式やETFなど）の違いを理解し、初めての投資分析を始められるようになります。',
        serious: '基本的な企業の財務諸表を読み解き、自分自身の明確で分散されたポートフォリオ戦略を構築できるようになります。',
      },
      button: '学習を始める！',
    },
    subscriptionUpsell: {
      title: 'どのように学習しますか？',
      super: {
        title: 'スーパーFinlingo',
        description: 'より速く進歩し、広告もありません',
      },
      free: {
        title: '無料で学習',
        description: '広告付きのコア学習機能',
      },
      button: '続ける',
    },
    home: {
      greeting: (name: string) => `こんにちは、${name}さん！`,
      challengePrompt: '今日のチャレンジの準備はできましたか？',
      challengeButton: '今日の金融チャレンジ',
      askCoachTitle: '質問はありますか？',
      askCoachPrompt: 'AI金融コーチにいつでも質問できます！',
      askCoachButton: '開始',
      logout: 'ログアウト',
      levels: {
        easy: '金融初心者',
        medium: '理財上手',
        hard: '投資の達人',
      },
    },
    leaderboard: {
      title: 'ランキング',
      you: 'あなた',
    },
    countdown: {
      title: '次のチャレンジまでのカウントダウン',
    },
    quiz: {
      checkAnswer: '答えを確認',
      nextQuestion: '次の問題',
      finishChallenge: 'チャレンジ終了',
      correct: '正解！',
      scoreBonus: '+10点',
      incorrect: '残念！',
      incorrectExplanation: (correctAnswer: string) => `正解は：${correctAnswer}`,
      difficulty: {
        easy: '簡単',
        medium: '普通',
        hard: '難しい',
      },
      encouragement: {
        correct: ['素晴らしい！', 'よくできました！', 'その調子！', 'さすがです！', '完璧です！'],
        incorrect: 'ご心配なく、正解はこちらです：',
      },
    },
    chat: {
      title: 'AI金融コーチ',
      placeholder: '質問を入力してください...',
      send: '送信',
    },
    challenge: {
      alreadyCompleted: "今日のチャレンジはすでに完了しました。明日また来てください！",
      allQuestionsCompleted: "おめでとうございます！すべての問題を完了しました。クイズが再開します。",
      allLevelQuestionsCompleted: "素晴らしい！このレベルのすべての問題を完了しました！",
    },
    levelUp: {
        toMedium: '素晴らしい！「理財上手」に昇格しました！次は中級の問題に挑戦しましょう。',
        toHard: 'おめでとうございます！「投資の達人」になりました！最も難しいチャレンジが待っています。',
    },
    gemini: {
      systemInstruction: 'You are a friendly and encouraging financial coach named Fin. Your goal is to explain complex financial topics in a simple, easy-to-understand way, like a Duolingo lesson. Use analogies and keep your tone light and positive. Respond in Japanese.',
      error: '申し訳ありませんが、現在お答えできません。後でもう一度お試しください。',
    }
  },
};

export type Translations = typeof translations;
