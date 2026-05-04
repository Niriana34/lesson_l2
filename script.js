 let score = 0;

  function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.target.classList.add('active');
  }

  function toggleChapter(id) {
    const card = document.getElementById(id);
    card.classList.toggle('open');
  }

  function toggleAnswer(id) {
    const box = document.getElementById(id);
    box.classList.toggle('visible');
    const btn = box.previousElementSibling;
    btn.textContent = box.classList.contains('visible') ? '▼ Masquer la solution' : '▶ Voir la solution';
  }

  function answerMCQ(groupId, chosen, correct) {
    const container = document.getElementById(groupId);
    if (container.querySelector('.disabled')) return;
    const opts = container.querySelectorAll('.mcq-opt');
    const letters = ['a','b','c','d'];
    opts.forEach((opt, i) => {
      opt.classList.add('disabled');
      if (letters[i] === correct) opt.classList.add('correct');
      else if (letters[i] === chosen) opt.classList.add('wrong');
    });
    if (chosen === correct) {
      score++;
      document.getElementById('score-display').textContent = score;
    }
  }

  // Open first chapter by default
  document.getElementById('ch1').classList.add('open');