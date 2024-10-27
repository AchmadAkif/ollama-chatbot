import React from "react";

type BotDialogProps = {
  content: string;
};

const BotDialog = ({ content }: BotDialogProps) => {
  return (
    <div className="px-3 py-1 self-start rounded-xl bg-[#F2F2F2]">
      {content}
    </div>
  );
};

export default BotDialog;
