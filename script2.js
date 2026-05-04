function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.chapter-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelector(`[data-sec="${id}"]`).classList.add('active');
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function switchTab(btn, chapter, tab) {
  const parent = btn.closest('.section') || document.getElementById(chapter);
  parent.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  ['cours','recap','exemples'].forEach(t => {
    const el = document.getElementById(chapter + '-' + t);
    if (el) el.style.display = 'none';
  });
  const target = document.getElementById(chapter + '-' + tab);
  if (target) target.style.display = 'block';
}

function toggleEx(header) {
  const body = header.nextElementSibling;
  const arrow = header.querySelector('.toggle-arrow');
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  arrow.classList.toggle('open', !isOpen);
}

function toggleSol(btn) {
  const sol = btn.nextElementSibling;
  const isOpen = sol.classList.contains('open');
  sol.classList.toggle('open', !isOpen);
  btn.textContent = isOpen ? '👁 Voir la solution' : '🙈 Masquer la solution';
}

function filterEx(ch) {
  document.querySelectorAll('.exercise-card').forEach(card => {
    if (ch === 'all' || card.dataset.ch === ch) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}