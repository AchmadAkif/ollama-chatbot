"use client";

import React from "react";

type UserInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  value: string;
};

const UserInput = ({ onChange, onSubmit, value }: UserInputProps) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full px-4 py-4 bg-[#E1E1DD] focus:outline-none rounded-2xl shadow-sm font-roboto"
        placeholder="Ask anything..."
      />
    </form>
  );
};

export default UserInput;
