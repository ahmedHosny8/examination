export const createUser = async (newUser) => {
  try {
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

export const fetchUsers = async () => {
  try {
    const response = await fetch('http://localhost:3001/users');

    if (!response.ok) {
      throw new Error('Problem getting users Array');
    }

    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const fetchQuestions = async () => {
  try {
    const response = await fetch('http://localhost:3001/questions');

    if (!response.ok) {
      throw new Error('Problem getting questions Array');
    }

    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
};

// const questions = fetchQuestions();
// console.log(questions);
