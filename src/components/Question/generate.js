import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Generate = (props) => {
  const navigate = useNavigate();
  const [fileInfo, setFileInfo] = useState({});
  const [questionType, setQuestionType] = useState("MCQ");
  const [questionCount, setQuestionCount] = useState(1);
  const [description, setDescription] = useState();
  const textareaRef = useRef();
  /**Options*/
  const QuestionType = [
    { name: "MCQ", id: 1 },
    { name: "MCQ (Multiple Correct Answers)", id: 2 },
    { name: "True/False", id: 3 },
    { name: "Fill in the blanks", id: 4 },
  ];

  let QuestionCount = [];
  for (let i = 1; i <= 25; i++) {
    QuestionCount.push({ name: i, id: i });
  }

  const onSelect = () => {
    document.getElementById("getFile").click();
  };

  const readFile = (event) => {
    setFileInfo(event.target.files[0]);
  };

  const uploadSvg = (
    <svg
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-upload"
      viewBox="0 0 16 16"
    >
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
    </svg>
  );

  const generateQuestion = async () => {
    if (textareaRef.current.value) {
      let data = textareaRef.current.value;
      props.getPrompt(data);
      props.getQuestionList([]);
      const payload = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Generate " +
              questionCount +
              " " +
              questionType +
              " question with answer based on the provided description.Format the response to provide a concise and clear explanation in array of object example me :" +
              data +
              ",  you:" +
              JSON.stringify([
                {
                  ques: "string",
                  ansOpt: [
                    { ans: "string" },
                    { ans: "string" },
                    { ans: "string" },
                    { ans: "string" },
                  ],
                  correctAns: [{ ans: "string" }],
                },

                {
                  ques: "string",
                  ansOpt: [
                    { ans: "string" },
                    { ans: "string" },
                    { ans: "string" },
                    { ans: "string" },
                  ],
                  correctAns: [{ ans: "string" }],
                },
              ]),
          },
          {
            role: "user",
            content: data,
          },
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      };

      const secretKey = "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";

      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + secretKey, // Corrected Authorization header
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((result) => {
          if (
            result &&
            result.choices[0] &&
            result.choices[0]["message"] &&
            result.choices[0]["message"]["content"]
          ) {
            props.getQuestionList(
              JSON.parse(result.choices[0]["message"]["content"])
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleQuestionType = (e) => {
    console.log(e.target.value);
    setQuestionType(e.target.value);
  };
  const handleQuestionCount = (e) => {
    setQuestionCount(e.target.value);
  };
  return (
    <div className="form-section">
      <div className="text-area">
        <div className="header-section">
          <div className="generate-btn">
            <button
              class="button button3 uploadButton"
              onClick={() => onSelect()}
            >
              <div>{uploadSvg}</div>
              <div> {fileInfo.name ? fileInfo.name : "Upload PDF"}</div>
            </button>
            <input
              onChange={(event) => {
                readFile(event);
              }}
              type="file"
              id="getFile"
              style={{ display: "none" }}
            />
            <button class="button button3" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        </div>

        <textarea
          id="story"
          name="story"
          placeholder="Type Description"
          ref={textareaRef}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="question-input-box">
          <div className="question-type">
            <div className="input-lable">Question Type</div>
            <select
              name="question-type"
              id="question-type"
              value={questionType}
              onChange={(e) => handleQuestionType(e)}
            >
              {QuestionType.map((item) => {
                return <option value={item.name}>{item.name}</option>;
              })}
            </select>
          </div>
          <div className="question-count">
            <div className="input-lable">Question Count</div>
            <select
              name="question-count"
              id="question-count"
              value={questionCount}
              onChange={(e) => handleQuestionCount(e)}
            >
              {QuestionCount.map((item) => {
                return <option value={item.name}>{item.name}</option>;
              })}
            </select>
          </div>
        </div>

        {questionType && questionType && description ? (
          <div className="generate-btn">
            <button
              class="button button3 submit"
              onClick={() => generateQuestion()}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="generate-btn">
            <button class="button button3 submit disabled">Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Generate;
