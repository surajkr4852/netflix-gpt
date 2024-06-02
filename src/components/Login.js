import Header from "./Header";
import { useState } from "react";
const Login=()=>{
    const [isSignInForm,setIsSignInFrom] = useState(true);
    const toggleSignInForm=()=>{
        setIsSignInFrom(!isSignInForm);
    };
    return (
        <div className="">
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="logo" className="">
                </img>
            </div>
            <form className="w-4/12 flex flex-col absolute bg-black mt-36 mx-auto right-0 left-0 p-12 bg-opacity-80">
                <h1 className="font-bold text-3xl text-white py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-2 bg-gray-700 rounded-lg"></input>}
                <input type="text" placeholder="Email Address" className="p-4 my-2 bg-gray-700 rounded-lg text-white"></input>
                <input type="password" placeholder="Password" className="p-4 my-2 bg-gray-700 rounded-lg"></input>
                <button className="py-2 my-6 rounded-lg bg-red-600 text-white w-full">{isSignInForm?"Sign In":"Sign Up"}</button>
                <p onClick={toggleSignInForm} className="text-white cursor-pointer">{isSignInForm?"New to Netflix? Sign up Now":"Already Registered? Sign In Now"}</p>
            </form>
        </div>
    )
}
export default Login;