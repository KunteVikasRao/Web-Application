import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignIn.css';

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [pageError, setPageError] = useState("");
  const navigate = useNavigate();

  const validateFields = () => {
    const errors = {};
    if (!username.trim()) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setPageError(""); // reset page-level error

    const errors = validateFields();
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      // There are field errors, do not proceed
      return;
    }

    // For demonstration: Accept username='user' and password='123'
    if (username === "user" && password === "123") {
      navigate("/home");
    } else {
      setPageError("Invalid username or password");
    }
  };

  return (
    <div className="form-body">
    <div className="form-container">
      <h2>Login</h2>
      {pageError && <div className="page-error">{pageError}</div>}
      <form onSubmit={handleLogin} noValidate>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {fieldErrors.username && (
          <div className="field-error">{fieldErrors.username}</div>
        )}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {fieldErrors.password && (
          <div className="field-error">{fieldErrors.password}</div>
        )}
        <button type="submit">Login</button>
      </form>
      <p>
        Not registered?{" "}
        <span className="link" onClick={() => navigate("/signup")}>
          Signup here
        </span>
      </p>
    </div>
    </div>
  );
};

export default SignIn;
