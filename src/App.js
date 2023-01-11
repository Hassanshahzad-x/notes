import { useState } from 'react';
import './App.css';
// import About from './components/About';
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
    <div className="App">
      <Navbar title="Nottes" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Form />
        {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
