import React from 'react';
import { Carousel } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import './Banner.css'
import Box from '@mui/material/Box';
import { sizing } from '@mui/system';
import carouselImg from '../../../images/5.jpg'
import carouselImg1 from '../../../images/88.jpg'
import carouselImg2 from '../../../images/112.jpg';
import { FloatingLettersTextBuilder } from 'react-animated-text-builders'





const Banner = () => {
    return (
      <Box className="carousel-edit" sx={{ height: '75%' }}>
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">

  <div className="carousel-inner">
    <div className="carousel-item active" id="slide-1">
   
      <div className="carousel-caption d-none d-md-block" data-aos="fade-right">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        <button>Learn More</button>
      </div>
    </div>
    <div className="carousel-item" id="slide-1">
   
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item" id="slide-1">
  
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
        <button>Learn More</button>
      </div>
    </div>
  </div>


</div>
      </Box>
        
    );
};

export default Banner;