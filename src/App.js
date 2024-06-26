import { My_gallery } from './components/my_gallery';
import { Mockup_description } from './components/mockup_description';
import { Header } from './components/header';
import { About_me_text } from './components/about_me_text';
import './App.css';
import React,{useEffect,useState} from 'react';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import headerVideo from './assets/videos/headervideo.mp4';
import Navbar_comp from './components/navbar_comp';
import { useInView } from 'react-intersection-observer';
import Mockup from './components/mockup';
import Pic_carousel from './components/pic_carousel';
import { Container } from 'react-bootstrap';




function App() {

  const [data, setData] = useState([]);
  const [picName, setPicName] = useState('');
  const [picDescription, setPicDescription] = useState('');
  const [mockupPic,setMockupPic]=useState("http://www.uploads.co.il/uploads/images/330658142.jpeg")
  const [mockupSofa,setMockupSofa]=useState("http://www.uploads.co.il/uploads/images/248736505.png")
  const [animate, setAnimate] = useState(false);
  const [animateType, setAnimateType] = useState("in");

  const artist_pic='http://www.uploads.co.il/uploads/images/973892682.png';
  
  const images = [
    {
       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
       width: 320,
       height: 174,
       isSelected: true,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
       width: 320,
       height: 212,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
       width: 520,
       height: 212,
    },
 ];


  useEffect(() => {
    fetch('/paintings.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        console.log('Fetched data:', data); // Log the data to the console
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

//   console.log(data);
  useEffect(() => {

      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 1300); // Duration of the animation
      return () => clearTimeout(timer);
    
  }, [animateType]);


    const { ref, inView } = useInView({
      threshold: 1.0, // Fully in view
    });

    function mouseEnterInit(item){
      setMockupPic(item.src);setMockupSofa(item.sofa_url);setPicName(item.name);setAnimateType("in") ;
    }

  return (
    <div className='App'>


 <Navbar_comp/>
      <Header   headerVideo={headerVideo}  />

      
      <Container>
        <Row className='about_me'>
      <Col className='about_me_text' md={6} xs={12} >
        <About_me_text     />
      </Col>
      <Col md={6} xs={12}>
      <img className='about_me_pic' alt="pic for about me" src={artist_pic} />
      </Col>
    </Row>
      </Container>
      

      
      {/* <div className='mockup_wall'> */}
        <div className='image-container'>
            {/* <img src={mockup_wall1}  /> */}
        
        <Row>
            <Col xs={3} md={3}>
            <Mockup_description   picName={picName} picDescription={picDescription}  />
            </Col>
            <Col>
            <Mockup   mockupPic={mockupPic} animate={animate} animateType={animateType} mockupSofa={mockupSofa}  />
            </Col>
        </Row>
         </div>
      {/* </div> */}
      {/* <img className='mockup_floor' src="http://www.uploads.co.il/uploads/images/880157031.jpg" /> */}
      <Pic_carousel  data={data} setAnimateType={setAnimateType} setTimeout={setTimeout} setMockupPic={setMockupPic} setMockupSofa={setMockupSofa} setPicName={setPicName}  setPicDescription={setPicDescription}/>
      
      <My_gallery   data={data}  />

{/* 
    <div className='social_media'>

    </div>
     */}


      <div className='footer'>
        
        <div>
                <h4 style={{color:'rgb(55 134 138)',marginTop:'15px'}}>Find the latest work on social media</h4>
            </div>
        {/* <Row>
            <Col>
                <img width={'260vh'} style={{padding:'30px'}} src={artist_pic}/>
            </Col>
            
        </Row> */}
           
            <img src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-1946323-1646407.png?f=webp&w=256" href="www.google.co.il" width={30}/>
              <img src="https://cdn.iconscout.com/icon/free/png-512/free-tiktok-11306346-9343757.png?f=webp&w=256" href="www.google.co.il" width={30}/>
              </div> 
              <div className='line_space' ></div>
              <h6 style={{color:'rgb(157 157 157)',marginBottom:'0px',paddingBottom:'20px'}}>  זכויות שמורות לTomerCohenArt</h6>
    </div>
  );
}


export default App;
