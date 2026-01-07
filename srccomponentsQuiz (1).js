import { useState } from "react";
import { Link } from "react-router-dom";

function Quiz() {
  const questions = [
    { q: "HTML stands for?", a: ["Hyper Text Markup Language", "High Text Machine Language"], c: 0 },
    { q: "Which is a programming language?", a: ["HTML", "JavaScript"], c: 1 },
    { q: "React is a?", a: ["Framework", "Library"], c: 1 }
  ];

  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);

  function check(ans) {
    if (ans === questions[index].c) setScore(score + 1);
    setIndex(index + 1);
  }

  if (index >= questions.length) {
    return <Link to="/result" state={{ score }}>Finish Quiz</Link>;
  }

  return (
    <div className="quiz">
      <h2>{questions[index].q}</h2>
      {questions[index].a.map((opt, i) => (
        <button key={i} onClick={() => check(i)}>{opt}</button>
      ))}
    </div>
  );
}

export default Quiz;
