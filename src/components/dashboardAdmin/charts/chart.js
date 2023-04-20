import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { blankDate, updateCount } from '../logic/blankDate';

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    const {data} = this.props
    const {periodo} = this.props
    const sortedData = [...data].sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
   const a =  blankDate(periodo)
   const dataByDay = updateCount(a, sortedData)
   console.log(dataByDay, sortedData)

    return (
      <>
      <div className="m-auto max-w-fit flex items-center justify-center mb-10 dark:bg-white dark:backdrop-blur-[3px] ">
        
      <BarChart
      backgroundColor="#ffffff" 
      width={900}
      height={300}
      data={dataByDay}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" interval="preserveStart" stroke="#000000" angle={-45} textAnchor="end"  />
      <YAxis stroke="#000000" />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#A3E3DD" />
    </BarChart></div></>
      
    );
  }
}
