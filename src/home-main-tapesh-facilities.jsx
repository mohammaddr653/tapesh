import './css/fonts.css';
import './css/home-main-tapesh-facilities.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import DoctorsInfoContext from './context/doctorsInfo';

const HomeMainTapeshFacilities = () => {
    return(
        <div id="home-main-tapesh-facilities">
            <div className="container">
                <div className='row facilities-title w-100 p-0'>
                        <h3>در اپلیکیشن تپش با پزشکان شوش ارتباط بگیرید</h3>
                        <hr />
                </div>
                <div className="row facilities-body w-100 p-0 m-0">
                    <div className="col facilities-right"></div>
                    <div className="col facilities-left">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );

}
 
export default HomeMainTapeshFacilities;