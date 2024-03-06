import { FormEvent, useRef } from "react";

type handleFormSubmitFn = (e: FormEvent<HTMLFormElement>) => Promise<void>;

export const useFormSubmit = (
  inputNames: string[],
  callBackFn: (values: Record<string, string>) => void
): handleFormSubmitFn => {
  const values = useRef<Record<string, string>>({});

  const handleFormSubmit: handleFormSubmitFn = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    inputNames.forEach((name) => {
      values.current[name] = data.get(name) as string;
    });

    callBackFn(values.current);
  };

  return handleFormSubmit;
};
