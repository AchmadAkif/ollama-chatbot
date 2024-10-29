import React from "react";

type UserDialogProps = {
  content: string;
};

const UserDialog = ({ content }: UserDialogProps) => {
  return (
    <div className="px-3 py-1 self-end rounded-xl shadow-md bg-[#AEFF92]">
      {content}
    </div>
  );
};

export default UserDialog;
