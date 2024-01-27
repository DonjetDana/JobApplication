<<<<<<< HEAD
import React from "react";

export default function Header() {
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


    return (
        <nav className="navbar d-flex  navbar-expand-sm bg-light navbar-light header">
            <div className="container-fluid">
                <div className="container d-flex">
                    <a className="navbar-brand logo-home" href="#">
                        <img src={require(`../images/job-removebg-preview.png`)}
                            width="80px" height="60px" alt="Roi Logo" />
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
                        <form className="search-form d-flex" id="searchForm">
                            <input className="form-control search-control me-2" type="text" placeholder="Search" />
                            <button className="btn btn-primary search-button" type="button">Search</button>
                        </form> : ""}

                </div>
            </div>
        </nav>
    )
=======
import React from "react";

export default function Header() {
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


    return (
        <nav className="navbar d-flex  navbar-expand-sm bg-light navbar-light header">
            <div className="container-fluid">
                <div className="container d-flex">
                    <a className="navbar-brand logo-home" href="#">
                        <img src={require(`../images/job-removebg-preview.png`)}
                            width="80px" height="60px" alt="Roi Logo" />
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
                        <form className="search-form d-flex" id="searchForm">
                            <input className="form-control search-control me-2" type="text" placeholder="Search" />
                            <button className="btn btn-primary search-button" type="button">Search</button>
                        </form> : ""}

                </div>
            </div>
        </nav>
    )
>>>>>>> 80359f5570d845048ef5852cbc2484606090cb71
}