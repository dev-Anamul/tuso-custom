import React from "react";
import Header from "../components/heder/Header";
import Pagination from "../components/pagination/Pagination";
import SearchBox from "../components/search-box/SearchBox";
import SectionHeader from "../components/section-heading/SectionHeader";
import TicketCardWrapper from "../components/tiicket-card-wrapper/TicketCardWrapper";

function Home() {
  return (
    <>
      <Header />
      <div className="px-3">
        <SectionHeader text={"incidents"} />
      </div>
      <div className="px-3">
        <SearchBox />
      </div>
      <div className="px-3">
        <Pagination />
      </div>
      <div className="px-3">
        <TicketCardWrapper />
      </div>
    </>
  );
}

export default Home;
