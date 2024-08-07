import './css/fonts.css';
import './css/docs-arch-main.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import DoctorsInfoContext from './context/doctorsInfo';
import DocsArchFilters from './docs-arch-filters';
import { Link } from 'react-router-dom';
import FilteredContext from './context/filtered';

const DocsArchMain = () => {
    const doctorsInfoContext=useContext(DoctorsInfoContext);
    const[filteredDoctors,setFilteredDoctors]=useState([]);
    const[filters,setFilters]=useState("off");
    // console.log(degree+"sahdfkajshfksdf");
    useEffect(() => {
        sideBarStick();
    },[]);
    function openFilters(){
        if(filters==="off"){
            setFilters("on");
            console.log(filters);
        }else{
            setFilters("off");
            console.log(filters);

        }
    }

    function sideBarStick(){
        let sidebar = document.getElementsByClassName("docs-arch-side")[0];
        let sidebar_content = document.getElementsByClassName("arch-side-wrapper")[0];
        window.onscroll=()=>{
            let scrollTop = window.scrollY;
            let viewportHeight = window.innerHeight;
            let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;
            let sidebarHeight=sidebar.getBoundingClientRect().height;
            let contentHeight = sidebar_content.getBoundingClientRect().height;
            if(window.innerWidth>=1170){
                if(contentHeight+sidebarTop>viewportHeight){
                    if( scrollTop >= contentHeight - viewportHeight + sidebarTop) {
                        sidebar_content.style.transform = `translateY(-${(contentHeight - viewportHeight + sidebarTop)}px)`;
                        sidebar_content.style.position  = "fixed"; 
                        sidebar_content.style.top  = ""; 
         
                      }
                      else {
                        sidebar_content.style.transform = "";
                        sidebar_content.style.position  = "static"; 
                        sidebar_content.style.top  = ""; 
         
                      }     
                    if(viewportHeight>=sidebarHeight+sidebar.getBoundingClientRect().top){
                        sidebar_content.style.position  = "relative"; 
                        sidebar_content.style.transform = "";
                        sidebar_content.style.top  = sidebarHeight-contentHeight+"px"; 
    
                    }
                }else{
    
                     //   "اون 100 که نوشتم مقدار ارتفاع هدر هست . خودتون تعیین کنید ."     
                    if( scrollTop >= sidebarTop-100) {
                        sidebar_content.style.position  = "fixed"; 
                        sidebar_content.style.top  = "100px"; 
         
                    }
                      else {
                        sidebar_content.style.transform = "";
                        sidebar_content.style.position  = "static"; 
                        sidebar_content.style.top  = ""; 
         
                      }
    
                    //   "اون 64 فاصله ای  هست که هدر باید طی کنه تا به سایدبار برسه . خودتون تعیین کنید "     
                    if(scrollTop-64>=sidebarHeight-contentHeight){
                        sidebar_content.style.position  = "relative"; 
                        sidebar_content.style.top  = sidebarHeight-contentHeight+"px"; 
    
                    }
                }
    
            }
        }

    }
    return ( 
        <FilteredContext.Provider value={{filteredDoctors,setFilteredDoctors}}>
            <main>
                <div id="docs-arch-main-container" className='container-fluid w-100'>
                    <div className="container">
                        <div className='row docs-arch-title w-100 p-0'>
                            <h3>پزشکان تپش</h3>
                            <hr />
                        </div>
                        <div className='row docs-arch w-100 m-0 p-0'>
                            <aside className=" docs-arch-side">
                                <button className='w-100' onClick={openFilters}>
                                    <span>فیلتر ها</span>
                                    <img src="images/chevron-compact-down.svg" className={filters==="on" ? "turn" : "ordinary"} alt="#" />
                                </button>
                                <div className={filters==="on" ? "arch-side-wrapper arch-side-wrapper-on" : "arch-side-wrapper"}>
                                    <DocsArchFilters/>
                                </div>
                            </aside>
                            <div className=" p-0 docs-arch-body">
                                {filteredDoctors.map((item,index)=>{
                                    return(
                                        <div key={index} className="card">
                                            <div className="card-info">
                                                <img className='card-img' src={item.img} alt="5" />
                                                <div className="card-title">
                                                    <h3>{item.name}</h3>
                                                </div>
                                                <span className='card-tag'>{item.proffesion}</span>
                                                <div className="card-explain">
                                                    {item.location ? 
                                                    <p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-hospital" viewBox="0 0 16 16">
                                                            <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"/>
                                                            <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z"/>
                                                        </svg>
                                                        {item.location}
                                                    </p> : null}
                                                    {item.degree ? 
                                                    <p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                                                          <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
                                                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
                                                        </svg>                                        
                                                        {item.degree}
                                                    </p> : null}
                                                    {item.phone ? 
                                                    <p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                                        </svg>                                        
                                                        {item.phone}
                                                    </p> : null}
                                                </div>
                                                    
                                            </div>
                                            <Link to={`/doctorsArchive/${item.id}`} className="card-link">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"/>
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    )    
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </FilteredContext.Provider>
    );
}
 
export default DocsArchMain;