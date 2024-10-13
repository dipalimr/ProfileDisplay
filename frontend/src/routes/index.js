import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ProfileDetail from "../pages/ProfileDetail";
import AdminPanel from "../pages/AdminPanel";  
import SearchResults from "../pages/SearchResults";  


const router =createBrowserRouter([
    {
        path:"/",
        element :<App/>,
        children :[
            {
                path:"",
                element:<Home/>
            },
            {
                path: "profile/:id", 
                element: <ProfileDetail />, 
             },
             {
                path: "admin",  // Route for the admin panel
                element: <AdminPanel />
            },
            {
                path: "search-results",
                element: <SearchResults />, // New route for Search Results
            },
           
        ]

    }
])

export default router