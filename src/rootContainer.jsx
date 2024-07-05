import Header from "./header";
import HomeMain from "./home-main";
import './css/rootContainer.css';
import Footer from "./footer";

const RootContainer = () => {
    return (
        <div id="root-container">
            <Header></Header>
            <HomeMain></HomeMain>
            <Footer></Footer>
        </div>
    );
}
 
export default RootContainer;