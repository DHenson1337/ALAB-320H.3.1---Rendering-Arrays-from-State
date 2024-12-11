import Score from "./Score";
function Learner({ learner }) {
  return (
    <div className="learner">
      {/* Displays the Learners name */}
      <h2>{learner.name}</h2>
      {/* Displays the Learners bio */}
      <p>{learner.bio}</p>
      <h3>Scores:</h3>
      {learner.scores.map((score, index) => (
        <Score key={index} score={score} />
      ))}
    </div>
  );
}

export default Learner;
