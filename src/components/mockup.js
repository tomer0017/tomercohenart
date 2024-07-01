import React,{useState} from "react";

    function Mockup({picWidth,mockupPic, animate, animateType, mockupSofa}) {

      const [changeFrame,setChangeFrame]=useState(true)

      return (
      <div>
        
        <img onClick={value=>setChangeFrame(!changeFrame)} src={mockupPic} style={{width:picWidth}} className={changeFrame?`mockup_pic ${animate ? animateType === 'in' ? 'slide-in-blurred-top' : 'slide-out-bck-center' : ''}`:'clicked_mockup_pic'} />
        
        <img src={mockupSofa} className={`mockup_sofa ${animate ? animateType === 'in' ? 'bounce-in-top' : 'slide-out-bck-center' : ''}`} />
        <img className="mockup_left_pot" src="http://www.uploads.co.il/uploads/images/327016387.png" />
        {/* <img className="mockup_floor_lamp" src="http://www.uploads.co.il/uploads/images/66243597.png" /> */}
     </div>);
    }

    export default Mockup;
  
  