import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }

    try {
      const check = await fetch("http://localhost:3001/users");
      const users = await check.json();

      const exist = users.find(
        (user: any) => user.username === username
      );

      if (exist) {
        alert("ชื่อผู้ใช้นี้มีอยู่แล้ว");
        return;
      }

      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        alert("สมัครสมาชิกสำเร็จ");

        navigate("/login");

      } else {
        alert("สมัครสมาชิกไม่สำเร็จ");
      }

    } catch (error) {
      alert("ไม่สามารถเชื่อมต่อกับ Server ได้");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h1>สมัครสมาชิก</h1>

        <input
          type="text"
          placeholder="ชื่อผู้ใช้"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={register}>
          Register
        </button>

      </div>
    </div>
  );
}

export default Register;