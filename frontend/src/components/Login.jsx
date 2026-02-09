import React, { useState } from "react";
import assets from "../assets/assets.js";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/userSlice.js";

axios.defaults.withCredentials = true;

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginSingupHandler = () => {
    setIsLogin(!isLogin);
  };

  const backendUserUrl = import.meta.env.VITE_BACKEND_USER_URL;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const res = await axios.post(backendUserUrl + "/login", {
          email,
          password,
        });
        dispatch(getUsers(res?.data?.user)); //update getuser in store
        if (res.data.success) {
          navigate("/");
          toast.success(res.data.message);
          console.log(res);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "fail");
        console.log("LOGIN ERROR:", error);
      }
    } else {
      try {
        const res = await axios.post(backendUserUrl + "/register", {
          name,
          username,
          email,
          password,
        });
        // console.log(res);
        if (res.data.success) {
          setIsLogin(true);
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <div className=" flex w-screen h-screen justify-center items-center ">
        <div className="felx items-center justify-evenly ">
          <img className="ml-5" width="400px" src={assets.x_logo} alt="" />
        </div>

        <div>
          <h1 className="mb-2 text-3xl font-bold">Join today. </h1>
          <form onSubmit={submitHandler} className="flex flex-col">
            {!isLogin && (
              <>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Name"
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 "
                />

                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Username"
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 "
                />
              </>
            )}

            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email"
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 "
            />

            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 "
            />

            <button className="bg-[#1D9BF0] border-none py-2 rounded-full text-lg text-white my-3">
              {!isLogin ? "Sign up" : "Login"}
            </button>
            <h1>
              {" "}
              {!isLogin ? "Already have an account?" : "Don't have a account?"}
              <span
                className="font-semibold cursor-pointer text-blue-600 underline"
                onClick={loginSingupHandler}
              >
                {!isLogin ? " Login here!" : " Register Now!"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
