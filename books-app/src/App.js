
import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstSignUp from './components/FirstSignUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Divisor from './stories/Divisor';

function App() {
 /*
 <Router>

   <Routes>
  <Route path='/' element={<Login/>}></Route>
 
  </Routes>
  </Router>
  */
  return (
    <>
    <Divisor />
    </>
  );
}

export default App;
