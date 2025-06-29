import { Dispatch, SetStateAction } from "react";

export interface CustomDropdownOption {
  label: string;
  value: string;
};

export interface CustomDropdownProps {
  setBreedId?: Dispatch<SetStateAction<number | string>>;
  setLimit: Dispatch<SetStateAction<number>>;
  breed_id: number | string;
};
