import * as React from "react";

export interface InputProps {
  children: React.ReactNode;
}

export function Input(props: InputProps) {
  return <button>{props.children}bar</button>;
}

Input.displayName = "Input";
