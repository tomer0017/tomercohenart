import React from "react";
export function Header({
  headerVideo
}) {
  return <div className="main">
      {/* <video src={headerVideo} autoPlay loop muted /> */}
      <img className="gif_header" src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/147f3a8e-16a0-4b5d-ad6b-448e5c3135b5.gif?ClientID=sulu&Date=1719762877&Signature=322f1595be29a7a8de46d247bdcd3289cae6e13d' />
      <div className='content'>
        <h1 className='caveat-title'>Tomer Cohen Art</h1>
        <h3>Welcom to my world</h3>
      </div>
    </div>;
}

export default Header