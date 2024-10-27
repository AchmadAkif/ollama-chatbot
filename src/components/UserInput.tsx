"use client";

import React, { useState } from "react";

type UserInputProps = {};

const UserInput = (props: UserInputProps) => {
  const [userMsg, setUserMsg] = useState<string>("");

  return (
    <form>
      <input
        type="text"
        value={userMsg}
        onChange={(e) => setUserMsg(e.target.value)}
        className="w-full px-4 py-4 bg-[#E1E1DD] focus:outline-none rounded-2xl font-roboto"
        placeholder="Ask anything..."
      />
    </form>
  );
};

export default UserInput;
