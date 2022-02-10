import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstSignUp from "./views/FirstSignUp";
import AddBook from './views/AddBook'
import FriendProfile from './views/FriendProfile'
import FriendsBooks from './views/FriendsBooks'
import Login from './views/Login'
import MyProfile from "./views/MyProfile";
import MyProfileLendOK from "./views/MyProfileLendOK";
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
<AddBook/>
    </>
  );
}

export default App;
