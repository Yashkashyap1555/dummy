import { useState } from "react";

const Realform = () => {
 
  // const [data, setData] = useState({
  //   name: "",
  //   Password: "",
  //   email: "",
  // });
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((p) => {
      return { ...p, [name]: value };
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(name, password, email);
    localStorage.setItem("userName", name);
    localStorage.setItem("password", password);
  };

  const handleRemove = () => {
    // localStorage.clear(); //remove total from  localstorage
    localStorage.removeItem("userName");
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        {/* <h1>Name :</h1><input type="text" name = "name"
            
            onChange={handleChange}
            /> */}
        <h1>Name :</h1>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        {/* <h1>Password :</h1>
        <input type="password" name="password" onChange={handleChange} /> */}
        <h1>Password :</h1>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <h1>Email :</h1>
        <input type="email" name="email" onChange={handleChange} /> */}
        <h1>Email :</h1>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          // onClick={handlesubmit}
        >
          submit
        </button>
      </form>

      <button onClick={handleRemove}>remove from local</button>
    </>
  );
};
export default Realform;
