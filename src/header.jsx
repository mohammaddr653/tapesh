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
                                            |
                                            <Link to={`/userCart`} className='d-flex gap-1 p-0' role='button'>
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-alarm" viewBox="0 0 16 16">
                                                  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z"/>
                                                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1"/>
                                                </svg> */}
                                                نوبت ها
                                            </Link>
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