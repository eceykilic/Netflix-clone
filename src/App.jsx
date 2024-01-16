import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./pages/MainPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      </Routes>
  )
}

export default App;
