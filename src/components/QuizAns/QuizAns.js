import React from 'react';
import { Form } from 'react-bootstrap';

const QuizAns = ({ option, singleQuiz }) => {
  // console.log(option);
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicRadio">
        <Form.Check className='px-4 py-2' type="radio" name='one' label={option} />
      </Form.Group>
    </div>
  );
};

export default QuizAns;