import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from "recharts";
import axios from "axios";
// import image from "../Pie/virat.jpeg";
import "./pieChart.css";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#8884D8",
  "#FF8042",
  "#82CA9D",
];

export function LineBarAreaComposedChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://frozen-harbor-02472.herokuapp.com/radial`)
      .then((res) => {
        console.log(res.data);
        setData(...[res.data]);
      })
  }, []);

  const handleLabel = () => {
    return ""
  }

  return (
    <>
      {/* <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span> */}
      <img className='player-image' src="https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png" alt="virat kohli" />
      <PieChart width={500} height={400}>
        <Pie
          data={data}
          innerRadius={75}
          outerRadius={120}
          dataKey="value"
          label={handleLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
}