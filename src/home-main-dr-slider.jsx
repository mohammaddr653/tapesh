import './css/fonts.css';
import './css/home-main-dr-slider.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import DoctorsInfoContext from './context/doctorsInfo';

const HomeMainDrSlider = () => {
    const doctorsInfoContext=useContext(DoctorsInfoContext);
    let [sliderShowDrImg, setSliderShowDrImg] = useState([]);
    let [currentSliderShowDrImg, setCurrentSliderShowDrImg] = useState();

    let b =[]
    
    useEffect(() => {
        for(let x of doctorsInfoContext.sliderShowDr){
            b.push(x.img);
        }
        setSliderShowDrImg(b);
        setCurrentSliderShowDrImg(b[0]);
    },[doctorsInfoContext.sliderShowDr]);


    useEffect(() => {
        console.log(doctorsInfoContext.sliderShowDr);
    },[doctorsInfoContext.sliderShowDr]);

    // function getClickedDr(x){
    //     console.log("d");
    // }
    function jj(e){
        for(let r of sliderShowDrImg){
            if(r===e){
                console.log(r);
                setCurrentSliderShowDrImg(r);
            }
        }
        // alert("ff");
        
    }
    return (
        <div id="home-main-dr-slider-container">
            <div className="container">
                <div className='row dr-slider-title w-100 p-0 m-0'>
                    <h3>پزشکان تپش</h3>
                    <hr />
                </div>
                <div className="row dr-slider-content w-100 m-0">
                    <div className="dr-slider-list">
                        <ul>
                            {doctorsInfoContext.sliderShowDr.map((item,index)=>{
                                if(item.slider==="true"){
                                    return(
                                        <li key={index} className={currentSliderShowDrImg===item.img?"show":null} onClick={function(){
                                            // doctorsInfoContext.setSliderShowDr(item);
                                            jj(item.img);
                                        }}>
                                            {item.name}
                                        </li>
                                    )    
                                }
                            })}
                        </ul>
                        <div className="promotes bg-danger">
                            
                        </div>
                    </div>
                    <div className="dr-slider p-0">
                        <img src={currentSliderShowDrImg} alt="2" />
                        {/* {console.log(doctorsInfoContext.sliderShowDr)} */}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomeMainDrSlider;