import './css/fonts.css';
import './css/docs-arch-filters.css';
import { useEffect } from 'react';
const DocsArchFilters = () => {    
    return (
        <div className="docs-arch-filters w-100">
            <div className='checkbox-filter'>
                <h4>انتخاب تخصص :</h4>
                <span>
                    <input type="checkbox" name="children" id="children" />
                    <label htmlFor="children">کودکان و نوزادان</label>
                </span>
                <span>
                    <input type="checkbox" name="inner" id="inner" />
                    <label htmlFor="inner">داخلی</label>
                </span>
                <span>
                    <input type="checkbox" name="kidney" id="kidney" />
                    <label htmlFor="kidney">کلیه و مجاری ادراری</label>
                </span>
            </div>
            <div className='checkbox-filter'>
                <h4>انتحاب درمانگاه :</h4>
                <span>
                    <input type='checkbox' name="amiralmomenin" id="amiralmomenin" />
                    <label htmlFor="amiralmomenin">درمانگاه امیرالمومنین</label>
                </span>
                <span>
                    <input type="checkbox" name="nezam" id="nezam" />
                    <label htmlFor="nezam">بیمارستان نظام مافی</label>
                </span>
                <span>
                    <input type="checkbox" name="yasin" id="yasin" />
                    <label htmlFor="yasin">درمانگاه یاسین</label>
                </span>
            </div>
        </div>
    );
}
 
export default DocsArchFilters;