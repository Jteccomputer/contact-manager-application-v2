import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about";

import SignUp from "./components/SignUp/SignUp";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import AddContact from "./components/Contact/AddContact";
import EditContact from "./components/Contact/EditContact";
import Settings from "./components/Settings/Settings";
import ChangePassword from "./components/Profile/ChangePassword";
import DeleteAccount from "./components/Profile/DeleteAccount";
import EditProfile from "./components/Profile/EditProfile";
import Contactpage from "./components/Contactpage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactpage" element={<Contactpage />} />


        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/contact/add" element={<AddContact />} />
        <Route path="/profile/contact/edit" element={<EditContact />} />
        <Route path="/profile/settings" element={<Settings />} />

        <Route path="/profile/password" element={<ChangePassword />} />
        <Route path="/profile/delete-account" element={<DeleteAccount />} />
        <Route path="/profile/edit" element={<EditProfile />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
