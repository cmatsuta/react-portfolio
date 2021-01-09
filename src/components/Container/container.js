import React from "react";

function Container(props) {
//   return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
    return (
        <div className="container padding">{props.children}</div>
    )
}

export default Container;