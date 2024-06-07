import {Route, Routes} from "react-router-dom";
import IntroPage from "./Pages/IntroPage";
import MakePage from "./Pages/MakePage";

function MyRoutes() {
    return (
        <Routes>
            <Route index path="/" element={<IntroPage/> }></Route>
            <Route path="/make" element={<MakePage/> }></Route>
        </Routes>
    );
}

export default MyRoutes;