import React from 'react';

const HowToPlay = () => {
  const howToPlaySteps = [
    'Browse our collection of quizzes and select a topic that interests you.',
    'Click the "Start Quiz" button on the quiz card to begin.',
    'Answer questions by selecting the correct option from the choices provided.',
    'Receive immediate feedback on your answers and see your score at the end of the quiz.',
  ];

  const tipsForSuccess = [
    'Read each question carefully before selecting an answer.',
    'Take your time and don\'t rush through the quiz.',
    'Use hints and explanations provided to learn from your answers.',
    'Challenge yourself with quizzes from different categories to expand your knowledge.',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-yellow text-center py-16">
        <h1 className="text-4xl font-semibold text-yellow-500  mb-4">
          How to Play
        </h1>
        <p className="text-lg text-gray-700">
          A step-by-step guide to enhance your learning experience.
        </p>
      </section>

      {/* How to Play Section */}
      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-yellow-500 mb-4">
              Getting Started
            </h2>
            <p className="leading-relaxed text-gray-700">
              Playing on QuizQuest is easy and enjoyable. Follow these simple
              steps to get started:
            </p>
            <ul className="list-disc pl-6 mt-4">
              {howToPlaySteps.map((step, index) => (
                <li key={index} className="text-gray-700">
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* Insert an image related to your How to Play page */}
            <img
              src="/quiz.webp"
              alt="How to Play"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-dark-gray  py-12">
        <div className="container mx-auto text-ce">
          <h2 className="text-3xl text-yellow-500 font-semibold mb-4">
            Tips for Success
          </h2>
          <p className="leading-relaxed text-gray-700">
            To make the most out of your QuizQuest experience, consider these
            tips:
          </p>
          <ul className="list-disc pl-6 mt-4">
            {tipsForSuccess.map((tip, index) => (
              <li key={index} className="text-gray-700">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HowToPlay;
