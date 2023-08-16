const Leaderboard = ({ result }) => {
  const totalQuestions = 20; // Total number of questions
  const correctAnswers = result.reduce(
    (total, answer) => total + answer,
    0
  );
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  const handStyle = {
    width: `${scorePercentage}%`,
    background: `linear-gradient(to right, #4CAF50 ${scorePercentage}%, transparent ${scorePercentage}%)`,
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Your Result</h2>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div
            className="w-6 h-6 bg-green-500 rounded-full mr-2"
            style={handStyle}
          ></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full ml-2"></div>
        </div>
        <div className="text-xs text-gray-500">
          <span>{scorePercentage.toFixed(2)}%</span>
        </div>
      </div>
      <p className="mb-4">
        You answered {correctAnswers} out of {totalQuestions} questions
        correctly.
      </p>
      <p className="mb-4">Great job! Keep learning and improving.</p>
    </div>
  );
};


export default Leaderboard;