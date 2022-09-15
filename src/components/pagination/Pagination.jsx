import React from "react";
import Button from "../butoon/Button";
const paginationArray = [1, 2, 3];
function Pagination() {
  return (
    <div className="py-3">
      <div className="container flex justify-end">
        {paginationArray.map((item) => {
          return <Button key={item} text={item} padding="5" margin={"2"} />;
        })}
      </div>
    </div>
  );
}

export default Pagination;
