// Selectors for darkmode
const darkModeSwitch = document.querySelector('.darkmode-switch');
const switchIcon = document.querySelector('.las');
const profile = document.querySelector('.profile');
const darkSelector = document.querySelectorAll('.dark-selector');

// Selectors for form validation and submit
const form = document.getElementById('form');
const message = document.getElementById('message');
const email = document.getElementById('email');
const formMessage = document.querySelector('.form-message');

// Handling dark mode
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

// Handling form validation and submit

// Show error message
function showError(message) {
  formMessage.innerText = message;
  formMessage.classList.add('error');
  setTimeout(function () {
    formMessage.classList.remove('error');
  }, 5000);
}

// Show success message

function showSuccess() {
  formMessage.innerText = 'Success! Thank you for reaching out to me!😊';
  formMessage.classList.add('success');
  setTimeout(function () {
    formMessage.classList.remove('success');
  }, 5000);
}

// Check required
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(`${getFieldName(input)} is required`);
      return false;
    }
  });
  return true;
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(input.value).toLowerCase())) {
    return true;
  } else {
    showError('Email is not valid');
    return false;
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Ajax request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      showSuccess();
      email.value = '';
      message.value = '';
    } else {
      showError('Oops, something went wrong 🥺');
    }
  };
  xhr.send(data);
}

// Event listener
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (checkRequired([email, message]) && checkEmail(email)) {
    const data = new FormData(form);
    ajax('POST', 'https://formspree.io/mbjznrlr', data);
  }
});
