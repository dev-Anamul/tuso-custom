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
      <SectionHeader text={"incidents"} />
      <SearchBox />
      <Pagination />
      <TicketCardWrapper />
    </>
  );
}

export default Home;
