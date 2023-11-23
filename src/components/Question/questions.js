import React, { useState, useEffect } from "react";
import saveAs from "file-saver";
const Excel = require("exceljs");

const Questions = (props) => {
  const [questionList, setQuestionList] = useState({});
  useEffect(() => {
    if (props.questionList) {
      setQuestionList(props.questionList);
    }
  }, [props.questionList]);

  const exportToXLS = (apiData) => {
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");
    worksheet.columns = [
      { header: "Question", key: "question", width: 50 },
      { header: "Options", key: "options", width: 50 },
      { header: "Answer", key: "answer", width: 50 },
    ];
    worksheet.addRows(apiData);
    workbook.xlsx.writeBuffer().then(function (buffer) {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        `question-bank.xlsx`
      );
    });
  };

  return (
    <div className="question-page">
      {questionList && Object.keys(questionList).length > 0 ? (
        <div className="download-page">
          <div className="download-page-button">
            <button
              class="button button3"
              onClick={(e) =>
                exportToXLS(questionList.questions, "question_bank")
              }
            >
              Download Excel
            </button>
          </div>
          <div className="questions">
            {questionList.questions.map((data, index) => {
              return (
                <div className="questionDeatils">
                  <div className="question-sec">
                    <h3>
                      {index + 1} : {data.question}
                    </h3>
                  </div>
                  <div className="ans-sec">
                    {data.options.map((option) => {
                      return <div className="ans-opt">{option}</div>;
                    })}
                  </div>
                  <div className="ans-sec">
                    <div className="correct-ans-lable">Correct Ans:</div>
                    <div className="correct-opt">{data.answer}</div>
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
