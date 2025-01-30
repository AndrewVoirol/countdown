export const cn = (...inputs: string[]) => {
  return twMerge(...inputs.map((input) => twJoin(input)));
};
import { clsx, type ClassValue } from "clsx";
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
};
export const twMerge = <T>(...args: T[]) => {
  return args.reduce((acc, arg) => ({ ...acc, ...arg }), {});
};

export const twJoin = (...args: any[]) => {
  return args.join(" ");
};
