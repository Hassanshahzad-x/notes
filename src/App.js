import { useState } from 'react';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Form from './components/Form';
import Navbar from './components/Navbar';


function App() {
  const [mode, setMode] = useState('dark')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      showAlert("Dark mode enabled", "success")
    }
    else {
      setMode('light')
      showAlert("Light mode enabled", "success")
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="Nottes" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Form />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
