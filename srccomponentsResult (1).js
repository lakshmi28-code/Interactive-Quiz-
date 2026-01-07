import { useLocation } from "react-router-dom";

function Result() {
  const data = useLocation();
  const score = data.state?.score || 0;

  return (
    <div className="result">
      <h2>Your Score</h2>
      <p>{score} / 3</p>
    </div>
  );
}

export default Result;

