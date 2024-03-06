import React from "react";
import { CheckBoxInputProps } from "./check-box-input";
import { SearchInputProps } from "./search-input";

export type InputProps<T> = {
  type: T;
} & (T extends Inputs.CheckBox
  ? CheckBoxInputProps
  : T extends Inputs.Search
  ? SearchInputProps
  : InputBaseProps);

export type InputBaseProps = {
  required: boolean;
  label?: string;
  id: string;
  placeholder?: string;
  name: string;
  onChange?: (e: React.ChangeEvent) => void;
};

export enum Inputs {
  CheckBox = "CheckBox",
  Date = "Date",
  Email = "Email",
  Filter = "Filter",
  Password = "Password",
  Number = "Number",
  Search = "Search",
  Select = "Select",
  SelectPolicyContract = "SelectPolicyContract",
  Sort = "Sort",
  TextArea = "TextArea",
  Text = "Text",
  Time = "Time",
  TimeSlots = "TimeSlots",
  Toggle = "Toggle",
}
