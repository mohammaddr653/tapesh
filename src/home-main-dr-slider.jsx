import './css/fonts.css';
import './css/home-main-dr-slider.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const HomeMainDrSlider = () => {
    const [doctors, setDoctors] = useState([]);
    let [sliderShowDr, setSliderShowDr] = useState([]);

    useEffect(() => {
        async function getData(){
            const response = await axios.get("doctors.json");
            console.log(response.data);
            setDoctors(response.data);
            setSliderShowDr(response.data[0])

        };
        getData();
    },[]);
    useEffect(() => {
        console.log(sliderShowDr);
    },[sliderShowDr]);

    // function getClickedDr(x){
    //     console.log("d");
    // }
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
                            {doctors.map((item,index)=>{
                                if(item.slider==="true"){
                                    return(
                                        <li key={index} className={sliderShowDr.id===item.id?"show":null} onClick={function(){
                                            setSliderShowDr(item);
                                        }}>
                                            {item.name}
                                        </li>
                                    )    
                                }
                            })}
                        </ul>
                    </div>
                    <div className="dr-slider p-0">
                        <img src={sliderShowDr.img} alt="2" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomeMainDrSlider;