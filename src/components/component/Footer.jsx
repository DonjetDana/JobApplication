import React  from "react";

export default function Footer(){
    return(
        <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12">
                            <div className="first">
                                <h4>About Our Company</h4>
                                <ul className="footer-ul ">
                                    <li>Analytical Skills</li>
                                    <li>Problem-solving skills</li>
                                    <li> Critical-thinking skills</li>
                                    <li>Detail-oriented</li>
                                    <li>Multitasking</li>
                                    <li>Self-motivated</li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="second">
                                <h4> Navigate</h4>
                                <ul className="footer-ul">
                                    <li><a href="#" className="footer-a text-white" >Home</a></li>
                                    <li><a href="#" className="footer-a text-white">Projects</a></li>
                                    <li><a href="#" className="footer-a text-white">About</a></li>
                                    <li><a href="#" className="footer-a text-white">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="third">
                                <h4> Contact</h4>
                                <ul className="footer-ul">
                                    <li>Donjet Dana </li>
                                    <li><i className="far fa-envelope"></i> donjetdana7@hotmail.com</li>
                                    {/* <li><i class="far fa-envelope"></i> email@yahoo.com</li> */}
                                    <li><i className="fas fa-map-marker-alt"></i> Prishtine, Kosove </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">Copyrights @ All Right Reserved 2024</div>
            </div>
    )
}