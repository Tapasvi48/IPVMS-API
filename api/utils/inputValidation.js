export const emailValidation = (email) => {
  const check = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
  if (!check.test(email)) {
    return { error: "Invalid Email format", success: false };
  }
  const index = email.indexOf("@");
  const domain = email.slice(index + 1).toLowerCase();
  return { success: true };
};

// At least one uppercase letter
// At least one lowercase letter
// At least one digit
// At least one special symbol
// should be more than 4 character

export const passwordValidation = (password) => {
  if (!/[A-Z]/.test(password)) {
    return {
      error: "Password should contain at least one uppercase letter",
      success: false,
    };
  } else if (!/[a-z]/.test(password)) {
    return {
      error: "Password should contain at least one lowercase letter",
      success: false,
    };
  } else if (!/[0-9]/.test(password)) {
    return {
      error: "Password should contain at least one digit",
      success: false,
    };
  } else if (!/[^A-Za-z0-9]/.test(password)) {
    return {
      error: "Password should contain at least one special symbol",
      success: false,
    };
  } else if (password.length < 4) {
    return {
      error: "Password should be more than 4 character",
      success: false,
    };
  } else {
    return { success: true };
  }
};
// At least one uppercase letter
// At least one lowercase letter
// At least one digit
// At least one special symbol
// should be more than 4 character
