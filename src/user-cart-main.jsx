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
    // useEffect(()=>{
    //     for(let id of cartContext.cart){
    //         for(let doctor of doctorsInfoContext.doctors){
    //             if(doctor.id===id){
    //                 console.log(doctor.name);
    //                 let a=cartArray;
    //                 a.push(doctor);
    //                 setCartArray([a]);
    //             }
    //         }
    //     }
    // },[cartContext,doctorsInfoContext])

    // function checkRepeat(){
    //     let listLi=document.getElementsByClassName("list-li");
    //     let listSpan=document.getElementsByClassName("list-span");
    //     for(let n=0;n<listSpan.length;n++){
    //         console.log("n is "+ n);
    //         for(let x=0;x<listSpan.length;x++){
    //             console.log("x is "+ x);
    //             console.log(listSpan[n] , listSpan[x]);
    //             if(!(x===n) && listSpan[n].innerHTML===listSpan[x].innerHTML){
    //                 console.log("n span is "+listSpan[n].innerHTML);
    //                 console.log("x span is "+listSpan[x].innerHTML);
    //                 let nRepeated=listLi[n]
    //                 let xRepeated=listLi[x];
    //                 if(!(nRepeated.style.display==="none")){
    //                     xRepeated.style.display="none";
    //                     console.log(cartContext.cart.indexOf(listSpan[x].innerHTML));
    //                 }
    //             }else{
    //                 console.log("not match");
    //             }
    //         }
    //     }
    // }

    // function enableButtons(){
    //     alert("published");
    //     if(document.getElementsByClassName("delete")[3]){
    //         let listLi=document.getElementsByClassName("list-li");
    //         let listInput=document.getElementsByClassName("list-span");
    //         let increaseButt=document.getElementsByClassName("increase");
    //         let counter=document.getElementsByClassName("counter");
    //         let decreaseButt=document.getElementsByClassName("decrease");
    //         let deleteButt=document.getElementsByClassName("delete");
    //         console.log(deleteButt);

    //         console.log("listInput[1] value is : ")
    //         console.log(listInput[1]);
    //         deleteButt[1].addEventListener("click",function (event){
    //             event.preventDefault();
    //             jj();
    //         })
    //         function jj(){
    //             function myDisplayer(some) {
    //                 cartContext.setCart(some);
    //                 console.log("cartContext.setCart(x) : ");
    //                 console.log("delete end");    
    //             }    
    //             let myPromise = new Promise(function(myResolve, myReject) {
    //                 console.log("delete start");
    //                 console.log("input is : ")
    //                 console.log(listInput[1]);
    //                 console.log("input value is : ")
    //                 console.log(listInput[1].defaultValue);
    //                 console.log("cartContext is : ");
    //                 console.log(cartContext.cart);
    //                 let a=cartContext.cart;
    //                 console.log("a is : ");
    //                 console.log(a);
    //                 let x = a.filter(e=>!(e.id === listInput[1].defaultValue));
    //                 console.log("x is : ");
    //                 console.log(x);
                
                    
    //                 if (x) {
    //                   myResolve(x);
    //                 } else {
    //                   myReject(null);
    //                 }
    //             });
    //             myPromise.then(
    //                 function(value) {myDisplayer(value);},
    //                 function(error) {myDisplayer(error);}
    //               );
          
    //         }  
    //     }    

    //     for(let n=0;n<listLi.length;n++){
    //         increaseButt[n].addEventListener("click",function(){
    //             console.log(counter[n]);
    //             counter[n].innerHTML=parseInt(counter[n].innerHTML)+1;

    //         });
    //         decreaseButt[n].addEventListener("click",function(){
    //             console.log(counter[n]);
    //             if(parseInt(counter[n].innerHTML)>0){
    //                 counter[n].innerHTML=parseInt(counter[n].innerHTML)-1;
    //             }
    //         });
    //     }

    // }

    useEffect(()=>{
        console.log(cartContext.cart)
    },[cartContext.cart])

    function jj(e){
        let li=e.target.parentElement.parentElement;
        console.log("li is : ")
        console.log(li);
        let span=li.ch;
        let a=cartContext.cart;
        for(let object of a){
            let objectVal=parseInt(object.id);
            let spanVal=parseInt(span.defaultValue);

            if(objectVal===spanVal){

                let index = a.indexOf(object);
                a.splice(index,1);
                cartContext.setCart(()=>{
                    let t=[...a];
                    return t;
                }
                );

            }
            
        }

    }

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
                                {cartContext.cart ? cartContext.cart.map((item,index)=>{
                                    return(
                                        <li key={index} className='border list-li'>
                                            <input className='list-span d-none' defaultValue={item.id}></input>
                                            <div className='item-img'>
                                                <img src={item.img} alt="#" />
                                                <h4>{item.name}</h4>
                                            </div>
                                            <div className='d-flex flex-row gap-2 justify-content-end align-items-center'>
                                                <span className='price'>{item.price}</span>
                                                <button className='bg-success text-light rounded p-1 px-2 border-0 increase' onClick={function(e){
                                                    console.log(e.target.parentElement.parentElement);
                                                    let li=e.target.parentElement.parentElement;
                                                    let counter=li.children[2].children[2];
                                                    counter.value=parseInt(counter.value)+1;

                                                }}>+</button>
                                                <input type='text' className='counter border px-2 p-1 rounded' defaultValue={item.count}></input>
                                                <button className='bg-warning text-light rounded p-1 px-2 border-0 decrease' onClick={function(e){
                                                    console.log(e.target.parentElement.parentElement);
                                                    let li=e.target.parentElement.parentElement;
                                                    let counter=li.children[2].children[2];
                                                    if(parseInt(counter.value)>1){
                                                        counter.value=parseInt(counter.value)-1;
                                                    }
                                                }}>-</button>
                                                <button className='bg-danger text-light delete' onClick={function(e){
                                                    jj(e);
                                                }}>
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                                    </svg> */}
                                                    *
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