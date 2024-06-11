import './css/fonts.css';
import './css/mobile-menu.css';
import HeaderSearch from './header-search';
import { useEffect } from 'react';
import { useContext } from 'react';
import MobMenuContext from './context/mobileMenu';

const MobileMenu = (props) => {
    // let jj=props.mobBoolian;
    const mobMenuContext = useContext(MobMenuContext);
    useEffect(() => {
    }, [props.mobBoolian]);
    return ( 
        <div id='mobile-menu' className={mobMenuContext.mobIconClicked ? "mobile-menu-show" : null}>
            <div className="mobile-menu-container container-fluid w-100">
                <div className="close-button" >
                    <svg  xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"
                        onClick={function(){
                            mobMenuContext.setMobIconClicked(false);
                        }}
                    >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
                <div className='row'>
                    <div className="col mob-search-container">
                        <HeaderSearch tagsNum={1}></HeaderSearch>
                    </div>
                </div>
                <div className="row">
                    <div className="col mob-menu w-100">
                        {mobMenuContext.headerCon.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <a href={item.href} className='mob-menu-links'>{item.title}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='row'>
                    <div className="col mob-account-container">
                        <span onClick={function(){mobMenuContext.setLoginFormState(true)}}>ورود</span>
                        |
                        <span onClick={function(){mobMenuContext.setRegisterFormState(true)}}>ثبت نام</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default MobileMenu;