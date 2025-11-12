import { React, useState } from "react";

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="relative">
            <div className="bg-[#63bfe3] rounded-3xl border-3 border-[#000000] mx-auto w-96 h-120">
                <h1>Login</h1>
                <input></input>
            </div>
        </div> 
    </>
  )
}

export default Login