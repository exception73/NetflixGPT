import { useNavigate } from 'react-router-dom';
import {auth} from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';


const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    useEffect(() => {

       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){

                const {uid, email, displayName, photoURL} = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email : email,
                        displayName : displayName,
                        photoURL : photoURL,
                    })
                );

                navigate("/browse");
                
               
            }else {

                dispatch(removeUser());
                navigate("/")
               
            }
        })


        //when the header unmounts the onAuthStateChange get unsubsscribed.
        return () => unsubscribe();

    }, []);

    const signOutHandle = () => {

        
        signOut(auth).then(() => {
       
        }).catch((error) => {
        // An error happened.
            navigate("/error")
        });
    }

    return (
        <div  className="px-2 py-2 z-10 absolute w-full bg-gradient-to-b from-black flex justify-between">
            <img 
              className="w-44 "
              src={LOGO}
              alt="Netflix" />

           {user ?   <div
            className="p-2 flex"
            >
                <img 
                className="w-12 h-12 mx-2 rounded-sm"
                src={user?.photoURL ? user?.photoURL : USER_AVATAR }
                alt="user-icon" />

                <button 
                onClick={signOutHandle}
                className="font-bold text-white" >Sign Out</button>
            </div> : 
            <></>
            }
        </div>
    )
}


export default Header;