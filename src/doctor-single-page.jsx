import './css/fonts.css';
import './css/doctor-single-page.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import DoctorsInfoContext from './context/doctorsInfo';
import DocsArchFilters from './docs-arch-filters';
import { Link } from 'react-router-dom';
import FilteredContext from './context/filtered';
import DocSingleMain from './doc-single-main';
import Header from "./header";
import Footer from "./footer";


const DoctorSinglePage = () => {
    return ( 
        <div id="doctor-single-page">
            <Header></Header>
            <DocSingleMain></DocSingleMain>
            <Footer></Footer>
        </div>
    );
}
 
export default DoctorSinglePage;