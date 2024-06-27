import React from "react";

    function Mockup({picWidth,mockupPic, animate, animateType, mockupSofa}) {
      return (
      <div>
        
        <img src={mockupPic} style={{width:picWidth}} className={`mockup_pic ${animate ? animateType === 'in' ? 'slide-in-blurred-top' : 'slide-out-bck-center' : ''}`} />
        <img src={mockupSofa} className={`mockup_sofa ${animate ? animateType === 'in' ? 'bounce-in-top' : 'slide-out-bck-center' : ''}`} />
        <img className="mockup_left_pot" src="http://www.uploads.co.il/uploads/images/327016387.png" />
        {/* <img className="mockup_floor_lamp" src="http://www.uploads.co.il/uploads/images/66243597.png" /> */}
     </div>);
    }

    export default Mockup;
  
  