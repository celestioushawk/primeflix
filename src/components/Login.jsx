import Header from "./Header";
import { useRef, useState } from "react";
import { formValidation } from "../utils/formValidation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleFormChange = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleFormSubmit = () => {
        if (!isSignInForm) {
            setErrorMessage(formValidation(email.current.value, password.current.value, name.current.value, isSignInForm))
        } else {
            setErrorMessage(formValidation(email.current.value, password.current.value, null, isSignInForm))
        }
        if (errorMessage) {
            return;
        }
        if (!isSignInForm) {
            // Sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    console.log(userCredential);
                    setIsSignInForm(true);
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        } else {
            // Sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        }

    }

    return (
        <div className="bg-login h-screen">
            <Header />
            <div className="flex justify-center items-center h-full">
                <div className="h-full lg:h-fit w-full justify-center lg:w-1/3 bg-black rounded flex flex-col gap-4 bg-opacity-90 p-5 md:p-10 z-10">
                    <h2 className="text-3xl font-bold text-white">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h2>
                    <h2 className="text-lg font-medium text-white">Unlimited movies, TV shows, and more.</h2>
                    <h3 className="text-sm text-white">Watch anywhere. Cancel anytime.</h3>
                    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                        {!isSignInForm && <input type="text" ref={name} className="block w-full p-3 rounded bg-gray-300 outline-none" placeholder="Full Name" />}
                        <input type="email" ref={email} className="block w-full p-3 rounded bg-gray-300 outline-none" placeholder="Email address" />
                        <input type="password" ref={password} className="block w-full p-3 rounded bg-gray-300 outline-none" placeholder="Password" />
                        {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
                        <button className="block w-full p-3 rounded bg-red-600 hover:bg-red-700 text-white font-bold" onClick={handleFormSubmit}>
                            {isSignInForm ? "Sign In" : "Sign Up"}
                        </button>
                    </form>
                    <div>
                        {isSignInForm ? <p className="text-white text-sm">New to Flixnow? <span className="text-red-600 text-sm font-bold hover:underline cursor-pointer" onClick={handleFormChange}>Sign up now</span> </p> : <p className="text-white text-sm">Already a user? <span className="text-red-600 text-sm font-bold hover:underline cursor-pointer" onClick={handleFormChange}>Sign in now</span> </p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
