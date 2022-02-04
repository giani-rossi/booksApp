import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FirstSignUp from "./components/FirstSignUp";
import Login from "./components/Login";

import FriendsBooks from "./components/FriendsBooks";
import FriendProfile from "./components/FriendProfile";
import MyProfile from "./components/MyProfile";
import AddBook from "./components/AddBook";
import { Signin } from "./stories/SignBox.stories";
import SignBox from "./stories/SignBox";
import Request from "./stories/Request";


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
      <MyProfile/>
    </>
  );
}

export default App;
