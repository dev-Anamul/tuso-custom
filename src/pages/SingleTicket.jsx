import React from "react";
import Header from "../components/heder/Header";
import MessageBox from "../components/reply-message-box/MessageBox";
import ReplyWrapper from "../components/reply-wrapper/ReplyWrapper";
import SectionHeader from "../components/section-heading/SectionHeader";
import SingleDetails from "../components/single-details/SingleDetails";

function SingleTicket() {
  return (
    <div>
      <Header />
      <div className="md:px-10">
        <SectionHeader text={"incident"} />
        <SingleDetails />
        <div className="container flex justify-end py-4 px-2 lg:px-0">
          <button className="border rounded border-gray-500 capitalize py-2 px-4">
            close this incident
          </button>
        </div>
        <MessageBox />
        <div>
          <ReplyWrapper />
        </div>
      </div>
    </div>
  );
}

export default SingleTicket;
