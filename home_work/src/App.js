import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home";
import Battle from "./battle/Battle";
import Popular from "./popular/Popular";
import Layout from "./Layout";
import * as Routing from "./Routing";

const App = () => <RouterProvider router={Routing.router}></RouterProvider>

export default App;
