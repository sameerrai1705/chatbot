import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Chatbot from './components/Chatbot';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path='/chatbot' element={<Chatbot />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
