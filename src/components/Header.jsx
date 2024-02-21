import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // whenever the user signs in or signs out, this function will be called
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }))
                navigate("/browse")
            } else {
                // user is signed out
                dispatch(removeUser())
                navigate("/")
            }
        });
        // Unsubscribe from the listener when the component is unmounted
        return () => unsubscribe();

    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <header className="absolute p-10 z-10 flex w-full justify-between">
            <h1 className="text-3xl uppercase font-bold text-white">FlixNow</h1>
            { user && <button className="border bg-red-600 py-2 px-3 text-sm text-white" onClick={handleSignOut}>Sign Out</button> }
        </header>
    );
}

export default Header;