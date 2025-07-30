import React from "react";

import OverallVisitorsCard from "../../../components/main/dashboard/overall-visitors-card";
import PatientsStatistics from "../../../components/main/dashboard/patients-statistics";
import PatientsVisitByDepartment from "../../../components/main/dashboard/patients-visit-by-department";
import DashboardStats from "../../../components/main/dashboard/dashboard-stats";
import DashboardAppointments from "../../../components/main/dashboard/dashboard-appointments";

export default function Page() {
  return (
    <main className="page-spacing py-3 grid gap-5 content-start overflow-y-auto page-scroll-bar">
      <div>
        <h2 className="text-2xl font-semibold">Welcome back, Theophilus!</h2>
        {/* <p className="text-sm text-grey-normal_hover">
          Get an overview and updates on your patients
        </p> */}
      </div>

      <div className="grid grid-cols-[1fr_1.5fr] gap-3">
        <div className="grid gap-3 content-start">
          <OverallVisitorsCard />
          <PatientsStatistics />
          <PatientsVisitByDepartment />
        </div>

        <div className="grid gap-3">
          <DashboardStats />
          <DashboardAppointments />
        </div>
      </div>
    </main>
  );
}
