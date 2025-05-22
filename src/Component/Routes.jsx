import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./Pages/Home";
import AllMovie from "./Pages/AllMovie";

import AddMovie from "./Pages/AddMovie";
import AllMovieDetail from "./Pages/AllMovieDetail";
import Favourite from "./Pages/Favourite";
import ContactUs from "./Pages/ContactUs";
import Register from "./Pages/authPages/Register";
import Login from "./Pages/authPages/Login";
import PrivateRoute from "./Pages/authPages/PrivateRoute";
import UpdateMovie from "./Pages/UpdateMovie";
import Error from "./Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
        element: (
          <PrivateRoute>
            <AllMovieDetail />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <AddMovie />
          </PrivateRoute>
        ),
      },
      {
        path: "/add_favourites",
        element: (
          <PrivateRoute>
            <Favourite />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:8000/favourites"),
      },
      {
        path: "/contact_us",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/update_movie/:id",
        element: <UpdateMovie />,
        loader: ({params}) => fetch(`http://localhost:8000/features/${params.id}`)
      }
    ],
  },
]);

export default router;
