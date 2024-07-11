import './css/fonts.css';
import './css/doc-single-main.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import DoctorsInfoContext from './context/doctorsInfo';
import DocsArchFilters from './docs-arch-filters';
import { Link } from 'react-router-dom';
import FilteredContext from './context/filtered';

const DocSingleMain = () => {
    return ( 
        <main>
            <div id='doc-single-main-container' className='container-fluid w-100 bg-danger'>
                <div className='container p-0 bg-dark'>
                    <div className="row w-100 m-0 p-0 bg-success">sdsd</div>
                </div>
            </div>
        </main>
    );
}
 
export default DocSingleMain;