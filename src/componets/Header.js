import { useNavigate } from 'react-router-dom';
import {auth} from '../utils/firebase'
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';


const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const signOutHandle = () => {

        
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/")
        }).catch((error) => {
        // An error happened.
            navigate("/error")
        });
    }

    return (
        <div  className="px-2 py-2 z-10 absolute w-full bg-gradient-to-b from-black flex justify-between">
            <img 
              className="w-44 "
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="Netflix" />

            <div
            className="p-2 flex"
            >
                <img 
                className="w-12 h-12 mx-2 rounded-sm"
                src={user?.photoURL ? user?.photoURL : "https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" }
                alt="user-icon" />

                <button 
                onClick={signOutHandle}
                className="font-bold text-white" >Sign Out</button>
            </div>

        </div>
    )
}


export default Header;