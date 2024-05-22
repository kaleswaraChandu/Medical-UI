import React from 'react';
import logo from './logo.png';
import banner1 from './banner1.png'; 
import banner2 from './banner2.png'; 
import banner3 from './banner3.jpg';
import client1  from './client-1.jpg'; 
import client2  from './client-2.jpg'; 
import client3 from './client-3.jpg';
import client4 from './client-4.jpg';
import client5 from './client-5.jpg';
import client6 from './client-6.jpg';
import client7 from './client-7.jpg';
import client8 from './client-8.jpg';
import './App.css';
import { Carousel } from 'react-bootstrap';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" height={50} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-dark bold-on-hover" aria-current="page" href="#" style={{ fontWeight: 'bold', marginRight: '20px' }}>HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark bold-on-hover" href="#" style={{ fontWeight: 'bold', marginRight: '20px' }}>ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark bold-on-hover" href="#" style={{ fontWeight: 'bold', marginRight: '20px' }}>JOURNALS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark bold-on-hover" href="#" style={{ fontWeight: 'bold', marginRight: '20px' }}>GUIDELINES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark bold-on-hover" href="#" style={{ fontWeight: 'bold', marginRight: '20px' }}>SUBMIT MANUSCRIPT</a>
              </li>
              <li className="nav-item" style={{ marginRight: '20px' }}>
                <a className="nav-link text-dark bold-on-hover" href="#" style={{ fontWeight: 'bold' }}>CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 style={{textShadow: "0 0 5px black"}}>21<sup>st</sup> Century Publisher</h1>
            <p style={{textAlign:'center',fontSize:20,fontWeight:'bold',fontFamily:'sans-serif',textShadow: "0 0 5px black"}}>21<sup>st</sup> Century Publisher is a global publisher whose mission is to make future science accessible to everyone.
               Open access publishers have always strived to remove barriers to research sharing.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
          <h1 style={{textShadow: "0 0 5px black"}}>21<sup>st</sup> Century Publisher</h1>
            <p style={{textAlign:'center',fontSize:20,fontWeight:'bold',fontFamily:'sans-serif',textShadow: "0 0 5px black"}}>21<sup>st</sup> Century Publisher is a global publisher whose mission is to make future science accessible to everyone.
               Open access publishers have always strived to remove barriers to research sharing.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
          <Carousel.Caption>
          <h1 style={{textShadow: "0 0 5px black"}}>21<sup>st</sup> Century Publisher</h1>
            <p style={{fontSize:20,fontWeight:'bold',fontFamily:'sans-serif',textShadow: "0 0 5px black"}}>21<sup>st</sup> Century Publisher is a global publisher whose mission is to make future science accessible to everyone.
               Open access publishers have always strived to remove barriers to research sharing.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div  class="container">
        <div>
          <p>21st Century Publisher is a global publisher whose mission is to make future science accessible to everyone. Open access publishers have always strived to remove barriers to research sharing. Open
          
          access publication is a significant trend that is resulting in more and easier access to scientific discoveries. We are a dedicated academic publisher with a big vision of spreading information beyond
          borders and adhering to all peer review norms. The 21st Century Publisher is an attempt to assist the open science movement by bringing together key parts of research such as learning, sharing, and
          assessing science in one place.
          </p>
          <p>The dissemination of published research gives a critical opportunity for scientists, 
            academics, and students to confront difficulties and develop solutions.
             All articles published by 21st Century Publisher will be 
            free to read, download, and reuse as long as the scientific credits are included.</p>
          <p>
          We think that science advances only through unrestricted collaborations, discussions, and replications, and that only
           an open research access approach can enable this. Our goal is to make 
          the open access and peer review paradigm legitimate and acceptable, thereby accelerating
           the worldwide momentum of knowledge sharing.
          </p>
                <h3 style={{fontWeight:'bold',fontSize:'22px',}}>Our Articles will be Indexed in</h3>
                <div style={{display:'flex',flexDirection:'row', gap:10}}>
                    <h1 style={{height:3,width:30,backgroundColor:'red',}}></h1>
                    <h1 style={{height:3,width:90,backgroundColor:'#00008b',}}></h1>
                 </div>

                {/* <div className="owl-carousel our-client" style={{display:'flex'}}>
                <div className="client-item"><img src={client1} alt=""/></div>
                <div className="client-item"><img src={client2} alt=""/></div>
                <div className="client-item"><img src={client3} alt=""/></div>
                <div className="client-item"><img src={client4} alt=""/></div>
                <div className="client-item"><img src={client5} alt=""/></div>
                <div className="client-item"><img src={client6} alt=""/></div>
                <div className="client-item"><img src={client7} alt=""/></div>
                <div className="client-item"><img src={client8} alt=""/></div>
              </div> */}



            </div>
        </div>
    </div>

  );
}

export default App;
