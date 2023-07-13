import HomePage from "../HomePage/HomePage";
import Main from "../layout/Main";
import ComingSoon from "../pages/ComingSoon/ComingSoon";
const { createBrowserRouter } = require("react-router-dom");


export const router = createBrowserRouter([
    {
   
        path: '/',
        element: <Main></Main>,
        
        
},
{
    path:"/blogs",
    element:<ComingSoon/>
}

])
