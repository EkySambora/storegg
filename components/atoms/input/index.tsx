import React from "react";
interface InputProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
}
export default function Input(props: InputProps) {
  const { label, id, name, placeholder, ...nativeProps } = props;
  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id={id}
        name={name}
        aria-describedby={name}
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
}
