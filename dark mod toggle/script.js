const toggle = document.getElementById('dark-mod-switcher');

toggle.addEventListener('click', () => {
   document.body.classList.toggle('dark');
});