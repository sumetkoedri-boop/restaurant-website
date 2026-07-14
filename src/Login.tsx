import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    if(username.trim() === "" || password.trim() === ""){
      alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }

    try {

   
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();

      const user = users.find(
        (u:any) =>
          u.username === username &&
          u.password === password
      );

      if(user){

        alert("เข้าสู่ระบบสำเร็จ");

        navigate("/home");

      }else{

        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");

      }

    } catch(error){

      alert("ไม่สามารถเชื่อมต่อ Server ได้");
      console.error(error);

    }

  };


  return (
  <div className="login-container">

    <div className="login-box">

      <h1>Login</h1>


      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />


      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />


      <div className="button-group">

        <button onClick={login}>
          Login
        </button>


        <button onClick={()=>navigate("/register")}>
          Register
        </button>

      </div>


    </div>

  </div>
);
} export default Login;