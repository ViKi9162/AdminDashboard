import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreateEmploye from "./Pages/CreateEmploye";
import EmployeList from './Pages/EmployeList';
import Registration from "./Auth/Signup";
import Login from "./Auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/CreateEmploy" element={<CreateEmploye/>}/>
        <Route path="/EmployList" element={<EmployeList/>}/>
        <Route path="/SignUp" element={<Registration/>}/>





      </Routes>
    </>
  );
}

export default App;
