export const fetchQuestions = async () => {
  try {
    const response = await fetch('http://localhost:3001/questions');
    if (!response.ok) throw new Error('Problem getting questions Array');

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
};

// const questions = fetchQuestions();
// console.log(questions);
