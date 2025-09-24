'use client';

import { useState, useEffect, useCallback } from 'react';
import { FiCheckCircle, FiXCircle, FiAlertCircle, FiClock, FiAward } from 'react-icons/fi';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Quiz {
  id: number;
  title: string;
  questions: Question[];
  reward: number;
}

interface QuizSystemProps {
  userPlan: {
    id: string;
    dailyCoins: number;
  };
  onComplete: (success: boolean) => void;
}

const sampleQuiz: Quiz = {
  id: 1,
  title: 'Crypto Basics',
  reward: 1, // This will be overridden by user's plan
  questions: [
    {
      id: 1,
      text: 'What does "HODL" stand for in crypto?',
      options: [
        'Hold On for Dear Life',
        'Having Only Digital Loot',
        'Holding Our Digital Legacy',
        'None of the above'
      ],
      correctAnswer: 0,
      explanation: 'HODL stands for "Hold On for Dear Life" and refers to a long-term investment strategy.'
    },
    {
      id: 2,
      text: 'What is the maximum supply of Bitcoin?',
      options: [
        '21 million',
        '100 million',
        '1 billion',
        'Unlimited'
      ],
      correctAnswer: 0,
      explanation: 'Bitcoin has a maximum supply of 21 million coins.'
    },
    {
      id: 3,
      text: 'What is a blockchain?',
      options: [
        'A type of cryptocurrency',
        'A digital ledger of transactions',
        'A hardware wallet',
        'A type of exchange'
      ],
      correctAnswer: 1,
      explanation: 'A blockchain is a distributed digital ledger that records transactions across many computers.'
    },
    {
      id: 4,
      text: 'True or False: All cryptocurrencies use proof-of-work consensus.',
      options: [
        'True',
        'False'
      ],
      correctAnswer: 1,
      explanation: 'False. While Bitcoin uses proof-of-work, many other cryptocurrencies use different consensus mechanisms like proof-of-stake.'
    },
    {
      id: 5,
      text: 'What is the term for when a cryptocurrency splits into two separate blockchains?',
      options: [
        'Fork',
        'Merge',
        'Bridge',
        'Swap'
      ],
      correctAnswer: 0,
      explanation: 'A fork occurs when a blockchain splits into two separate chains, which can happen for various technical or governance reasons.'
    }
  ]
};

