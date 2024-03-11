export const formatAmount = (amt: number | string) => {
  const amount = parseInt(`${amt}`);
  return `₦ ${amount.toLocaleString("en-US")}`;
};
