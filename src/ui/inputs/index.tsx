import React from "react";
import { TextInput } from "./text-input";
import { InputBaseProps, InputProps, Inputs } from "./types";
import { CheckBoxInput, CheckBoxInputProps } from "./check-box-input";
import { EmailInput } from "./email-input";
import { PasswordInput } from "./password-input";
import { SearchInput, SearchInputProps } from "./search-input";

export function Input<T extends Inputs>(props: InputProps<T>): JSX.Element {
  const { type } = props;
  const inputBaseProps = props as InputBaseProps;
  const checkBoxInputProps = props as CheckBoxInputProps;
  const searchInputProps = props as SearchInputProps;

  const inputBasePropsSchema = {
    id: inputBaseProps.id,
    label: inputBaseProps.label,
    name: inputBaseProps.name,
    onChange: inputBaseProps.onChange,
    placeholder: inputBaseProps.placeholder,
    required: inputBaseProps.required,
  };

  const checkBoxInputPropsSchema = {
    onChangeCheckBoxInputValue: checkBoxInputProps.onChangeCheckBoxInputValue,
    value: checkBoxInputProps.value,
  };

  const searchInputPropsSchema: SearchInputProps = {
    delay: searchInputProps.delay,
    isLoading: searchInputProps.isLoading,
    onChange: searchInputProps.onChange,
    placeholder: searchInputProps.placeholder,
  };

  switch (type) {
    case Inputs.CheckBox:
      return <CheckBoxInput {...checkBoxInputPropsSchema} />;

    case Inputs.Email:
      return <EmailInput {...inputBasePropsSchema} />;

    case Inputs.Password:
      return <PasswordInput {...inputBasePropsSchema} />;

    case Inputs.Search:
      return <SearchInput {...searchInputPropsSchema} />;

    case Inputs.Text:
      return <TextInput {...inputBasePropsSchema} />;

    default:
      return <p>Pick an Input Type from &quot;Inputs&quot; Enum.</p>;
  }
}
