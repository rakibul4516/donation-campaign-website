import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import HomeComponents from "./Components/HomeComponents/HomeComponents";
import PostDetail from "./Components/PostDetail/PostDetail";
import Donation from "./Pages/Donation/Donation";
import Statistics from "./Pages/Statistics/Statistics";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home></Home>,
        errorElement : <ErrorPage></ErrorPage>,
        children :[
            {
                path : "/",
                element : <HomeComponents></HomeComponents>,
            },

            {
                path : "/home/:id",
                element : <PostDetail></PostDetail>,
                loader:()=>fetch('/data.json')
            },
            {
                path : "/donation",
                element : <Donation></Donation>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>,
            },
        ]
    }
])

export default router;