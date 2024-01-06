import { useRef, useState } from "react";
import { ValidationForm } from "../utils/ValidationForm";
const Login = () => {
  const [isSignForm, setIsSignFrom] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSignForm = () => {
    setIsSignFrom(!isSignForm);
  };
  
  const handleFormSubmit = () => {
    //validation from
    // console.log(email.current.value,password.current.value)
     const message = ValidationForm(email.current.value,password.current.value);
     console.log(message);
     setErrorMessage(message);
    //submit from
  }

  return (
    <div className="bg-[#090204]/80 w-2/6 p-10 rounded-lg m-auto my-28">
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
       <p className="text-red-700 font-bold text-lg py-2 text-left pl-4">{errorMessage}</p>
        <button className="rounded-md w-full bg-red-700 py-3 my-6 m-2 font-bold text-xl"
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
  );
};

export default Login;
