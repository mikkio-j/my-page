const darkModeSwitch = document.querySelector('.darkmode-switch');
const switchIcon = document.querySelector('.las');
const profile = document.querySelector('.profile');
const darkSelector = document.querySelectorAll('.dark-selector');

function toggleDarkMode() {
  profile.classList.toggle('profile-dark');
  if (switchIcon.classList.contains('la-sun')) {
    switchIcon.classList.remove('la-sun');
    switchIcon.classList.add('la-moon');
  } else {
    switchIcon.classList.remove('la-moon');
    switchIcon.classList.add('la-sun');
  }
  for (const item of darkSelector) {
    item.classList.toggle('dark');
  }
}

darkModeSwitch.addEventListener('click', toggleDarkMode);
