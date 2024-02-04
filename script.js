const quizData = [
  // ... your 20 questions with options and personalities
  {
    question:
      "When at a party with a group of people, do you find yourself feeling:",
    options: [
      {
        text: "Awkward",
        personality: { dove: 50, owl: 0, peacock: 0, eagle: 0 },
      },
      {
        text: "Stuffy",
        personality: { dove: 10, owl: 20, peacock: 20, eagle: 0 },
      },
      {
        text: "Excitable",
        personality: { dove: 5, owl: 5, peacock: 35, eagle: 5 },
      },
      {
        text: "Dominating",
        personality: { dove: 0, owl: 10, peacock: 10, eagle: 30 },
      },
    ],
  },
  {
    question: "When faced with a problem, how do you usually approach it?",
    options: [
      {
        text: "With empathy and understanding",
        personality: { dove: 20, owl: 10, peacock: 5, eagle: 15 },
      },
      {
        text: "By analyzing all the details",
        personality: { dove: 5, owl: 30, peacock: 5, eagle: 10 },
      },
      {
        text: "With creativity and flair",
        personality: { dove: 10, owl: 10, peacock: 25, eagle: 5 },
      },
      {
        text: "With a decisive and assertive attitude",
        personality: { dove: 15, owl: 5, peacock: 10, eagle: 20 },
      },
    ],
  },
  {
    question:
      "In a team project, what role do you often find yourself taking on?",
    options: [
      {
        text: "Peacemaker, focusing on harmony",
        personality: { dove: 20, owl: 10, peacock: 5, eagle: 15 },
      },
      {
        text: "Analyst, delving into the data",
        personality: { dove: 5, owl: 25, peacock: 5, eagle: 15 },
      },
      {
        text: "Energizer, bringing enthusiasm",
        personality: { dove: 10, owl: 10, peacock: 25, eagle: 5 },
      },
      {
        text: "Leader, making decisions",
        personality: { dove: 15, owl: 5, peacock: 10, eagle: 20 },
      },
    ],
  },
  {
    question: "How do you prefer to spend your free time?",
    options: [
      {
        text: "Relaxing and enjoying tranquility",
        personality: { dove: 20, owl: 10, peacock: 5, eagle: 15 },
      },
      {
        text: "Reading or learning something new",
        personality: { dove: 5, owl: 25, peacock: 5, eagle: 15 },
      },
      {
        text: "Exploring new activities or socializing",
        personality: { dove: 10, owl: 10, peacock: 25, eagle: 5 },
      },
      {
        text: "Engaging in competitive or challenging pursuits",
        personality: { dove: 15, owl: 5, peacock: 10, eagle: 20 },
      },
    ],
  },
  {
    question: "When making a decision, what is your primary consideration?",
    options: [
      {
        text: "Its impact on relationships",
        personality: { dove: 20, owl: 10, peacock: 5, eagle: 15 },
      },
      {
        text: "The logical and practical aspects",
        personality: { dove: 5, owl: 25, peacock: 5, eagle: 15 },
      },
      {
        text: "The potential for creativity and innovation",
        personality: { dove: 10, owl: 5, peacock: 30, eagle: 5 },
      },
      {
        text: "The assertiveness and authority it conveys",
        personality: { dove: 15, owl: 5, peacock: 10, eagle: 20 },
      },
    ],
  },
  {
    question: "How do you handle stress or pressure?",
    options: [
      {
        text: "Seeking support from others",
        personality: { dove: 20, owl: 10, peacock: 5, eagle: 15 },
      },
      {
        text: "Analyzing the situation calmly",
        personality: { dove: 5, owl: 25, peacock: 5, eagle: 15 },
      },
      {
        text: "Injecting humor and lightness",
        personality: { dove: 10, owl: 5, peacock: 30, eagle: 5 },
      },
      {
        text: "Taking charge and making decisions",
        personality: { dove: 5, owl: 5, peacock: 10, eagle: 30 },
      },
    ],
  },
  {
    question: "What type of books or movies do you enjoy the most?",
    options: [
      {
        text: "Heartwarming and emotional stories",
        personality: { dove: 30, owl: 5, peacock: 10, eagle: 5 },
      },
      {
        text: "Educational or informative content",
        personality: { dove: 5, owl: 20, peacock: 15, eagle: 10 },
      },
      {
        text: "Creative and visually appealing works",
        personality: { dove: 10, owl: 10, peacock: 25, eagle: 5 },
      },
      {
        text: "Intense and action-packed narrativess",
        personality: { dove: 15, owl: 5, peacock: 10, eagle: 20 },
      },
    ],
  },
  {
    question: "When facing a challenge, what motivates you the most?",
    options: [
      {
        text: "Building and maintaining relationships",
        personality: { dove: 20, owl: 10, peacock: 5, eagle: 15 },
      },
      {
        text: "Solving complex problems",
        personality: { dove: 5, owl: 25, peacock: 5, eagle: 10 },
      },
      {
        text: "Expressing your unique ideas",
        personality: { dove: 10, owl: 10, peacock: 25, eagle: 5 },
      },
      {
        text: "Achieving tangible and measurable results",
        personality: { dove: 10, owl: 5, peacock: 5, eagle: 30 },
      },
    ],
  },
  {
    question: "In a disagreement, how do you prefer to resolve conflicts?",
    options: [
      {
        text: "Through compromise and understanding",
        personality: { dove: 20, owl: 10, peacock: 5, eagle: 15 },
      },
      {
        text: "By presenting facts and arguments",
        personality: { dove: 5, owl: 25, peacock: 5, eagle: 15 },
      },
      {
        text: "Using humor or lightening the mood",
        personality: { dove: 10, owl: 10, peacock: 25, eagle: 5 },
      },
      {
        text: "Asserting your point of view decisively",
        personality: { dove: 15, owl: 5, peacock: 10, eagle: 20 },
      },
    ],
  },
  {
    question: "How would you describe your communication style?",
    options: [
      {
        text: "Warm and empathetic",
        personality: { dove: 30, owl: 5, peacock: 10, eagle: 5 },
      },
      {
        text: "Precise and detailed",
        personality: { dove: 5, owl: 25, peacock: 10, eagle: 10 },
      },
      {
        text: "Expressive and engaging",
        personality: { dove: 10, owl: 15, peacock: 20, eagle: 5 },
      },
      {
        text: "Direct and to the point",
        personality: { dove: 5, owl: 5, peacock: 10, eagle: 30 },
      },
    ],
  },
  {
    question:
      "When meeting someone new, how would you describe your initial behavior?",
    options: [
      {
        text: "Reserved and cautious",
        personality: { dove: 20, owl: 10, peacock: 5, eagle: 15 },
      },
      {
        text: "Inquisitive and analytical",
        personality: { dove: 5, owl: 25, peacock: 10, eagle: 10 },
      },
      {
        text: "Outgoing and friendly",
        personality: { dove: 5, owl: 5, peacock: 35, eagle: 5 },
      },
      {
        text: "Confident and assertive",
        personality: { dove: 5, owl: 5, peacock: 10, eagle: 30 },
      },
    ],
  },
  {
    question:
      "When learning a new skill or hobby, what aspect interests you the most?",
    options: [
      {
        text: "Collaborating with others",
        personality: { dove: 20, owl: 10, peacock: 5, eagle: 15 },
      },
      {
        text: "Mastering the details and techniques",
        personality: { dove: 5, owl: 25, peacock: 10, eagle: 10 },
      },
      {
        text: "Expressing your creativity",
        personality: { dove: 10, owl: 10, peacock: 25, eagle: 5 },
      },
      {
        text: "Competing to improve and excel",
        personality: { dove: 5, owl: 5, peacock: 15, eagle: 25 },
      },
    ],
  },
  {
    question:
      "In a group discussion, what role do you often find yourself playing?",
    options: [
      {
        text: "Harmonizer, promoting agreement",
        personality: { dove: 20, owl: 10, peacock: 5, eagle: 15 },
      },
      {
        text: "Analyst, providing data and insights",
        personality: { dove: 5, owl: 25, peacock: 10, eagle: 10 },
      },
      {
        text: "Entertainer, bringing humor and enthusiasm",
        personality: { dove: 5, owl: 5, peacock: 35, eagle: 5 },
      },
      {
        text: "Leader, guiding the discussion decisively",
        personality: { dove: 5, owl: 5, peacock: 10, eagle: 30 },
      },
    ],
  },
  {
    question: "When facing a tough decision, what aspect do you prioritize?",
    options: [
      {
        text: "Maintaining positive relationships",
        personality: { dove: 20, owl: 10, peacock: 5, eagle: 15 },
      },
      {
        text: "Ensuring logical and rational choices",
        personality: { dove: 5, owl: 15, peacock: 20, eagle: 10 },
      },
      {
        text: "Choosing the most innovative option",
        personality: { dove: 10, owl: 15, peacock: 20, eagle: 5 },
      },
      {
        text: "Emphasizing assertiveness and authority",
        personality: { dove: 5, owl: 5, peacock: 10, eagle: 30 },
      },
    ],
  },
  {
    question: "How do you usually express joy or excitement?",
    options: [
      {
        text: "Sharing and celebrating with others",
        personality: { dove: 10, owl: 10, peacock: 25, eagle: 5 },
      },
      {
        text: "Quietly enjoying the moment",
        personality: { dove: 30, owl: 10, peacock: 0, eagle: 10 },
      },
      {
        text: "Expressing enthusiasm and energy",
        personality: { dove: 10, owl: 10, peacock: 25, eagle: 5 },
      },
      {
        text: "Taking charge and leading the celebration",
        personality: { dove: 5, owl: 15, peacock: 10, eagle: 20 },
      },
    ],
  },
];

