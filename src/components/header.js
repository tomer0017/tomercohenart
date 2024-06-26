import React from "react";
export function Header({
  headerVideo
}) {
  return <div className="main">
      <video src={headerVideo} autoPlay loop muted />
      <div className='content'>
        <h1 className='caveat-title'>Tomer Cohen Art</h1>
        <h3>Welcom to my world</h3>
      </div>
    </div>;
}

export default Header