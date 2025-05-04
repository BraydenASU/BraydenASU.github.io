const questions = [
  {
    number: 1,
    question: "Question 1: What would you do on your free day?",
    options: [
      { text: "Go on an adventure", character: "Luffy" },
      { text: "Go shopping", character: "Nami" },
      { text: "Hit the gym", character: "Zoro" },
      { text: "Cook a delicious meal", character: "Sanji" },
      { text: "Start a DIY project", character: "Franky" },
      { text: "Relax in nature", character: "Chopper" },
    ],
  },
  {
    question: "Question 2: Which word describes you best?",
    options: [
      { text: "Courageous", character: "Usopp" },
      { text: "Handy", character: "Franky" },
      { text: "Loyal", character: "Zoro" },
      { text: "Caring", character: "Chopper" },
      { text: "Chivalrous", character: "Sanji" },
      { text: "Curious", character: "Robin" },
    ],
  },
  {
    question: "Question 3: What's your dream?",
    options: [
      { text: "Freedom and adventure", character: "Luffy" },
      { text: "Becoming rich", character: "Nami" },
      { text: "Being the strongest", character: "Zoro" },
      { text: "Uncovering ancient history", character: "Robin" },
      { text: "Feeding everyone", character: "Sanji" },
      { text: "Becoming a brave warrior", character: "Usopp" },
    ],
  },
  {
    question: "Question 4: Pick a weapon:",
    options: [
      { text: "Lazers", character: "Franky" },
      { text: "Swords", character: "Zoro" },
      { text: "Knowledge", character: "Robin" },
      { text: "Kicks", character: "Sanji" },
      { text: "Staff", character: "Nami" },
      { text: "Slingshot", character: "Usopp" },
    ],
  },
  {
    question: "Question 5: How do you handle problems?",
    options: [
      { text: "Charge in head first", character: "Luffy" },
      { text: "Charm your way out", character: "Nami" },
      { text: "Slice the problem in half", character: "Zoro" },
      { text: "Devise a creative plan", character: "Usopp" },
      { text: "Analyze and outsmart", character: "Robin" },
      { text: "Work together with friends", character: "Chopper" },
    ],
  },
  {
    question: "Question 6: Pick your favorite place:",
    options: [
      { text: "The open sea", character: "Luffy" },
      { text: "A hidden library", character: "Robin" },
      { text: "An island made of treasure", character: "Nami" },
      { text: "A fully stocked kitchen", character: "Sanji" },
      { text: "A wild forest", character: "Chopper" },
      { text: "A busy workshop", character: "Franky" },
    ],
  },
  {
    question: "Question 7: What is your favorite food/drink?",
    options: [
      { text: "MEAT", character: "Luffy" },
      { text: "Desserts", character: "Nami" },
      { text: "Seafood", character: "Sanji" },
      { text: "Cotton candy", character: "Chopper" },
      { text: "Cola", character: "Franky" },
      { text: "Sake", character: "Zoro" },
    ],
  },
  {
    question: "Question 8: In your crew, what would your role be?",
    options: [
      { text: "Captain", character: "Luffy" },
      { text: "Swordsman", character: "Zoro" },
      { text: "Shipwright", character: "Franky" },
      { text: "Cook", character: "Sanji" },
      { text: "Sniper", character: "Usopp" },
      { text: "Doctor", character: "Chopper" },
    ],
  },
  {
    question: "Question 9: What motivates you most?",
    options: [
      { text: "Freedom", character: "Luffy" },
      { text: "Money", character: "Nami" },
      { text: "Survival", character: "Usopp" },
      { text: "Friendship", character: "Chopper" },
      { text: "Invention", character: "Franky" },
      { text: "Discovery", character: "Robin" },
    ],
  },
  {
    question: "Question 10: What's your biggest strength?",
    options: [
      { text: "Fearlessness", character: "Luffy" },
      { text: "Intelligence", character: "Robin" },
      { text: "Agility", character: "Sanji" },
      { text: "Craftiness", character: "Nami" },
      { text: "Accuracy", character: "Usopp" },
      { text: "Loyalty", character: "Zoro" },
    ],
  },
];

let currentQuestion = 0;
const scores = {
  Luffy: 0,
  Zoro: 0,
  Nami: 0,
  Usopp: 0,
  Sanji: 0,
  Chopper: 0,
  Robin: 0,
  Franky: 0,
};

const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const resultText = document.getElementById("result-text");

document.getElementById("start-button").addEventListener("click", () => {
  startScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  showQuestion();
});

function showQuestion() {
  const q = questions[currentQuestion];
  const progressBar = document.getElementById("progress-bar");
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
  progressBar.style.width = `${Math.min(progressPercent, 100)}%`;
  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";
  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option.text;
    btn.onclick = () => {
      scores[option.character]++;
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    optionsContainer.appendChild(btn);
  });
}

function showResult() {
  questionScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );
  resultText.textContent = `You're most like ${winner}!`;
}
