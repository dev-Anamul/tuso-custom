import React from "react";
import Button from "../butoon/Button";

function TicketCard() {
  return (
    <div className="border border-gray-500 py-5 px-2 md:px-10  rounded mb-5">
      <div className="space-y-5">
        <div className="flex justify-between font-bold capitalize text-sm md:text-base">
          <div className="md:flex md:space-x-6">
            <p>
              <span>system:</span>
              <span>SC+v.1.5</span>
            </p>
            <p>
              <span>Ticket No:</span>
              <span>1005</span>
            </p>
          </div>
          <div className="md:flex md:space-x-6">
            <p>
              <span>date Reported:</span>
              <span>10 Aug 2022</span>
            </p>
            <p>
              <span>Status:</span>
              <span>Open</span>
            </p>
          </div>
        </div>
        <div className="text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            pariatur ducimus fugit, quasi modi dolorem dolorum distinctio hic
            quam cupiditate tenetur quibusdam eligendi magni aut. Molestias
            cumque commodi cupiditate reiciendis odit doloribus ducimus mollitia
            iure! Iure cumque voluptates atque nobis facere est itaque alias eos
            cum. Officia omnis fugit beatae quas possimus sed nemo distinctio
            nesciunt doloremque dicta. Minus, dolorem tempora dolorum labore
            harum facere modi iste magni repellendus asperiores dicta vel
            consectetur suscipit sequi deleniti esse. Consectetur ipsa, ea
            necessitatibus aspernatur voluptates quod eaque inventore ipsum
            corrupti? Alias ducimus qui distinctio numquam dicta dolores
            expedita repellat eum iste doloremque.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button text={"edit"} padding="5" />
          <Button text={"view"} padding="5" />
          <Button text={"delete"} padding="5" />
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
