import './css/fonts.css';
import './css/home-main.css';
import HomeMainBanner from './home-main-banner';
import HomeMainTrust from './home-main-trust';
import HomeMainDrSlider from './home-main-dr-slider';
import HomeMainArticles from './home-main-articles';
const HomeMain = () => {
    return ( 
        <main>
            <div id="main-container" className='container-fluid p-0 w-100'>
                <HomeMainBanner></HomeMainBanner>
                <HomeMainTrust></HomeMainTrust>
                <HomeMainDrSlider></HomeMainDrSlider>
                <HomeMainArticles></HomeMainArticles>
            </div>
        </main>
    );
}
 
export default HomeMain;