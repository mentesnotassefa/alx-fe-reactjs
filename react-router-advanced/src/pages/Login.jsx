// src/pages/Login.jsx
import useAuth from "../hooks/useAuth"; // Import the useAuth hook

function Login() {
  const { login } = useAuth(); // Use the login function from useAuth

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Log In</button>
    </div>
  );
}

export default Login;