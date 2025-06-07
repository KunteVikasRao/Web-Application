import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [pageError, setPageError] = useState("");
  const navigate = useNavigate();

  const validateFields = () => {
    const errors = {};
    if (!username.trim()) errors.username = "Username is required";
    if (!email.trim()) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setPageError("");

    const errors = validateFields();
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) return;

    // For demonstration, pretend signup is always successful
    alert("Signup successful!");
    navigate("/");
  };

  return (
    <div className="form-body">
    <div className="form-container">
      <h2>Signup</h2>
      {pageError && <div className="page-error">{pageError}</div>}
      <form onSubmit={handleSignup} noValidate>
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {fieldErrors.email && (
          <div className="field-error">{fieldErrors.email}</div>
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
        <button type="submit">Signup</button>
      </form>
      <p>
        Already registered?{" "}
        <span className="link" onClick={() => navigate("/login")}>
          Login here
        </span>
      </p>
    </div>
    </div>
  );
};

export default SignUp;