const questionsPerPage = 1; // Display 1 question per page
let currentQuestion = 0;
let userResponses = [];

const questionCountElement = document.getElementById("question-count");
const containerElement = document.getElementById("container");

const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result-container");
submitButton.style.display = "none";
function showQuestion() {
  const currentQuizData = quizData[currentQuestion];

  questionCountElement.textContent = `${currentQuestion + 1} of ${
    quizData.length
  } questions`;

  const questionElement = document.createElement("p");
  questionElement.textContent = currentQuizData.question;
  containerElement.innerHTML = "";
  containerElement.appendChild(questionElement);

  currentQuizData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.addEventListener("click", () => selectOption(index));
    containerElement.appendChild(button);
  });
}

function selectOption(index) {
  userResponses.push(quizData[currentQuestion].options[index].personality);

  /*here here*/
  containerElement.querySelectorAll("button").forEach((button) => {
    button.classList.remove("selected");
  });

  // Add the 'selected' class to the clicked button
  const selectedButton = containerElement.querySelectorAll("button")[index];
  selectedButton.classList.add("selected");
  /**/
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    setTimeout(showQuestion, 1000);
  } else {
    /*nextButton.style.display = "none";*/
    submitButton.style.display = "block";
  }
}

function calculateResult() {
  let totalPersonality = { dove: 0, owl: 0, peacock: 0, eagle: 0 };

  userResponses.forEach((response) => {
    for (const key in response) {
      totalPersonality[key] += response[key];
    }
  });

  // Normalize to percentages
  const total = Object.values(totalPersonality).reduce(
    (acc, val) => acc + val,
    0
  );
  const percentages = {};

  for (const key in totalPersonality) {
    percentages[key] = ((totalPersonality[key] / total) * 100).toFixed(2) + "%";
  }

  displayResult(percentages);
}

