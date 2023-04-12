import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Assignment 1',
    mark: 57
  },
  {
    name: 'Assignment 2',
    mark: 59
  },
  {
    name: 'Assignment 3',
    mark: 60
  },
  {
    name: 'Assignment 4',
    mark: 60
  },
  {
    name: 'Assignment 5',
    mark: 60
  },
  {
    name: 'Assignment 6',
    mark: 60
  },
  {
    name: 'Assignment 7',
    mark: 60
  }
];

const Statistics = () => {
    
    return (
        <ComposedChart
          width={900}
          height={400}
          data={data}
        >
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="mark" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="mark" stroke="#ff7300" />
        </ComposedChart>
    );
  }


export default Statistics;