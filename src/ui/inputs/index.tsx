import React from "react";
import { TextInput } from "./text-input";
import { InputBaseProps, InputProps, Inputs } from "./types";
import { CheckBoxInput, CheckBoxInputProps } from "./check-box-input";
import { EmailInput } from "./email-input";
import { PasswordInput } from "./password-input";
import { SearchInput, SearchInputProps } from "./search-input";
import { SelectPolicyContractsInputProps } from "./select-policy-contract-input/types";
import SelectPolicyContractInput from "./select-policy-contract-input";
import { SelectInput, SelectInputProps } from "./select-input";
import DateInput, { DateInputProps } from "./date-input";
import TimeSlotsInput, { TimeSlotsInputProps } from "./time-slots-input";

export function Input<T extends Inputs>(props: InputProps<T>): JSX.Element {
  const { type } = props;
  const inputBaseProps = props as InputBaseProps;
  const checkBoxInputProps = props as CheckBoxInputProps;
  const dateInputProps = props as DateInputProps;
  const searchInputProps = props as SearchInputProps;
  const selectPolicyContractsInputProps =
    props as SelectPolicyContractsInputProps;
  const selectInputProps = props as SelectInputProps;
  const timeSlotsInputProps = props as TimeSlotsInputProps;

  const inputBasePropsSchema = {
    id: inputBaseProps.id,
    label: inputBaseProps.label,
    name: inputBaseProps.name,
    onChange: inputBaseProps.onChange,
    placeholder: inputBaseProps.placeholder,
    required: inputBaseProps.required,
  };

  switch (type) {
    case Inputs.CheckBox:
      return (
        <CheckBoxInput
          onChangeCheckBoxInputValue={
            checkBoxInputProps.onChangeCheckBoxInputValue
          }
          value={checkBoxInputProps.value}
        />
      );
    case Inputs.Date:
      return (
        <DateInput
          datePickerPosition={dateInputProps.datePickerPosition}
          placeholder={dateInputProps.placeholder}
          label={dateInputProps.label}
          name={dateInputProps.name}
          onChange={dateInputProps.onChange}
          minDate={dateInputProps.minDate}
          required={dateInputProps.required}
        />
      );

    case Inputs.Email:
      return <EmailInput {...inputBasePropsSchema} />;

    case Inputs.Password:
      return <PasswordInput {...inputBasePropsSchema} />;

    case Inputs.Search:
      return (
        <SearchInput
          delay={searchInputProps.delay}
          isLoading={searchInputProps.isLoading}
          onChange={searchInputProps.onChange}
          placeholder={searchInputProps.placeholder}
        />
      );

    case Inputs.SelectPolicyContract:
      return (
        <SelectPolicyContractInput
          delay={selectPolicyContractsInputProps.delay}
          name={selectPolicyContractsInputProps.name}
          onChange={selectPolicyContractsInputProps.onChange}
          required={selectPolicyContractsInputProps.required}
        />
      );

    case Inputs.Select:
      return (
        <SelectInput
          name={selectInputProps.name}
          options={selectInputProps.options}
          label={selectInputProps.label}
          placeholder={selectInputProps.placeholder}
          required={selectInputProps.required}
        />
      );

    case Inputs.TimeSlots:
      return (
        <TimeSlotsInput
          label={timeSlotsInputProps.label}
          name={timeSlotsInputProps.name}
          required={timeSlotsInputProps.required}
          slots={timeSlotsInputProps.slots}
        />
      );

    case Inputs.Text:
      return <TextInput {...inputBasePropsSchema} />;

    default:
      return <p>Pick an Input Type from &quot;Inputs&quot; Enum.</p>;
  }
}
