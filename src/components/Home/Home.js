import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuizTopic from '../SingleQuizTopic/SingleQuizTopic';
import './Home.css';

const Home = () => {
  const quizTopicData = useLoaderData();
  // console.log(quizTopic.data);
  const quizTopic = quizTopicData.data;
  return (
    <div>
      <section className='container-fluid  bg-image'>
        <div className="container text-center text-white">
          <h1 className='pt-5 fs-1'>Grow Your Skills</h1>
          <div className="container">
            <p className='px-5 pt-3'>Personal development is the ongoing act of assessing your life goals and values and building your skills <br /> and qualities to reach your potential. They can contribute to your maturity, success and satisfaction.</p>
            <p className='px-5'> Many people strengthen their personal development skills throughout their lives to better themselves and reach their goals. <br /> They can do this through education, advice from a mentor, self-help and more.</p>
          </div>

        </div>
      </section>
      <section className='container my-5'>
        <div className="row g-3">
          {
            quizTopic.map(singleQuizTopic => <SingleQuizTopic
              key={singleQuizTopic.id}
              singleQuizTopic={singleQuizTopic}
            ></SingleQuizTopic>)
          }
        </div>
      </section>
    </div>
  );
};

export default Home;