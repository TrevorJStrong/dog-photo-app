import { Dispatch, SetStateAction } from "react";

export interface CustomDropdownOption {
  label: string;
  value: string;
};

export interface FilterProps {
  setBreedId?: Dispatch<SetStateAction<number | string>>;
  setLimit: Dispatch<SetStateAction<number>>;
  breed_id: number | string;
};

export type CustomDropdownProps = {
  selectedLabel: string;
  data: { id: number; name: string }[];
  onSelectLabel?: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};
