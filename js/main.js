(function() {
  const quizData = [
    { q: 'What does CIA stand for in cybersecurity?', a: 'confidentiality, integrity, availability' },
    { q: '在网络安全中，常见的端口号80对应的服务是什么？', a: 'HTTP' }
  ];

  const quizArea = document.getElementById('quiz-area');
  const startBtn = document.getElementById('start-quiz');
  const scoreDiv = document.getElementById('score');

  if (!quizArea || !startBtn) return;

  function startQuiz() {
    quizArea.innerHTML = '';
    scoreDiv.textContent = '';
    quizData.forEach(item => {
      const div = document.createElement('div');
      const label = document.createElement('label');
      label.textContent = item.q;
      const input = document.createElement('input');
      input.type = 'text';
      input.dataset.answer = item.a.toLowerCase();
      div.appendChild(label);
      div.appendChild(document.createElement('br'));
      div.appendChild(input);
      quizArea.appendChild(div);
    });
    const submit = document.createElement('button');
    submit.textContent = 'Check Answers / \u68c0\u67e5\u7b54\u6848';
    submit.onclick = checkAnswers;
    quizArea.appendChild(document.createElement('br'));
    quizArea.appendChild(submit);
  }

  function checkAnswers() {
    const inputs = quizArea.querySelectorAll('input');
    let score = 0;
    inputs.forEach(input => {
      const val = input.value.trim().toLowerCase();
      if (val === input.dataset.answer) {
        score++;
        input.style.borderColor = 'green';
      } else {
        input.style.borderColor = 'red';
      }
    });
    scoreDiv.textContent = 'Score: ' + score + ' / ' + inputs.length;
  }

  startBtn.addEventListener('click', startQuiz);
})();
