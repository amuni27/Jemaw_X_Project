import React from 'react';
import JemawLogo from '../assets/jemaw_logo.jpg';
import {useNavigate} from "react-router-dom";
function Login(props) {
    const navigate = useNavigate();

    const login=()=>{
        navigate("/home")
    }




    return (
        <div className="w-full h-screen flex items-center justify-center min-h-screen">
            <div className="w-1/2 h-full bg-white flex items-center justify-center">
                <img src={JemawLogo} alt="jemaw_x logo" className="rounded-full"/>
            </div>
            <div className="w-1/2 h-full bg-gray-50">
                <div className="w-full h-1/6 p-6">
                    <span className="bg-amber-700 text-white p-6 ">JEMAW_X</span>
                </div>
                <div className="w-full h-5/6 flex items-center justify-center">
                    <div className="w-3/4 h-full">
                        <p className="text-5xl">Sign In</p>
                        <p className="text-xl text-gray-900 mt-6">New User? <span className="text-xl text-amber-700">Create an account</span></p>
                        <input type="text" placeholder="email" className="pl-5 text-xl w-full h-16 border-2 border-gray-200 shadow-sm rounded-3xl mt-10"/>
                        <input type="text" placeholder="password" className="pl-5 text-xl  w-full h-16 border-2 border-gray-200 shadow-sm rounded-3xl mt-2"/>
                        <button onClick={login} className="pl-5 text-xl  w-full h-16 bg-amber-700 border-2 border-gray-200 shadow-sm rounded-3xl mt-2 text-white">Sign In</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;