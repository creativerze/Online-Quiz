import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Quiz = ({ singleQuiz }) => {
  console.log(singleQuiz);
  const { question, options } = singleQuiz;
  return (
    <div className='container my-5'>
      <Card>
        <Card.Body>
          <Card.Title>{question}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='m-2' variant="primary">A. {options[0]}</Button>
          <Button className='m-2' variant="primary">B. {options[1]}</Button>
          <br />
          <Button className='m-2' variant="primary">C. {options[2]}</Button>
          <Button className='m-2' variant="primary">D. {options[3]}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Quiz;