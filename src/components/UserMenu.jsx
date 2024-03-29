import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSearch } from "../utils/portalSlice";

const UserMenu = ({ user, userMenuDiv }) => {

    const [showUserMenu, setShowUserMenu] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    }, [])

    const handleClickOutside = (e) => {
        if (userMenuDiv.current && !userMenuDiv.current.contains(e.target)) {
            setShowUserMenu(false);
        }
    }


    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="relative flex gap-4 items-center" ref={userMenuDiv}>
            <button className="hover:bg-gray-500 p-2 rounded-full bg-opacity-50" onClick={() => dispatch(toggleSearch(true))}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>

            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
            <button onClick={toggleUserMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </button>
            {showUserMenu &&
                <div className="bg-gray-800 flex flex-col gap-3 rounded-md bg-opacity-90 absolute top-10 right-0 p-5 text-left">
                    <span className="text-sm">{user?.email}</span>
                    <button className="bg-gray-900 p-1 rounded" onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>}
        </div>
    )
}

export default UserMenu;