import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleQuizTopic = ({ singleQuizTopic }) => {
  // console.log(singleQuizTopic);
  const { id, name, logo, total } = singleQuizTopic;

  const handleQuiz = () => {
    // console.log(singleQuizTopic);
  };
  return (
    <div className='col-md-6 col-lg-3 ms-auto'>
      <Card>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Total Question: {total}</p>
          </Card.Text>
          <Link to='/quiz'><Button onClick={handleQuiz} variant="primary">Go to Quiz</Button></Link>
        </Card.Body>
      </Card>
    </div >
  );
};

export default SingleQuizTopic;