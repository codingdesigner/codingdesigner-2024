import React from 'react';
import { LineChart, Line } from 'recharts';

import styles from './RechartsTest.module.css';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  }
];

export interface RechartsTestProps {
  prop?: string;
}

const RechartsTest = ({ prop = 'default value' }: RechartsTestProps) => {
  return (
    <React.Fragment>
      <div className={styles.RechartsTest}>RechartsTest {prop}</div>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>

    </React.Fragment>
  );
}

export { RechartsTest }


