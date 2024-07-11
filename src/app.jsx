import HomePage from "./home-page";
import React from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import DoctorsInfoContext from './context/doctorsInfo';
import FacilitiesContext from "./context/facilitiesContext";
import UserLoginContext from "./context/userLogin";
import { Route, Routes } from "react-router-dom";
import DoctorsArchive from "./doctors-archive";
import DoctorSinglePage from "./doctor-single-page";





const App = () => {
  const[loginCheck,setLoginCheck]=useState(false);
  const[usersList,setUsersList]=useState([]);
  const[loggedInUser,setLoggedInUser]=useState({});
  const [doctors, setDoctors] = useState([]);
  let [sliderShowDr, setSliderShowDr] = useState([]);
  const [facilities, setFacilities] = useState([]);

  useEffect(()=>{
    async function getUsersList(){
      const response = await axios.get("../usersList.json");
      console.log(response.data);
      setUsersList(response.data);
      // setSliderShowDr(response.data[0].img);
    }
    getUsersList();

  },[])

  useEffect(()=>{
    async function getFacilities(){
      const response = await axios.get("../facilities.json");
      console.log(response.data);
      setFacilities(response.data);
      // setSliderShowDr(response.data[0].img);
    }
    getFacilities();

  },[])
  useEffect(() => {
    async function getData(){
        const response = await axios.get("../doctors.json");
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
    <UserLoginContext.Provider value={{loggedInUser,setLoggedInUser,usersList,setUsersList,loginCheck,setLoginCheck}}>
      <FacilitiesContext.Provider value={{facilities,setFacilities}}>
        <DoctorsInfoContext.Provider value={{doctors,setDoctors,sliderShowDr,setSliderShowDr}}>
          <Routes>
              <Route path="doctorsArchive/:id" element={<DoctorSinglePage/>}/>
              <Route path="/doctorsArchive" element={<DoctorsArchive/>} />
              <Route path="/" element={<HomePage/>}/>
          </Routes>
        </DoctorsInfoContext.Provider>
      </FacilitiesContext.Provider>
    </UserLoginContext.Provider>

    // <FacilitiesContext.Provider value={{facilities,setFacilities}}>
    //   <RootContainer/>
    // </FacilitiesContext.Provider>
   );
}
 
export default App;