// import { useContext } from "react";
// import { dataContext } from "../App";

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import FavouriteCard from "./FavouriteCard";

const Favourite = () => {
  const data = useLoaderData();
  const [fData, setData] = useState(data);

  
  return (
    <div className="text-center my-20">
      <h1 className="text-3xl font-bold">All Movie Section</h1>
      <p className="md:w-2/3 mx-auto my-6 text-gray-500 text-base font-normal">
        A diverse mix of action, romance, animation, and psychological
        thrillers—this movie collection explores time loops, dream invasions,
        musical ambitions, social horror, heroic battles, and emotional
        journeys, offering something unforgettable for every viewer.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {fData?.map((card) => (
          <FavouriteCard key={card._id} card={card}  setData={setData} />
        ))}
      </div>
    </div>
  );
};

export default Favourite;
