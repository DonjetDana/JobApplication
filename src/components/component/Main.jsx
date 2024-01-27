import React from "react"
import JobLogo from "../images/job-removebg-preview.png"
import "../css/main.css"
// import data from "./jobs.json"
import Footer from "./Footer"
import Header from "./Header"


export default function Main({data,onClick}){

    
    const [dinamicAdd,setDinamicAdd] = React.useState("");

    function handleJobClick(job) {
        onClick(job);
        console.log("main " + job);
      }

    const imageUrl = [
       "kuzhinier.gif",
        "account.png",
        "tregu.gif",
       "recepsionist.gif",
       "1705501633.gif",
       "neptun.gif",
       "minva.gif"
    ]

    React.useEffect(() => {
         const randomNumber = Math.floor(Math.random() * imageUrl.length);
        setDinamicAdd(prevState => imageUrl[randomNumber])
         console.log("image setted" + dinamicAdd)
     }, [dinamicAdd]);
   

    return(
        <div>
            
            <Header />

            <div className="container-fluid">
                <div className="container">
                    <div className="adds">
                        <div className="row h-auto d-flex justify-content-between">
                            <div className=" col-sm-8 mt-5  add-image" >
                            {dinamicAdd && (
                                <img
                                    src={require(`../images/${dinamicAdd}`)}
                                    id="dynamicImage"
                                    className="rounded-3"
                                    width="100%"
                                    height="260px"
                                    alt="Dynamic Add"
                                />
                                )}
                            </div>
                            <div className="formaKonkursit bg-light col-sm mt-5 rounded-3">
                                <p className="text-muted pt-1 fs-5 text-center">Kerko konkursin</p>
                                <form action="" className="form-controll">
                                   <input type="text" placeholder="Kerko sipas pozites se punes" 
                                   className=" form-control w-100" />
                                   <div className="custom-select">
                                        <select className="form-control mt-2">
                                                <option value="">Qyteti</option>
                                                <option value="Gjakove">Gjakove</option>
                                                <option value="Peje">Peje</option>
                                                <option value="Prishtine">Prishtine</option>
                                                <option value="Ferizaj">Ferizaj</option>
                                        </select>
                                        <i class="fa-solid fa-angle-down"></i>
                                   </div>
                                   <div className="custom-select">
                                        <select className="form-control mt-2">
                                                <option value="">Industria</option>
                                                <option value="Arkitekture">Arkitekture</option>
                                                <option value="Banka">Banka</option>
                                                <option value="Prodhim">Prodhim</option>
                                                <option value="IT">IT</option>
                                        </select>
                                        <i class="fa-solid fa-angle-down"></i>
                                   </div>
                                   <input type="submit" className="btn btn-dark text-white mt-2 w-100" value="Kerko"  />
                                   <p className="pargrafiFormes">Filtro sipas pozites,qytetit dhe industrise</p>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="container bg-light ">
                        <p className="konkurset text-center p-2 m-3 ">Konkurset e hapura</p>
                    </div>
                    
                    <div className="row mt-4 mb-5">
                    {data ? data.map((job)=>(
                        <div className="col-sm-4 mt-2" key={job.id} onClick={() => handleJobClick(job)}>
                        <div className="cards d-flex flex-wrap">
                            <div className="job-image">
                                <img src={require(`../images/${job.image}`)}  className="p-2" width="100px" height="90px" alt="Lc Waikiki" />
                            </div>
                           
                            <div className="body d-flex flex-column justify-content-around">
                                    <div className="cards-header mt-3 d-flex flex-wrap text-wrap mb-2 ps-2">
                                        {job.emriPunes}</div>
                                <div className="cards-footer mt-3 d-flex ps-2">
                                    <i className="fa-solid fa-location-dot mt-1 me-1"></i>
                                <div>{job.lokacioni}</div> 
                                   <div className="dataPerfundimit d-flex flex-wrap ms-3">
                                        <i class="fa-solid fa-clock mt-1 ms-1"></i>
                                        <p className="ms-1">{job.data}</p>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )):""}
                     

                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}