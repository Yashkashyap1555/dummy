import logo from "./logo.svg";
import "./App.css";
import Test from "./pages/test";
import First from "./component/first";
import Firstform from "./component/form";
import Test1 from "./pages/test1";
import Realform from "./pages/realform";
import { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState();
  console.log(userName, " username from App");
  const handleGetDataFromLocalStorage = () => {
    const name = localStorage.getItem("password");
    setUserName(name);
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Test /> */}
      {/* <First /> */}
      {/* <Firstform /> */}
      <Test1 />
      {/* <Realform /> */}
      <button onClick={handleGetDataFromLocalStorage}>
        get data from local
      </button>
    </div>
  );
};

export default App;
