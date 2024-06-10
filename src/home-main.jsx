import './css/fonts.css';
import './css/home-main.css';
import HomeMainBanner from './home-main-banner';
const HomeMain = () => {
    return ( 
        <main>
            <div id="main-container" className='container-fluid p-0 w-100'>
                <HomeMainBanner></HomeMainBanner>
            </div>
        </main>
    );
}
 
export default HomeMain;