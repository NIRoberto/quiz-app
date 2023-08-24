import { useState } from 'react';
import CorrectAnswer from '../components/QuizModule/CorrectAnswer';
import IncorrectAnswer from '../components/QuizModule/IncorrectAnswer';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import Leaderboard from './Leaderboard';

const QuizModule = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Whale', 'Giraffe', 'Lion'],
      correctAnswer: 'Whale',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Michelangelo'],
      correctAnswer: 'Leonardo da Vinci',
    },
    {
      question: 'Which gas do plants use for photosynthesis?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 'Carbon Dioxide',
    },
    {
      question: 'What is the smallest prime number?',
      options: ['1', '2', '3', '5'],
      correctAnswer: '2',
    },
    {
      question: 'What is the symbol for the chemical element gold?',
      options: ['Au', 'Ag', 'Fe', 'Cu'],
      correctAnswer: 'Au',
    },
    {
      question: 'In which year did World War II end?',
      options: ['1945', '1918', '1939', '1955'],
      correctAnswer: '1945',
    },
    {
      question: 'What is the tallest mountain in the world?',
      options: ['Mount Everest', 'Mount Kilimanjaro', 'Mount McKinley', 'Mount Fuji'],
      correctAnswer: 'Mount Everest',
    },
    {
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correctAnswer: 'Pacific Ocean',
    },
    // Add more quiz questions
    // ...
  ];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const [result, setResult] = useState([]); // [1, 0, 1, 1, 0, 1, 0, 1, 1, 1];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowFeedback(false);
      //    store  1 if answer is true and 0 if is false  in result array in useState
      if (selectedOption === currentQuestion.correctAnswer) {
        setResult([...result, 1]);
      } else {
        setResult([...result, 0]);
      }
    } else {
      setQuizCompleted(true);
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];
  const {} = useAudioPlayer();

  return (
    <div className="p-8">
      {quizCompleted ? (
        <Leaderboard result={result} />
      ) : (
        <div className="border p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Question {currentQuestionIndex + 1}</h3>
          <p className="text-gray-700 mb-4">{currentQuestion.question}</p>
          <ul className="list-none">
            {currentQuestion.options.map((option, index) => (
              <li key={index} onClick={() => handleSelectOption(option)} className={`border p-2 mb-2 cursor-pointer ${selectedOption === option ? 'bg-blue-200' : ''}`}>
                {option}
              </li>
            ))}
          </ul>
          {showFeedback && <p className="mt-4">{selectedOption === currentQuestion.correctAnswer ? <CorrectAnswer /> : <IncorrectAnswer correctAnswer={currentQuestion.correctAnswer} />}</p>}
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setShowFeedback(true)}>
            Check Answer
          </button>
        </div>
      )}
      {currentQuestionIndex < quizData.length && !quizCompleted && (
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handleNextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default QuizModule;
