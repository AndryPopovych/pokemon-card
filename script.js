const card = document.querySelector('.pokemon-card');
const highlight = document.querySelector('.pokemon-card__highlight');


const MAX_ROTATION = 15;
const MAX_SHADOW_OFFSET = 20; 

document.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top; 

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

    let rotateX = ((y - centerY) / centerY) * MAX_ROTATION;
  let rotateY = ((x - centerX) / centerX) * -MAX_ROTATION;

  rotateX = Math.max(-MAX_ROTATION, Math.min(MAX_ROTATION, rotateX));
  rotateY = Math.max(-MAX_ROTATION, Math.min(MAX_ROTATION, rotateY));

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
  let shadowX = (centerX - x) / 10;
  let shadowY = (centerY - y) / 10;

  shadowX = Math.max(-MAX_SHADOW_OFFSET, Math.min(MAX_SHADOW_OFFSET, shadowX));
  shadowY = Math.max(-MAX_SHADOW_OFFSET, Math.min(MAX_SHADOW_OFFSET, shadowY));

  card.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.4)`;

  highlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.7), transparent)`;
});

document.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
  highlight.style.background = 'radial-gradient(circle at center, rgba(255, 255, 255, 0.4), transparent)';
});
