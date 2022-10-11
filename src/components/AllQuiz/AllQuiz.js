import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const AllQuiz = () => {
  const allQuiz = useLoaderData();
  // console.log(allQuiz);
  const quiz = allQuiz.data.questions;
  // console.log(quiz);
  return (
    <div>
      <h2 className='text-center my-5'>Quiz</h2>
      {
        quiz.map(singleQuiz => <Quiz
          key={singleQuiz.id}
          singleQuiz={singleQuiz}
        ></Quiz>)
      }
    </div>
  );
};

export default AllQuiz;