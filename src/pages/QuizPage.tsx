import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import QuizCard from '../components/ui/QuizCard';
import { quizzes } from '../data/quizData';
import { modules } from '../data/moduleData';
import { QuizQuestion } from '../utils/types';

const QuizPage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [moduleName, setModuleName] = useState('');
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  useEffect(() => {
    if (moduleId) {
      const quiz = quizzes.find(q => q.moduleId === moduleId);
      const module = modules.find(m => m.id === moduleId);
      
      if (quiz) {
        setQuestions(quiz.questions);
        setAnswers(new Array(quiz.questions.length).fill(false));
      }
      
      if (module) {
        setModuleName(module.title);
      } else {
        // Module not found, redirect to home
        navigate('/');
      }
    }
  }, [moduleId, navigate]);
  
  const handleAnswer = (isCorrect: boolean) => {
    const newAnswers = [...answers];
    newAnswers[currentQuizIndex] = isCorrect;
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  };
  
  const goToNextQuestion = () => {
    if (currentQuizIndex < questions.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      // Quiz completed
      setQuizCompleted(true);
    }
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex(currentQuizIndex - 1);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuizIndex(0);
    setScore(0);
    setAnswers(new Array(questions.length).fill(false));
    setQuizCompleted(false);
  };
  
  const getScorePercentage = () => {
    return Math.round((score / questions.length) * 100);
  };
  
  const getScoreMessage = () => {
    const percentage = getScorePercentage();
    
    if (percentage >= 90) {
      return "Excellent! You're a climate science expert!";
    } else if (percentage >= 70) {
      return "Great job! You have a solid understanding of this topic.";
    } else if (percentage >= 50) {
      return "Good effort! You're grasping the basics, but there's room to improve.";
    } else {
      return "Keep learning! Review the module content and try again.";
    }
  };
  
  if (questions.length === 0) {
    return (
      <div className="container-custom py-24 text-center">
        <h2 className="text-2xl font-semibold">Quiz not available</h2>
        <p className="mt-4 text-gray-600">
          The quiz for this module doesn't seem to exist.
        </p>
        <Link to="/" className="btn-primary mt-6 inline-block">
          Return to Home
        </Link>
      </div>
    );
  }
  
  const renderResultsBadge = () => {
    const percentage = getScorePercentage();
    let color = 'bg-error text-white';
    
    if (percentage >= 90) {
      color = 'bg-success text-white';
    } else if (percentage >= 70) {
      color = 'bg-secondary text-white';
    } else if (percentage >= 50) {
      color = 'bg-warning text-white';
    }
    
    return (
      <div className={`${color} rounded-xl p-6 text-center mb-6`}>
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <Award size={40} />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2">{getScorePercentage()}% Score</h3>
        <p>{getScoreMessage()}</p>
      </div>
    );
  };
  
  const renderQuestionIndicators = () => (
    <div className="flex justify-center space-x-2 my-6">
      {questions.map((_, index) => (
        <button 
          key={index}
          onClick={() => setCurrentQuizIndex(index)}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            index === currentQuizIndex
              ? 'bg-primary text-white' 
              : answers[index] !== false 
                ? 'bg-success/20 text-success-600 border border-success'
                : 'bg-gray-100 text-gray-400'
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
  
  const currentQuestion = questions[currentQuizIndex];
  
  return (
    <div className="bg-neutral-background min-h-screen pt-20 pb-16">
      <div className="container-custom py-8">
        <Link 
          to={`/module/${moduleId}`} 
          className="flex items-center text-primary hover:text-primary-600 transition-colors mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Module
        </Link>
        
        <div className="bg-white rounded-xl shadow-soft overflow-hidden">
          {/* Quiz Header */}
          <div className="bg-primary p-6 text-white">
            <h1 className="text-xl md:text-2xl font-bold">{moduleName} Quiz</h1>
            <p className="text-primary-100">
              {quizCompleted 
                ? `You scored ${score} out of ${questions.length} questions correctly.`
                : `Question ${currentQuizIndex + 1} of ${questions.length}`
              }
            </p>
          </div>
          
          {/* Quiz Content */}
          <div className="p-6">
            {quizCompleted ? (
              <div>
                {/* Quiz Results */}
                {renderResultsBadge()}
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Quiz Summary</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white p-3 rounded border border-gray-100">
                        <p className="text-sm text-gray-500">Total Questions</p>
                        <p className="font-semibold">{questions.length}</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-100">
                        <p className="text-sm text-gray-500">Correct Answers</p>
                        <p className="font-semibold">{score}</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-100">
                        <p className="text-sm text-gray-500">Success Rate</p>
                        <p className="font-semibold">{getScorePercentage()}%</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-100">
                        <p className="text-sm text-gray-500">Result</p>
                        <p className="font-semibold">
                          {getScorePercentage() >= 70 ? 'Passed' : 'Try Again'}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <button 
                      onClick={resetQuiz}
                      className="btn-secondary flex-1 flex items-center justify-center"
                    >
                      <RefreshCw size={18} className="mr-2" />
                      Retake Quiz
                    </button>
                    <Link 
                      to={`/module/${moduleId}`}
                      className="btn-primary flex-1 flex items-center justify-center"
                    >
                      Continue Learning
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {/* Question */}
                <QuizCard 
                  question={currentQuestion} 
                  onAnswer={handleAnswer} 
                />
                
                {/* Question Navigation */}
                {renderQuestionIndicators()}
                
                <div className="flex justify-between mt-6">
                  <button 
                    onClick={goToPreviousQuestion}
                    disabled={currentQuizIndex === 0}
                    className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={18} className="mr-1" />
                    Previous
                  </button>
                  
                  <button 
                    onClick={goToNextQuestion}
                    disabled={answers[currentQuizIndex] === false}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentQuizIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    {currentQuizIndex < questions.length - 1 && (
                      <ChevronRight size={18} className="ml-1" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;