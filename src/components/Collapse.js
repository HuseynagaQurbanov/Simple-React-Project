import React from "react";

const Collapse = (p) => {
  console.log(p.children);
  return (
    <div>
        <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Link with href
        </a>
        <div className="collapse" id="collapseExample">
            <div className="card card-body">
                Aciq
            </div>
        </div>
    </div>
  );
};

export default Collapse;
