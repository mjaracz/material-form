import {ChangeEvent} from "react";

export type onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => void;

export interface ValidationError {
  isError: boolean;
  message?: string;
}

export interface EmailWrapperProps {
  saveEmail: onChangeCallback;
  validation: ValidationError;
}
export interface PasswordWrapperProps {
  savePassword: onChangeCallback;
  validation: ValidationError;
}