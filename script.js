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
    result.textContent = "🔥 you got it. your code is: CHICKENVON123";
  } else {
    result.textContent = "❌ nope. try again, bestie.";
  }
});
