import './style.css';

function draw() {
  const el = document.createElement('div');
  el.innerHTML = 'Hello';
  el.classList.add('title');
  return el;
}

document.body.appendChild(draw());