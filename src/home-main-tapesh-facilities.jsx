import './css/fonts.css';
import './css/home-main-tapesh-facilities.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import DoctorsInfoContext from './context/doctorsInfo';
import imago from './src-images/mobile.jpg';

const HomeMainTapeshFacilities = () => {
    return(
        <div id="home-main-tapesh-facilities">
            <div className="container">
                <div className='row facilities-title w-100 p-0'>
                        <h3>در اپلیکیشن تپش با پزشکان شوش ارتباط بگیرید</h3>
                        <hr />
                </div>
                <div className="row d-block d-md-none">
                    <img src={imago} alt="3" />
                </div>
                <div className="row facilities-body w-100 p-0">
                    <div className="col-md-6 col-12 p-0 facilities-right">
                        <div>
                            <div className='fac-title fac-title-show' index="0" onClick={accordionShow}>امکانات</div>
                            <div className='fac-box fac-box-show'>
                                <div>1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quisquam quae velit blanditiis soluta dignissimos eius qui corporis perspiciatis, cum autem voluptates magnam neque modi, possimus maxime et nihil? Ipsum.</div>
                            </div>
                        </div>
                        <div>
                            <div className='fac-title' index="1" onClick={accordionShow}>راهنمای  اپلیکیشن</div>
                            <div className='fac-box'>
                                <div>2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quisquam quae velit blanditiis soluta dignissimos eius qui corporis perspiciatis, cum autem voluptates magnam neque modi, possimus maxime et nihil? Ipsum.</div>
                            </div>
                        </div>
                        <div>
                            <div className='fac-title' index="2" onClick={accordionShow}>دانلود تپش</div>
                            <div className='fac-box'>
                                <div>3Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quisquam quae velit blanditiis soluta dignissimos eius qui corporis perspiciatis, cum autem voluptates magnam neque modi, possimus maxime et nihil? Ipsum.</div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 d-md-block d-none p-0 facilities-left">
                        <img src={imago} alt="3" />
                    </div>
                </div>
            </div>
        </div>
    );

}

const facTitle=document.getElementsByClassName('fac-title');
const facBox=document.getElementsByClassName('fac-box');

function accordionShow(e){
    for(let n of facBox){
        n.classList.remove("fac-box-show");
    }
    for(let n of facTitle){
        n.classList.remove("fac-title-show");
    }

    let index=e.target.attributes.index.value;
    console.log(index);
    facBox[index].classList.add("fac-box-show");
    facTitle[index].classList.add("fac-title-show");


}
 
export default HomeMainTapeshFacilities;