import React, { useState, useEffect } from "react";
import { RadialBarChart, RadialBar } from "recharts";
import axios from "axios";

export function LineBarAreaComposedChart() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`https://frozen-harbor-02472.herokuapp.com/radial`)
            .then((res) => {
                console.log(res.data[0]);
                setData(...[res.data]);
            });
    }, []);

    return (
        <RadialBarChart
            width={550}
            height={400}
            cx={280}
            cy={200}
            innerRadius={20}
            outerRadius={140}
            barSize={20}
            data={data}
            style={{margin:'auto'}}
        >
            <RadialBar
                label={{ position: "insideStart" }}
                background
                dataKey={"wonPercent"}
            />
        </RadialBarChart>
    );
}