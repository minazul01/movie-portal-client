import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";
import { createContext, useEffect, useState } from "react";
import Footer from "./Footer/Footer"

// all-movie data context
export const dataContext = createContext();

function App() {
  const [feature, setFeature] = useState([]);
  useEffect(() => {
    fetch("https://movie-portal-server-six-flax.vercel.app")
      .then((res) => res.json())
      .then((data) => {
        setFeature(data);
      });
  }, []);

  return (
    <>
      <div className="">
        <dataContext.Provider value={feature}>
          <Navbar></Navbar>
          <div className="">
            <Outlet></Outlet>
          </div>
        </dataContext.Provider>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
