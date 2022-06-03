import { PATHS } from "../Utils/Constants";
import { Routes, Route } from "react-router-dom";

//Routes
import Home from "../Routes/Home";
import Login from "../Routes/Login";
import Register from "../Routes/Register";
import Error from "../Routes/Error";
import Logout from "../Routes/Logout";
import Profile from "../Routes/Profile";
import Dashboard from "../Routes/Dashboard";
import AdminPage from "../Routes/AdminPage";

export default function RoutesList() {
  return (
    <Routes>
        <Route path={PATHS.HOME} element={<Home />}/>
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.LOGOUT} element={<Logout />} />
        <Route path={PATHS.REGISTER} element={<Register />}/>
        <Route exact path={PATHS.PROFILE} element={<Profile />} />
        <Route exact path={PATHS.DASHBOARD} element={<Dashboard />} />
        <Route exact path={PATHS.PREFERENCES} element={<></>} />
        <Route path={PATHS.ADMINPAGE} element={<AdminPage />} />
        <Route path="*" element={<Error />}/>
    </Routes>
  )
}
