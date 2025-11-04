import { Question } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: {
        zh: "你今天領到薪水 50,000 元，應該先做哪件事？",
        en: "You received a salary of $50,000 today. What should you do first?",
        ja: "今日、50,000ドルの給料を受け取りました。最初に何をすべきですか？"
    },
    options: [
      { key: "A", text: { zh: "立刻花掉獎勵自己", en: "Spend it immediately to reward yourself", ja: "すぐに自分へのご褒美に使う" } },
      { key: "B", text: { zh: "全部拿去投資", en: "Invest it all", ja: "すべて投資に回す" } },
      { key: "C", text: { zh: "預留生活費 + 存緊急預備金", en: "Set aside living expenses + save for an emergency fund", ja: "生活費を確保し、緊急資金を貯める" } },
      { key: "D", text: { zh: "換一台新手機", en: "Buy a new phone", ja: "新しい携帯電話を買う" } },
    ],
    correctAnswer: "C",
    explanation: {
        zh: "理財的第一步是確保生活穩定。先規劃好生活開銷並建立緊急預備金，才能在沒有後顧之憂的情況下進行投資或消費。",
        en: "The first step in financial management is to ensure a stable life. Plan your living expenses and build an emergency fund first, so you can invest or spend without worry.",
        ja: "財務管理の第一歩は、安定した生活を確保することです。まず生活費を計画し、緊急資金を築くことで、心配なく投資や消費ができます。"
    },
    difficulty: 'easy',
  },
  {
    id: 2,
    question: {
        zh: "什麼是「被動收入」？",
        en: "What is 'passive income'?",
        ja: "「不労所得」とは何ですか？"
    },
    options: [
      { key: "A", text: { zh: "即使不 actively 工作也能持續產生的收入", en: "Income that continues to be generated even without actively working", ja: "積極的に働かなくても継続的に生み出される収入" } },
      { key: "B", text: { zh: "老闆被動給你的薪水", en: "The salary your boss passively gives you", ja: "上司が受動的にくれる給料" } },
      { key: "C", text: { zh: "中樂透的獎金", en: "Lottery winnings", ja: "宝くじの賞金" } },
      { key: "D", text: { zh: "撿到錢", en: "Money you find", ja: "拾ったお金" } },
    ],
    correctAnswer: "A",
    explanation: {
        zh: "被動收入指即使不 actively 工作也能持續產生的收入，例如股息、租金收入、版稅等。這是實現財務自由的關鍵。",
        en: "Passive income refers to income generated without actively working, such as dividends, rental income, royalties, etc. It is key to achieving financial freedom.",
        ja: "不労所得とは、配当金、家賃収入、印税など、積極的に働かなくても継続的に生み出される収入のことです。経済的自立を達成するための鍵です。"
    },
    difficulty: 'easy',
  },
  {
    id: 3,
    question: {
        zh: "哪種投資工具的風險通常最高？",
        en: "Which investment tool typically has the highest risk?",
        ja: "どの投資ツールが通常最もリスクが高いですか？"
    },
    options: [
      { key: "A", text: { zh: "銀行定存", en: "Bank fixed deposits", ja: "銀行の定期預金" } },
      { key: "B", text: { zh: "政府公債", en: "Government bonds", ja: "国債" } },
      { key: "C", text: { zh: "個股 (單一公司股票)", en: "Individual stocks (single company stock)", ja: "個別株（単一企業の株式）" } },
      { key: "D", text: { zh: "指數型基金 (ETF)", en: "Index funds (ETFs)", ja: "インデックスファンド（ETF）" } },
    ],
    correctAnswer: "C",
    explanation: {
        zh: "個股（單一公司股票）的價格波動最大，可能帶來高回報，也可能導致巨大虧損。相較之下，定存和公債風險較低，ETF則分散了風險。",
        en: "Individual stocks have the highest price volatility, potentially bringing high returns but also huge losses. In contrast, fixed deposits and government bonds have lower risk, and ETFs diversify risk.",
        ja: "個別株は価格変動が最も大きく、高いリターンをもたらす可能性がある一方で、大きな損失を被る可能性もあります。対照的に、定期預金や国債はリスクが低く、ETFはリスクを分散します。"
    },
    difficulty: 'easy',
  },
  {
    id: 4,
    question: {
        zh: "「緊急預備金」通常建議存多少金額？",
        en: "How much is usually recommended for an 'emergency fund'?",
        ja: "「緊急資金」として通常推奨される金額はいくらですか？"
    },
    options: [
      { key: "A", text: { zh: "1 個月生活費", en: "1 month of living expenses", ja: "1ヶ月分の生活費" } },
      { key: "B", text: { zh: "3-6 個月生活費", en: "3-6 months of living expenses", ja: "3〜6ヶ月分の生活費" } },
      { key: "C", text: { zh: "1 年生活費", en: "1 year of living expenses", ja: "1年分の生活費" } },
      { key: "D", text: { zh: "越多越好，最好超過 100 萬", en: "The more the better, preferably over 1 million", ja: "多ければ多いほど良い、できれば100万以上" } },
    ],
    correctAnswer: "B",
    explanation: {
        zh: "理財專家普遍建議，緊急預備金應涵蓋 3 到 6 個月的生活總開銷，以應對突發狀況如失業、疾病等。",
        en: "Financial experts generally recommend that an emergency fund should cover 3 to 6 months of total living expenses to cope with unexpected situations like unemployment or illness.",
        ja: "金融専門家は一般的に、失業や病気などの不測の事態に備え、緊急資金は3〜6ヶ月分の総生活費をカバーすべきだと推奨しています。"
    },
    difficulty: 'medium',
  },
  {
    id: 5,
    question: {
        zh: "什麼是「複利效應」？",
        en: "What is the 'compound interest effect'?",
        ja: "「複利効果」とは何ですか？"
    },
    options: [
      { key: "A", text: { zh: "一種很複雜的利率", en: "A very complicated interest rate", ja: "非常に複雑な金利" } },
      { key: "B", text: { zh: "利息和本金一起產生更多利息的效應", en: "The effect where interest and principal together generate more interest", ja: "利息と元本が一緒になってさらに多くの利息を生み出す効果" } },
      { key: "C", text: { zh: "股票上漲兩倍的意思", en: "The meaning of a stock doubling in price", ja: "株価が2倍になること" } },
      { key: "D", text: { zh: "通貨膨脹的別稱", en: "Another name for inflation", ja: "インフレーションの別名" } },
    ],
    correctAnswer: "B",
    explanation: {
        zh: "複利是「利滾利」的概念，你的投資所產生的收益會再投入，成為新的本金繼續產生收益。時間越長，效果越顯著，是累積財富的強大工具。",
        en: "Compound interest is the concept of 'interest on interest'. The returns from your investment are reinvested, becoming new principal that continues to generate returns. The longer the time, the more significant the effect, making it a powerful tool for wealth accumulation.",
        ja: "複利とは「利息が利息を生む」という概念です。投資から得られた収益が再投資され、新たな元本となって収益を生み続けます。時間が長ければ長いほど効果は顕著になり、富を築くための強力なツールです。"
    },
    difficulty: 'medium',
  },
    {
    id: 6,
    question: {
        zh: "購買 ETF (指數型基金) 的主要優點是什麼？",
        en: "What is the main advantage of buying an ETF (Exchange-Traded Fund)?",
        ja: "ETF（上場投資信託）を購入する主な利点は何ですか？"
    },
    options: [
      { key: "A", text: { zh: "保證獲利，穩賺不賠", en: "Guaranteed profit, no risk of loss", ja: "利益が保証され、損失のリスクがない" } },
      { key: "B", text: { zh: "可以一夜致富", en: "You can get rich overnight", ja: "一夜にして金持ちになれる" } },
      { key: "C", text: { zh: "交易成本極低且能分散風險", en: "Very low transaction costs and risk diversification", ja: "取引コストが非常に低く、リスク分散が可能" } },
      { key: "D", text: { zh: "每天都會配發股息", en: "Dividends are distributed every day", ja: "毎日配当が分配される" } },
    ],
    correctAnswer: "C",
    explanation: {
        zh: "ETF 追蹤特定指數，一次買進就等於持有一籃子的公司股票或債券，能有效分散單一資產的風險。同時，其管理費用通常比主動型基金低廉。",
        en: "An ETF tracks a specific index, so buying one is like holding a basket of company stocks or bonds, effectively diversifying the risk of a single asset. Also, its management fees are usually lower than actively managed funds.",
        ja: "ETFは特定の指数に連動するため、1つ購入するだけで多数の企業の株式や債券のバスケットを保有することになり、単一資産のリスクを効果的に分散できます。また、管理手数料も通常、アクティブファンドよりも低くなっています。"
    },
    difficulty: 'medium',
  },
  {
    id: 7,
    question: {
        zh: "信用卡帳單的「最低應繳金額」是什麼意思？",
        en: "What does the 'minimum payment amount' on a credit card bill mean?",
        ja: "クレジットカード請求書の「最低支払額」とはどういう意味ですか？"
    },
    options: [
      { key: "A", text: { zh: "銀行建議你繳的金額", en: "The amount the bank suggests you pay", ja: "銀行が支払いを推奨する金額" } },
      { key: "B", text: { zh: "繳了這個金額就不用付利息", en: "Pay this amount and you won't be charged interest", ja: "この金額を支払えば利息はかからない" } },
      { key: "C", text: { zh: "避免信用評分降低的最低還款額，但未繳清餘額會計算高額循環利息", en: "The minimum payment to avoid a lower credit score, but the unpaid balance will accrue high revolving interest", ja: "信用スコアの低下を防ぐための最低返済額ですが、未払い残高には高額なリボルビング金利が課されます" } },
      { key: "D", text: { zh: "銀行送你的回饋金", en: "A cash reward from the bank", ja: "銀行からのキャッシュバック" } },
    ],
    correctAnswer: "C",
    explanation: {
        zh: "只繳最低應繳金額雖然能暫時維持信用，但剩餘的卡債會開始計算循環利息，利率非常高，是常見的理財陷阱。",
        en: "Paying only the minimum amount can temporarily maintain your credit, but the remaining card debt will start to accrue revolving interest at a very high rate, which is a common financial trap.",
        ja: "最低支払額だけを支払うと一時的に信用を維持できますが、残りのカード債務には非常に高い利率のリボルビング金利が発生し始め、これは一般的な金融の罠です。"
    },
    difficulty: 'medium',
  },
  {
    id: 8,
    question: {
        zh: "「資產」和「負債」的根本區別是什麼？",
        en: "What is the fundamental difference between 'assets' and 'liabilities'?",
        ja: "「資産」と「負債」の根本的な違いは何ですか？"
    },
    options: [
      { key: "A", text: { zh: "資產是昂貴的，負債是便宜的", en: "Assets are expensive, liabilities are cheap", ja: "資産は高価で、負債は安価" } },
      { key: "B", text: { zh: "資產是你看得到的，負債是看不到的", en: "Assets are what you can see, liabilities are what you can't", ja: "資産は目に見えるもの、負債は目に見えないもの" } },
      { key: "C", text: { zh: "資產能把錢放進你口袋，負債會把錢從你口袋拿走", en: "Assets put money in your pocket, liabilities take money out of your pocket", ja: "資産はあなたのポケットにお金を入れ、負債はあなたのポケットからお金を取り出す" } },
      { key: "D", text: { zh: "房子是資產，汽車是負債", en: "A house is an asset, a car is a liability", ja: "家は資産、車は負債" } },
    ],
    correctAnswer: "C",
    explanation: {
        zh: "這是富爸爸窮爸爸的核心概念。例如，出租的房產帶來租金收入是資產；自用車需要保養、加油、繳稅則是負債。關鍵在於它是否為你帶來現金流。",
        en: "This is the core concept of 'Rich Dad Poor Dad'. For example, a rental property that brings in rental income is an asset; a personal car that requires maintenance, gas, and taxes is a liability. The key is whether it generates cash flow for you.",
        ja: "これは「金持ち父さん貧乏父さん」の中心的な概念です。例えば、家賃収入をもたらす賃貸物件は資産であり、維持費やガソリン代、税金が必要な自家用車は負債です。重要なのは、それがキャッシュフローを生み出すかどうかです。"
    },
    difficulty: 'hard',
  },
  {
    id: 9,
    question: {
        zh: "投資中的「停損點」是什麼用途？",
        en: "What is the purpose of a 'stop-loss' in investing?",
        ja: "投資における「損切り」の目的は何ですか？"
    },
    options: [
      { key: "A", text: { zh: "確保投資至少獲利 10% 的策略", en: "A strategy to ensure at least a 10% profit", ja: "少なくとも10％の利益を確保する戦略" } },
      { key: "B", text: { zh: "股價下跌時，提醒自己加碼買進的點位", en: "A point that reminds you to buy more when the stock price falls", ja: "株価が下落したときに買い増しを促すポイント" } },
      { key: "C", text: { zh: "股價上漲時，賣出股票實現獲利的點位", en: "A point to sell stocks and realize profits when the price rises", ja: "株価が上昇したときに利益を確定するために売るポイント" } },
      { key: "D", text: { zh: "預先設定的賣出價格，用來控制虧損擴大", en: "A preset selling price to control and limit the expansion of losses", ja: "損失の拡大を抑制するために事前に設定された売却価格" } },
    ],
    correctAnswer: "D",
    explanation: {
        zh: "設定停損點是一種風險管理策略。當投資標的價格跌至預設的停損價位時，系統會自動賣出，以防止虧損進一步擴大，避免情緒性決策。",
        en: "Setting a stop-loss is a risk management strategy. When the price of an investment drops to a preset stop-loss price, it is automatically sold to prevent further losses and avoid emotional decision-making.",
        ja: "損切りを設定することは、リスク管理戦略の一つです。投資対象の価格が事前に設定した損切り価格まで下落すると、自動的に売却され、さらなる損失の拡大を防ぎ、感情的な意思決定を避けることができます。"
    },
    difficulty: 'hard',
  },
   {
    id: 10,
    question: {
        zh: "如果通貨膨脹率為 3%，而你的銀行定存年利率為 1%，你的真實購買力會發生什麼變化？",
        en: "If the inflation rate is 3% and your bank's fixed deposit annual interest rate is 1%, what happens to your real purchasing power?",
        ja: "インフレ率が3％で、銀行の定期預金の年利が1％の場合、あなたの実質的な購買力はどうなりますか？"
    },
    options: [
      { key: "A", text: { zh: "增加 1%", en: "Increases by 1%", ja: "1％増加する" } },
      { key: "B", text: { zh: "增加 2%", en: "Increases by 2%", ja: "2％増加する" } },
      { key: "C", text: { zh: "減少 2%", en: "Decreases by 2%", ja: "2％減少する" } },
      { key: "D", text: { zh: "沒有變化", en: "No change", ja: "変わらない" } },
    ],
    correctAnswer: "C",
    explanation: {
        zh: "實質利率 = 名目利率 - 通貨膨脹率。在這個例子中，1% - 3% = -2%。這意味著，雖然你帳戶裡的錢變多了，但因為物價上漲更快，你的錢能買到的東西實際上變少了。",
        en: "Real interest rate = Nominal interest rate - Inflation rate. In this example, 1% - 3% = -2%. This means that although the money in your account has increased, your money can actually buy less because prices have risen faster.",
        ja: "実質金利 = 名目金利 - インフレ率。この例では、1％ - 3％ = -2％です。つまり、口座のお金は増えましたが、物価の上昇が速いため、実質的に買えるものは少なくなっています。"
    },
    difficulty: 'hard',
  },
  {
    id: 11,
    question: {
        zh: "何謂「資產配置」(Asset Allocation)？",
        en: "What is 'Asset Allocation'?",
        ja: "「資産配分」（アセットアロケーション）とは何ですか？"
    },
    options: [
      { key: "A", text: { zh: "把所有錢都投資在最賺錢的股票上", en: "Investing all your money in the most profitable stock", ja: "すべてのお金を最も儲かる株に投資すること" } },
      { key: "B", text: { zh: "將資金分散投資於不同類型的資產（如股票、債券、現金），以平衡風險和報酬", en: "Diversifying funds across different types of assets (like stocks, bonds, cash) to balance risk and return", ja: "リスクとリターンのバランスを取るために、資金をさまざまな種類の資産（株式、債券、現金など）に分散投資すること" } },
      { key: "C", text: { zh: "一種只買房地產的投資策略", en: "An investment strategy of only buying real estate", ja: "不動産のみを購入する投資戦略" } },
      { key: "D", text: { zh: "把錢全部放在銀行", en: "Keeping all your money in the bank", ja: "すべてのお金を銀行に預けること" } },
    ],
    correctAnswer: "B",
    explanation: {
        zh: "資產配置是投資組合管理的核心。因為不同資產類別在市場上的表現不同，分散投資可以降低單一資產下跌對整體投資組合的衝擊。",
        en: "Asset allocation is the core of portfolio management. Because different asset classes perform differently in the market, diversification can reduce the impact of a single asset's decline on the overall portfolio.",
        ja: "資産配分はポートフォリオ管理の中核です。市場では資産クラスごとにパフォーマンスが異なるため、分散投資によって単一資産の下落がポートフォリオ全体に与える影響を軽減できます。"
    },
    difficulty: 'hard',
  },
  {
    id: 12,
    question: {
        zh: "在台灣，綜合所得稅的課稅原則是什麼？",
        en: "In Taiwan, what is the principle for income tax assessment?",
        ja: "台湾における所得税の課税原則は何ですか？"
    },
    options: [
      { key: "A", text: { zh: "單一稅率，所有人稅率都一樣", en: "A flat tax rate, the same for everyone", ja: "単一税率、全員が同じ税率" } },
      { key: "B", text: { zh: "屬地主義，只對在台灣境內賺的錢課稅", en: "Territorial principle, only taxes income earned within Taiwan", ja: "属地主義、台湾内で得た所得にのみ課税" } },
      { key: "C", text: { zh: "累進稅率，所得越高的人適用稅率越高", en: "Progressive tax rate, the higher the income, the higher the tax rate", ja: "累進課税、所得が高いほど税率が高くなる" } },
      { key: "D", text: { zh: "免稅，台灣不課徵所得稅", en: "Tax exemption, Taiwan does not levy income tax", ja: "免税、台湾では所得税は課されない" } },
    ],
    correctAnswer: "C",
    explanation: {
        zh: "台灣的綜合所得稅採累進稅率制。這意味著淨所得越高，所適用的稅率級距也越高，以達到量能課稅的公平原則。",
        en: "Taiwan's comprehensive income tax uses a progressive rate system. This means the higher the net income, the higher the applicable tax bracket, to achieve the principle of fair taxation based on ability to pay.",
        ja: "台湾の総合所得税は累進課税制度を採用しています。これは、純所得が高いほど適用される税率区分も高くなることを意味し、能力に応じた公平な課税の原則を実現しています。"
    },
    difficulty: 'medium',
  },
    {
    id: 13,
    question: {
        zh: "保險的主要功能是什麼？",
        en: "What is the main function of insurance?",
        ja: "保険の主な機能は何ですか？"
    },
    options: [
      { key: "A", text: { zh: "一種高回報的投資工具", en: "A high-return investment tool", ja: "高リターンの投資ツール" } },
      { key: "B", text: { zh: "強迫儲蓄的方法", en: "A method of forced savings", ja: "強制的な貯蓄方法" } },
      { key: "C", text: { zh: "支付小額費用，將未來可能發生巨大損失的風險轉嫁給保險公司", en: "Paying a small fee to transfer the risk of a huge future loss to an insurance company", ja: "少額の保険料を支払い、将来起こりうる巨大な損失のリスクを保険会社に移転すること" } },
      { key: "D", text: { zh: "節稅", en: "Tax saving", ja: "節税" } },
    ],
    correctAnswer: "C",
    explanation: {
        zh: "保險的核心價值在於「風險轉嫁」。透過定期支付保費，當發生合同約定的事故（如疾病、意外）時，由保險公司承擔大部分的財務損失，保障個人或家庭不致陷入困境。",
        en: "The core value of insurance is 'risk transfer'. By paying regular premiums, when a contracted event (like illness or accident) occurs, the insurance company bears most of the financial loss, protecting individuals and families from hardship.",
        ja: "保険の核心的な価値は「リスク移転」にあります。定期的に保険料を支払うことで、契約で定められた事象（病気や事故など）が発生した際に、保険会社が財務的損失の大部分を負担し、個人や家族が困難に陥るのを防ぎます。"
    },
    difficulty: 'easy',
  }
];
