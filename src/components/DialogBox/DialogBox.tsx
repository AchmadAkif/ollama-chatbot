import React from "react";

import UserDialog from "./DialogBubble/UserDialog";
import BotDialog from "./DialogBubble/BotDialog";

type DialogBoxProps = {};

const DialogBox = (props: DialogBoxProps) => {
  return (
    <div className="flex flex-col px-2 py-4 font-roboto">
      <UserDialog />
      <BotDialog />
    </div>
  );
};

export default DialogBox;
