import handleSignupFormSubmit from './validate-signup-form.js';

const formSignup = document.querySelector('.form-signup');

formSignup?.addEventListener('submit', handleSignupFormSubmit);
