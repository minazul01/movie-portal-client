import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./Pages/Home";
import AllMovie from "./Pages/AllMovie";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
       children: [
         {
             path: "/",
             element: <Home />
         },
         {
            path: "/allmovie",
            element: <AllMovie></AllMovie>
         }
      ]
    },
  ]);

  export default router;