import { useSearchParams } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg"
          alt="logo"
        />
      </div>

      <form className="bg-black absolute my-36 w-4/12 mx-auto left-0 right-0 text-white p-20 rounded-lg opacity-90">
        <h1 className="font-bold text-3xl my-4 ml-1">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-2  w-full rounded-lg bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 m-2 w-full rounded-lg bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2  w-full rounded-lg bg-gray-700"
        />
        <button className="p-2 m-2 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="my-8 ml-2">
          {isSignInForm ? (
            <p>
              {" "}
              <span className="opacity-50">New to NetFlix ? </span>
              <span
                className="font-bold cursor-pointer"
                onClick={handleSignInForm}
              >
                Sign up Now
              </span>
            </p>
          ) : (
            <p>
              <span className="opacity-50">Already Registered ? </span>
              <span
                className="font-bold cursor-pointer"
                onClick={handleSignInForm}
              >
                Sign In
              </span>
            </p>
          )}
        </p>
      </form>
    </div>
  );
}

export default Login;
