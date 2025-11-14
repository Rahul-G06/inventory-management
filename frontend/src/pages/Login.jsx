import { React, useState } from "react";

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 
      className="text-[#5a7bfe] text-center font-[Franklin_Gothic_Medium, Arial, sans-serif]"
      >Inventory Management</h1>
      <br />
      <br />
      <br />
      <br />
      <form action="home.html" 
          className="text-[#72b4ef]"
        >
        <p>Login</p>
        <input type="text" placeholder="Username" />
        <br />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <br />
        <input type="submit" value="Log in" />
      </form>
    </>
  )
}

export default Login