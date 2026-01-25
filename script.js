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
 const langswitchButton = document.getElementById('LangSwitchButton');
 const nav = document.getElementById('mainNav');
 const langSwitch = document.getElementById('LangSwitch');
 menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuButton.classList.toggle('open');
      });
 langswitchButton.addEventListener('click', () => {
        langSwitch.classList.toggle('open');
        langswitchButton.classList.toggle('open');
      });
 document.getElementById('year').textContent = new Date().getFullYear();
})();