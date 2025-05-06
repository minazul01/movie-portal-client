import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
import { createContext, useEffect, useState } from "react";

// all-movie data context
export const dataContext = createContext();

function App() {
  const [feature, setFeature] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/features")
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
          <Outlet></Outlet>
          <Footer></Footer>
        </dataContext.Provider>
      </div>
    </>
  );
}

export default App;
