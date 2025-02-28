import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <label>UserName</label>
        <input type="text" required />
        <br />
        <label>Password</label>
        <input type="password" name="" id="" required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
