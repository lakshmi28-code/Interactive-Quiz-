import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Quick Quiz</h1>
      <p>Test your basic computer knowledge.</p>
      <Link to="/quiz" className="start">Start Quiz</Link>
    </div>
  );
}

export default Home;
