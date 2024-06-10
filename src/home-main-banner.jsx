import './css/fonts.css';
import './css/home-main-banner.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const HomeMainBanner = () => {
    return ( 
        <div className="main-banner-container container-fluid p-0 w-100">
            <div className="banner-content container">
                <div className="row gap-1">
                    <div className="col banner-side banner-right">
                        <h1>تپش 
                            <br />
                            اپلیکیشن خدمات درمانی
                            <br />
                            شوش دانیال
                        </h1>
                        <p>با تپش سریع متخصص پیدا کن ، زنگ بزن واسه نوبت هماهنگ کن</p>
                        <div className='banner-links'>
                            <a href="" className='google-play-down'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-google-play mt-1" viewBox="0 0 16 16">
                                        <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
                                    </svg>
                                </span>
                                <span>
                                    در دسترس
                                    <br />
                                    <span className='app-name'>گوگل پلی</span>
                                </span>
                            </a>
                            <a href="" className='google-play-down'>
                                <span>
                                    دانلود
                                    <br />
                                    <span className='app-name'>مستقیم تپش</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 banner-side banner-left">
                        <img src="images/single-welcome.png" alt="jj" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomeMainBanner;