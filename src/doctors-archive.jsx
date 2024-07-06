import Header from "./header";
import HomeMain from "./home-main";
import './css/doctors-archive.css';
import Footer from "./footer";
import DocsArchMain from "./docs-arch-main";

const DoctorsArchive = () => {
    return (
        <div id="doctors-archive">
            <Header></Header>
            <DocsArchMain></DocsArchMain>
            <Footer></Footer>
        </div>
    );
}
 
export default DoctorsArchive;