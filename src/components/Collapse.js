import React from "react";
import Card from "./Card";

const Collapse = (p) => {
  return (
    <div>
      <a
        className="btn btn-primary"
        data-toggle="collapse"
        href={"#" + p.id}
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
        style={{display: "block" , width:"202px", margin:"3px"}}
      >
        Link with href
      </a>
      <div className="collapse" id={p.id}>
        {p.children}
      </div>
    </div>
  );
};

export default Collapse;
