import { useState } from 'react';
import Header from "./Header";


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
          <Header />
          <div className="absolute">
            <img
            src="https://i.redd.it/zjgs096khv591.jpg"
            alt="notrender" />
          </div>
          <form className="absolute bg-black/80  text-white flex flex-col justify-evenly w-1/4 my-36 mx-auto right-0 left-0 h-1/2 py-8 px-8 rounded-xl">
                {
                    isSignInForm ? 
                    <h1 className="font-bold text-3xl">Sign In</h1> :
                    <h1 className="font-bold text-3xl">Sign Up  </h1> 
                
                }
             <div className="">
                {
                    isSignInForm 
                    ? <></> :
                    <input type="text" placeholder="Full Name" className="p-2 my-2 w-full rounded-md"/>
                }
             <input type="text" placeholder="Email Address" className="p-2 my-2 w-full rounded-md"/>
             <input type="password" placeholder="Password" className="p-2 my-2 w-full rounded-md" />

             </div>
             <button className="p-2 my-4 rounded-md bg-red-700" type="submit">{isSignInForm ? "Sign In " : "Sign Up"}</button>

          {  isSignInForm ? 
            <p className=" cursor-pointer " onClick={toggleSignInForm}>New to Netflix? SignUp Now.</p> :
            <p className=" cursor-pointer " onClick={toggleSignInForm} > SignIn  </p>
            }
          </form>
        </div>
    )
}


export default Login;