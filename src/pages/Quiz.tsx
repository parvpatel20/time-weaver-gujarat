import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, RotateCcw, CheckCircle, XCircle } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);

  const questions: Question[] = [
    {
      question: 'In which year was the first railway line established in Gujarat region?',
      options: ['1850', '1860', '1870', '1880'],
      correct: 1,
      explanation: 'The first railway line in the Gujarat region was established in 1860 during British rule.',
    },
    {
      question: 'Which ancient port of Gujarat is one of the world\'s earliest known docks?',
      options: ['Mandvi', 'Lothal', 'Kandla', 'Mundra'],
      correct: 1,
      explanation: 'Lothal, dating back to 2600 BCE, features one of the world\'s earliest known dockyard structures.',
    },
    {
      question: 'What does GSRTC stand for?',
      options: [
        'Gujarat State Road Transport Company',
        'Gujarat State Railway Transport Corporation',
        'Gujarat State Road Transport Corporation',
        'Gujarat State Regional Transport Council',
      ],
      correct: 2,
      explanation: 'GSRTC stands for Gujarat State Road Transport Corporation, established in the 1960s.',
    },
    {
      question: 'Which city will the Mumbai-Ahmedabad bullet train connect?',
      options: [
        'Mumbai and Vadodara',
        'Mumbai and Surat',
        'Mumbai and Ahmedabad',
        'Ahmedabad and Rajkot',
      ],
      correct: 2,
      explanation: 'India\'s first bullet train corridor will connect Mumbai and Ahmedabad, covering 508 km.',
    },
    {
      question: 'Sardar Vallabhbhai Patel International Airport is located in which city?',
      options: ['Surat', 'Vadodara', 'Rajkot', 'Ahmedabad'],
      correct: 3,
      explanation: 'The airport is located in Ahmedabad and serves as Gujarat\'s primary international gateway.',
    },
    {
      question: 'Which port is known for traditional wooden shipbuilding?',
      options: ['Kandla', 'Mundra', 'Mandvi', 'Porbandar'],
      correct: 2,
      explanation: 'Mandvi in Kutch has been famous for centuries for its traditional wooden shipbuilding craft.',
    },
    {
      question: 'When was the Western Railway headquarters established in Ahmedabad?',
      options: ['1920s', '1930s', '1940s', '1950s'],
      correct: 1,
      explanation: 'The Western Railway headquarters was established in Ahmedabad in the 1930s.',
    },
    {
      question: 'What is the maximum speed of the proposed bullet train?',
      options: ['250 km/h', '280 km/h', '300 km/h', '320 km/h'],
      correct: 3,
      explanation: 'The Mumbai-Ahmedabad bullet train will have a maximum operational speed of 320 km/h.',
    },
    {
      question: 'Which civilization built the ancient port at Dholavira?',
      options: [
        'Mauryan Empire',
        'Gupta Empire',
        'Indus Valley Civilization',
        'Mughal Empire',
      ],
      correct: 2,
      explanation: 'Dholavira was a major city of the Indus Valley Civilization, dating back to 2650 BCE.',
    },
    {
      question: 'What percentage of India\'s cargo passes through Gujarat ports?',
      options: ['20%+', '30%+', '40%+', '50%+'],
      correct: 2,
      explanation: 'Over 40% of India\'s cargo passes through Gujarat\'s major ports like Kandla and Mundra.',
    },
  ];

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);

    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    let message = '';
    let emoji = '';

    if (percentage >= 90) {
      message = 'Outstanding! You\'re a Gujarat transport expert!';
      emoji = '🏆';
    } else if (percentage >= 70) {
      message = 'Great job! You know your transport history well!';
      emoji = '⭐';
    } else if (percentage >= 50) {
      message = 'Good effort! Keep exploring to learn more!';
      emoji = '👍';
    } else {
      message = 'Nice try! Explore our site to discover more!';
      emoji = '📚';
    }

    return (
      <main className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <CardContent className="p-12 text-center space-y-8">
              <Trophy className="h-24 w-24 mx-auto text-accent animate-pulse-glow" />
              <div className="space-y-4">
                <h1 className="text-5xl font-display font-bold">Quiz Complete!</h1>
                <div className="text-6xl">{emoji}</div>
                <p className="text-2xl text-muted-foreground">{message}</p>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <div className="text-6xl font-display font-bold text-accent mb-2">
                  {score}/{questions.length}
                </div>
                <p className="text-xl text-muted-foreground">
                  {percentage.toFixed(0)}% Correct
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <Button size="lg" onClick={resetQuiz} className="gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Try Again
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = '/'}>
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <Trophy className="h-16 w-16 mx-auto text-accent" />
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Transport Trivia Quiz
          </h1>
          <p className="text-xl text-muted-foreground italic font-display">
            Test Your Knowledge of Gujarat's Transport History
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-semibold text-accent">
              Score: {score}/{answeredQuestions.filter(Boolean).length}
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-8">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-display font-bold leading-relaxed">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correct;
                const showCorrect = selectedAnswer !== null && isCorrect;
                const showIncorrect = selectedAnswer !== null && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      showCorrect
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        : showIncorrect
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : isSelected
                        ? 'border-accent bg-accent/5'
                        : 'border-border hover:border-accent/50 hover:bg-muted'
                    } ${selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {showCorrect && <CheckCircle className="h-5 w-5 text-green-600" />}
                      {showIncorrect && <XCircle className="h-5 w-5 text-red-600" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedAnswer !== null && (
              <div className="pt-6 border-t border-border animate-fade-in">
                <p className="text-muted-foreground leading-relaxed">{question.explanation}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Next Button */}
        {selectedAnswer !== null && (
          <div className="text-center animate-fade-in">
            <Button size="lg" onClick={nextQuestion}>
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'View Results'}
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Quiz;
