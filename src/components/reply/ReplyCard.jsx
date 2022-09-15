import React from "react";

function ReplyCard({ name, date, time, message }) {
  return (
    <div className="mb-4">
      <div className="font-semibold capitalize ">
        <span>{name} - </span>
        <span>{date},</span>
        <span>{time}</span>
      </div>
      <div className="text-sm">{message}</div>
    </div>
  );
}

export default ReplyCard;
