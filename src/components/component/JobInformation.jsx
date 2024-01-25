import React from "react"
import Header from "./Header"
import "../css/jobinformation.css"

export default function JobInformation() {
    return (
        <div>
            <Header />

            <div className="container mt-5">
                <div className="row">
                    <div className="information col-sm-9">
                        <div className="information-header d-flex">
                            <div className="p-2">
                                <img src={require(`../images/starlabs.png`)} alt="Job Logo" width="250px" height="250px" />
                            </div>
                            <div className="information-title d-flex flex-column w-100">
                                <div className="information-name mb-5">
                                    <h2 className="text-muted">Front-End Developer </h2>
                                    <div className="save-icon d-flex flex-column jusify-content-center align-center">
                                        <i className="fa-regular fa-heart ms-2 fw-5"></i>
                                        <p className="text-center">Ruaje</p>
                                    </div>
                                </div>
                                <div className="company-name d-flex justify-content-between px-2">
                                    <p className="text-muted">STARLABS</p>
                                    <a href="#" className="text-decoration-none text-muted">More about the company</a>
                                </div>
                                <div className="tags d-flex flex-column px-2 ">
                                    <p className="fw-bold fs-5 mb-0">Tags</p>
                                    <ul className="tags-ul d-flex list-unstyled">
                                        <br />
                                        <li className="tags-li ">Starlabs</li>
                                        <li className="tags-li">Front End</li>
                                        <li className="tags-li">Technology</li>
                                        <li className="tags-li">Js</li>
                                        <li className="tags-li">Json</li>
                                        <li className="tags-li">Json</li>
                                        <li className="tags-li">Json</li>
                                        <li className="tags-li">Json</li>
                                        <li className="tags-li">Json</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="information-body informationSize p-2 text-muted">
                            <div className="mb-1 fw-bold ">Front-End Developer (MID/Senior)</div>
                            <p>StarLabs is looking for a Front-End Developer (Mid/Senior) to join our team On-Site here at StarLabs. If you are an experienced professional with more than 2+ years of experience and a drive for continuous improvement, we encourage you to apply.</p>
                            <div className="information-body-list">
                                <div className="fw-bold mb-2"> Main tech we're looking for :</div>
                                <ul className="mb-2">
                                    <li className="mt-2 ms-4 information-body-li">Modern Javascript (ES6+/functional)</li>
                                    <li className="mt-2 ms-4 information-body-li">Experience with JS frameworks (Angular, React, Vue)</li>
                                    <li className="mt-2 ms-4 information-body-li">Typescript</li>
                                    <li className="mt-2 ms-4 information-body-li">SASS/CSS3/HTML5</li>
                                    <li className="mt-2 ms-4 information-body-li">Web Components</li>
                                    <li className="mt-2 ms-4 information-body-li">Familiarity with testing frameworks, such as Jest and Cypress</li>
                                    <li className="mt-2 ms-4 information-body-li">Use of npm and Git</li>
                                    <li className="mt-2 ms-4 information-body-li">CI/CD</li>
                                </ul>
                            </div>
                            <div className="information-body-list">
                                <div className="fw-bold mb-2">Skills in the following areas are considered a Plus:</div>
                                <ul className="mb-2">
                                    <li className="mt-2 ms-4 information-body-li">
                                        Exposure to different types of web applications: PWA, SPA, Serverless
                                    </li>
                                    <li className="mt-2 ms-4 information-body-li">
                                        Implementation of RWD UIs
                                    </li>
                                    <li className="mt-2 ms-4 information-body-li">
                                        Develop and test across multiple browsers, platforms, and devices
                                    </li>
                                    <li className="mt-2 ms-4 information-body-li">
                                        Optimize web applications for maximum speed and scalability
                                    </li>
                                    <li className="mt-2 ms-4 information-body-li">
                                        Understanding of web performance optimization techniques
                                    </li>
                                    <li className="mt-2 ms-4 information-body-li">
                                    Stay up-to-date with emerging trends and technologies in frontend development
                                    </li>
                                </ul>
                            </div>
                            <div className="information-body-list">
                                <div className="fw-bold mb-2">Offer and Benefits:</div>
                                <ul className="mb-2">
                                    <li className="mt-2 ms-4 information-body-li">
                                    Health insurance (covered 100% by SL).
                                    </li>
                                    <li className="mt-2 ms-4 information-body-li">
                                    Game room (Dedicated space for Playstation, Darts, Table football, Ping Pong).
                                    </li>
                                    <li className="mt-2 ms-4 information-body-li">
                                    Social Clubs & Events (Weekly dates for sports, participation in local tournaments, esports and tournaments).
                                    </li>
                                    <li className="mt-2 ms-4 information-body-li">
                                    Work environment with no high pressure or micromanagement.
                                    </li>
                                    <li className="mt-2 ms-4 information-body-li">
                                    Work environment with no high pressure or micromanagement.
                                    </li>
                                </ul>
                            </div>

                            <p>If you are interested and want to be part of a wonderful team where you have the opportunity to develop in the international arena, apply or send your CV through the button below or to:
                                <strong className="text-decoration-underline"> jobs@starlabspro.com</strong></p>

                            <p>Please Note: Candidates meeting the specified qualifications will be shortlisted.</p>

                            <button className="btn btn-primary">
                                <i class="fa-solid fa-location-arrow me-1"></i>
                                Apliko ketu
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga provident eaque laboriosam labore! Qui accusamus facilis provident voluptatibus molestias laboriosam.</p>
                        <p> lapaLorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, cum.</p>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-sm-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sint.
                    </div>
                </div> */}
            </div>
        </div>
    )
}