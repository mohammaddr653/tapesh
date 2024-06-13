import RootContainer from "./rootContainer";
import React from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import DoctorsInfoContext from './context/doctorsInfo';





const App = () => {
  const [doctors, setDoctors] = useState([]);
  let [sliderShowDr, setSliderShowDr] = useState([]);
  useEffect(() => {
    async function getData(){
        const response = await axios.get("doctors.json");
        console.log(response.data);
        console.log("hh");
        setDoctors(response.data);
        // setSliderShowDr(response.data[0].img);
        let a=[];
        for(let n of response.data){
          if(n.slider==="true"){
            console.log(n.img);
            a.push(n);
            console.log(a);
          }
        }
        setSliderShowDr(a);

    };
    getData();
  },[]);

  return ( 
    <DoctorsInfoContext.Provider value={{doctors,setDoctors,sliderShowDr,setSliderShowDr}}>
      <RootContainer/>
    </DoctorsInfoContext.Provider>
   );
}
 
export default App;