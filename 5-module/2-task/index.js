const toggleText = () => {
  const btn = document.querySelector('.toggle-text-button');
  const txt = document.getElementById('text');
  
  // btn.addEventListener('click', () => txt.toggleAttribute('hidden'));
  btn.addEventListener('click', () => txt.hidden = !txt.hidden);
}



