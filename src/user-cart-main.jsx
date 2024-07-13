import './css/fonts.css';
import './css/user-cart-main.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import FacilitiesContext from './context/facilitiesContext';
import imago from './src-images/mobile.jpg';
import CartContext from './context/cartContext';
import DoctorsInfoContext from './context/doctorsInfo';

const UserCartMain = () => {
    let cartContext=useContext(CartContext);
    let doctorsInfoContext=useContext(DoctorsInfoContext);
    let[cartArray,setCartArray]=useState([]);
    useEffect(()=>{
        // console.log("changed");
        for(let id of cartContext.cart){
            for(let doctor of doctorsInfoContext.doctors){
                if(doctor.id===id){
                    console.log(doctor.name);
                    let a=cartArray;
                    a.push(doctor);
                    setCartArray([a]);
                }
            }
        }
    },[cartContext,doctorsInfoContext])
    useEffect(()=>{
        console.log(cartArray);
    },[cartArray])

    return(
        <main>
            <div id="user-cart-main-container" className="container-fluid w-100">
                <div className="container p-0">
                    <div className='row user-cart-title w-100 p-0'>
                        <h3>نوبت های شما</h3>
                        <hr />
                    </div>
                    <div className='row flex-column gap-3 flex-md-row user-cart w-100 m-0 p-0'>
                        <div className="col bg-light border p-3">
                            <h4>لیست نوبت ها</h4>
                            <ul>
                                {cartArray[0] ? cartArray[0].map((item,index)=>{
                                    return(
                                        <li key={index}>{item.name}</li>
                                    )
                                }) : null}
                            </ul>
                        </div>
                        <div className="col bg-light border p-3">
                            <h4>نهایی کردن رزرو</h4>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );

}
 
export default UserCartMain;