import "./App.css";
import { data } from "./Date/Date";
import Question from "./components/Question";

function App() {
  const listData = data.map((item, i) => {
    return (
      <li key={i}>
        <Question question={item.question} status={item.status} />
      </li>
    );
  });

  return (
    <div className="wrapper">
      <div className="title_block">
        <div className="title_name">Питання</div>
        <div className="title_status">Статус питання</div>
      </div>
      <div className="questions_block"></div>
      <div className="question">
        <ol>{listData}</ol>
      </div>
    </div>
  );
}

export default App;
