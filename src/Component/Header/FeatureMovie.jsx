import { useContext } from "react";
import { dataContext } from "../App";
import FeatureMovieCard from "./FeatureMovieCard";


const FeatureMovie = () => {
    const data = useContext(dataContext);
 
    
    const rating = data.filter((d) => d.rating >= 8).slice(0,6);
    
   
  return (
    <div className="my-20">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold">All Movie Section</h1>
        <p className="md:w-2/3 mx-auto my-6 text-gray-500 text-base font-normal">
          A diverse mix of action, romance, animation, and psychological
          thrillers—this movie collection explores time loops, dream invasions,
          musical ambitions, social horror, heroic battles, and emotional
          journeys, offering something unforgettable for every viewer.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            rating.map(data => <FeatureMovieCard key={data._id} data={data} />)
        }
      </div>
    </div>
  );
};

export default FeatureMovie;
