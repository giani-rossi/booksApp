import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstSignUp from "./views/FirstSignUp";
import AddBook from "./views/AddBook";
import FriendProfile from "./views/FriendProfile";
import FriendsBooks from "./views/FriendsBooks";
import Login from "./views/Login";
import MyProfile from "./views/MyProfile";
import MyProfileLendOK from "./views/MyProfileLendOK";
import Loginv2 from "./views/Loginv2";
function App() {
  /*
 
  */

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Login />}></Route>
          <Route path="/Loginv2" element={<Loginv2 />}></Route>
          <Route path="/FirstSignUp" element={<FirstSignUp/>}></Route>
          <Route path="/AddBook" element={<AddBook/>}></Route>
          <Route path="/MyProfile" element={<MyProfile/>}></Route>
          <Route path="/FriendProfile" element={<FriendProfile/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
