import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./Pages/Home";
import AllMovie from "./Pages/AllMovie";

import AddMovie from "./Pages/AddMovie";
import AllMovieDetail from "./Pages/AllMovieDetail";
import Favourite from "./Pages/Favourite";
import ContactUs from "./Pages/ContactUs";
import Register from "./Pages/authPages/Register";

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
        path: "/all_movies",
        element: <AllMovie />,
      },
      {
        path: "/details/:id",
        element: <AllMovieDetail />,
        loader: async ({ params }) => {
          const res = await fetch("http://localhost:8000/features");
          const data = await res.json();
          const singleData = data.find((data) => data._id == params.id);
          // console.log(data)
          return singleData;
        },
      },
      {
        path: "/add_movies",
        element: <AddMovie />,
      },
      {
        path: "/add_favourites",
        element: <Favourite />,
        loader: () => fetch('http://localhost:8000/favourites')
      },
      {
        path: "/add_us",
        element: <ContactUs />
      },
      {
        path: "/register",
        element: <Register />
      }
    ],
  },
]);

export default router;
