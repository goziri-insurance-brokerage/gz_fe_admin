export const calculateAge = (date: string) => {
  if (date) {
    const birthYear = new Date(date).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }
  return "";
};

export const currentDate = () => {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
};

export const formatDate = (timestamp: Date | null) => {
  if (!timestamp) return "";

  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month < 10 ? "0" + month : month;
  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  return formattedDate;
};

export const formatDateTime = (timestamp: Date | null) => {
  if (!timestamp) return "";

  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const hour12Format = hours <= 12 ? hours : hours - 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedHours = hour12Format < 10 ? "0" + hour12Format : hour12Format;
  const formattedDateTime = `${formattedHours}:${formattedMinutes}${period}`;

  return formattedDateTime;
};
