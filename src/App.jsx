  import React from "react";
  import ReactDOM from "react-dom";
  import { Route, Routes,useNavigate } from "react-router-dom";
  import Home from "./components/component/Home";
  import Login from "./components/component/Login";
  import Signup from "./components/component/Signup";
  import Main from "./components/component/Main";
  import JobInformation from "./components/component/JobInformation";
  // import jobData from "./components/component/jobs.json"
  import Contact from "./components/component/Contact";
  import About from "./components/component/About";
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth, database } from './firebase';
  import Company from "./components/component/Company";
  import { get, onValue } from "firebase/database";
  import { ref } from "firebase/database";


  export default function App() {
     const [selectedJob,setSelectedJob] = React.useState([]);
     const [jobAppData,setJobAppData] = React.useState([])
     const [logData,setLogData] = React.useState({
      email: "",
      password: "",
     });
     
     const navigate = useNavigate();

     React.useEffect(()=>{
  
        const dataRef = ref(database,"/")

         // Listen for changes in the data
       const unsubscribe = onValue(dataRef,(snapshot) =>{
          const newData =  snapshot.val()
          setJobAppData(newData)
       })

       return () => unsubscribe()

       
     },[])

     console.log(jobAppData)

     function updateLoginData(eventName,eventValue){   
        if(eventValue !== ""){
          setLogData({...logData,[eventName]:eventValue})
          localStorage.setItem("username",logData.email)
        }else{
          alert("Something went wrong")
        }
      console.log(eventName,eventValue);
     }

    function sendData(job){
      if (job !== "") {
        setSelectedJob(job);
        console.log("data in state " + selectedJob);
        navigate("/jobinformation")
      }
    }

    const handleLogIn = async (e) => {

      try{
        await signInWithEmailAndPassword(auth,logData.email,logData.password);
        navigate("/main")
      }catch(error){
          console.log(error)
      }
    }

  

    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login handleLogIn={handleLogIn} onChange={updateLoginData} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main data={jobAppData} onClick={sendData} />} />
          <Route path="/jobinformation" element={<JobInformation  jobData={selectedJob} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route  path="/company" element={<Company />}/>
        </Routes>
      </div>
    )
  }