function displayResult(result) {
  const resultElement = document.createElement("div");
  resultElement.className = "result";
  const first = document.createElement("div");
  first.className = "first";
  const imageElement = document.createElement("img");
  const personality = getMaxPercentagePersonality(result);
  if (personality === "dove") {
    imageElement.src = "images/dove.png";
  } else if (personality === "owl") {
    imageElement.src = "images/owl.png";
  } else if (personality === "peacock") {
    imageElement.src = "images/peacock.png";
  } else {
    imageElement.src = "images/eagle.png";
  }
  const nameElement = document.createElement("h1");
  nameElement.textContent = personality;

  first.appendChild(imageElement);
  first.appendChild(nameElement);

  resultElement.appendChild(first);

  const second = document.createElement("div");
  second.className = "second";
  const output = `
  <p>${result.dove} Caring</p>
  <p>${result.owl} Analytical</p>
  <p>${result.peacock} Expressive</p>
  <p>${result.eagle} Competitive</p>`;
  second.innerHTML = output;

  resultElement.appendChild(second);

  resultContainer.appendChild(resultElement);

  second.scrollIntoView({ behavior: "smooth" });
}

/*nextButton.addEventListener("click", () => showQuestion());*/
submitButton.addEventListener("click", () => calculateResult());

function getMaxPercentagePersonality(result) {
  let maxPercentage = 0;
  let maxPersonality = "";

  for (const key in result) {
    const percentage = parseFloat(result[key]);

    if (isNaN(percentage)) {
      continue; // Skip if the percentage is not a valid number
    }

    if (percentage > maxPercentage) {
      maxPercentage = percentage;
      maxPersonality = key;
    }
  }

  return maxPersonality;
}
// Initial setup
showQuestion();
