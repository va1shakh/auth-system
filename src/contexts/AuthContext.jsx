import { createContext, useContext } from "react";
import {
  checkEmail,
  checkUsername,
  loginUser,
  registerUser,
} from "../services/authApi";

export const AuthContext = createContext();

export const register = async (formData) => {
  const errors = {};
  const existingUsr = await checkUsername(formData.username);
  if (existingUsr.length > 0) {
    errors.username = "Username already exists";
  }
  const existingEmail = await checkEmail(formData.email);
  if (existingEmail.length > 0) {
    errors.email = "An account with this email already exists";
  }
  if (Object.keys(errors).length > 0) {
    return errors;
  }
  await registerUser(formData);
  return {};
};

export const login = async (formData) => {
  const usr = await loginUser(formData.username, formData.password);
  if (usr.length === 0) {
    return "Invalid username or password";
  }
  return usr[0];
};

