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
                <Route path="friday/" element={<Test/>}/>
                <Route path='friday/inputnewpassword' element={<InputNewPassword/>}/>
                <Route path='friday/login' element={<Login/>}/>
                <Route path='friday/error404' element={<Error404/>}/>
                <Route path='friday/profile' element={<Profile/>}/>
                <Route path='friday/restore' element={<Restore/>}/>
                <Route path='friday/registration' element={<Registration/>}/>
                <Route path='friday/*' element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages