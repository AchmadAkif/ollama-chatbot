"use client";

import { useChat } from "ai/react";

import DialogBox from "@/components/DialogBox/DialogBox";
import UserInput from "@/components/UserInput";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="w-full">
      <DialogBox messages={messages} />
      <UserInput
        onChange={handleInputChange}
        value={input}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
