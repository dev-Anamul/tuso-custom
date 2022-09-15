import React from "react";
import Button from "../components/butoon/Button";
import Header from "../components/heder/Header";
import MessageBox from "../components/reply-message-box/MessageBox";
import ReplyWrapper from "../components/reply-wrapper/ReplyWrapper";
import SectionHeader from "../components/section-heading/SectionHeader";
import SingleDetails from "../components/single-details/SingleDetails";

function SingleTicket() {
  return (
    <div>
      <Header />
      <SectionHeader text={"incident"} />
      <SingleDetails />
      <div className="container flex justify-end py-4">
        <Button text={"close this incident"} padding="6" />
      </div>
      <MessageBox />
      <div>
        <ReplyWrapper />
      </div>
    </div>
  );
}

export default SingleTicket;
