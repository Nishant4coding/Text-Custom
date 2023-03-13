import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import { Routes, Route } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000)
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40'
      showAlert("Dark Mode has been Enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Dark Mode has been Disabled", "success")
    }
  }
  return (
    <>
    <Navbar title="Text-Custom" aboutText="About Us"  mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-10">
      {/* <Routes> */}
        {/* <Route exact path="/about" element={<About aboutHeading="About Us" mode={mode} toggleMode={toggleMode} />} /> */}
        <TextForm heading="Enter the Text"  mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
        
        {/* </Route> */}
      {/* </Routes> */}
     
      
    </div>
    
    </>
  );
}

export default App;
