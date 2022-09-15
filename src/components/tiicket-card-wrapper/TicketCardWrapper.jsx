import React from "react";
import TicketCard from "../ticket-card/TicketCard";

function TicketCardWrapper() {
  return (
    <div>
      <div className="container">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
}

export default TicketCardWrapper;
