// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

// const router = createBrowserRouter([
//   {path : "/TextForm",
//     element : <TextForm/>
//   },
//   {
//     path : "/About",
//     element : <About/>
//   }
// ])


function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  const makeAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const tooglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'rgb(9 18 30)'
      makeAlert("Dark mode Enabled", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      makeAlert("Light mode Enabled", "success")
    }
  }

  return (
    <>
      <NavBar title="CHECKER" mode={mode} tooglemode={tooglemode} makeAlert={makeAlert} />
      <Alert Alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm mode={mode} makeAlert={makeAlert} />}
          />
          <Route path='/TextForm' element={<TextForm mode={mode} makeAlert={makeAlert} />} />
          <Route path='/About' element={<About mode={mode} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
