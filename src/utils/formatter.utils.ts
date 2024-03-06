export const normalizeEnum = (str?: string) => {
  if (!str) return str;

  return str
    .split(/_/)
    .map((s) => s.charAt(0) + s.substring(1, s.length).toLocaleLowerCase())
    .join(" ");
};

export const enumizeString = (str: string) => {
  // return str
  //   .split(/\s/)
  //   .map((s) => s.toUpperCase())
  //   .join("_");
  return str.replace(/\s+/g, "");
};
