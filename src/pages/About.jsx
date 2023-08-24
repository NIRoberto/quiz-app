import React from 'react';

const About = () => {
  return (
    <div>
      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-yellow-500 mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              QUIZLet is a platform dedicated to providing interactive and engaging learning experiences. Our mission is to make learning enjoyable for individuals of all ages. With a blend of
              technology and education, we've curated a diverse range of quizzes covering various topics.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Whether you're a student seeking to reinforce your knowledge, a professional aiming to broaden your horizons, or simply curious about various subjects, QUIZLet has something for you. Our
              quizzes combine entertainment and learning, enabling you to grasp intricate concepts while having a great time.
            </p>
          </div>
          <div>
            <img src="/quiz.webp" alt="About Us" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="bg-dark-yellow text-center py-12">
        <h2 className="text-3xl font-semibold mb-4 text-yellow-500">Our Mission</h2>
        <p className="leading-relaxed text-gray-700">
          At QUIZLet, we are on a mission to create a world where learning is not only informative but also highly entertaining. Our aim is to ignite curiosity, foster exploration, and cultivate a
          lifelong passion for knowledge through the magic of interactive quizzes.
        </p>
      </section>
    </div>
  );
};

export default About;
