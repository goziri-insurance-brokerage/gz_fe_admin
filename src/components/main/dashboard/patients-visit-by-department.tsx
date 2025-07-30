"use client";

import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { PATIENTS_VISIT_BY_DEPARTMENT_MOCKDATA } from "./dashboard.constant";

export default function PatientsVisitByDepartment() {
  const COLORS = ["#B1EFC6", "#B0CCFF", "#005AFF", "#001F59"];
  return (
    <div className="bg-white rounded-xl p-5 grid grid-cols-[1fr_auto] gap-3">
      <div className="grid gap-3">
        <p className="font-bold">Patients Visit By Department</p>
        <div className="grid gap-1">
          <div className="grid grid-flow-col w-max gap-2 items-center">
            <span className="block w-[17px] h-[17px] bg-blue-darker rounded-full"></span>
            <p>General Medicine</p>
          </div>
          <div className="grid grid-flow-col w-max gap-2 items-center">
            <span className="block w-[17px] h-[17px] bg-blue-normal rounded-full"></span>
            <p>Optician</p>
          </div>
          <div className="grid grid-flow-col w-max gap-2 items-center">
            <span className="block w-[17px] h-[17px] bg-green-light_active rounded-full"></span>
            <p>Dentistry</p>
          </div>
          <div className="grid grid-flow-col w-max gap-2 items-center">
            <span className="block w-[17px] h-[17px] bg-blue-light_active rounded-full"></span>
            <p>Dermatology</p>
          </div>
        </div>
      </div>

      <PieChart width={170} height={170}>
        <Pie
          data={PATIENTS_VISIT_BY_DEPARTMENT_MOCKDATA}
          cx={80}
          cy={80}
          innerRadius={40}
          outerRadius={80}
          paddingAngle={0}
          dataKey="value"
        >
          {PATIENTS_VISIT_BY_DEPARTMENT_MOCKDATA.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
