import { useState } from "react";
import "./Question.css";
import "../App";
import { inputList } from "../Date/Date";

function Question({ question, status }) {
  let [colorBg, setColorBg] = useState({ questionBg: "" });

  const questionColor = (e) => {
    if (e.target.id === "radio1") {
      setColorBg({questionBg: "#FFE4B5" });
    }
    if (e.target.id === "radio2") {
      setColorBg({questionBg: "#00FA9A" });
    }
    if (e.target.id === "radio3") {
      setColorBg({questionBg: "#FFA07A" });
    }
    return colorBg;
  };

  const style = { backgroundColor: colorBg.questionBg };

  const input = inputList.map((item) => {
    return (
      <label key={item.id} className="label_status">
        <input
          type="radio"
          className="input"
          id={item.id}
          name={item.name}
          value={item.value}
          onChange={questionColor}
        />
        {item.value}
      </label>
    );
  });

  return (
    <div className="question-status">
      <div className="question_text" style={style}>
        <span>{question}</span>
      </div>
      <form className="form_status">{input}</form>
    </div>
  );
}

export default Question;
