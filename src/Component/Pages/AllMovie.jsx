import { dataContext } from "../App";
import AllMovieCard from "./AllMovieCard";
import { useContext, useEffect, useState } from "react";

const AllMovie = () => {
  const MovieData = useContext(dataContext);

  const [data, setData] = useState(MovieData);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/features?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [search]);
  return (
    <div className="text-center my-20">
      <h1 className="text-3xl font-bold">All Movie Section</h1>
      <p className="md:w-2/3 mx-auto my-6 text-gray-500 text-base font-normal">
        A diverse mix of action, romance, animation, and psychological
        thrillers—this movie collection explores time loops, dream invasions,
        musical ambitions, social horror, heroic battles, and emotional
        journeys, offering something unforgettable for every viewer.
      </p>
      {/* search input */}
      <div className="w-full md:w-[50%] mx-auto my-10 relative">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className="border bg-transparent border-border py-3 pl-4 pr-[65px] focus:border-primary focus:outline-none w-full rounded-md"
        />

        <span className="text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 hover:text-gray-200      ">
          Search
        </span>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.map((card) => (
          <AllMovieCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default AllMovie;
