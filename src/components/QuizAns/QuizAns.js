import React from 'react';
import { Form } from 'react-bootstrap';

const QuizAns = ({ option, singleQuiz }) => {
  const { options, correctAnswer } = singleQuiz;
  // console.log(singleQuiz);
  // console.log(options);
  const handleRigntAns = () => {
    if (option.length === correctAnswer.length) {
      console.log(correctAnswer);
    }
    else {
      console.log('rong ans');
    }
  };
  return (
    <div>
      <button onClick={handleRigntAns} className='border-0'>
        <Form.Group className="mb-3" controlId="formBasicRadio">
          <Form.Check className='px-4 py-2' type="radio" name='one' label={option} />
        </Form.Group>
      </button>
    </div>
  );
};

export default QuizAns;