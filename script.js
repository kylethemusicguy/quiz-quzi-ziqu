document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const answers = {
    q1: "king von",
    q2: "purple",
    q3: "fried chicken"
  };

  const form = e.target;
  let correct = 0;

  for (let key in answers) {
    const userAnswer = form[key].value.trim().toLowerCase();
    if (userAnswer === answers[key]) {
      correct++;
    }
  }

  const result = document.getElementById('result');
  if (correct === Object.keys(answers).length) {
    result.textContent = "🔥 you got it. your code is: 25 15 21 8 1 22 5 6 15 21 14 4 20 8 5 19 5 3 15 14 4 3 12 21 5 ";
  } else {
    result.textContent = "❌ nope. try again, bestie.";
  }
});
