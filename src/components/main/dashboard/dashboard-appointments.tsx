import React from "react";
import { ICONS, Icon } from "../../../ui";
import { RECENT_ACTIVITIES } from "./dashboard.constant";

export default function DashboardAppointments() {
  return (
    <div className="bg-white p-5 rounded-lg grid gap-4">
      <div className="grid grid-flow-col justify-between items-center">
        <p className="font-bold">Recent Activities </p>
      </div>

      <div>
        {RECENT_ACTIVITIES.map((activity, i) => (
          <div
            className="grid grid-cols-[auto_1fr_auto] gap-2 items-center py-3 border-b border-grey-light_inactive"
            key={i}
          >
            <div className="bg-[#edf2fa] rounded-xl p-2">
              <Icon color="#005AFF" size={20} type={ICONS.DUOTONE_PAPER} />
            </div>

            <div>
              <p className="font-semibold">
                {activity?.role} - {activity?.name}
              </p>
              <p className="text-xs text-grey-normal">{activity?.activity}</p>
            </div>
            <p className="text-xs">{activity?.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
