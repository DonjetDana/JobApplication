import React from "react"
import Logo from "../images/job-removebg-preview.png"
import "../css/login.css"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from '../../firebase';
import { ref, set } from 'firebase/database';

export default function Signup() {
    const [signupData,setSignupData] = React.useState({
        firstname:"",
        lastname:"",
        email:"",
        birthday:'',
        gender:"",
        password:""
       })
    
    const navigate = useNavigate();

    function handleSignup(event){
        const {name,value} = event.target
        setSignupData({...signupData,[name]:value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/;
        if (!signupData.firstname.trim()) {
           alert("Please fill the field firstname");
           return;
        }
        if (!signupData.lastname.trim()) {
            alert("Please fill the field lastname")
            return;
        }
        if (!signupData.email.trim() || !emailRegex.test(signupData.email)) {
            alert("Please fill the field email")
            return;
        }
        if (!signupData.birthday.trim()) {
            alert("Please fill the field birthday")
            return;
        }
        if (!signupData.gender.trim()) {
            alert("Please fill the field gender")
            return;
        }
        if (!signupData.password.trim() || !passwordRegex.test(signupData.password)) {
            alert("Password must have min.8 characters,one uppercase letter,one number and one special character")
        }

        // If no errors, proceed with submitting data
        console.log("signupData:", signupData);

        try{
            const userCredentials = await createUserWithEmailAndPassword(
                auth,
                signupData.email,
                signupData.password
            )

            const uid = userCredentials.user.uid

            const userRef = ref(database,`users/${uid}`);
            set(database,userRef,{
                firstname:signupData.firstname,
                lastname:signupData.lastname,
                email:signupData.email,
                birthday:signupData.birthday,
                gender:signupData.gender,
                password:signupData.password
            })
           
        }catch(error){
            console.log(error)
        }

        navigate("/main");
    }
    
    
    return (
        <div>

            <div className="container-fluid bg-white ">
                <div className="container ">
                    <div className="main-part mb-5">
                        <div className="logoDiv mb-3 d-flex justify-content-center ">
                            <img src={Logo} alt="Logo" width="80px" height="60px" />
                        </div>
                        <form  className="signupForm" onSubmit={handleSubmit}>
                            <div className="contentSignup pt-3  my-0 mx-auto">
                                <h2 className=" text-center mt-3 mb-3 ">Create a new acount</h2>
                                <div className="mb-3 mt-3 d-flex flex-column justify-content-center">
                                    <div className="row div-row">
                                        <div className="col div-col">
                                            <input type="text" className="form-control ps-2" id="firstname" placeholder="First name" name="firstname" 
                                            onChange={(e)=>handleSignup(e)}/>
                                        </div>
                                        <div className="col div-col">
                                            <input type="text" className="form-control ps-2" id="lastname" placeholder="Last name" name="lastname" 
                                          onChange={(e)=>handleSignup(e)}/>
                                        </div>
                                    </div>

                                </div>
                                <div className="mb-3 mt-3 d-flex flex-column justify-content-center">
                                    <div className="div-input">
                                        <input type="email" className="form-control ps-2" id="email" placeholder="Email or phone number" name="email" 
                                       onChange={(e)=>handleSignup(e)}/>
                                    </div>
                                </div>
                                <div className="mb-3 mt-3 d-flex flex-column justify-content-center">
                                    <div className="div-input">
                                        <input type="date" className="form-control ps-2" id="birthday" name="birthday" 
                                        onChange={(e)=>handleSignup(e)}/>
                                    </div>
                                </div>
                                <div className="mb-3 mt-3 d-flex flex-column justify-content-center">
                                    <div className="row div-row">
                                        <div className="col div-col">
                                            <div className="checkboxes-signup">
                                                <label className="w-100 ps-1">Male
                                                    <input type="radio" className="checkbox-input" value="Male" name="gender" 
                                                   onChange={(e)=>handleSignup(e)}/>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col div-col">
                                            <div className="checkboxes-signup">
                                                <label className="w-100 ps-1">Female
                                                    <input type="radio" className="checkbox-input" value="Female" name="gender" 
                                                   onChange={(e)=>handleSignup(e)}/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 mt-3 d-flex flex-column justify-content-center">
                                    <div className="div-input">
                                        <input type="password" className="form-control ps-2" id="password" placeholder="Password" name="password" 
                                      onChange={(e)=>handleSignup(e)}/>
                                    </div>

                                    <p className="policy text-muted mt-1 ">People who use our service may have uploaded your contact information to JobApplication.
                                        <a href="#" className="account text-center"> Learn more</a>
                                    </p>
                                    
                                    <p className="policy text-muted">By clicking Sign Up, you agree to our <a href="#" className="account text-center">Terms</a>
                                        , <a href="#" className="account text-center">Privacy Policy</a> and <a href="#" className="account text-center">Cookies Policy</a>.
                                        You may receive SMS Notifications from us and can opt out any time.
                                    </p>
                                    <input type="submit" className="form-button my-0 mx-auto mt-3 mb-2 btn btn-success" value="Sign up" />
                                    <a href="./login" className="account text-center">Already have an account?</a>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="footer-login">
                <div className="container">
                    <div className="footer-content">
                        <ul className="footer-list d-flex justify-content-between  p-1">
                            <li><a href="#" className="footer-text text-white ">Help</a></li>
                            <li><a href="#" className="footer-text text-white ">Terms and Condition</a></li>
                            <li><a href="#" className="footer-text text-white ">About</a></li>
                            <li><a href="#" className="footer-text text-white ">Create add</a></li>
                            <li><a href="#" className="footer-text text-white ">Projects</a></li>
                            <li><a href="#" className="footer-text text-white ">Privacy Center</a></li>
                            <li><a href="#" className="footer-text text-white ">Services</a></li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center text-white">Copyrights @ All Right Reserved 2024</div>
                </div>

            </div>

        </div>
    )
}