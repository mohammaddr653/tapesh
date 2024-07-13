import Header from "./header";
import HomeMain from "./home-main";
import './css/user-cart.css';
import Footer from "./footer";
import DocsArchMain from "./docs-arch-main";
import UserCartMain from "./user-cart-main";


const UserCart = () => {
    return (
        <div id="user-cart-container">
            <Header></Header>
            <UserCartMain></UserCartMain>
            <Footer></Footer>
        </div>
    );
}
 
export default UserCart;