import React from "react";
import { DashboardStatsCard, ICONS, Icon } from "../../../ui";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <DashboardStatsCard
        title="Enrollees"
        value={20972}
        icon={<Icon type={ICONS.DUOTONE_USERS} size={24} color="#FF5F15" />}
        color={{
          background: "#FFE7DC",
          lines: "#FF5F15",
          border: "#FFCDB6",
        }}
      />
      <DashboardStatsCard
        title="Policy Contract"
        value={30109}
        icon={<Icon type={ICONS.DUOTONE_PAPER} size={24} color="#02CA48" />}
        color={{
          background: "#E6FAED",
          lines: "#02CA48",
          border: "#B1EFC6",
        }}
      />
      <DashboardStatsCard
        title="HMO"
        value={5}
        icon={<Icon type={ICONS.Work} size={24} color="#02CA48" />}
        color={{
          background: "#C2FCAD",
          lines: "#02CA48",
          border: "#B1EFC6",
        }}
      />
      <DashboardStatsCard
        title="HCP"
        value={51}
        icon={<Icon type={ICONS.ShieldDone} size={24} color="#B2BC38" />}
        color={{
          background: "#F6FCAD",
          lines: "#B2BC38",
          border: "#B2BC387D",
        }}
      />
    </div>
  );
}
