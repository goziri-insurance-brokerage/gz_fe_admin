import React, { useEffect, useMemo, useState } from "react";
import { Icon } from "../../icons/_index";
import { ICONS } from "../../icons/@type";

interface DateInputProps {
  datePickerPosition?: "TOP" | "BOTTOM";
  placeholder?: string;
  label: string;
  name: string;
  onChange?: (e: string) => void;
  minDate?: {
    year: number;
    month: number;
    day: number;
  };
}

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

const monthsSchema = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDaysSchema = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function DateInput({
  datePickerPosition,
  label,
  minDate,
  name,
  onChange,
  placeholder,
}: DateInputProps) {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showDatePickerMonth, setShowDatePickerMonth] =
    useState<boolean>(false);
  const [showDatePickerYear, setShowDatePickerYear] = useState<boolean>(false);
  const [year, setYear] = useState<number>(currentYear);
  const [month, setMonth] = useState<number>(currentMonth);
  const [day, setDay] = useState<number>(0);

  const inputValue = useMemo(() => {
    const val = `${month + 1 < 10 ? 0 : ""}${month + 1}-${
      day < 10 ? 0 : ""
    }${day}-${year}`;
    const inputVal = `${day < 10 ? 0 : ""}${day} - ${month + 1 < 10 ? 0 : ""}${
      month + 1
    } - ${year}`;
    day && onChange && onChange?.(val);

    if (!day) return "";

    return inputVal;
  }, [day, month, year]);

  const numberOfDaysInMonth = useMemo(() => {
    return new Date(year, month + 1, 0).getDate();
  }, [year, month]);

  const firstDayOfMonth = useMemo(() => {
    return new Date(year, month, 1).getDay();
  }, [year, month]);

  const numberOfWeeksInMonth = useMemo(() => {
    const totalDays =
      firstDayOfMonth +
      numberOfDaysInMonth +
      (6 - new Date(year, month, numberOfDaysInMonth).getDay());

    const numberOfWeeks = Math.ceil(totalDays / 7);

    return numberOfWeeks;
  }, [year, month]);

  const formatWeekDay = (day: string) => {
    return day.split("").slice(0, 3).join("");
  };

  const daysArray = useMemo(() => {
    const daysArray: any[] = [];
    let currentDay = 1;

    for (let week = 0; week < numberOfWeeksInMonth; week++) {
      const weekRow = [];
      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        if (week === 0 && dayOfWeek < firstDayOfMonth) {
          weekRow.push(null); // Placeholder for days before the first day of the month
        } else if (currentDay <= numberOfDaysInMonth) {
          weekRow.push(currentDay);
          currentDay++;
        }
      }
      daysArray.push(weekRow);
    }

    return daysArray;
  }, [year, month]);

  const handleDayChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const d = parseInt(e.currentTarget.innerHTML);
    minDate &&
      parseInt(
        `${year}${month + 1 < 10 ? `0${month + 1}` : month + 1}${
          d < 10 ? `0${d}` : d
        }`
      ) >
        parseInt(
          `${minDate.year}${
            minDate.month < 10 ? `0${minDate.month}` : minDate.month
          }${minDate.day < 10 ? `0${minDate.day}` : minDate.day}`
        ) &&
      setDay(d);
    setShowDatePicker(false);
  };

  const handleMonthChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMonth(monthsSchema.indexOf(e.currentTarget.innerHTML));
    setShowDatePickerMonth(false);
  };

  const handleYearChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setYear(parseInt(e.currentTarget.innerHTML));
    setShowDatePickerYear(false);
  };

  return (
    <div className="grid gap-2">
      <label className={`cursor-pointer text-[#242424] text-sm font-bold`}>
        {label}
      </label>

      <div className="relative w-full">
        <div
          className={`grid grid-cols-[1fr_auto] gap-10 items-center border rounded-[4px] border-grey-light_inactive py-3 px-3`}
        >
          <input
            className={`text-sm placeholder:text-[#9C9C9C] font-semibold outline-none relative bg-transparent`}
            name={name}
            placeholder={placeholder}
            type={"text"}
            value={inputValue}
            readOnly
          />

          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="cursor-pointer"
            type="button"
          >
            <Icon type={ICONS.Calendar} size={20} color="#9C9C9C" />
          </button>
        </div>

        {/* DatePicker */}
        <div
          className={`w-max absolute rounded-[4px] right-0 max-h-0 overflow-hidden bg-white z-50 transition-all shadow-[0_0_10px_-5px_rgba(0,0,0,.3)] ${
            showDatePicker
              ? "mt-2 p-2 max-h-96 border border-grey-light_inactive"
              : ""
          } ${
            datePickerPosition === "TOP"
              ? "bottom-full mb-2"
              : datePickerPosition === "BOTTOM"
              ? "top-full mt-2"
              : "top-full mt-2"
          } `}
        >
          <div className="grid grid-cols-2 border-b pb-2 border-grey-light_hover text-xs">
            <button
              className="text-grey-normal_active font-bold"
              onClick={() => setShowDatePickerYear(true)}
              type="button"
            >
              {year}
            </button>
            <button
              className="uppercase border-l border-grey-light_hover text-blue-normal font-bold"
              onClick={() => setShowDatePickerMonth(true)}
              type="button"
            >
              {monthsSchema[month]}
            </button>
          </div>

          {/* Month */}
          <div
            className={`absolute top-0 left-0 w-full max-h-0 overflow-hidden z-50 overflow-y-scroll text-sm grid grid-cols-2 gap-4 bg-white transition-all table-scroll-bar ${
              showDatePickerMonth
                ? "p-4 max-h-full border border-grey-light_inactive"
                : ""
            }`}
          >
            {monthsSchema.map((m, i) => (
              <button
                className={`p-2 rounded-md hover:opacity-100 transition-all ${
                  month === monthsSchema.indexOf(m)
                    ? "bg-blue-normal text-white"
                    : "bg-grey-light opacity-70"
                }`}
                key={i}
                onClick={handleMonthChange}
                type="button"
              >
                {m}
              </button>
            ))}
          </div>

          {/* Year */}
          <div
            className={`absolute top-0 left-0 w-full max-h-0 overflow-hidden overflow-y-scroll z-50 text-sm grid grid-cols-4 gap-4 bg-white transition-all table-scroll-bar ${
              showDatePickerYear
                ? "p-4 max-h-full border border-grey-light_inactive"
                : ""
            }`}
          >
            {[...Array(200)].map((_, i) =>
              minDate ? (
                currentYear - 100 + i >= minDate?.year && (
                  <button
                    className={`p-2 rounded-md hover:opacity-100 transition-all ${
                      year === currentYear - 100 + i
                        ? "bg-blue-normal text-white"
                        : "bg-grey-light opacity-70"
                    }`}
                    key={i}
                    onClick={handleYearChange}
                    type="button"
                  >
                    {currentYear - 100 + i}
                  </button>
                )
              ) : (
                <button
                  className={`p-2 rounded-md hover:opacity-100 transition-all ${
                    year === currentYear - 100 + i
                      ? "bg-blue-normal text-white"
                      : "bg-grey-light opacity-70"
                  }`}
                  key={i}
                  onClick={handleYearChange}
                  type="button"
                >
                  {currentYear - 100 + i}
                </button>
              )
            )}
          </div>

          {/* Calendar */}
          <div className="text-center">
            <div className="grid grid-cols-[repeat(7,_30px)] gap-2 text-xs">
              {weekDaysSchema.map((weekDay, i) => (
                <span className="py-4 font-semibold text-" key={i}>
                  {formatWeekDay(weekDay)}
                </span>
              ))}
            </div>
            <div className="grid gap-2 text-xs ">
              {daysArray.map((week, weekIndex) => (
                <div
                  className="grid grid-cols-[repeat(7,_30px)] gap-2"
                  key={weekIndex}
                >
                  {week.map((d: number, dayIndex: number) => (
                    <button
                      className={`p-2 rounded-md transition-all ${
                        d !== null &&
                        (day === d
                          ? "bg-orange-normal text-white font-bold"
                          : "bg-orange-light ")
                      } ${
                        minDate &&
                        parseInt(
                          `${year}${
                            month + 1 < 10 ? `0${month + 1}` : month + 1
                          }${d < 10 ? `0${d}` : d}`
                        ) >
                          parseInt(
                            `${minDate.year}${
                              minDate.month < 10
                                ? `0${minDate.month}`
                                : minDate.month
                            }${
                              minDate.day < 10 ? `0${minDate.day}` : minDate.day
                            }`
                          )
                          ? "opacity-60 hover:opacity-100 hover:font-bold"
                          : "opacity-20 "
                      }`}
                      key={dayIndex}
                      onClick={handleDayChange}
                      type="button"
                    >
                      {d}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
