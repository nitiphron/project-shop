import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    address: "",
    phone: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();

      const rs = await axios.post("http://localhost:8889/auth/register", input);
      console.log(rs);
      if (rs.status === 200) {
        alert("Register Successful");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="border border-solid border-Gray White bg-white rounded-md shadow-md w-full max-w-[800px] mx-auto mt-10 text-center p-8 ">
      <div className="text-4xl mb-5 text-center font-bold">Sing-in</div>
      <form className="flex flex-col gap-10 mt-16" onSubmit={hdlSubmit}>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-left">
              <span className="text-gray-800 Font">name</span>
              <input
                type="text"
                className="form-input mt-1 block w-full h-10 border rounded-md"
                name="name"
                value={input.name}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="w-1/2 ">
            <label className="block text-left">
              <span className="text-gray-800 Font">last-name</span>
              <input
                type="text"
                className="form-input mt-1 block w-full border rounded-md h-12"
                name="lastName"
                value={input.lastName}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-left">
              <span className="text-gray-800 Font">phone</span>
              <input
                type="text"
                className="form-input mt-1 block w-full border rounded-md h-12"
                name="phone"
                value={input.phone}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="w-1/2">
            <label className="block text-left">
              <span className="text-gray-800 Font">address</span>
              <input
                type="text"
                className="form-input mt-1 block w-full border rounded-md h-12"
                name="address"
                value={input.address}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-left">
              <span className="text-gray-800 Font">Username</span>
              <input
                type="text"
                className="form-input mt-1 block w-full border rounded-md h-12"
                name="username"
                value={input.username}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="w-1/2">
            <label className="block text-left">
              <span className="text-gray-800 Font">Password</span>
              <input
                type="password"
                className="form-input mt-1 block w-full border rounded-md h-12"
                name="password"
                value={input.password}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="tn btn-outline btn-info mt-7 ">
          <button
            type="submit"
            className="btn bg-blue-500 text-blue rounded-[30px] Font w-40">
            Sing-in
          </button>
        </div>

      </form>
    </div>
  );
}
