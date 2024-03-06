import { Admin } from "@/@Types/admin.interface";
import { Button, ICONS, Icon } from "@/ui";
import Image from "next/image";
import React from "react";

interface AdminListProps {
  admin: Admin;
}

export default function AdminsListItem({ admin }: AdminListProps) {
  return (
    <div className="border border-[#ECF2FC] rounded-lg p-5 grid gap-10 items-start grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto]">
      <div className="relative w-16 h-16 bg-grey-light rounded-full overflow-hidden grid  content-center justify-center md:w-20 md:h-20">
        <Image src="/assets/user-test-img.svg" fill alt="User Image" />
        {/* {admin.} */}
      </div>

      <div className="grid grid-cols-2 gap-x-10 gap-y-5 order-1 col-[1/3] md:order-none md:col-span-1">
        <div>
          <p className="text-[#003699] font-semibold text-sm sm:text-base">
            {admin.first_name} {admin.last_name}
          </p>
          <p className="text-[#7594CC] text-xs sm:text-sm">Name</p>
        </div>

        <div>
          <p className="text-[#003699] font-semibold text-sm sm:text-base">
            {/* {admin.id} */}
            HR Manager
          </p>
          <p className="text-[#7594CC] text-xs sm:text-sm">Role</p>
        </div>

        <div>
          <p className="text-[#003699] font-semibold text-sm break-words sm:text-base">
            {admin.email}
          </p>
          <p className="text-[#7594CC] text-xs sm:text-sm">Email</p>
        </div>

        <div>
          <p className="text-[#003699] font-semibold text-sm sm:text-base">
            {/* {admin.id} */}
            +235 812 345 6789
          </p>
          <p className="text-[#7594CC] text-xs sm:text-sm">Phone Number</p>
        </div>
      </div>
    </div>
  );
}
