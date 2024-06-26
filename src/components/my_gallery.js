import React from "react";
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container'; 

export function My_gallery({
  data
}) {
  return <div className='my_gallery'>
    <h2 style={{
      color: 'white',
      fontSize: '5vh'
    }}>גלריה</h2>

  <Container>
 <Row >
      {data.map(item => <Col sm={6} xs={12} md={4}>
                        <img className='my_gallery_pic' src={item.src} height={'330vh'} />
                        <p>{item.name}</p>
                    </Col>)}
  </Row>  
 </Container>
  </div>;
}

export default My_gallery;