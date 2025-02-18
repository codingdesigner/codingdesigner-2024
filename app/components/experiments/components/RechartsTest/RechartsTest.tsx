'use client';

import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
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

const RechartsTestRadar = ({ data }: RechartsTestRadarProps) => {
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
          domain={[0, 50]}
        />
        <Radar
          name="THC"
          dataKey="combinedTHC"
          stroke="var(--color-accent-2-dark)"
          fill="var(--color-accent-2-light)"
          fillOpacity={0.6}
        />
        {/* <Radar
          name="Indica"
          dataKey="indicaTHC"
          stroke="var(--color-accent-3-dark)"
          fill="var(--color-accent-3-light)"
          fillOpacity={0.6}
          />
        <Radar
          name="Hybrid"
          dataKey="hybridTHC"
          stroke="var(--color-accent-4-dark)"
          fill="var(--color-accent-4-light)"
          fillOpacity={0.6}
          />
        <Radar
          name="Sativa"
          dataKey="sativaTHC"
          stroke="var(--color-accent-5-dark)"
          fill="var(--color-accent-5-light)"
          fillOpacity={0.6}
          /> */}
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

// const RechartsStrainRadar = ({ data }: RechartsTestRadarProps) => {
//   // data = [data]
//   const newData = [
//     // { name: "Strain", value: "Animal Wedding Kush Cake" },
//     // { name: "Form", value: "Flower" },
//     // { name: "Strain Dominance", value: "Hybrid" },
//     // { name: "Brand", value: "The Bank" },
//     // { name: "Store", value: "Sunnyside" },
//     // { name: "Rating", value: 90 },
//     // { name: "Effects", value: "" },
//     // { name: "THC / serving", value: "" },
//     { name: "THCa", value: 28.892 },
//     { name: "Δ9-THC", value: 0 },
//     { name: "THCVa", value: 0.091 },
//     { name: "CBD", value: 0.071 },
//     { name: "CBG", value: 0.094 },
//     { name: "CBGa", value: 1.773 },
//     { name: "CBC", value: 0 },
//     // { name: "Terpenes", value: ["B-Caryophyllene", "B-Myrcene", "B-Pinene", "Humulene", "Limonene", "Linalool", "Pinene", "a-Bisabolol"] },
//     // { name: "In stock", value: "Yes" },
//     { name: "THC", value: 0.437 }
//   ]
//   console.log(['data', data])
//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

//   return (
//     <ResponsiveContainer width="100%" height={600} >
//       <PieChart width={730} height={250} >
//         <Pie data={newData} dataKey="value" cx="50%" cy="50%" outerRadius={180}  fill="pink" label >
//         {newData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//         </Pie>
//         {/* <Pie data={data} dataKey="Δ9-THC" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d" /> */}
//         {/* <Pie data={data} dataKey="CBGa" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d" /> */}
//         {/*
//         <Pie dataKey="THCVa" fill="#8884d8" />
//         <Pie dataKey="CBD" fill="#82ca9d" />
//         <Pie dataKey="CBG" fill="#8884d8" />
//         <Pie dataKey="CBGa" fill="#82ca9d" />
//         <Pie dataKey="CBC" fill="#8884d8" />
//         <Pie dataKey="THC" fill="#82ca9d" /> */}
//         <Tooltip />
//         <Legend />
//       </PieChart>
//     </ResponsiveContainer>
//   )
// }

const RechartsStrainRadar = ({ data }: RechartsTestRadarProps) => {
  return (
    <ResponsiveContainer width="100%" height={600} >
      <BarChart
        width={730}
        height={250}
        data={data}
        barCategoryGap={10}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Strain" tickMargin={5} />
        <YAxis yAxisId="left" orientation="left" stroke="var(--color-accent-1-dark" />
        <YAxis yAxisId="right" orientation="right" stroke="var(--color-accent-2-dark" />
        <Tooltip labelStyle={{color: "var(--color-grayscale-gray1)"}} />
        <Legend />
        <Bar yAxisId="right" stackId="a" dataKey="THCa" fill="var(--color-accent-1-light)" />
        <Bar yAxisId="left" stackId="b" dataKey="Δ9-THC" fill="var(--color-accent-2-light)" />
        <Bar yAxisId="left" stackId="b" dataKey="THCVa" fill="var(--color-accent-3-light)" />
        <Bar yAxisId="left" stackId="b" dataKey="CBD" fill="var(--color-accent-4-light)" />
        <Bar yAxisId="left" stackId="b" dataKey="CBG" fill="var(--color-accent-5-light)" />
        <Bar yAxisId="left" stackId="b" dataKey="CBGa" fill="var(--color-accent-6-light)" />
        <Bar yAxisId="left" stackId="b" dataKey="CBC" fill="var(--color-accent-7-light)" />
        <Bar yAxisId="left" stackId="b" dataKey="THC" fill="var(--color-accent-8-light)" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export {
  RechartsStrainRadar,
  RechartsTestLine,
  RechartsTestRadar
}


