
import { dataContext } from "../App";
import AllMovieCard from "./AllMovieCard";
import { useContext } from "react";

const AllMovie = () => {
  const data = useContext(dataContext)
 
  return (
    <div className="text-center my-20">
      <h1 className="text-3xl font-bold">All Movie Section</h1>
      <p className="md:w-2/3 mx-auto my-6 text-gray-500 text-base font-normal">
        A diverse mix of action, romance, animation, and psychological
        thrillers—this movie collection explores time loops, dream invasions,
        musical ambitions, social horror, heroic battles, and emotional
        journeys, offering something unforgettable for every viewer.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
        {data?.map((card) => (
          <AllMovieCard 
          key={card._id}

          card={card} />
        ))}
      </div>
    </div>
  );
};

export default AllMovie;
