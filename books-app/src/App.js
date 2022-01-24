
import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstSignUp from './components/FirstSignUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
 <Router>
   <Routes>
  <Route path='/' element={<Login/>}></Route>
  <Route path='/first' element={<FirstSignUp/>}></Route>
  </Routes>
  </Router>
    </>
  );
}

export default App;
