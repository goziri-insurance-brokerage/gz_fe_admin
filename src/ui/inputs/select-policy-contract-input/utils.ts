import { MONTHS } from "./constants";
import { PolicyContractsIdentifiers } from "./types";

export const normalizePolicyContractsIdentifiersEnum = (
  policyContractIdentifier: PolicyContractsIdentifiers
) => {
  let normalizedValue = policyContractIdentifier as string;
  if (
    policyContractIdentifier === PolicyContractsIdentifiers.PolicyCode ||
    policyContractIdentifier === PolicyContractsIdentifiers.UserCode
  ) {
    const arr = policyContractIdentifier.split("_").splice(0, 1);
    arr.push("ID");
    normalizedValue = arr.join(" ");
  }
  normalizedValue = normalizedValue.toLowerCase();
  return normalizedValue;
};

export const formatDate = (d: Date | null) => {
  if (!d) return "";

  const getDayPrefix = (day: number) => {
    const numArr = day.toString().split("");
    if (parseInt(numArr[numArr.length - 1]) === 1) return "st";
    if (parseInt(numArr[numArr.length - 1]) === 2) return "nd";
    if (parseInt(numArr[numArr.length - 1]) === 3) return "rd";
    return "th";
  };

  const date = new Date(d);

  const day = date.getDate() + getDayPrefix(date.getDate());
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
};
