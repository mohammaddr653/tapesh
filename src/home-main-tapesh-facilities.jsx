import './css/fonts.css';
import './css/home-main-tapesh-facilities.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import FacilitiesContext from './context/facilitiesContext';
import imago from './src-images/mobile.jpg';

const HomeMainTapeshFacilities = () => {
    const facilitiesContext=useContext(FacilitiesContext);
    
    

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
                                <div>
                                    {facilitiesContext.facilities.map((item,index)=>{
                                        if(item.type==="explain"){
                                            return(
                                                <div key={index} className='facilities-explain'>
                                                    {item.array}
                                                </div>
                                            )
                                        }
                                        
                                        if(item.type==="li"){
                                            return(
                                                <span key={index} className=' facilities-span'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-check-circle" viewBox="0 0 16 16">
                                                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                      <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                                    </svg>
                                                    {item.array}
                                                </span>
                                            )
                                        }
                                        if(item.type==="new li title"){
                                            return(
                                                <div key={index} className='new-li-title'>{item.title}</div>
                                            )
                                        }
                                        if(item.type==="new li"){
                                            return(
                                                    <span key={index} className=' facilities-span'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="green" className="bi bi-check-circle" viewBox="0 0 16 16">
                                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                          <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                                        </svg>
                                                        {item.array}
                                                    </span>
                                            )
                                        }


                                                
                                    })}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='fac-title' index="1" onClick={accordionShow}>راهنمای  اپلیکیشن</div>
                            <div className='fac-box'>
                                <div>راهنمای اپلیکیشن</div>
                            </div>
                        </div>
                        <div>
                            <div className='fac-title' index="2" onClick={accordionShow}>دانلود تپش</div>
                            <div className='fac-box'>
                                <div>دانلود اپلیکیشن تپش</div>
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