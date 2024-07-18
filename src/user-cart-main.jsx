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
    let[totalPrice,setTotalPrice]=useState(0);
    useEffect(()=>{
        console.log(cartContext.cart);
        let priceResult=0;
        let x=false;
        if(!(cartContext.cart.length===0)){
            for(let item of cartContext.cart){
                let count=parseInt(item.count);
                let price=parseInt(item.price);
                console.log(count);
                console.log(price);
                let cross=count*price;
                console.log(cross);
                priceResult +=cross;
                console.log(priceResult);
            }    
        }
        x=true;
        if(x===true){
            setTotalPrice(()=>{
                let t=priceResult;
                return t;
            })
        }
        
    },[cartContext.cart])

    function listDelete(e,handler){
        let li;
        if(handler==="decrease"){
            console.log("decrease");
            li=e.target.parentElement.parentElement;
        }
        if(handler==="delete"){
            console.log("delete");
            li=e.target.parentElement.parentElement.parentElement;
        }

        // let li=e.target.parentElement.parentElement.parentElement;
        console.log("li is : ")
        console.log(li);
        // let span=li.children[0];
        let span=li.querySelector("input.list-span");
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
                <div className="container">
                    <div className='row user-cart-title w-100 p-0'>
                        <h3>نوبت های شما</h3>
                        <hr />
                    </div>
                    <div className='row flex-column gap-3 flex-md-row user-cart w-100 m-0 p-0'>
                        <div className="col bg-light reserve-list border p-3">
                            <h4>لیست نوبت ها</h4>
                            <ul>
                                {!(cartContext.cart.length===0) ? cartContext.cart.map((item,index)=>{
                                    return(
                                        <li key={index} className='border list-li'>
                                            <input className='list-span d-none' defaultValue={item.id}></input>
                                            <div className=' item-img'>
                                                <img src={item.img} alt="#" />
                                                <h4>{item.name}</h4>
                                            </div>
                                            <div className='d-flex flex-row gap-2 justify-content-end align-items-center'>
                                                <span className='price'>{item.price}</span>
                                                <button className='bg-success text-light rounded p-1 px-2 border-0 increase' onClick={function(e){
                                                    console.log(e.target.parentElement.parentElement);
                                                    let li=e.target.parentElement.parentElement;
                                                    let counter=li.querySelector("input.counter");
                                                    let span=li.querySelector("input.list-span");
                                                    let a=cartContext.cart;
                                                    for(let object of a){
                                                        let objectVal=parseInt(object.id);
                                                        let spanVal=parseInt(span.defaultValue);

                                                        if(objectVal===spanVal){
                                            
                                                            let index = a.indexOf(object);
                                                            a[index].count=parseInt(a[index].count)+1;
                                                            console.log("a is this : ");
                                                            console.log(a);
                                                            cartContext.setCart(()=>{
                                                                let t=[...a];
                                                                return t;
                                                            }
                                                            );
                                            
                                                        }
                                                        
                                                    }                                                

                                                }}>+</button>
                                                <input type='text' className='counter border px-2 p-1 rounded' value={item.count} readOnly></input>
                                                <button className='bg-warning text-light rounded p-1 px-2 border-0 decrease' onClick={function(e){
                                                    console.log(e.target.parentElement.parentElement);
                                                    let li=e.target.parentElement.parentElement;
                                                    let counter=li.querySelector("input.counter");
                                                    if(parseInt(counter.value)>1){
                                                        // counter.value=parseInt(counter.value)-1;
                                                        let span=li.querySelector("input.list-span");
                                                        let a=cartContext.cart;
                                                        for(let object of a){
                                                            let objectVal=parseInt(object.id);
                                                            let spanVal=parseInt(span.defaultValue);
                                                
                                                            if(objectVal===spanVal){
                                                
                                                                let index = a.indexOf(object);
                                                                a[index].count=parseInt(a[index].count)-1;
                                                                console.log("a is this : ");
                                                                console.log(a);
                                                                cartContext.setCart(()=>{
                                                                    let t=[...a];
                                                                    return t;
                                                                }
                                                                );
                                                
                                                            }
                                                            
                                                        }                                                
                                                    }else{
                                                        listDelete(e,"decrease");
                                                    }
                                                }}>-</button>
                                                <button className='bg-danger text-light delete' onClick={function(e){
                                                    listDelete(e,"delete");
                                                }}>
                                                    <img src="images/trash3.svg" className='bg-danger rounded' alt="" />
                                                </button>
                                            </div>
                                        </li>
                                    )
                                }) : "سبد خرید شما خالی است"}
                            </ul>
                        </div>
                        <div className="col bg-light border finish-reserve p-3">
                            <h4>نهایی کردن رزرو</h4>
                            <div>
                                {
                                    totalPrice
                                }
                                <span>
                                    تومان
                                </span>
                            </div>
                            <button className='bg-primary btn text-light'>پرداخت</button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );

}

export default UserCartMain;