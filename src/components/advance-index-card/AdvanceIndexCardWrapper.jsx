import React from "react";
import AdvanceIndexCard from "./AdvanceIndexCard";

function AdvanceIndexCardWrapper() {
  return (
    <div>
      <div className="px-3">
        <AdvanceIndexCard />
        <AdvanceIndexCard />
        <AdvanceIndexCard />
      </div>
    </div>
  );
}

export default AdvanceIndexCardWrapper;
