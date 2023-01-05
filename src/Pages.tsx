import {InputNewPassword} from "./components/InputNewPassword/InputNewPassword";
import {Login} from "./components/Login/Login";
import {Error404} from "./components/Error404/Error404";
import {Profile} from "./components/Profile/Profile";
import {Restore} from "./components/Restore/Restore";
import {Registration} from "./components/Registration/Registration";
import {Route, Routes} from "react-router-dom"
import {Test} from "./components/Test/Test";

function Pages() {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Test/>}/>
                <Route path={'/inputnewpassword'} element={<InputNewPassword/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/error404'} element={<Error404/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/restore'} element={<Restore/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages