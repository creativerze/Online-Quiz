import React from 'react';
import { Form } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizAns = ({ option, singleQuiz }) => {
  const { id, options, correctAnswer } = singleQuiz;
  const handleRigntAns = () => {
    if (option === correctAnswer) {
      toast.success('Right Answer', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      toast.error('Wrong Answer', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className='border'>
      <button onClick={handleRigntAns} className='border-0'>
        <Form.Group className="mb-3" controlId="formBasicRadio">
          <Form.Check className='px-4 py-2' type="radio" id={option} name='one' label={option} />
        </Form.Group>
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default QuizAns;