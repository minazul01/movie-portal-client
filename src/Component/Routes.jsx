import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./Pages/Home";
import AllMovie from "./Pages/AllMovie";
import FeatureDetail from "./Header/FeatureDetail";
import AddMovie from "./Pages/AddMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all_movie",
        element: <AllMovie />,
      },
      {
        path: "/add_movie",
        element: <AddMovie />,
      },
      {
        path: "/details/:id",
        element: <FeatureDetail />,
        loader: async ({params}) => {
          const res = await fetch(`http://localhost:8000/features`);
          const data = await res.json();
         
          const singleData = data.find(data => data.id == params.id);
          return singleData
          
        },
      },
    ],
  },
]);

export default router;
