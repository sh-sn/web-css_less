const fullText = 'Фундамент веброзробки';
const el = document.getElementById('typed-text');
let i = 0;
el.classList.add('typewriter');
function type() {
  if (i < fullText.length) {
    el.textContent += fullText[i++];
    setTimeout(type, 70 + Math.random() * 50);
  } else {
    setTimeout(() => el.classList.remove('typewriter'), 800);
  }
}
setTimeout(type, 1200);

function createParticles() {
  const c = document.getElementById('particles');
  for (let p = 0; p < 30; p++) {
    const d = document.createElement('div');
    d.className = 'particle';
    d.style.cssText = `
      left:${Math.random() * 100}%;
      top:${60 + Math.random() * 40}%;
      animation-duration:${5 + Math.random() * 8}s;
      animation-delay:${Math.random() * 6}s;
      background:${Math.random() > 0.5 ? '#6366f1' : '#a855f7'};
      width:${2 + Math.random() * 3}px;height:${2 + Math.random() * 3}px;
    `;
    c.appendChild(d);
  }
}
createParticles();

document.querySelectorAll('.info-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    card.style.setProperty('--mx', x + '%');
    card.style.setProperty('--my', y + '%');
  });
});

document.getElementById('startBtn').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('navigation').scrollIntoView({ behavior: 'smooth' });
});

const items = document.querySelectorAll('.file-item');
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((en, i) => {
      if (en.isIntersecting) {
        setTimeout(() => en.target.classList.add('visible'), i * 80);
      }
    });
  },
  { threshold: 0.1 }
);
items.forEach((it) => obs.observe(it));
