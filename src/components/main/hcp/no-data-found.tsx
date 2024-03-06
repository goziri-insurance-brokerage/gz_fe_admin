import Image from "next/image";
import React from "react";

export default function NoDataFound() {
  return (
    <div className="grid content-center justify-items-center">
      <div className="relative w-80">
        <Image
          src={"/assets/no-data.svg"}
          alt="No Data Found Illustration"
          width={1000}
          height={1000}
        />
      </div>
      <p className="font-semibold text-xl">Oops! No data found</p>
    </div>
  );
}
