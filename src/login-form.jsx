import './css/fonts.css';
import './css/login-form.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import MobMenuContext from './context/mobileMenu';
import UserLoginContext from './context/userLogin';

const LOGINNAME_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const LOGINPASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#*$%]).{8,24}$/;
const REGISTER_URL = '/register';

const LoginForm = () => {
    let userLoginContext=useContext(UserLoginContext);
    const mobMenuContext = useContext(MobMenuContext);
    let [loginName, setLoginName] = useState("");
    let [loginPass, setLoginPass] = useState("");
    const [loginNameFocus, setLoginNameFocus] = useState(false);
    const [loginPassFocus, setLoginPassFocus] = useState(false);

    const [validLoginName, setValidLoginName] = useState(false);
    const [validLoginPass, setValidLoginPass] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);


    function closingLoginForm(){
        mobMenuContext.setLoginFormState(false);
    }

    useEffect(() => {
        setErrMsg("");
    }, [loginName,loginPass])

    useEffect(() => {
        setValidLoginName(LOGINNAME_REGEX.test(loginName));
    }, [loginName])

    useEffect(() => {
        setValidLoginPass(LOGINPASS_REGEX.test(loginPass));
    }, [loginPass])

    useEffect(()=>{
        if (loginSuccess){
            closingLoginForm();
            alert("welcom");
            setLoginName("");
            setLoginPass("");    
        }
    },[loginSuccess])
    
    const handleLoginSubmit= async(e)=>{
        e.preventDefault();
        const v1 = LOGINNAME_REGEX.test(loginName);
        const v2 = LOGINPASS_REGEX.test(loginPass);
        if (!v1 || !v2) {
            setErrMsg("مقادیر وارد شده نامعتبر است");
            return;
        }
        checkUserInfo();
    }
    useEffect(()=>{
        if (userLoginContext.loginCheck===true){
            setLoginSuccess(true);
        }
        console.log(userLoginContext.loginCheck);
    },[userLoginContext.loginCheck])
    console.log(userLoginContext.usersList);
    function checkUserInfo(){
        for(let item of userLoginContext.usersList){
            console.log(item);
            let found;
            if(loginName===item.email){
                if(loginPass===item.pass){
                    userLoginContext.setLoggedInUser(item);
                    userLoginContext.setLoginCheck(true);
                    found=true;
                    setErrMsg("");
                }else{
                    found="wrong";
                    setErrMsg("ایمیل یا گذرواژه درست نیست!");
                }
            }
            if(found===true || found==="wrong"){
                break;
            }else{
                setErrMsg("کاربری با این مشخصات یافت نشد !");
            }
        }
    }

    return ( 
        <>
            <div className="login-form-container">
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col close-button" >
                            <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"
                                onClick={closingLoginForm}
                            >
                                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </div>
                    </div>
                    <div className="row login-form-main">
                        <form onSubmit={handleLoginSubmit}>
                            <p className={errMsg ? "errMsg errMsg-show" : "errMsg"}>{errMsg}</p>
                            <label htmlFor="login-user-name">
                                ایمیل
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className={loginNameFocus && !validLoginName ? "bi bi-x-circle-fill label-svg-show" : "bi bi-x-circle-fill"} viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className={validLoginName ? "bi bi-check-circle-fill label-svg-show" : "bi bi-check-circle-fill"} viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                            </label>
                            <input id='login-user-name' type="email" value={loginName} onChange={(e)=>{setLoginName(e.target.value)}} autoComplete='off' aria-describedby='login-name-note'  onFocus={()=>setLoginNameFocus(true)} onBlur={()=>setLoginNameFocus(false)}/>
                            <div id='login-name-note' className={loginNameFocus && !validLoginName ? 'form-err login-name-err form-err-show' : 'form-err login-name-err'}>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                                    </svg>
                                    پسورد وارد شده معتبر نیست
                                    <br />
                                    لطفا از حروف انگلیسی استفاده کنید .
                                </p>
                            </div>
                            <br />
                            <label htmlFor="login-user-password">
                                رمز عبور
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className={loginPassFocus && !validLoginPass ? "bi bi-x-circle-fill label-svg-show" : "bi bi-x-circle-fill"} viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className={validLoginPass ? "bi bi-check-circle-fill label-svg-show" : "bi bi-check-circle-fill"} viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                            </label>
                            <input id='login-user-password' type="password" value={loginPass} onChange={(e)=>{setLoginPass(e.target.value)}} aria-describedby='login-pass-note' onFocus={()=>setLoginPassFocus(true)} onBlur={()=>setLoginPassFocus(false)}/>
                            <div id='login-pass-note' className={loginPassFocus && !validLoginPass ? 'form-err login-password-err form-err-show' : 'form-err login-password-err'}>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                                    </svg>
                                    پسورد وارد شده معتبر نیست
                                    <br />
                                    لطفا از حروف انگلیسی استفاده کنید .
                                </p>
                            </div>
                            <button disabled={!validLoginName || !validLoginPass ? true : false}>ورود به حساب</button>
                        </form>
                    </div>
                    <div className="row login-form-options">
                        <p>حساب کاربری ندارید؟
                            <span onClick={function(){
                                closingLoginForm();
                                mobMenuContext.setRegisterFormState(true);
                            }}> ثبت نام کنید !</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

 
export default LoginForm;