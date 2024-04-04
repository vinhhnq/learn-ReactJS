import React from "react";

function Feature(prop){
  return(
    <div className="feature">
      <h2 className="feature_title">{prop.title}</h2>
      <p className="title_desc">{prop.description}</p>
    </div>
  )
}
export default Feature;
