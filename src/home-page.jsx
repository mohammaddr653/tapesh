import Header from "./header";
import HomeMain from "./home-main";
import './css/home-page.css';
import Footer from "./footer";

const HomePage = () => {
    return (
        <div id="home-page">
            <Header></Header>
            <HomeMain></HomeMain>
            <Footer></Footer>
        </div>
    );
}
 
export default HomePage;