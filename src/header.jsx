import './css/fonts.css';
import './css/header.css';
import HeaderSearch from './header-search';
import MobileMenu from './mobile-menu';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import MobMenuContext from './context/mobileMenu';
import LoginForm from './login-form';
import RegisterForm from './register-form';
import { useContext } from 'react';
import UserLoginContext from './context/userLogin';
import { Link } from 'react-router-dom';

const Header = () => {
    let userLoginContext=useContext(UserLoginContext);
    let body=document.getElementsByTagName("body")[0];
    const [headerCon, setHeaderCon] = useState([]);
    let [mobIconClicked, setMobIconClicked] = useState(false);
    let [loginFormState , setLoginFormState] = useState(false);
    let [registerFormState , setRegisterFormState] = useState(false);

    useEffect(() => {
        setScrollOptions();
        async function getData(){
            const response = await axios.get("../headerMenu.json");
            console.log(response);
            console.log(response.data);
            setHeaderCon(response.data);

        };
        getData();
        form();
    },[]);

    useEffect(()=>{
        stateChanges();
    },[mobIconClicked,loginFormState,registerFormState]);

    function stateChanges(){
        if(mobIconClicked===true || loginFormState===true || registerFormState===true){
            body.style.overflowY="hidden";
        }else if(mobIconClicked===false && loginFormState===false){
            body.style.overflowY="scroll";

        }
    }
    function form(){
        let loginForm=document.getElementsByClassName("login-form")[0];
        
        if(loginForm.style.height >= 350){
            alert("h");
        }
    }
    return ( 
        <>
            <MobMenuContext.Provider value={{mobIconClicked , setMobIconClicked,loginFormState,setLoginFormState,registerFormState,setRegisterFormState,headerCon}}>
                <header>
                    <div id="header-container" className='container-fluid p-0 w-100'>
                        <div className="container">
                            <div className="row">
                                <div className="col-1 header-right">
                                    <a href="https://digikala.com">
                                        <img src="../images/logot.png" width={"100px"} alt="k"/>
                                    </a>
                                </div>
                                <div className="col p-0 header-left">
                                    <div className="header-mob-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"
                                             onClick={function(){setMobIconClicked(true)}}
                                        >
                                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                        </svg>
                                    </div>
                                    {headerCon.map((item,index)=>{
                                        return(
                                            <div key={index}>
                                                <Link to={item.href} className='header-links'>{item.title}</Link>
                                            </div>
                                        )
                                    })}
                                    {userLoginContext.loginCheck===true ?
                                        <div className="header-account d-none d-md-flex">
                                            <a href="#" className='p-0'>{userLoginContext.loggedInUser.name}</a>
                                        </div>
                                        : 
                                        <div className="header-account d-none d-md-flex" onClick={function(){setLoginFormState(true)}}>
                                            <span>ورود | ثبت نام</span>
                                        </div>
                                    }
                                    <div className='d-none d-md-block'><HeaderSearch tagsNum={0}></HeaderSearch></div>
                                </div>
                            </div>
                        </div>
                        <div id="bg-dark" className={mobIconClicked ? "bg-dark-show" : null} onClick={function(){setMobIconClicked(false)}}></div>
                        <MobileMenu mobBoolian={mobIconClicked}/>
                        <div className={loginFormState ? "login-form login-form-show" : "login-form"}>
                            <h3>ورود</h3>
                            <LoginForm></LoginForm>
                            <div className={loginFormState ? "dark-win dark-win-show" : "dark-win"} onClick={function(){setLoginFormState(false)}}></div>
                        </div>
                        <div className={registerFormState ? "register-form register-form-show" : "register-form"}>
                            <h3>ثبت نام</h3>
                            <RegisterForm></RegisterForm>
                            <div className={registerFormState ? "dark-win dark-win-show" : "dark-win"} onClick={function(){setRegisterFormState(false)}}></div>
                        </div>
                    </div>  
                </header>
            </MobMenuContext.Provider>
        </>
     );
}
function setScrollOptions(){
    var headerContainer=document.getElementById("header-container");
    var lastScrollTop = 0;

    window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        if(!(headerContainer.classList.contains==="header-container-change")){
            headerContainer.classList.add("header-container-change");
        } 
    } else if (st===0) {
        headerContainer.classList.remove("header-container-change");
        lastScrollTop=st;
    }
    lastScrollTop = st <= 0 ? 0 : st;
    }, false);

}

 
export default Header;