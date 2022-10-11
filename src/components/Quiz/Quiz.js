import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import QuizAns from '../QuizAns/QuizAns';

const Quiz = ({ singleQuiz }) => {
  const { question, options } = singleQuiz;
  // console.log(options);
  return (
    <div className='container my-5 border rounded'>
      <h4 className='my-3'>{question}</h4>

      {
        options.map(option => <QuizAns option={option}
          singleQuiz={singleQuiz}></QuizAns>)

      }
    </div>
  );
};

export default Quiz;