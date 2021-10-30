// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What is the Django shortcut method to more easily render an html response?",
    answer: "render_to_response",
    options: [
      "render_to_html",
      "render_to_response",
      "response_render",
      "render"
    ]
  },
    {
    numb: 2,
    question: "Django is based on _____ framework.",
    answer: "MVT",
    options: [
      "MVM",
      "MVVM",
      "MVT",
      "None of the above"
    ]
  },
    {
    numb: 3,
    question: "_____ is not a logging framework message level.",
    answer: "Important",
    options: [
      "Important",
      "Error",
      "Critical",
      "None of the above"
    ]
  },
    {
    numb: 4,
    question: "sqlmigrations commands are used to print the SQL query of the model.",
    answer: "True",
    options: [
      "True",
      "False"
    ]
  },
    {
    numb: 5,
    question: "Advantages of Django are _____.",
    answer: "All of the above",
    options: [
      "Exceedingly scalable",
      "Ridiculously fast",
      "Reassuringly secure",
      "All of the above"
    ]
  },

  {
    numb: 6,
    question: " What are Migrations in Django?",
    answer: "All of the above",
    options: [
      "They are files saved in migrations directory.",
      "They are created when you run makemigrations command.",
      "Migrations are files where Django stores changes to your models.",
      "All of the above"
    ]
  },

  {
    numb: 7,
    question: " Which of these variables are the settings for django.contib.staticfiles app?",
    answer: "All of the above",
    options: [
      "STATIC_URL",
      "STATIC_ROOT",
      "STATICFILES_DIRS",
      "All of the above"
    ]
  },

  

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //  {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];