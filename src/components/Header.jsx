import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import UserMenu from "./UserMenu";
import Search from "./Search";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch();
    const userMenuDiv = useRef(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // whenever the user signs in or signs out, this function will be called
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }))
                // navigate("/browse")
            } else {
                // user is signed out
                dispatch(removeUser())
                navigate("/")
            }
        });
        // Unsubscribe from the listener when the component is unmounted
        return () => unsubscribe();

    }, [])

    const showSearch = useSelector((state) => state.portal?.showSearch)

    return (
        <>
            <header className="absolute px-10 py-5 z-20 flex w-full text-white bg-gradient-to-b from-black justify-between items-center">
                <Link to={'/browse'}><h1 className="text-4xl uppercase font-bold text-red-600">FlixNow</h1></Link>
                {user && <UserMenu user={user} userMenuDiv={userMenuDiv} />}
            </header>
            {showSearch && <Search />}
        </>
    );
}

export default Header;