const QuizSystem: React.FC<QuizSystemProps> = ({ userPlan, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(2); // 1 initial + 1 retry
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [quizStarted, setQuizStarted] = useState(false);
  const [quiz] = useState<Quiz>({
    ...sampleQuiz,
    reward: userPlan.dailyCoins
  });

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const hasAnswered = selectedAnswers[currentQuestionIndex] !== undefined;
  const isCorrect = (index: number) => selectedAnswers[index] === quiz.questions[index].correctAnswer;
  const score = selectedAnswers.filter((answer, index) => answer === quiz.questions[index].correctAnswer).length;
  const passed = score >= Math.ceil(quiz.questions.length * 0.7); // 70% to pass

  const handleComplete = useCallback((success: boolean) => {
    setQuizCompleted(true);
    onComplete(success);
  }, [onComplete]);

  // Timer effect
  useEffect(() => {
    if (!quizStarted || quizCompleted) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleComplete(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted, quizCompleted, handleComplete]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (hasAnswered) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };


  const handleRetry = () => {
    if (attemptsLeft > 1) {
      setSelectedAnswers([]);
      setCurrentQuestionIndex(0);
      setShowResults(false);
      setAttemptsLeft(prev => prev - 1);
      setTimeLeft(300);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!quizStarted) {
    return (
      <div className="bg-slate-800/60 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Daily Crypto Quiz</h3>
        <div className="flex items-center justify-center text-yellow-400 mb-6">
          <FiAward className="w-8 h-8 mr-2" />
          <span className="text-lg">Earn up to {userPlan.dailyCoins} coins</span>
        </div>
        <p className="text-gray-300 mb-6">
          Test your crypto knowledge with our daily quiz. Answer at least 4 out of 5 questions correctly to earn your daily reward.
        </p>
        <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Questions:</span>
            <span className="text-white">5</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Time Limit:</span>
            <span className="text-white">5:00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Passing Score:</span>
            <span className="text-white">4/5 (80%)</span>
          </div>
        </div>
        <button
          onClick={startQuiz}
          className="w-full bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="bg-slate-800/60 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          {passed ? 'Quiz Completed! 🎉' : attemptsLeft > 1 ? 'Try Again' : 'Quiz Failed'}
        </h3>
        
        <div className="flex justify-center mb-6">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
            passed ? 'bg-green-500/20' : 'bg-red-500/20'
          }`}>
            {passed ? (
              <FiCheckCircle className="w-12 h-12 text-green-400" />
            ) : (
              <FiXCircle className="w-12 h-12 text-red-400" />
            )}
          </div>
        </div>

        <div className="text-3xl font-bold mb-2">
          {score} <span className="text-gray-400">/ {quiz.questions.length}</span>
        </div>
        <div className="text-gray-300 mb-6">
          {passed 
            ? `You've earned ${userPlan.dailyCoins} coins!`
            : `You need ${Math.ceil(quiz.questions.length * 0.7) - score} more correct answers to pass.`
          }
        </div>

        {!passed && attemptsLeft > 1 && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-6 text-yellow-300 flex items-center justify-center">
            <FiAlertCircle className="mr-2" />
            {attemptsLeft - 1} attempt{attemptsLeft > 2 ? 's' : ''} remaining
          </div>
        )}

        <div className="space-y-3 mb-6">
          {quiz.questions.map((q, i) => (
            <div 
              key={q.id} 
              className={`p-3 rounded-lg text-left ${
                isCorrect(i) 
                  ? 'bg-green-500/10 border border-green-500/30' 
                  : 'bg-red-500/10 border border-red-500/30'
              }`}
            >
              <div className="font-medium">{q.text}</div>
              <div className="text-sm opacity-80 mt-1">{q.explanation}</div>
            </div>
          ))}
        </div>

        {passed ? (
          <button
            onClick={() => handleComplete(true)}
            className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Claim {userPlan.dailyCoins} Coins
          </button>
        ) : attemptsLeft > 1 ? (
          <button
            onClick={handleRetry}
            className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Try Again ({attemptsLeft - 1} left)
          </button>
        ) : (
          <button
            onClick={() => handleComplete(false)}
            className="w-full bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="bg-slate-800/60 rounded-2xl p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Daily Crypto Quiz</h3>
          <p className="text-gray-400 text-sm">
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </p>
        </div>
        <div className="flex items-center bg-slate-700/50 px-3 py-1 rounded-full">
          <FiClock className="text-yellow-400 mr-1" />
          <span className="font-mono">{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-slate-700/50 rounded-full h-2 mb-6">
        <div 
          className="bg-gradient-to-r from-lime-400 to-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestionIndex) / quiz.questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="mb-8">
        <h4 className="text-lg font-medium text-white mb-6">{currentQuestion.text}</h4>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswers[currentQuestionIndex] === index;
            const isCorrectAnswer = index === currentQuestion.correctAnswer;
            const showFeedback = hasAnswered && (isSelected || isCorrectAnswer);
            
            let optionClasses = "w-full text-left p-4 rounded-lg border transition-all duration-200 ";
            
            if (showFeedback) {
              optionClasses += isCorrectAnswer 
                ? "bg-green-500/10 border-green-500/50 text-green-100"
                : isSelected 
                  ? "bg-red-500/10 border-red-500/50 text-red-100"
                  : "border-slate-600 hover:border-slate-500";
            } else {
              optionClasses += isSelected 
                ? "bg-blue-500/10 border-blue-500/50 text-blue-100"
                : "border-slate-600 hover:border-slate-500";
            }
            
            return (
              <button
                key={index}
                className={optionClasses}
                onClick={() => handleAnswerSelect(index)}
                disabled={hasAnswered}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center mr-3 ${
                    showFeedback 
                      ? isCorrectAnswer 
                        ? 'bg-green-500/20 border-green-500/50' 
                        : isSelected 
                          ? 'bg-red-500/20 border-red-500/50' 
                          : 'border-slate-500'
                      : isSelected 
                        ? 'bg-blue-500/20 border-blue-500/50' 
                        : 'border-slate-500'
                  }`}>
                    {showFeedback ? (
                      isCorrectAnswer ? (
                        <FiCheckCircle className="w-3 h-3 text-green-400" />
                      ) : isSelected ? (
                        <FiXCircle className="w-3 h-3 text-red-400" />
                      ) : null
                    ) : null}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
          disabled={currentQuestionIndex === 0}
          className="px-4 py-2 rounded-lg border border-slate-600 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <button
          onClick={handleNextQuestion}
          disabled={!hasAnswered}
          className={`px-6 py-2 rounded-lg font-medium ${
            hasAnswered
              ? 'bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-black'
              : 'bg-slate-700 text-slate-500 cursor-not-allowed'
          }`}
        >
          {currentQuestionIndex === quiz.questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default QuizSystem;
