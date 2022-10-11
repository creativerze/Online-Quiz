import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleQuizTopic = ({ singleQuizTopic }) => {
  // console.log(singleQuizTopic);
  const { id, name, logo } = singleQuizTopic;

  const handleQuiz = () => {
    console.log(singleQuizTopic);
  };
  return (
    <div className='col-md-6 col-lg-3 ms-auto'>
      <Card>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to='/quiz'><Button onClick={handleQuiz} variant="primary">Go somewhere</Button></Link>
        </Card.Body>
      </Card>
    </div >
  );
};

export default SingleQuizTopic;