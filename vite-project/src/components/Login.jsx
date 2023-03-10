import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action="" className="border flex flex-col">
        <input type="text" />
        <input type="text" />
        <div className="flex gap-3">
          <button>Submit</button>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
