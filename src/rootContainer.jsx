import Header from "./header";
import HomeMain from "./home-main";
import './css/rootContainer.css';

const RootContainer = () => {
    return (
        <div id="root-container">
            <Header></Header>
            <HomeMain></HomeMain>
        </div>
    );
}
 
export default RootContainer;