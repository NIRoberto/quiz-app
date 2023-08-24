import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredQuizzes = [
    {
      title: 'History Quiz',
      image: './quiz.webp',
      description: 'Test your knowledge of historical events and figures.',
      link: '/quiz/history',
    },
    {
      title: 'Science Quiz',
      image: './quiz.webp',
      description: 'Explore the world of science with this exciting quiz.',
      link: '/quiz/science',
    },
    {
      title: 'Geography Quiz',
      image: './quiz.webp',
      description: 'Discover the world and its diverse landscapes in this quiz.',
      link: '/quiz/geography',
    },
    {
      title: 'Literature Quiz',
      image: './quiz.webp',
      description: 'Explore classic literature and famous authors in this quiz.',
      link: '/quiz/literature',
    },
    {
      title: 'Art Quiz',
      image: './quiz.webp',
      description: 'Discover the world of art and famous artworks.',
      link: '/quiz/art',
    },
    {
      title: 'Music Quiz',
      image: './quiz.webp',
      description: 'Test your knowledge of music genres, artists, and history.',
      link: '/quiz/music',
    },
  ];
  return (
    <>
      <section className="bg-dark-yellow text-center py-16">
        <h1 className="text-4xl font-semibold  text-yellow-500 mb-4">Embrace the Joy of learning !</h1>
        <p className=" mb-8">
          Are you ready to embark on an exciting journey to test and enhance your driving knowledge? Our quiz website is designed to be your ultimate companion in preparing for your driving license
          exam. Whether you're a first-time driver seeking to obtain your learner's permit, a student studying for a license upgrade, or simply curious about road safety and traffic rules, our
          carefully crafted quizzes will challenge and engage you.
        </p>
      </section>
      <section className="bg-dark-gray text-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Featured Quizzes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredQuizzes.map((quiz, index) => (
              <div key={index} className="bg-white flex justify-between flex-col gap-4 p-6 rounded-md shadow-md">
                <img src={quiz.image} alt={quiz.title} className="mb-4 rounded-md" />
                <h3 className="text-lg font-semibold text-yellow-500">{quiz.title}</h3>
                <p className="text-gray-600">{quiz.description}</p>
                <Link to={quiz.link} className="">
                  <button className="btn btn-secondary capitalize">Start Quiz</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-yellow text-center py-16">
        <h2 className="text-3xl font-semibold  mb-4">Ready to start your learning journey?</h2>
        <p className=" mb-8">Join QuizQuest now and gain access to a world of knowledge!</p>
        <Link to="/signup" className="btn capitalize btn-secondary">
          Sign Up
        </Link>
      </section>
    </>
  );
};

export default Home;
