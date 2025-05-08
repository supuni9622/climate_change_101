import React, { useState } from 'react';
import { QuizQuestion } from '../../utils/types';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const isCorrect = selectedOption === question.answer;
  
  const handleSelect = (index: number) => {
    if (!submitted) {
      setSelectedOption(index);
    }
  };
  
  const handleSubmit = () => {
    if (selectedOption !== null && !submitted) {
      setSubmitted(true);
      onAnswer(isCorrect);
    }
  };
  
  const getOptionClass = (index: number) => {
    if (!submitted) {
      return selectedOption === index 
        ? 'border-primary-500 bg-primary-50' 
        : 'border-gray-200 hover:border-primary-200 hover:bg-primary-50';
    }
    
    if (index === question.answer) {
      return 'border-success bg-success-50';
    }
    
    if (selectedOption === index) {
      return index === question.answer
        ? 'border-success bg-success-50'
        : 'border-error bg-error-50';
    }
    
    return 'border-gray-200 opacity-60';
  };

  return (
    <div className="card p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{question.question}</h3>
        {submitted && (
          <div className={`flex items-center gap-2 p-3 rounded-lg ${isCorrect ? 'bg-success-50 text-success' : 'bg-error-50 text-error'}`}>
            {isCorrect 
              ? <CheckCircle size={20} /> 
              : <XCircle size={20} />
            }
            <span className="font-medium">
              {isCorrect 
                ? 'Correct!' 
                : `Incorrect. The correct answer is: ${question.options[question.answer]}`
              }
            </span>
          </div>
        )}
      </div>
      
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={submitted}
            className={`w-full p-4 text-left rounded-xl border-2 transition-all ${getOptionClass(index)}`}
          >
            <div className="flex items-center gap-3">
              <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedOption === index ? 'border-primary-500 bg-primary-500 text-white' : 'border-gray-400'
              }`}>
                {String.fromCharCode(65 + index)}
              </div>
              <span>{option}</span>
              {submitted && index === question.answer && (
                <CheckCircle size={20} className="ml-auto text-success" />
              )}
              {submitted && selectedOption === index && index !== question.answer && (
                <XCircle size={20} className="ml-auto text-error" />
              )}
            </div>
          </button>
        ))}
      </div>
      
      {!submitted && (
        <button 
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Answer
        </button>
      )}
      
      {submitted && question.explanation && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-2">
            <AlertCircle size={20} className="flex-shrink-0 mt-1 text-primary" />
            <p className="text-sm text-gray-700">{question.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizCard;