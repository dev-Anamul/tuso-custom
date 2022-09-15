import React from "react";
import Button from "../butoon/Button";

function AdvanceIndexCard() {
  return (
    <div className="">
      <div className="container grid md:grid-cols-3 gap-4 items-center border border-gray-500 py-5 px-10 rounded mt-5">
        <div className="md:col-span-2">
          <h1 className="font-semibold capitalize text-xl">incident</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            error officiis, voluptas et porro ab molestias tempora, nisi
            corporis cupiditate, laborum reprehenderit repellendus. Consequuntur
            natus perspiciatis nulla quidem atque nobis dicta at repellendus
            totam reprehenderit ducimus accusamus a itaque, laborum deserunt
            quisquam debitis adipisci expedita maiores! Accusantium fugiat ipsam
            recusandae et, sapiente quasi voluptatem laborum minus commodi
            incidunt? Est molestiae adipisci, architecto dignissimos dolores quo
            laboriosam?
          </p>
        </div>
        <div>
          <p>
            <span className="font-semibold">Ticket No:</span>
            <span>1005</span>
          </p>
          <p>
            <span>date Reported:</span>
            <span>10 Aug 2022</span>
          </p>
          <p>
            <span>Status:</span>
            <span>Open</span>
          </p>
          <p>
            <span>Date of incident:</span>
            <span>10 Aug 2022</span>
          </p>
          <div className="mt-3">
            <p className="font-semibold">Matero General Hospital</p>
            <p>Danial Mungule</p>
            <p>+26098774512</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button text={"edit"} />
          <Button text={"view"} />
          <Button text={"delete"} />
        </div>
      </div>
    </div>
  );
}

export default AdvanceIndexCard;
