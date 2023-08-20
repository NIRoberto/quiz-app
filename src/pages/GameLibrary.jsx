import React from "react";

const GameLibrary = () => {
  const gameData = [
    {
      title: "History Quiz",
      image: "/images/history-quiz.jpg",
      description: "Test your knowledge of historical events and figures.",
      link: "/quiz/history",
    },
    {
      title: "Science Quiz",
      image: "/images/science-quiz.jpg",
      description: "Explore the world of science with exciting questions.",
      link: "/quiz/science",
    },
    {
      title: "Geography Challenge",
      image: "/images/geography-quiz.jpg",
      description: "Discover countries, capitals, and landmarks in this quiz.",
      link: "/quiz/geography",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-yellow text-center py-16">
        <h1 className="text-4xl font-semibold text- mb-4 text-yellow-500">
          Game Library
        </h1>
        <p className="text-gray-700 text-lg">
          Explore a collection of interactive quizzes and expand your knowledge.
        </p>
      </section>

      {/* Game Library Content */}
      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameData.map((game, index) => (
            <div
              key={index}
              className="bg- p-6 flex flex-col  justify-between gap-4 rounded-md shadow-md"
            >
              <img
                src={"quiz.webp"}
                loading="lazy"
                alt={game.title}
                className="mb-4 text-gray-700 rounded-lg"
              />
              <h3 className="text-lg font-semibold text-yellow-500">{game.title}</h3>
              <p className="text-gray-700">{game.description}</p>

              <a href={game.link} className="">
                <button className="btn btn-secondary">Play Now</button>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GameLibrary;
