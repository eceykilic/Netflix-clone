
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import MainPage from "./pages/MainPage"
import Browse from "./pages/Browse";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/Notfound";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/browse" element={<Browse />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/welcome" element={<Welcome />}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
  )
}

export default App;
