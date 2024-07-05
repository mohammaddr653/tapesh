import './css/fonts.css';
import './css/footer.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';


const PROMOTEEMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;



const Footer = () => {
    let [promoteEmail, setPromoteEmail] = useState("");
    const [validPromoteEmail, setValidPromoteEmail] = useState(false);

    useEffect(() => {
        setValidPromoteEmail(PROMOTEEMAIL_REGEX.test(promoteEmail));
    }, [promoteEmail])

    const handlePromoteSubmit= async(e)=>{
        e.preventDefault();
        if(validPromoteEmail){
            alert("success");
            setPromoteEmail("");
            setValidPromoteEmail(false);
        }
    }

    return(
        <div id='footer'>
            <div className='container'>
                <div className="row p-0 w-100 m-0 footer-top">
                    <div className='footer-logo p-0'>
                        <a href="#"><h2>تپش</h2></a>
                    </div>
                    <div className='footer-phones p-0'>
                        <p>
                            <span>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
                            |
                            <span>۰۲۱-۹۱۰۰۰۱۰۰</span>
                            |
                            <span>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
                        </p>
                    </div>
                </div>
                <div className="row p-0 w-100 footer-bottom">
                    <div className="col-12 col-md-3">
                        <div className="footer-list">
                            <h3>همراه با تپش</h3>
                            <ul>
                                <li>
                                    <a href="">اخبار و مقالات</a>
                                </li>
                                <li>
                                    <a href="">فروش در تپش</a>
                                </li>
                                <li>
                                    <a href="">فرصت های شغلی</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className=" footer-list">
                            <h3>خدمات مشتریان</h3>
                            <ul>
                                <li>
                                    <a href="">پاسخ به پرسش های متداول</a>
                                </li>
                                <li>
                                    <a href="">رویه های بازگرداندن کالا</a>
                                </li>
                                <li>
                                    <a href="">حریم خصوصی</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="footer-list">
                            <h3>راهنمای اپلیکیشن</h3>
                            <ul>
                                <li>
                                    <a href="">نحوه ثبت سفارش</a>
                                </li>
                                <li>
                                    <a href="">رویه ارسال سفارش</a>
                                </li>
                                <li>
                                    <a href="">شیوه های پرداخت</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className=" footer-promote">
                            <h3>شبکه های اجتماعی</h3>
                            <div className='footer-social-links'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-telegram" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                    </svg>
                                </span>
                            </div>
                            <div className="footer-mail">
                                <h3>با ثبت ایمیل ، از رویداد ها مطلع شوید</h3>
                                <form>
                                    <input type="email" placeholder='ایمیل شما' value={promoteEmail} onChange={(e)=>{setPromoteEmail(e.target.value)}} autoComplete='off'/>
                                    <button onClick={handlePromoteSubmit} disabled={ !validPromoteEmail? true : false}>ثبت</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <div className='row copyright'>
                    <p className='p-0 w-100 m-0'>تمام حقوق این وبسایت متعلق به محمد امین درخشنده است</p>
                </div>

            </div>
        </div>
    );
} 
export default Footer;