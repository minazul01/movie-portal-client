import { useContext } from "react";
import { dataContext } from "../App";
import ReleaseCard from "./ReleaseCard";

const NewRelease = () => {
  const data = useContext(dataContext);

  const newMovie = data.filter((d) => d.releaseYear >= 2020).slice(-6);


  return (
    <div>
      <div className="my-40">
        <div className="flex flex-col items-center text-center my-10">
          <h1 className="text-3xl font-bold">New Release Movie</h1>
          <p className="md:w-2/3 mx-auto my-6 text-gray-500 text-base font-normal">
            A diverse mix of action, romance, animation, and psychological
            thrillers—this movie collection explores time loops, dream
            invasions, musical ambitions, social horror, heroic battles, and
            emotional journeys, offering something unforgettable for every
            viewer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newMovie.map((data) => (
            <ReleaseCard key={data._id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewRelease;
