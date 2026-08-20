export const validateUsername = (username) => {
  if (username.trim().length < 3 || username.trim().length > 10) {
    return "Username must be at least 3 characters, at most 10 characters";
  }

  return "";
};

export const validateFullname = (fullname) => {
  if (fullname.trim().length < 3 || fullname.trim().length > 20) {
    return "Fullname must be at least 3 characters, at most 20 characters";
  }

  return "";
};

export const validateEmail = (email) => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Email is invalid!";
  }

  return "";
};

export const validatePassword = (password) => {
  if (password.length < 6 || password.length > 20) {
    return "Password must be at least 6 characters, at most 20 characters";
  }

  return "";
};
