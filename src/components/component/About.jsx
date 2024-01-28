import React from "react";
import Header from "./Header";
import "../css/about.css"
import Footer from "./Footer";

export default function About() {
    return (
        <div>
            <Header />

            <div className="about-section">
            </div>

            <div className="about-section-content mt-5">
                <div className="container">
                    <h1 className="text-muted text-center">
                        RRETH JOBAPPLICATION
                    </h1>
                    <p className="text-center px-3 mt-4 about-paragraph">
                        Welcome to JobApplication, your trusted partner in the realm of job applications in Kosovo.
                        We take pride in revolutionizing the hiring process, providing an innovative and user-friendly platform designed to
                        connect talented individuals with exciting career opportunities across the country. At JobApplication, our mission is
                        to bridge the gap between employers and job seekers, fostering a dynamic and diverse workforce that drives success for
                        businesses and individuals alike. With a commitment to efficiency, transparency, and inclusivity, we strive to simplify
                        the hiring journey for both employers and candidates. Our team is dedicated to ensuring a seamless experience,
                        leveraging cutting-edge technology to match the right talent with the right opportunities. Join us in shaping the future
                        of employment in Kosovo, where every connection made through our platform contributes to the growth and prosperity of
                        businesses and individuals alike.
                    </p>
                </div>
            </div>

            <div className="partnesers-list d-flex  justify-content-center  mt-5">
                <div className="partners-content">
                    <p className="fw-bold fs-5 text-center">Some of the partners list</p>
                    <ul className="d-flex list-style-none list-unstyled flex-wrap">
                        <li className="p-2 about-li">Gjirafa </li>
                        <li className="p-2 about-li">Starlabs </li>
                        <li className="p-2 about-li">Intersport </li>
                        <li className="p-2 about-li">Lc Waikiki </li>
                        <li className="p-2 about-li">AutoZone </li>
                        <li className="p-2 about-li">Shell </li>
                        <li className="p-2 about-li">Hib Petrol </li>
                        <li className="p-2 about-li">Liri</li>
                        <li className="p-2 about-li">Lisi-M</li>
                        <li className="p-2 about-li">Viva Fresh</li>
                        <li className="p-2 about-li">Solvify</li>
                        <li className="p-2 about-li">Migros</li>
                        <li className="p-2 about-li">SunaSport</li>
                        <li className="p-2 about-li">Nike</li>
                        <li className="p-2 about-li">Adidas</li>
                        <li className="p-2 about-li">McDonalds</li>
                        <li className="p-2 about-li">BurgerKing</li>
                    </ul>
                </div>
            </div>

            

            <div className="our-work mb-5">
                <div className="container">
                    <p className="text-center fw-bold">Our Work</p>
                    <div className="row">
                            <div className="col our-work-column">
                                    <p className="text-center d-flex align-items-center">
                                        Prezenca e lartë e JobApplication
                                        në Web dhe në rrjete sociale,
                                        mundëson konkurset e publikuara
                                        të arrijnë kandidatët potencial
                                        për klientët të cilët përdorin
                                        shërbimet tona.
                                    </p>
                                </div> 
                        <div className="col our-work-column">
                            <p className="text-center d-flex align-items-center">
                                JobApplication është rrjeti më i madh
                                i punësimit në Kosovë.
                                80% e audiencës së KosovaJob
                                kanë moshën 25 - 45 vjeç.
                            </p>
                        </div>
                        <div className="col our-work-column">
                            <p className="text-center d-flex align-items-center">
                                Më shumë se 70% e vizitorëve në
                                JobApplication janë vizitorë të cilët
                                vazhdimisht përcjellin platformën
                                tonë për konkurset
                                e reja të punës.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}