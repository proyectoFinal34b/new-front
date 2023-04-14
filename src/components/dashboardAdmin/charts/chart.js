import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    const {data} = this.props
    const sortedData = [...data].sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));

    console.log(data)
    const dataForChart = sortedData.map(d=>{
      console.log(d)
      return(
        {date: d.updatedAt.slice(2,10), type: d.state==="albergue"? 1 :  
        d.state==="apadrinado"? 2 : 3}
      )
    })

    const dataByDay = dataForChart.reduce((acc, d) => {
      const date = d.date;
      const existingData = acc.find(item => item.date === date);
    
      if (existingData) {
        existingData.count += 1;
      } else {
        acc.push({ date: date, count: 1 });
      }
    
      return acc;
    }, []);
    console.log(dataByDay)


    return (
      <>
      <div className="m-auto flex items-center justify-center">
      {console.log("entre")}
      <BarChart
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
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#A3E3DD" />
    </BarChart>{console.log("sali")}</div></>
      
    );
  }
}
