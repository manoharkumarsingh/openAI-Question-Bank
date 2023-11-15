import React, { useState, useEffect } from "react";

const Questions = (props) => {
  const [questionList, setQuestionList] = useState([]);
  useEffect(() => {
    if (props.questionList) {
      setQuestionList(props.questionList);
    }
  }, [props.questionList]);

  return (
    <div className="question-page">
      {questionList && questionList.length > 0 ? (
        <div className="download-page">
          <div className="download-page-button">
            <button class="button button3">Download Excel</button>
            <button class="button button3">Save</button>
          </div>
          <div className="questions">
            {questionList.map((data, index) => {
              return (
                <div className="questionDeatils">
                  <div className="question-sec">
                    <h3>
                      {index + 1} : {data.ques}
                    </h3>
                  </div>
                  <div className="ans-sec">
                    {data.ansOpt.map((ansOption) => {
                      return <div className="ans-opt">{ansOption.ans}</div>;
                    })}
                  </div>
                  <div className="ans-sec">
                    <div className="correct-ans-lable">Correct Ans:</div>
                    {data.correctAns.map((ansOption) => {
                      return <div className="correct-opt">{ansOption.ans}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : !props.data ? (
        <div className="noData">Please Provide Prompt</div>
      ) : (
        <div className="loader-section">
          <span class="loader"></span>
        </div>
      )}
    </div>
  );
};

export default Questions;
