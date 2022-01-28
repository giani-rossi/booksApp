import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FirstSignUp from "./components/FirstSignUp";
import Login from "./components/Login";
import Loginv2 from "./components/Loginv2";
import FriendsBooks from "./components/FriendsBooks";
import FriendProfile from "./components/FriendProfile";
import MyProfile from "./components/MyProfile";
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
      <MyProfile />
    </>
  );
}

export default App;
