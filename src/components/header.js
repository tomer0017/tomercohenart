import React from "react";
import GifHeader from '../assets/gifs/headervideo2.gif'
export function Header({
  headerVideo
}) {
  return <div className="main">
      <img className="gif_header" alt="gif" src={GifHeader} />
      <div className='content'>
        <h1 className='header_title'>Tomer Cohen Art</h1>
        {/* <h6>Welcom to my world</h6> */}
      </div>
    </div>;
}

export default Header