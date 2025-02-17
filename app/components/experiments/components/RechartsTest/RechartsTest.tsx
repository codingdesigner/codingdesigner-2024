'use client';

import React from 'react';
import {
  LineChart,
  CartesianGrid,
  Label,
  Legend,
  Line,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'


import styles from './RechartsTest.module.css';

export interface RechartsTestLineProps {
  prop?: string;
}

const RechartsTestLine = ({ prop = 'default value' }: RechartsTestLineProps) => {
  return (
    <ResponsiveContainer width="100%" height={400} >
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" strokeWidth={5} dataKey="Rating" stroke="var(--color-accent-2)" />
        <Line type="monotone" strokeWidth={5} dataKey="THC" stroke="var(--color-accent-3)" />
        <Line type="monotone" strokeWidth={5} dataKey="THCa" stroke="var(--color-accent-4)" />
        <Line type="monotone" strokeWidth={5} dataKey="Δ9-THC" stroke="var(--color-accent-5)" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="Strain"   >
          <Label value="Strains" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}

export interface RechartsTestRadarProps {
  data?: [];
}

const RechartsTestRadar = ({data}: RechartsTestRadarProps) => {
  // console.log(['data', data])

  return (
    <ResponsiveContainer width="100%" height={600} >
      <RadarChart
        outerRadius={200}
        width={400}
        height={400}
        data={data}
        className={styles.RechartsTest}>
        <PolarGrid />
        <PolarAngleAxis dataKey="Strain" />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 'dataMax']}
          />
        <Radar
          name="THC"
          dataKey="combinedTHC"
          stroke="var(--color-accent-2-dark)"
          fill="var(--color-accent-2-light)"
          fillOpacity={0.6}
          />
        <Legend
          align='center'
          verticalAlign='top'
          layout='vertical'
          />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export {
  RechartsTestLine,
  RechartsTestRadar
}


