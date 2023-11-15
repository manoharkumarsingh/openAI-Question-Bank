import React, { useState } from "react";
import Questions from "./questions";
import Generate from "./generate";

const GenerateWithQuestion = () => {
  const [prompt, setPrompt] = useState("");
  const [questionList, setQuestionList] = useState([]);

  const getQuestionList = (data) => {
    setQuestionList(data);
  };

  const getPrompt = (data) => {
    console.log(data);
    setPrompt(data);
  };
  return (
    <div className="chat-gpt-page">
      <Generate getQuestionList={getQuestionList} getPrompt={getPrompt} />
      <Questions questionList={questionList} data={prompt} />
    </div>
  );
};

export default GenerateWithQuestion;
