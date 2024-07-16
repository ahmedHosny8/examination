import { fetchQuestions } from './api.js';
import handleSignup from './handle-signup.js';
import handleSignin from './handle-signin.js';

window.addEventListener('load', () => {
  if (window.location.pathname === '/signup.html') {
    console.log('Sign up page');
    const formSignup = document.querySelector('.form-signup');

    formSignup.addEventListener('submit', handleSignup);
  } else if (window.location.pathname === '/signin.html') {
    console.log('Sign in page');
    const formSignin = document.querySelector('.form-signin');

    formSignin.addEventListener('submit', handleSignin);
  } else if (window.location.pathname === '/exam.html') {
    console.log('Exam page');

    const renderQuestions = async () => {
      const questions = await fetchQuestions();
      questions.forEach((question) => console.log(question));
    };
    renderQuestions();
  } else if (window.location.pathname === '/result.html') {
    console.log('Result page');
  }
});
