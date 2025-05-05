

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
    number: 2,
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
    number: 3,
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
    number: 4,
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
    number: 5,
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
    number: 6,
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
    number: 7,
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
    number: 8,
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
    number: 9,
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
    number: 10,
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

const characters = {
  luffy: {
    name: "Luffy",
    description: "The optimistic and fearless captain of the Straw Hat Pirates. Luffy can stretch his body like rubber, thanks to eating the Gum-Gum Fruit (Gomu Gomu no Mi). He’s determined to become the Pirate King and values his friends above all.",
    image: "LuffyOnePiece.webp"
  },
  zoro: {
    name: "Zoro",
    description: "The swordsman of the Straw Hat Pirates, known for his impressive swordsmanship and his goal to become the world’s greatest swordsman. Zoro uses a unique three-sword fighting style (Santoryu) and is fiercely loyal to Luffy.",
    image: "ZoroOnePiece.webp"
  },
  nami: {
    name: "Nami",
    description: "The clever and resourceful navigator of the crew. She’s known for her exceptional map-making and navigation skills and is also very money-driven. Nami is essential to the crew, helping them navigate the vast seas.",
    image: "NamiOnePiece.webp"
  },
  usopp: {
    name: "Usopp",
    description: "The sharpshooter and inventor of the crew. Usopp is a coward at heart, but has a strong desire to become brave like his father, Yasopp. He’s skilled with his slingshot and creates various gadgets and weapons to help the crew.",
    image: "UsoppOnePiece.webp"
  },
  sanji: {
    name: "Sanji",
    description: "The cook of the Straw Hat Pirates, renowned for his cooking skills and powerful kicks in battle. Sanji dreams of finding the All Blue, a legendary sea where all the world’s oceans meet. He is a hopeless romantic and often flirtatious.",
    image: "SanjiOnePiece.webp"
  },
  chopper: {
    name: "Chopper",
    description: "The crew's doctor, Chopper is a reindeer who ate the Human-Human Fruit (Hito Hito no Mi), granting him the ability to transform into a human form. He’s sweet and caring, with a deep love for helping others and learning about medicine.",
    image: "ChopperOnePiece.webp"
  },
  robin: {
    name: "Robin",
    description: "The crew's archaeologist, Robin, can produce extra limbs from any surface thanks to the powers of the Hana Hana no Mi. She’s intelligent, calm, and deeply interested in uncovering the world's lost history.",
    image: "RobinOnePiece.webp"
  },
  franky: {
    name: "Franky",
    description: "The shipwright of the Straw Hat Pirates and the creator of their ship, the Thousand Sunny. Franky is a cyborg with a tough personality and a love for building. He’s also known for his “Franky Family” and his battle-ready strength.",
    image: "FrankyOnePiece.webp"
  }
}

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
    scores[a] > scores[b] ? a : b);
  const charData = characters[winner.toLowerCase()];
  if (!charData) {
    console.error("Character data not found for: ", winner);
    return;
  }
  document.getElementById("result-name").textContent = `Your character is... ${charData.name}!`;
  document.getElementById("result-description").textContent = charData.description;
  document.getElementById("result-image").src = charData.image;
  document.getElementById("result-image").alt = charData.name;
}

function restartQuiz() {
  currentQuestion = 0;
  for (let char in scores) {
    scores[char] = 0;
  }
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}