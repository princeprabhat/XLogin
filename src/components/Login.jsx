import React, { useState } from "react";

const Login = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (value.username !== "user" || value.password !== "password") {
      setError(true);
      return;
    }
    setError(false);
    setSuccess(true);
  };

  return (
    <div>
      <h1>Login Page</h1>
      {error && <p>Invalid username or password</p>}
      {success ? (
        <p>Welcome, user!</p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="password"
            id="password"
            required
            placeholder="username"
            value={value.username}
            onChange={(e) => setValue({ ...value, username: e.target.value })}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="password"
            value={value.password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Login;
