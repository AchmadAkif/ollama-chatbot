"use client";

import { useChat } from "ai/react";

import DialogBox from "@/components/DialogBox/DialogBox";
import UserInput from "@/components/UserInput";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="h-[100vh] w-full px-80 py-10">
      <DialogBox messages={messages} />
      <UserInput
        onChange={handleInputChange}
        value={input}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
