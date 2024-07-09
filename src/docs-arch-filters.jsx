import './css/fonts.css';
import './css/docs-arch-filters.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import DoctorsInfoContext from './context/doctorsInfo';
const DocsArchFilters = () => {
    let degree=[];
    let location=[];
    let a=[degree,location];
    const [appliedFilters, setAppliedFilters] = useState([""],[""]);
    const doctorsInfoContext=useContext(DoctorsInfoContext);
    useEffect(() => {
        let inputs=document.querySelectorAll("div.docs-arch-filters div.checkbox-filter>span>input");
        for(let input of inputs){
            for(let filter of degree){
                if(document.getElementById(filter)){
                    let selectedInput=document.getElementById(filter);
                    selectedInput.checked=true; 
                    setAppliedFilters([a]);    
                }
            }
            for(let filter of location){
                if(document.getElementById(filter)){
                    let selectedInput=document.getElementById(filter);
                    selectedInput.checked=true; 
                    setAppliedFilters([a]);    
                }
            }    
    
            input.addEventListener("change",function(e){
                if(e.target.className==="degree"){
                    console.log("degree");
                    if(e.target.checked){
                        degree.push(e.target.name);
                    }else{
                        let index = degree.indexOf(e.target.name);
                        degree.splice(index,1);
                    }
                }
                if(e.target.className==="location"){
                    console.log("location");
                    if(e.target.checked){
                        location.push(e.target.name);
                    }else{
                        let index = location.indexOf(e.target.name);
                        location.splice(index,1);
                    }
                }

                // "باید آرایه را به اینصورت ست کنیم وگرنه تغییرات استیت ما ردیابی نمیشود ."
                setAppliedFilters([a]); 

            });
        }
    },[]);
    useEffect(() => {
        console.log(appliedFilters);
        checkBoxFilter();
    },[appliedFilters,doctorsInfoContext]);

    
    function checkBoxFilter(){
        let filteredDoctors=[];
        for(let doctor of doctorsInfoContext.doctors){
            // console.log(doctor);

            if(appliedFilters[0][0] || appliedFilters[0][1]){
                for(let appliedDegree of appliedFilters[0][0]){
                    // console.log(appliedDegree);
                    let result=doctor.degree.includes(appliedDegree);
                    if(result===true){
                        filteredDoctors.push(doctor);
                        // console.log(doctor.name+" added");
                        break;
                    }
                }
                for(let appliedLocation of appliedFilters[0][1]){
                    let result=doctor.location.includes(appliedLocation);
                    if(result===true && !filteredDoctors.includes(doctor)){
                        filteredDoctors.push(doctor);
                        break;
                    }
                }

            }

        }
        console.log(filteredDoctors);
        
        // doctorsInfoContext.setFilteredDoctors(filteredDoctors);
    }
    return (
        <div className="docs-arch-filters w-100">
            <div className='checkbox-filter'>
                <h4>انتخاب تخصص :</h4>
                <span>
                    <input type="checkbox" name="children" className='degree' id="children"/>
                    <label htmlFor="children">کودکان و نوزادان</label>
                </span>
                <span>
                    <input type="checkbox" name="inner" className='degree' id="inner" />
                    <label htmlFor="inner">داخلی</label>
                </span>
                <span>
                    <input type="checkbox" name="kidney" className='degree' id="kidney" />
                    <label htmlFor="kidney">کلیه و مجاری ادراری</label>
                </span>
            </div>
            <div className='checkbox-filter'>
                <h4>انتحاب درمانگاه :</h4>
                <span>
                    <input type='checkbox' name="amiralmomenin" className='location' id="amiralmomenin"/>
                    <label htmlFor="amiralmomenin">درمانگاه امیرالمومنین</label>
                </span>
                <span>
                    <input type="checkbox" name="nezam" className='location' id="nezam" />
                    <label htmlFor="nezam">بیمارستان نظام مافی</label>
                </span>
                <span>
                    <input type="checkbox" name="yasin" className='location' id="yasin" />
                    <label htmlFor="yasin">درمانگاه یاسین</label>
                </span>
            </div>
        </div>
    );
}
 
export default DocsArchFilters;