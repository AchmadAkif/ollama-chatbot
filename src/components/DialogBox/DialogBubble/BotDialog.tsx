import React from "react";

type BotDialogProps = {
  content: string;
};

const BotDialog = ({ content }: BotDialogProps) => {
  return (
    <div className="px-3 py-2 self-start rounded-xl shadow-md bg-[#F2F2F2]">
      {content}
    </div>
  );
};

export default BotDialog;
