import React from "react";

function Row(props) {
  return (    
  <div className="row">
  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-3 mb-2 bg-info text-white">
    <h1 className="display-4">{props}</h1>
  </div>
</div>
);
}

export default Row;