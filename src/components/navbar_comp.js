import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/black_logo.png'

    function Navbar_comp({}) {
      return (<Navbar bg="dark" data-bs-theme="dark" >
        <div style={{display:'ruby',margin:12}}>

          <Navbar.Brand href="#home" style={{top:0, right:-100}}><img className="logo" src={Logo}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{fontSize:18}}>הדפסים למכירה</Nav.Link>
            <Nav.Link href="#features" style={{fontSize:18}}>ציורים מקוריים</Nav.Link>
            <Nav.Link href="#pricing" style={{fontSize:18}}>אודות</Nav.Link>
            <Nav.Link href="#pricing2" style={{fontSize:18}}>צור קשר</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link >
              <img style={{marginLeft:17}} src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-1946323-1646407.png?f=webp&w=256" href="www.google.co.il" width={40}/>
              <img src="https://cdn.iconscout.com/icon/free/png-512/free-tiktok-11306346-9343757.png?f=webp&w=256" href="www.google.co.il" width={30}/>
              
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>);
    }
  
    export default Navbar_comp;