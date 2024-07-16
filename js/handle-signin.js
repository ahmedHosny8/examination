import { fetchUsers } from './api.js';

export default function handleSignin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const emailErrMsg = document.querySelector('.form-signin__err--email');
  const passwordErrMsg = document.querySelector('.form-signin__err--password');
  console.log(email, password);

  const validateUser = async () => {
    const users = await fetchUsers();
    console.log(users);

    const user = users.find((user) => user.email === email);
    console.log(user);

    if (email === '') {
      emailErrMsg.textContent = 'Please fill in this field';
    } else if (user?.email !== email) {
      emailErrMsg.textContent = "This email doesn't exist";
    } else if (email && user?.email === email) {
      emailErrMsg.textContent = '';
    }

    if (password === '') {
      passwordErrMsg.textContent = 'Please fill in this field';
    } else if (user?.password !== password) {
      passwordErrMsg.textContent = "Password doesn't match";
    } else if (password && user?.password === password) {
      passwordErrMsg.textContent = '';
    }

    if (user && user.email === email && user.password === password) {
      window.location.href = 'exam.html';
    }
  };
  validateUser();
}
