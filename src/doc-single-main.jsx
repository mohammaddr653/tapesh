import './css/fonts.css';
import './css/doc-single-main.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import DoctorsInfoContext from './context/doctorsInfo';
import DocsArchFilters from './docs-arch-filters';
import { Link } from 'react-router-dom';
import FilteredContext from './context/filtered';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const DocSingleMain = () => {
    let params = useParams();
    const doctorsInfoContext=useContext(DoctorsInfoContext);
    const [clickedDoc,setClickedDoc]=useState([]);
    useEffect(()=>{
        console.log(doctorsInfoContext.doctors);
        console.log(params.id);

        for(let doctor of doctorsInfoContext.doctors){
            if(doctor.id===params.id){
                console.log(doctor.name);
                setClickedDoc(doctor);
            }
        }
    },[doctorsInfoContext])

    return (
        <main>
            <div id='doc-single-main-container' className='container-fluid w-100'>
                <div className='container'>
                    <div className="row w-100 m-0 p-0 d-md-none d-flex doc-name">
                        <span><h3>{clickedDoc.name}</h3></span>
                    </div>
                    <div className="row flex-md-row flex-column-reverse w-100 p-0 doctor-cv">
                        <div className="col-12 col-md doctor-cv-content">
                            <ul>
                                <li>
                                    <h3>{clickedDoc.name}</h3>
                                    {/* <p>آیدی گرفته شده : {JSON.stringify(params.id)}</p> */}
                                </li>
                                <li>
                                    <span>
                                        تحصیلات :
                                    </span>
                                    <span>
                                        {clickedDoc.degree}
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        لوکیشن :
                                    </span>
                                    <span>
                                        {clickedDoc.location}
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        تخصص :
                                    </span>
                                    <span>
                                        {clickedDoc.proffesion}
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        شماره تماس مطب :
                                    </span>
                                    <span>
                                        {clickedDoc.phone}
                                    </span>
                                </li>
                            </ul>
                            <div className='doctor-reserve w-100'>
                                <div className='reserve-info w-100'>
                                    <div>
                                        <span>هزینه رزرو نوبت :</span>
                                    </div>
                                    <div className='reserve-price'>
                                        <span>57000</span>
                                        <span>تومان</span>
                                    </div>
                                </div>
                                <div className='reserve-button w-100'>
                                    <button>رزرو نوبت</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md p-0 doctor-image">
                            <img src={clickedDoc.img} alt="#" />
                        </div>
                    </div>
                    <div className="row w-100 doctor-bio">
                        <div className="col-12">
                            <span>درباره </span>
                            <span>{clickedDoc.name}</span>
                        </div>
                        <div className="col doctor-bio-container">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default DocSingleMain;