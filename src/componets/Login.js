import { useRef, useState } from 'react';
import Header from "./Header";
import { checkValidateData } from '../utils/validate.js';
import {  createUserWithEmailAndPassword,  signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';


const Login = () => {

   const navigate = useNavigate();
   const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);


    //how to get email and password from the input tag presnet in frontend
    //we have two ways either we can use useState or useRef   
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


    const [errorMessage, setErrorMessage] = useState(null);
    
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = (e) => {
    
        e.preventDefault();
        let message = 
          isSignInForm ?
          checkValidateData(email?.current?.value, password?.current?.value, "Gautammm") : 
          checkValidateData(email?.current?.value, password?.current?.value, name?.current?.value)
        
    //   console.log(message)
      setErrorMessage(message);

      if(message) return;

      if(!isSignInForm){
        //Sign Up Logic

        createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)

            updateProfile(user, {
              displayName : name?.current?.value,
              photoURL : "https://avatars.githubusercontent.com/u/109818831?v=4"
            })
            .then(() => {
              const {uid, email, displayName, photoURL} = user;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL
                })
              )
            })

            navigate("/browse");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);  

            console.log(errorMessage);
            // ..
          });
      

      }else{  
        //Sign In logic


        signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
             

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
            console.log(errorMessage);
          });



      }


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
                    <input type="text" ref = {name} placeholder="Full Name" className="p-2 text-black my-2 w-full rounded-md"/>
                }
             <input type="text" ref = {email} placeholder="Email Address" className="p-2 my-2 text-black w-full rounded-md"/>
             <input type="password" ref = {password} placeholder="Password" className="p-2 my-2 text-black w-full rounded-md" />

             </div>
             <p className='text-red-500'>{errorMessage}</p>
             <button onClick={handleButtonClick} className="p-2 my-4  rounded-md bg-red-700" type="submit">{isSignInForm ? "Sign In " : "Sign Up"}</button>

          {  isSignInForm ? 
            <p className=" cursor-pointer " onClick={toggleSignInForm}>New to Netflix? SignUp Now.</p> :
            <p className=" cursor-pointer " onClick={toggleSignInForm} > SignIn  </p>
            }
          </form>
        </div>
    )
}


export default Login;