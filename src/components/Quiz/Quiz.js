import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import QuizAns from '../QuizAns/QuizAns';
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';


const Quiz = ({ singleQuiz }) => {
  const { question, options, correctAnswer } = singleQuiz;

  const rightAnwser = () => {
    toast.success(correctAnswer, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  // console.log(options);
  return (
    <div className='container my-5 border rounded'>
      <div className="d-flex">
        <h4 className='my-3 me-5'>{question}</h4>
        <FontAwesomeIcon onClick={rightAnwser} className='fs-5 ms-5 mt-2' icon={faEye}></FontAwesomeIcon>
        <ToastContainer></ToastContainer>
      </div>

      {
        options.map(option => <QuizAns option={option}
          singleQuiz={singleQuiz}></QuizAns>)

      }
    </div>
  );
};

export default Quiz;