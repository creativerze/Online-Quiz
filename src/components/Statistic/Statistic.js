import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistic = () => {
  const getData = useLoaderData();
  const data = getData.data;

  return (
    <div className='d-flex justify-content-center my-5'>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />

        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Statistic;