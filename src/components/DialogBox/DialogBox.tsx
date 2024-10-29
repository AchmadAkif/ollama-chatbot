import React from "react";

import UserDialog from "./DialogBubble/UserDialog";
import BotDialog from "./DialogBubble/BotDialog";

type Message = {
  id: string;
  role: string;
  content: string;
};

type DialogBoxProps = {
  messages: Message[];
};

const DialogBox = ({ messages }: DialogBoxProps) => {
  return (
    <div className="flex flex-col space-y-8 h-[calc(100%-56px)] px-2 py-4 overflow-x-hidden overflow-y-auto font-roboto">
      {messages.map((m) =>
        m.role === "assistant" ? (
          <BotDialog key={m.id} content={m.content} />
        ) : (
          <UserDialog key={m.id} content={m.content} />
        )
      )}
    </div>
  );
};

export default DialogBox;
