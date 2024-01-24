import React from "react"
import JobLogo from "../images/job-removebg-preview.png"
import "../css/main.css"
import data from "./jobs.json"


export default function Main(){

    console.log(data)
    const [isSearchFormVisible,setIsSearchFormVisible] = React.useState(true);

    function toggleSearch(){ 
        if(isSearchFormVisible == false){
            setTimeout(()=>{
                setIsSearchFormVisible((prevState) => !prevState)
            },350)
        }
        else{
            setIsSearchFormVisible((prevState) => !prevState)
        }
    }



    return(
        <div>
            <nav className="navbar d-flex  navbar-expand-sm bg-light navbar-light header">
                <div className="container-fluid">
                    <div className="container d-flex">
                        <a className="navbar-brand logo-home" href="#">
                            <img src={JobLogo} width="80px" height="60px" alt="Roi Logo" />
                        </a>
                        <div className="button-center">
                            <button className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapsenavbar"
                            onClick={toggleSearch}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="collapsenavbar">
                            <ul className="navbar-nav my-0 mx-auto">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                        {isSearchFormVisible ?
                         <form className="search-form d-flex"  id="searchForm">
                            <input className="form-control search-control me-2" type="text" placeholder="Search" />
                            <button className="btn btn-primary search-button" type="button">Search</button>
                        </form> : "" }
                        
                    </div>
                </div>
            </nav>

            <div className="container-fluid">
                <div className="container">
                    <div className="adds">
                        <div className="row d-flex justify-content-between">
                            <div className=" col-sm-7 bg-dark mt-5 " >
                                <img src={JobLogo} />
                            </div>
                            <div className="col-sm-4 mt-5 bg-success  ">
                                <img src={JobLogo} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                    {data ? data.map((job)=>(
                        <div className="col-sm-4" key={job.id}>
                        <div className="cards d-flex">
                            <img src={require(`../images/${job.image}`)} width="150px" height="150px" alt="Lc Waikiki" />
                            <div className="body d-flex flex-column justify-content-right">
                                <div className="cards-header mb-5">{job.emriPunes}</div>
                                <div className="cards-footer">{job.lokacioni}</div>
                            </div>
                        </div>
                    </div>
                    )):""}
                     

                    </div>
                </div>
            </div>

        </div>
    )
}
