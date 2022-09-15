import React from "react";
import AdvanceIndexCardWrapper from "../components/advance-index-card/AdvanceIndexCardWrapper";
import AdvanceSearchOne from "../components/advance-search-wrapper/AdvanceSearchOne";
import AdvanceSearchThree from "../components/advance-search-wrapper/AdvanceSearchThree";
import AdvanceSearchTwo from "../components/advance-search-wrapper/AdvanceSearchTwo";
import Header from "../components/heder/Header";
import Pagination from "../components/pagination/Pagination";
import SectionHeader from "../components/section-heading/SectionHeader";

function AdvanceIndex() {
  return (
    <div>
      <Header />
      <div className="px-3">
        <SectionHeader text={"incidents"} />
      </div>
      <div className="container">
        <hr className="border-gray-500" />
      </div>
      <div className="px-3">
        <AdvanceSearchOne />
        <AdvanceSearchTwo />
        <AdvanceSearchThree />
      </div>
      <div className="px-3">
        <Pagination />
      </div>
      <AdvanceIndexCardWrapper />
    </div>
  );
}

export default AdvanceIndex;
