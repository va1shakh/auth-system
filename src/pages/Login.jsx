import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { login } from "../contexts/AuthContext";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const { login, setUser, user } = useContext(AuthContext); 
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(formData);
    if(typeof result === "string"){
      toast.error(result);
      return;
    }
    setUser(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate('/Dashboard');
  }

  return (
    <div className="bg-[#120015] min-h-screen flex justify-center items-center">
      <div className="w-100 h-120 bg-[#000000] border border-[#efd9fc] rounded-4xl drop-shadow-4xl flex flex-col items-center pb-7 px-4">
        <p className="text-[#000000] text-4xl bg-[#efd9fc] w-100 h-20 text-center py-3 drop-shadow-4xl rounded-t-2xl">
          Login
        </p>
        <form className="flex flex-col h-100 gap-5 w-full my-2"
        onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="USERNAME"
            className="w-full border border-[#efd9fc] h-13 rounded-2xl px-10 text-center text-2xl text-[#f8f8f8] outline-none focus:border-[#fefefe] focus:ring-[#ffffff] ring-1 my-9"
            required
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            className="w-full border border-[#efd9fc] h-13 rounded-2xl px-10 text-center text-2xl text-[#f8f8f8] outline-none focus:border-[#fefefe] focus:ring-[#ffffff] ring-1"
            required
            onChange={handleChange}
          ></input>
          <div className="flex justify-end text-[#d4d5d9]">
            <button className="cursor-pointer">Forget password ?</button>
          </div>
          <button
            type="submit"
            className="w-full bg-[#efd9fc] rounded-lg h-10 text-lg cursor-pointer text-[#000000]"
          >
            Login
          </button>
        </form>
        <div className="flex flex-col items-center gap-4">
          <p className="text-white/40">click register if you don't have acc</p>
          <button
            type="submit"
            className=" bg-[#525a71] rounded-lg h-10 text-lg cursor-pointer py-1 w-26 text-[#e5e5e6]"
            onClick={() => navigate("/Register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
