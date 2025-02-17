'use client';

import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

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
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" strokeWidth={5} dataKey="uv" stroke="var(--color-accent-2)" />
        <Line type="monotone" strokeWidth={5} dataKey="pv" stroke="var(--color-accent-3)" />
        <Line type="monotone" strokeWidth={5} dataKey="amt" stroke="var(--color-accent-4)" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>

    </React.Fragment>
  );
}

export { RechartsTest }


