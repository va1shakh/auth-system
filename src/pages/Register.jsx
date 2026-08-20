import { useContext, useState } from "react";
import {
  validateEmail,
  validateFullname,
  validatePassword,
  validateUsername,
} from "../utils/validation";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function Register() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    let error = "";
    if (name === "fullname") {
      error = validateFullname(value);
    }
    if (name === "username") {
      error = validateUsername(value);
    }
    if (name === "email") {
      error = validateEmail(value);
    }
    if (name === "password") {
      error = validatePassword(value);
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasError = Object.values(errors).some(Boolean);
    if (!hasError) {
      const serverError = await register(formData);
      if (Object.keys(serverError).length === 0) {
        navigate('/Login');
      }
    }
  };



  return (
    <div className="bg-[#120015] min-h-screen flex justify-center items-center">
      <div className="w-100 h-120 bg-[#000000] border border-[#efd9fc] rounded-4xl drop-shadow-4xl flex flex-col items-center pb-7 px-4 overflow-hidden">
        <p className="text-[#000000] text-4xl bg-[#efd9fc] w-100 h-20 text-center py-3 drop-shadow-4xl rounded-t-2xl">
          Register
        </p>
        <form
          className="flex flex-col h-100  w-full my-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="fullname"
            placeholder="FULL NAME"
            className="w-full border border-[#efd9fc] h-13 rounded-2xl px-10 text-center text-2xl text-[#f8f8f8] outline-none focus:border-[#ffffff] focus:ring-[#ffffff] ring-1 mt-9"
            onChange={handleChange}
            required
          ></input>
          {errors.fullname && (
            <p className="text-[#b06767]">{errors.fullname}</p>
          )}
          <input
            type="text"
            name="username"
            placeholder="USERNAME"
            className="w-full border border-[#efd9fc] h-13 rounded-2xl px-10 text-center text-2xl text-[#f8f8f8] outline-none focus:border-[#ffffff] focus:ring-[#ffffff] ring-1 mt-9"
            onChange={handleChange}
            required
          ></input>
          {errors.username && (
            <p className="text-[#b06767]">{errors.username}</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            className="w-full border border-[#efd9fc] h-13 rounded-2xl px-10 text-center text-2xl text-[#f8f8f8] outline-none focus:border-[#ffffff] focus:ring-[#ffffff] ring-1 my-9"
            onChange={handleChange}
            required
          ></input>
          {errors.email && <p className="text-[#b06767]">{errors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            className="w-full border border-[#efd9fc] h-13 rounded-2xl px-10 text-center text-2xl text-[#f8f8f8] outline-none focus:border-[#ffffff] focus:ring-[#ffffff] ring-1"
            onChange={handleChange}
            required
          ></input>
          {errors.password && (
            <p className="text-[#b06767]">{errors.password}</p>
          )}
          <button
            type="submit"
            className="w-full bg-[#efd9fc] rounded-lg h-10 text-lg cursor-pointer text-[#000000] my-6"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
