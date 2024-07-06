function handleSignupFormSubmit(event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  const firstNameErrMsg = document.querySelector(
    '.form-signup__err--firstname'
  );
  const lastNameErrMsg = document.querySelector('.form-signup__err--lastname');
  const emailErrMsg = document.querySelector('.form-signup__err--email');
  const passwordErrMsg = document.querySelector('.form-signup__err--password');
  const confiormPasswordErrMsg = document.querySelector(
    '.form-signup__err--confirm-pass'
  );

  console.log(firstName, lastName, email, password, confirmPassword);

  let isValidFirstName = false;
  let isValidLastName = false;
  let isValidEmail = false;
  let isValidPassword = false;
  let isValidConfirmPassword = false;

  if (firstName === '') {
    firstNameErrMsg.textContent = 'Please provide a valid name.';
  } else {
    firstNameErrMsg.textContent = '';
    isValidFirstName = true;
  }

  if (lastName === '') {
    lastNameErrMsg.textContent = 'Please provide a valid name.';
  } else {
    lastNameErrMsg.textContent = '';
    isValidLastName = true;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailErrMsg.textContent = 'Please enter a valid email.';
  } else {
    emailErrMsg.textContent = '';
    isValidEmail = true;
  }

  if (password === '' || password.length < 5) {
    passwordErrMsg.textContent = 'Must be at least 5 characters';
  } else {
    passwordErrMsg.textContent = '';
    isValidPassword = true;
  }

  if (confirmPassword !== password) {
    confiormPasswordErrMsg.textContent = 'Passwords must match';
  } else {
    confiormPasswordErrMsg.textContent = '';
    isValidConfirmPassword = true;
  }

  if (
    !isValidFirstName ||
    !isValidLastName ||
    !isValidEmail ||
    !isValidPassword ||
    !isValidConfirmPassword
  ) {
    return;
  } else {
    console.log('Validation Done');

    // Redirect the User to signin Page
    window.location.replace('signin.html');
  }
}

export default handleSignupFormSubmit;
