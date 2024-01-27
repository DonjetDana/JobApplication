import React from "react"
import JobLogo from "../images/job-removebg-preview.png"
import "../css/home.css"
import BackgroundImage from "../images/bg-section.png"
import Gjirafa from "../images/gjirafa.png"
import Intersport from "../images/compact-mark-rgb-block-bounding-box.jpg"
import Ubt from "../images/ubt.png"
import Waikiki from "../images/lc.jpg"
import Starlabs from "../images/starlabs.png"
import Footer from "./Footer"



export default function Home() {

    return (
        <div>
            <nav className="navbar d-flex  navbar-expand-sm bg-light navbar-light header">
                <div className="container-fluid ">
                    <div className="container d-flex">
                        <a className="navbar-brand logo-home" href="#">
                            <img src={JobLogo} width="80px" height="60px" alt="Roi Logo" />
                        </a>
                        <div className="button-center">
                            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#collapsenavbar">
                                <span className="navbar-toggler-icon ikona"></span>
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
                            <div className="auth">
                                <button className="btn"><a href="/login"  className="auth-a  auth-a-login">Login</a></button>
                                <p className="auth-paragraph">or</p>
                                <button className="btn"><a href="/signup" className="auth-a auth-a-signup">Signup</a></button>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="container-fluid demo">
                <div className="container hero">
                    <div className="section-content d-flex justify-content-center">
                        <div className="row">
                            <div className="col-sm-6 content-1">
                                <h1 className="hero-h1 pt-5 f-italic">Hire for the right person in every role</h1>
                                <p className="mt-3">Greenhouse is the hiring operating system for people-first companies. From sourcing to structured interviewing and onboarding, our all-in-one software gives you the tools to make better, fairer and more confident hiring decisions.</p>
                                <button className="btn btn-primary">Get started for free</button>
                            </div>
                            <div className="col">
                                <img src={BackgroundImage} alt="Background Image" className="background-image mt-5 ms-5" />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center fs-5">
                        <p className="d-flex mt-5  text-muted trusted">Trusted by over 1,000+ companies </p>
                    </div>
                </div>

                <div className="container-fluid slider">
                    <div className="container slider-container" id="sliderContainer">
                        <div className="image-section d-flex  ">
                            <img src={Gjirafa} alt="Gjirafa" />
                            <img src={Intersport} alt="Gjirafa" style={{ width: "100px" }} />
                            <img src={Ubt} alt="Ubt" />
                            <img src={Waikiki} alt="Waikiki" />
                            <img src={Starlabs} alt="Waikiki" />
                            <img src={Gjirafa} alt="Gjirafa" />
                            <img src={Intersport} alt="Gjirafa" style={{ width: "100px" }} />
                            <img src={Ubt} alt="Ubt" />
                            <img src={Waikiki} alt="Waikiki" />
                            <img src={Starlabs} alt="Waikiki" />
                            <img src={Gjirafa} alt="Gjirafa" />
                            <img src={Intersport} alt="Gjirafa" style={{ width: "100px" }} />
                            <img src={Ubt} alt="Ubt" />
                            <img src={Waikiki} alt="Waikiki" />
                            <img src={Starlabs} alt="Waikiki" />

                        </div>
                    </div>
                </div>
            </section>


            <div className="container second-section  d-flex justify-content-center">
                <div className="row">
                    <div className="col">
                        <div className="box mb-5 mt-5 d-flex justify-content-center bg-light ">
                            <div className="box-content p-5 d-block">
                                <i className="material-icons grid">grid_view</i>
                                <br />
                                <h2 className="box-content-h2">Build compelling job ads</h2>
                                <div className="main-box mt-1  text-muted">
                                    <p>Get expert advice on how to attract more top candidates.</p>
                                </div>
                                <div className="footer-box  d-flex justify-content-center">
                                    <p>Learn more about Build</p>
                                    <a href="#"><i className="material-icons ms-2">arrow_forward</i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="box d-flex mb-5 mt-5 justify-content-center bg-light ">
                            <div className="box-content p-5 d-block">
                                <i className="material-icons grid">grid_view</i>
                                <br />
                                <h2>Promote your ad on 250+ job search sites</h2>
                                <div className="main-box mt-1  text-muted">
                                    <p>Multipost ads to top job boards and maximise your reach in one click.</p>
                                </div>
                                <div className="footer2-box d-flex justify-content-center">
                                    <p className="mt-5">Learn more about Promote</p>
                                    <a href="#" className="mt-5"> <i className="material-icons  ms-2">arrow_forward</i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>


    )
}