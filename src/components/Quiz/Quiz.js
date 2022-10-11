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

      {/* <h4 className='my-3'>{question}</h4>
      <Form.Group className="mb-3" controlId="formBasicRadio">


        <Form.Check className='px-4 py-2' type="radio" name='one' label={options[0]} />
        <Form.Check className='px-4 py-2' type="radio" name='one' label={options[1]} />
        <Form.Check className='px-4 py-2' type="radio" name='one' label={options[2]} />
        <Form.Check className='px-4 py-2' type="radio" name='one' label={options[3]} />
      </Form.Group> */}
    </div>
  );
};

export default Quiz;