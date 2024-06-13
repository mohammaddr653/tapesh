import './css/fonts.css';
import './css/home-main-doctors-arc.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import DoctorsInfoContext from './context/doctorsInfo';

const HomeMainDoctorsArc = () => {
    const doctorsInfoContext=useContext(DoctorsInfoContext);
    return(
        <div id="home-main-doctors-arc">
            <div className="container">
                <div className="row w-100 p-0 m-0">
                    {doctorsInfoContext.doctors.map((item,index)=>{
                        return(
                            <div key={index} className="card">
                                <div className="card-info">
                                    <img className='card-img' src={item.img} alt="5" />
                                    <div className="card-title">
                                        <h3>{item.name}</h3>
                                    </div>
                                    <span className='card-tag'>{item.proffesion}</span>

                                </div>
                                <div className="card-link">
                                    <a href="#">مشاهده</a>
                                </div>
                            </div>
                        )    
                    })}
                </div>
            </div>
        </div>
    );

}
 
export default HomeMainDoctorsArc;