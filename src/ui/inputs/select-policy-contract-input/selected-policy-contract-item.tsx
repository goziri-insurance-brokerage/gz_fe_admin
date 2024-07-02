import Image from "next/image";
import React from "react";
import { SelectedPolicyContractItemProps } from "./types";
import { formatDate } from "./utils";
import { loadFile } from "@/utils/file";
import { Icon } from "@/ui/icons/_index";
import { ICONS } from "@/ui/icons/@type";

export default function SelectedPolicyContractItem({
  contract,
}: SelectedPolicyContractItemProps) {
  if (contract === null) {
    return <p className="text-grey-normal text-sm">Select a Policy Contract</p>;
  }

  return (
    <div
      className={`grid grid-cols-[auto_1fr_auto] w-full items-center gap-3 py-3 cursor-pointer text-left`}
    >
      {contract.user.photo_uri ? (
        <div className="relative w-8 rounded-full overflow-hidden">
          <Image
            src={loadFile(contract.user.photo_uri)}
            width={1000}
            height={1000}
            alt="User Image"
          />
        </div>
      ) : (
        <div className="relative w-8 h-8 rounded-full bg-neutral-100 grid items-center justify-center">
          <Icon type={ICONS.Profile} size={20} color="blue" />
        </div>
      )}

      <div>
        <p className="text-sm font-semibold">
          {contract.user.first_name} {contract.user.last_name}
        </p>
        <p className="text-xs">
          {contract.policy_product.category} - {contract.unique_id}
        </p>
      </div>
      <p className="text-xs">Valid till {formatDate(contract.end_date)}</p>
    </div>
  );
}
