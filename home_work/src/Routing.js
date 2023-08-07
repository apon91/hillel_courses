import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Battle from "./Battle";
import Popular from "./popular/Popular";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "battle",
                element: <Battle/>,
            },
            {
                path: "popular",
                element: <Popular/>,
            },
            {
                path: "*",
                element:  <h1>Error</h1>
            },
        ]
    }
]);