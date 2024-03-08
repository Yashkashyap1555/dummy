import { useState } from "react";

const Test1 = () => {
  const initialState = {
    name: "",
    password: "",
    email: "",
  };
  const [userInput, setUserInput] = useState(initialState);
  const handleChangeInput = (e) => {
    console.log(e,"e")
    const {name,value} = e.target;
    setUserInput({
        ...userInput,[name]:value
    })
  };
  const handleSubmit = ()=>{
    console.log(userInput)
  }
  const {name,email,password} = userInput
  console.log(userInput, "userinput");
  return (
    <div>
      <div>
        <h1>Registration form</h1>
      </div>
      <div>Enter your name</div>
      <input
      type="text"
        name="name"
        value={name}
        placeholder="Enter your name"
        onChange={handleChangeInput}
      />
      <div>password</div>
      <input
      type="password"
        name="password"
        value={password}
        placeholder="Enter your password"
        onChange={handleChangeInput}
      />
      <div>Enter your Email</div>
      <input
      type="email"
        name="email"
        value={email}
        placeholder="Enter your email"
        onChange={handleChangeInput}
      />
      <div>
        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
};
export default Test1;
