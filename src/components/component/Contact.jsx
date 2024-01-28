import React from "react"
import "../css/contact.css"
import Header from "./Header"
import Footer from "./Footer"

export default function Contact() {
    return (
        <div>
            <Header />

            <section className="photo-section">
            </section>

            <div className="section-contact-text  d-flex justify-content-center mt-5">
                <div className="container d-flex justify-content-center flex-column ">
                    <h2 className="text-center">Platforma #1  per punesim ne Kosove</h2>
                    <p className="p-1 text-center">JobApplication shërben si urë lidhëse e mundësive të reja të karrierës të ofruara nga punë-dhënësit për punë-kërkuesit
                        dhe si e tillë ka mundësuar që më shumë se 15,000 persona të gjejnë vende të punës.
                        {/* CopyRight KosovaJOb */}
                    </p>
                    <p className="text-center">
                        Një staf i dedikuar i 10 personave, bën që konkurset e klientëve të KosovaJob të arrijnë deri tek kandidatët e duhur,
                        në kohën e duhur. Bashkëpunimi me më shumë se 1,000 biznese lokale dhe internacionale,
                        bën që KosovaJob të ketë një vlerë të veçantë në tregun e punës në Kosovë.
                    </p>
                </div>

            </div>

            <section className="contact-section mt-5 ">
                <div className="container">
                    <div className="contact-form ">
                        <form action="">
                            <p className="text-center text-muted fs-2">KONTAKTO</p>
                            <p className="text-center">JobApplication.com | Qyteza Muhaxhereve, Rr. Hamez  Jashari Nr. 62, Prishtinë, Kosovë 10000</p>
                            <p className="text-center mb-5">+383 (0)45 11 14 14 | info@kosovajob.com | www.kosovajob.com</p>
                            <div className="row">
                                <div className="col d-flex flex-column ">
                                    <input type="text" placeholder="Kompania/Organizata" className="mb-2 ps-1 form-control" />
                                    <input type="e-mail" placeholder="Emaili juaj" className="mb-2 ps-1 form-control" />
                                    <input type="text" placeholder="Telefoni" className="mb-2 ps-1 form-control" />
                                </div>
                                <div className="col w-100">
                                    <input type="textarea" placeholder="Mesazhi juaj" className="w-100 textarea-input form-control" />
                                </div>
                            </div>
                            <div className="dergo-buton d-flex justify-content-end">
                                <input type="submit" value="Dërgo" className="btn btn-dark" />
                            </div>
                        </form>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}