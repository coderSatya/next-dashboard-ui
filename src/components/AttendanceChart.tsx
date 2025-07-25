"use client";
import Image from "next/image";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AttendanceChart = () => {
  const data = [
    {
      name: "Mon",
      present: 40,
      absent: 24,
    },
    {
      name: "Tue",
      present: 120,
      absent: 30,
    },
    {
      name: "Wed",
      present: 90,
      absent: 10,
    },
    {
      name: "Thu",
      present: 80,
      absent: 50,
    },
    {
      name: "Fri",
      present: 150,
      absent: 36,
    },
  ];
  return (
    <div className="bg-white rounded-lg w-full h-full p-4 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* <div className="flex flex-row flex-start gap-2">
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-lamaSky" />
          <h3 className="text-lamaSky">present</h3>
        </div>

        <div className="flex flex-row justify-center items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-lamaYellow" />
          <h3 className="text-lamaYellow">absent</h3>
        </div>
      </div> */}

      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}} />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />

          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10,10,0,0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10,10,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
