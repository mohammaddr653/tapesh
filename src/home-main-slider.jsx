import './css/fonts.css';
import './css/home-main-slider.css';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';


const HomeMainSlider = () => {

    return(
        <div id='home-main-slider-container'>
            <div className='container'>
                <div className="row p-0">
                    <Carousel className='p-0 slider-container'>
                      <Carousel.Item interval={800}>
                        <img src='images/dr1.jpg'/>
                      </Carousel.Item>
                      <Carousel.Item interval={800}>
                        <img src='images/dr2.jpg' />
                      </Carousel.Item>
                      <Carousel.Item interval={800}>
                        <img src='images/dr3.jpg' />
                      </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
} 
export default HomeMainSlider;