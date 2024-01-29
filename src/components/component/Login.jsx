import React from "react"
import Logo from "../images/job-removebg-preview.png"
import "../css/login.css"

export default function Login({onChange,handleLogIn}) {

    function handleChange(event){
        const {name,value} = event.target;

        onChange(name,value)
    }

    function handleSignIn(e){
        e.preventDefault();
        handleLogIn(e);
    }


    return (
        <div>

        <div className="container-fluid bg-white ">
        <div className="container ">
                <div className="main-part mb-5">
                    <div className="logoDiv mb-3 d-flex justify-content-center ">
                        <img src={Logo} alt="Logo" width="80px" height="60px" />
                    </div>
                    <form  className="loginForm" onSubmit={(e) => handleSignIn(e)}>
                        <div className="content pt-3  my-0 mx-auto">
                            <p className="content-p text-center mt-3 mb-3 ">Log into JobApplication</p>
                            <div className="mb-3 mt-3 d-flex flex-column justify-content-center">
                                {/* <label htmlFor="email" className="text-center mb-2">Email:</label> */}
                                <div className="div-input">
                                    <input type="email" className="form-control ps-2" id="email" placeholder="Email or phone number" name="email" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="mb-3 mt-3 d-flex flex-column justify-content-center">
                                {/* <label htmlFor="psw" className="text-center mb-2">Password:</label> */}
                                <div className="div-input">
                                    <input type="password" className="form-control ps-2" id="password" placeholder="Type your password" name="password" onChange={handleChange}/>
                                </div>
                                <input type="submit" className="form-button my-0 mx-auto mt-3 mb-2 btn btn-primary" value="Log in" />
                                <a href="./signup" className="account text-center">Don't have an account? Sign up</a>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
           

            <div className="footer-login">
                <div className="container">
                    <div className="footer-content">
                        <ul className="footer-list d-flex justify-content-between  p-1">
                            <li><a href="#"  className="footer-text text-white ">Help</a></li>
                            <li><a href="#" className="footer-text text-white ">Terms and Condition</a></li>
                            <li><a href="#" className="footer-text text-white ">About</a></li>
                            <li><a href="#" className="footer-text text-white ">Create add</a></li>
                            <li><a href="#" className="footer-text text-white ">Projects</a></li>
                            <li><a href="#" className="footer-text text-white ">Privacy Center</a></li>
                            <li><a href="#" className="footer-text text-white ">Services</a></li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center text-white">Copyrights @ All Right Reserved 2024</div>
                </div>
                
            </div>

        </div>
    )
}