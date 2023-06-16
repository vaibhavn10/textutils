import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Textform from './components/Textform.js';
// import About from './components/About.js';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode,setmode] = useState("light");
  const [alert,setalert] = useState(null);

  const showalert = (message,type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showalert(null);
    }, 2500);
  }
  const blink = () => {
    setInterval(() => {
      document.body.getElementsByClassName("butn")[0].style.backgroundColor = "white";
    }, 500);
    setInterval(() => {
      document.body.getElementsByClassName("butn")[0].style.backgroundColor = "black";        
    }, 1000);
  }

  const togglemode = () => {
    if(mode==="dark")
    {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Dark mode Disabled","success");
      document.title = "Textutils - Home";
    }
    else{
      setmode("dark");
      document.body.style.backgroundColor = "#15121e";
      showalert("Dark mode Enabled","success");
      document.title = "Textutils - Home (Dark Mode Enabled)";      
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" about="about us" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
    
      {/* <Routes>
          <Route exact path="/" element={<Textform heading="Enter the text to analyze :" btname="Convert to uppercase" mode={mode} showalert={showalert} blink={blink} modtxt="blink"/>} />
          <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>    */}

<Textform heading="Enter the text to analyze :" btname="Convert to uppercase" mode={mode} showalert={showalert} blink={blink} modtxt="blink"/>
        
    </>
  );
}


export default App;
