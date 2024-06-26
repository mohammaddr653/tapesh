import './css/fonts.css';
import './css/home-main.css';
import HomeMainBanner from './home-main-banner';
import HomeMainTrust from './home-main-trust';
import HomeMainDrSlider from './home-main-dr-slider';
import HomeMainDoctorsArc from './home-main-doctors-arc';
import HomeMainHowItWorks from './home-main-how-it-works';
import HomeMainTapeshFacilities from './home-main-tapesh-facilities';
import HomeMainSlider from './home-main-slider';
const HomeMain = () => {
    return ( 
        <main>
            <div id="main-container" className='container-fluid p-0 w-100'>
                <HomeMainBanner></HomeMainBanner>
                <HomeMainTrust></HomeMainTrust>
                <HomeMainSlider></HomeMainSlider>
                <HomeMainDrSlider></HomeMainDrSlider>
                <HomeMainDoctorsArc></HomeMainDoctorsArc>
                <HomeMainHowItWorks></HomeMainHowItWorks>
                <HomeMainTapeshFacilities></HomeMainTapeshFacilities>
            </div>
        </main>
    );
}
 
export default HomeMain;