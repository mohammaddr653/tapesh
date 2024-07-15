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
                    // if(a.includes(doctor)){
                    //     checkRepeat(doctor);
                    // }
                    a.push(doctor);
                    setCartArray([a]);
                }
            }
        }
    },[cartContext,doctorsInfoContext])

    function checkRepeat(){
        let zz=document.getElementsByClassName("list-li");
        let jj=document.getElementsByClassName("list-span");
        console.log(jj[0]);
        for(let n=0;n<jj.length;n++){
            for(let x=0;x<jj.length;x++){
                console.log(jj[n] , jj[x]);
                if(!(x===n) && jj[n].innerHTML===jj[x].innerHTML){
                    console.log(jj[x].innerHTML);
                    let nRepeated=zz[n]
                    let xRepeated=zz[x];
                    if(!(nRepeated.style.display==="none")){
                        xRepeated.style.display="none";
                    }
                }
            }
        }
    }
    useEffect(()=>{
        console.log(cartArray);
    },[cartArray])

    useEffect(()=>{
        checkRepeat();
    })

    return(
        <main>
            <div id="user-cart-main-container" className="container-fluid w-100">
                <div className="container p-0">
                    <div className='row user-cart-title w-100 p-0'>
                        <h3>نوبت های شما</h3>
                        <hr />
                    </div>
                    <div className='row flex-column gap-3 flex-md-row user-cart w-100 m-0 p-0'>
                        <div className="col bg-light reserve-list border p-3">
                            <h4>لیست نوبت ها</h4>
                            <ul>
                                {cartArray[0] ? cartArray[0].map((item,index)=>{
                                    return(
                                        <li key={index} className='border list-li' doctorId={item.id}>
                                            <span className='list-span d-none'>{item.id}</span>
                                            <div className='item-img'>
                                                <img src={item.img} alt="#" />
                                                <h4>{item.name}</h4>
                                            </div>
                                            <div className='d-flex flex-row gap-2 justify-content-end align-items-center'>
                                                <span className='price'>{item.price}</span>
                                                <button className='bg-success text-light rounded p-1 px-2 border-0 increase'>+</button>
                                                <span className='counter border px-2 p-1 rounded'>0</span>
                                                <button className='bg-warning text-light rounded p-1 px-2 border-0 decrease'>-</button>
                                                <button className='bg-danger text-light rounded p-1 px-2 border-0 delete'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </li>
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