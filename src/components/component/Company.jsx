import React from "react";

import{ database } from "../../firebase"
import { ref, set } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "../../firebase";

export default function Company(){
    const [jobData,setJobData] = React.useState({
        id:5,
        emriPunes:"",
        pozita:"",
        kategoria:"",
        date:'',
        orari:"",
        tags:"",
        detajet:"",
        image:"",
        lokacioni:""

    })

    function handleChange(e){
        const { name, value} = e.target;

      
            setJobData({ ...jobData, [name]: value });
          

        console.log("data : " + jobData)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
  

        setJobData(prevState => prevState.id+1)
        const dataRef = ref(database,`/${jobData.id}`)

        set(dataRef,jobData)
        .then((data) => {
            console.log(data)
        })
        .catch((error)=>{
            console.error("Error : " + error)
        })
    }
    return(
        <div>
            <h1>hello from COmpany</h1>

            <form  onSubmit={handleSubmit}>
                <input type="text" name="emriPunes" placeholder="Type company name" className="form-control" 
                onChange={(e)=> handleChange(e)}/>
                <input type="text" name="pozita" placeholder="Type company position" className="form-control"
                onChange={(e)=> handleChange(e)}/>
                <input type="text" name="kategoria" placeholder="Type company category" className="form-control"
                onChange={(e)=> handleChange(e)}/>
                <input type="date" name="date" placeholder="Type job lastDate" className="form-control"
                onChange={(e)=> handleChange(e)}/>
                <input type="text" name="orari" placeholder="Type Schedule" className="form-control"
                onChange={(e)=> handleChange(e)}/>
                <input type="text" name="tags" placeholder="Type Tags" className="form-control"
                onChange={(e)=> handleChange(e)}/>
                <input type="text" name="detajet" placeholder="Type Details" className="form-control"
                onChange={(e)=> handleChange(e)}/>
                <input type="text" name="lokacioni" placeholder="Type Lokacionin" className="form-control"
                onChange={(e)=> handleChange(e)}/>
                <input type="text" name="image" placeholder="Choose image" className="form-control"
                onChange={(e)=> handleChange(e)}/>
                <input type="submit" value="Posto punen" />
            </form>

        </div>
    )
}