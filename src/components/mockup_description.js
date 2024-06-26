import React from "react";
export function Mockup_description({
  picName,
  picDescription
}) {
  return (
  <div className="mockup_description">
  <h2>{picName}</h2>
  <h3>{picDescription}</h3>

  </div>
  )
}

export default Mockup_description;