const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};
const signupFormHandler = async (event) => {
  event.preventDefault();
  const user_name = document.querySelector('#username-signup').value.trim();
  const display_name = document.querySelector('#display-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  if (user_name && display_name && password) {
    console.log('here');
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ user_name, display_name, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
