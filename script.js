const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.news-card').forEach(card => {
  observer.observe(card);
});

(function (){
 const menuButton = document.getElementById('MenuTuggel');
 const nav = document.getElementById('mainNav');
 menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuButton.classList.toggle('open');
      });
 document.getElementById('year').textContent = new Date().getFullYear();
})();