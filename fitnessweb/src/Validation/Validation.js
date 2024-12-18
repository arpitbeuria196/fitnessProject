//email validation
export const validateEmail = (email) => {
    if (!email) {
      return "Email is required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Enter a valid email.";
    }
    return null;
  };
//Password Validation
  export const validatePassword = (password) => {
    if (!password) {
      return "Password is required.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    return null;
  };
  
  export const validateLogin = ({ email}) => ({
    emailError: validateEmail(email),
  });
  
  export const validateSignUp = ({ email, password }) => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
  
  
    return { emailError, passwordError};
  };
  