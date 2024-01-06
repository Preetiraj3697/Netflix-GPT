import { useRef, useState } from "react";
import { ValidationForm } from "../utils/ValidationForm";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const [isSignForm, setIsSignFrom] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignForm = () => {
    setIsSignFrom(!isSignForm);
  };

  const handleFormSubmit = () => {
    //validation from
    // console.log(email.current.value,password.current.value)
    const message = ValidationForm(email.current.value, password.current.value);
    //  console.log(message);
    setErrorMessage(message);
    //submit from
    if (message) return;
    //Sign in / sign up logic
    if (!isSignForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/107460745?v=4"
          }).then(() => {
            // update user profile
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid,email,displayName,photoURL}));
            navigate("/browse");
          }).catch((error) => {
            setErrorMessage(error.message);
          });
          console.log(user);
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +" "+ errorMessage);
        });
    }
  };

  return (
    <>
    <div
      className="flex-1 bg-hero bg-cover bg-center bg-no-repeat"
      style={{ height: "900px" }}
    >
      <div className="bg-gradient-to-tr from-black h-full">
        <Header />
      </div>
    </div>
    <div className="absolute top-56 left-1/3 bg-[#090204]/80 w-2/6 p-10 rounded-lg">
      <form
        className="flex flex-col text-center text-white "
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl text-left pl-3 py-3">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full py-3 px-3 m-2 rounded-md bg-[#333333]"
            autoComplete="off"
            ref={name}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full py-3 px-3 m-2 rounded-md bg-[#333333]"
          autoComplete="off"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full py-3 px-3 m-2 rounded-md  bg-[#333333]"
          autoComplete="off"
          ref={password}
        />
        <p className="text-red-700 font-bold text-lg py-2 text-left pl-4">
          {errorMessage}
        </p>
        <button
          className="rounded-md w-full bg-red-700 py-3 my-6 m-2 font-bold text-xl"
          onClick={handleFormSubmit}
        >
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-lg text-left pl-3 py-3 underline cursor-pointer"
          onClick={handleSignForm}
        >
          {isSignForm
            ? "New User to Netfilx ? Sign Up"
            : "Already User ? Sign In"}
        </p>
      </form>
    </div>
    </>
  );
};

export default Login;
