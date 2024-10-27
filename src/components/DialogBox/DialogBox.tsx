import React from "react";

import UserDialog from "./DialogBubble/UserDialog";
import BotDialog from "./DialogBubble/BotDialog";

type DialogBoxProps = {};

const DialogBox = ({ messages }: DialogBoxProps) => {
  return (
    <div className="flex flex-col px-2 py-4 font-roboto">
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
