import { useState } from "react";
import "./first.css";
const Fome = () => {
  const [inputValues, setInputValues] = useState("");
  console.log(inputValues, "my values");
  const handleChange = (e)=>{
setInputValues(e.target.value)

  }
  return (
    <div>
      <h1>hello</h1>
      <div className="box">
        {/* <span>enter your name</span> */}
        <input
          placeholder="enter your name"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default Fome;
