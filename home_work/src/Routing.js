import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Battle from "./battle/Battle";
import Popular from "./popular/Popular";
import BattleResults from "./battle/BattleResults";

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
                path: "battle/results",
                element: <BattleResults/>,
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