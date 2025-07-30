import React from "react";
import { ICONS, Icon } from "../../../ui";

export default function OverallVisitorsCard() {
  return (
    <div className="px-4 py-5 rounded-lg bg-blue-normal_active text-white">
      <div className="grid grid-flow-col w-max gap-2 items-center">
        <Icon type={ICONS.AddUser} color="#ffffff" size={20} />
        <p className="font-semibold">Total Claim Processed</p>
      </div>

      <div className="grid gap-[5px] mt-3">
        <div className="grid grid-flow-col w-max gap-2 items-end">
          <p className="text-[40px] font-semibold leading-[0.8]">765</p>
          <span className="rounded-[20px] bg-[#4384FA] text-xs p-1">+0.4%</span>
        </div>
        <p>Data obtained for the last 365 days.</p>
      </div>

      <div className="grid grid-cols-[1fr_auto] gap-3 items-center mt-5">
        <div className="bg-blue-dark rounded-full overflow-hidden grid h-2">
          <span
            style={{ width: `100%` }}
            className="block bg-white rounded-full"
          ></span>
        </div>

        <p>0 today</p>
      </div>
    </div>
  );
}
