import { fetchQuestions } from './api.js';
import handleSignup from './handle-signup.js';

window.addEventListener('load', () => {
  if (window.location.pathname === '/signup.html') {
    console.log('Sign up page');
    const formSignup = document.querySelector('.form-signup');

    formSignup.addEventListener('submit', handleSignup);
  } else if (window.location.pathname === '/signin.html') {
    console.log('Sign in page');
  } else if (window.location.pathname === '/welcome.html') {
    console.log('Welcome page');
  }
});
