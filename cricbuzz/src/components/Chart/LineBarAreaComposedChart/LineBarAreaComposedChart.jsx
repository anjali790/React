// import React, { useState, useEffect } from "react";
// import { RadialBarChart, RadialBar } from "recharts";


// export function LineBarAreaComposedChart() {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         axios
//             .get(`https://frozen-harbor-02472.herokuapp.com/radial`)
//             .then((res) => {
//                 console.log(res.data[0]);
//                 setData(...[res.data]);
//             });
//     }, []);

//     return (
//         <RadialBarChart
//             width={550}
//             height={400}
//             cx={280}
//             cy={200}
//             innerRadius={20}
//             outerRadius={140}
//             barSize={20}
//             data={data}
//             style={{ margin: 'auto' }}
//         >
//             <RadialBar
//                 label={{ position: "insideStart" }}
//                 background
//                 dataKey={"wonPercent"}
//                 fill={"bg"}
//             />
//         </RadialBarChart>
//     );
// }



// import "./styles.css";
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "red"
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "pink"
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1"
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "yellow"
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c"
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "red"
  },
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "green"
  }
];

const style = {
  top: 100,
  left: 400,
  lineHeight: "24px"
};

export function LineBarAreaComposedChart() {
  return (
    <RadialBarChart
      width={550}
      height={400}
      cx={200}
      cy={200}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "black" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}