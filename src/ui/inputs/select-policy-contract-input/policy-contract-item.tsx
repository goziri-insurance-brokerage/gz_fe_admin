import React from "react";
import Image from "next/image";
import { PolicyContractItemProps } from "./types";
import { loadFile } from "@/utils/file";
import { CheckBoxInput } from "../check-box-input";
import { formatDate } from "@/utils/date.utils";
import { Icon } from "@/ui/icons/_index";
import { ICONS } from "@/ui/icons/@type";

export default function PolicyContractItem({
  contract,
  index,
  isSelected,
  onClick,
}: PolicyContractItemProps) {
  return (
    <div
      className={`grid grid-cols-[auto_auto_1fr_auto] w-full items-center gap-3 py-3 cursor-pointer text-left ${
        index > 0 && "border-t border-grey-light_hover"
      }`}
    >
      <CheckBoxInput
        value={isSelected}
        onChangeCheckBoxInputValue={() => onClick(contract)}
      />

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
