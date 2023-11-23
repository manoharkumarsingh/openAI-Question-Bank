const modal = {
  getDefault(questionCount, questionType, data) {
    return [
      {
        role: "system",
        content: "Give me 3 mcq with 4 options and anwser in JSON format ",
      },
      {
        role: "user",
        content:
          "Pune station is 300km away from airport, whereas Alibag is 200km away from Mumbai ",
      },
      {
        role: "assistant",
        content:
          '{\n  "questions": [\n    {\n      "question": "What is the distance between Pune station and the airport?",\n      "options": [\n        "100km",\n        "200km",\n        "300km",\n        "400km"\n      ],\n      "answer": "300km"\n    },\n    {\n      "question": "What is the distance between Alibag and Mumbai?",\n      "options": [\n        "100km",\n        "150km",\n        "200km",\n        "250km"\n      ],\n      "answer": "200km"\n    },\n    {\n      "question": "What is the difference in distance between Pune station and the airport compared to Alibag and Mumbai?",\n      "options": [\n        "100km",\n        "150km",\n        "200km",\n        "250km"\n      ],\n      "answer": "100km"\n    }\n  ]\n}',
      },

      {
        role: "system",
        content:
          "Give me " +
          questionCount +
          " " +
          questionType +
          " with 4 options and anwser in JSON format",
      },
      {
        role: "user",
        content: data,
      },
    ];
  },

  getMcq(questionCount, questionType, data) {
    return [
      {
        role: "system",
        content: "Give me 3 mcq with 4 options and anwser in JSON format ",
      },
      {
        role: "user",
        content:
          "Pune station is 300km away from airport, whereas Alibag is 200km away from Mumbai ",
      },
      {
        role: "assistant",
        content:
          '{\n  "questions": [\n    {\n      "question": "What is the distance between Pune station and the airport?",\n      "options": [\n        "100km",\n        "200km",\n        "300km",\n        "400km"\n      ],\n      "answer": "300km"\n    },\n    {\n      "question": "What is the distance between Alibag and Mumbai?",\n      "options": [\n        "100km",\n        "150km",\n        "200km",\n        "250km"\n      ],\n      "answer": "200km"\n    },\n    {\n      "question": "What is the difference in distance between Pune station and the airport compared to Alibag and Mumbai?",\n      "options": [\n        "100km",\n        "150km",\n        "200km",\n        "250km"\n      ],\n      "answer": "100km"\n    }\n  ]\n}',
      },

      {
        role: "system",
        content:
          "Give me " +
          questionCount +
          " " +
          questionType +
          " with 4 options and anwser in JSON format",
      },
      {
        role: "user",
        content: data,
      },
    ];
  },

  getFillInTheBlanks(questionCount, questionType, data) {
    return [
      {
        role: "system",
        content:
          "Give me 2 fill in the blank questions with 4 options and answer in JSON format",
      },
      {
        role: "user",
        content:
          "Pune station is 300km away from airport, whereas Alibag is 200km away from Mumbai ",
      },
      {
        role: "assistant",
        content:
          '{\n  "questions": [\n    {\n      "question": "Pune station is _______ away from airport.",\n      "options": [\n        "100km",\n        "200km",\n        "300km",\n        "400km"\n      ],\n      "answer": "300km"\n    },\n    {\n      "question": "Alibag is _______ away from Mumbai.",\n      "options": [\n        "100km",\n        "150km",\n        "200km",\n        "250km"\n      ],\n      "answer": "200km"\n    }\n  ]\n}',
      },

      {
        role: "system",
        content:
          "Give me " +
          questionCount +
          " " +
          questionType +
          " with 4 options and anwser in JSON format",
      },
      {
        role: "user",
        content: data,
      },
    ];
  },

  getTrueFalse(questionCount, data) {
    return [
      {
        role: "system",
        content:
          "Give me 2 true or false type questions with correct answer in JSON format",
      },
      {
        role: "user",
        content:
          "Pune station is 300km away from airport, whereas Alibag is 200km away from Mumbai ",
      },
      {
        role: "assistant",
        content:
          '{\n  "questions": [\n    {\n      "question": "Pune station is 300km away from airport.",\n  "options": [\n        "True",\n        "False",\n  ],\n    "answer": True\n    },\n    {\n      "question": "Alibag is 200km away from Mumbai.",\n   "options": [\n        "True",\n        "False",\n  ],\n    "answer": True\n    }\n  ]\n}',
      },

      {
        role: "system",
        content:
          "Give me " +
          questionCount +
          " true or false type questions with 2 options and answer in JSON format",
      },
      {
        role: "user",
        content: data,
      },
    ];
  },

  getMcqModal(questionCount, questionType, data) {
    switch (questionType) {
      case "MCQ": {
        return this.getMcq(questionCount, questionType, data);
      }
      case "Fill in the blanks": {
        return this.getFillInTheBlanks(questionCount, questionType, data);
      }

      case "True or False": {
        return this.getTrueFalse(questionCount, data);
      }

      default:
        return this.getDefault(questionCount, questionType, data);
    }
  },
};

export default modal;
