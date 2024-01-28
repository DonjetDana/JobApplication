  import React from "react";
  import ReactDOM from "react-dom";
  import { Route, Routes,useNavigate } from "react-router-dom";
  import Home from "./components/component/Home";
  import Login from "./components/component/Login";
  import Signup from "./components/component/Signup";
  import Main from "./components/component/Main";
  import JobInformation from "./components/component/JobInformation";
  import jobData from "./components/component/jobs.json"
  import Contact from "./components/component/Contact";
  import About from "./components/component/About";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
    )
  }


