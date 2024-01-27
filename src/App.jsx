<<<<<<< HEAD
  import React from "react";
  import ReactDOM from "react-dom";
  import { Route, Routes,useNavigate } from "react-router-dom";
  import Home from "./components/component/Home";
  import Login from "./components/component/Login";
  import Signup from "./components/component/Signup";
  import Main from "./components/component/Main";
  import JobInformation from "./components/component/JobInformation";
  import jobData from "./components/component/jobs.json"

  export default function App() {
     const [selectedJob,setSelectedJob] = React.useState([]);
     const navigate = useNavigate();

    function sendData(job){
      if (job !== "") {
        setSelectedJob(job);
        console.log("data in state " + selectedJob);
        navigate("/jobinformation")
      }
    }

    React.useEffect(() => {
      // This will log the updated state after each state change
      console.log("Updated state:", selectedJob);
    }, [selectedJob]);
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main data={jobData} onClick={sendData} />} />
          <Route path="/jobinformation" element={<JobInformation  jobData={selectedJob} />} />

        </Routes>
      </div>
    )
  }
=======
import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Router from "react-router-dom"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
>>>>>>> 80359f5570d845048ef5852cbc2484606090cb71


