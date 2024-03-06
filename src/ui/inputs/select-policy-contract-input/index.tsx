import React, { useRef, useState } from "react";
import { Icon } from "../../icons/_index";
import { ICONS } from "../../icons/@type";
import PolicyContractItem from "./policy-contract-item";
import {
  PolicyContractLookup,
  PolicyContractsIdentifiers,
  SelectPolicyContractInputProps,
} from "./types";
import { normalizePolicyContractsIdentifiersEnum } from "./utils";
import SelectedPolicyContractItem from "./selected-policy-contract-item";

export default function SelectPolicyContractInput({
  delay,
  name,
  onChange,
  required,
}: SelectPolicyContractInputProps) {
  const [onInValid, setOnInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [policyContracts, setPolicyContracts] = useState([]);
  const [showPolicyContracts, setShowPolicyContracts] = useState(false);
  const [showIdentifiers, setShowIdentifiers] = useState(false);
  const [identifier, setIdentifier] = useState(
    PolicyContractsIdentifiers.PolicyCode
  );

  const [identifierValue, setIdentifierValue] = useState("");
  const [selectedPolicyContract, setSelectedPolicyContract] =
    useState<PolicyContractLookup | null>(null);

  let timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleIdentifierToggle = () => {
    setShowPolicyContracts(false);
    setShowIdentifiers(!showIdentifiers);
  };

  const handleIdentifierChange = (i: PolicyContractsIdentifiers) => {
    setIdentifier(i);
    setIdentifierValue("");
    setPolicyContracts([]);
    setShowPolicyContracts(false);
    setShowIdentifiers(false);
  };

  const handleIdentifierValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    showPolicyContracts && setShowPolicyContracts(false);
    onInValid && setOnInvalid(false);
    setIdentifierValue(e.target.value);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
      setIsLoading(true);
      if (e.target.value) {
        const response = await onChange(identifier, e.target.value);
        setPolicyContracts(response);
        response.length > 0 && setShowPolicyContracts(true);
      }
      setIsLoading(false);
    }, delay);
  };

  const handlePickPolicyContract = (contract: PolicyContractLookup) => {
    setShowPolicyContracts(false);
    setSelectedPolicyContract(contract);
  };

  const handleOnInvalid = (e: any) => {
    setOnInvalid(true);
  };

  return (
    <div className="grid gap-1">
      <SelectedPolicyContractItem contract={selectedPolicyContract} />
      <div className="border border-grey-light_inactive rounded-md grid grid-cols-[auto_1fr_auto] items-center gap-5 p-1 pr-3 relative">
        <div className="relative w-max">
          <div
            className="grid grid-cols-[1fr_auto] w-[108px] items-center gap-3 p-3 rounded-md bg-grey-light_hover text-grey-normal text-sm"
            onClick={handleIdentifierToggle}
          >
            <span className="capitalize">
              {normalizePolicyContractsIdentifiersEnum(identifier)}
            </span>
            {showIdentifiers ? (
              <Icon type={ICONS.ArrowUp} size={20} color="#9C9C9C" />
            ) : (
              <Icon type={ICONS.ArrowDown} size={20} color="#9C9C9C" />
            )}
          </div>

          <div
            className={`absolute w-full top-full mt-2 z-50 bg-white border-grey-light_inactive rounded-md  overflow-hidden transition-all shadow-[0_0_10px_-5px_rgba(0,0,0,.3)] ${
              showIdentifiers ? "border max-h-[1000px]" : "max-h-0"
            } `}
          >
            {(
              Object.keys(
                PolicyContractsIdentifiers
              ) as (keyof typeof PolicyContractsIdentifiers)[]
            ).map((key, idx) => {
              return (
                <div
                  key={idx}
                  className={`capitalize py-2 px-3 text-sm cursor-pointer text-grey-normal_hover border-grey-light_hover ${
                    idx > 0 && "border-t"
                  }`}
                  onClick={() =>
                    handleIdentifierChange(PolicyContractsIdentifiers[key])
                  }
                >
                  {normalizePolicyContractsIdentifiersEnum(
                    PolicyContractsIdentifiers[key]
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <input
          type="text"
          value={identifierValue}
          className="bg-transparent outline-none text-sm font-semibold text-grey-normal placeholder:text-grey-light_inactive"
          onChange={handleIdentifierValueChange}
          onClick={() => setShowPolicyContracts(!showPolicyContracts)}
          placeholder={
            identifier === PolicyContractsIdentifiers.Email
              ? "example@gmail.com"
              : identifier === PolicyContractsIdentifiers.Phone
              ? "+234 123 456 7890"
              : identifier === PolicyContractsIdentifiers.PolicyCode
              ? "O8HVFBUC2B"
              : "AX73GNTD28"
          }
        />

        <input
          className="hidden"
          id=""
          type="text"
          name={name}
          onInvalid={handleOnInvalid}
          required={required}
          value={selectedPolicyContract?.id || ""}
        />

        {isLoading ? (
          <span className="block w-4 h-4 rounded-full border-2 border-grey-light_inactive border-l-transparent animate-spin"></span>
        ) : (
          <Icon type={ICONS.Search} size={16} color="#9C9C9C" />
        )}

        <div
          className={`absolute w-full top-full mt-2 z-50 bg-white border-grey-light_inactive rounded-md px-3  overflow-hidden transition-all shadow-[0_0_10px_-5px_rgba(0,0,0,.3)] ${
            showPolicyContracts && policyContracts.length > 0
              ? "border max-h-[1000px]"
              : "max-h-0"
          } `}
        >
          {policyContracts?.map((contract: PolicyContractLookup, idx) => (
            <PolicyContractItem
              key={idx}
              contract={contract}
              index={idx}
              isSelected={selectedPolicyContract?.id === contract.id}
              onClick={handlePickPolicyContract}
            />
          ))}
        </div>
      </div>

      {/* Required Field Message */}
      {onInValid && (
        <div className="grid grid-flow-col w-max gap-1">
          <Icon type={ICONS.InfoSquare} size={15} color="#ff5f15" />
          <p className="text-orange-normal text-xs">
            Policy Contract is required.
          </p>
        </div>
      )}
    </div>
  );
}
