import { Link, useLoaderData } from "react-router-dom";

const AllMovieDetail = () => {
  const movie = useLoaderData(); // this is the single movie object

  const { title, poster, description, genre, duration, releaseYear } = movie;
  return (
    <div>
      <div className="md:w-full card lg:card-side bg-base-100 shadow-sm my-20">
        <figure className="lg:w-1/2">
          <img src={poster} alt="Album" />
        </figure>
        <div className="card-body gap-10 lg:w-1/2">
          <h2 className="card-title">New album is released!</h2>
          <h className="text-3xl font-bold">{title}</h>
          <p className="text-base font-normal text-gray-500">{description}</p>
          <div className="flex justify-between">
            <h4 className="text-2xl text-lime-400">
              Release year : <span className="text-red-400">{releaseYear}</span>
            </h4>
            <h4 className="text-lime-400">
              Duration : <span className="text-red-400">{duration}</span>
            </h4>
          </div>
          <h5 className="text-xl text-gray-500 ">
            {genre?.[0]},{genre?.[1]}, {genre?.[2]}
          </h5>
          <div className="flex justify-between">
            <button className="p-2 bg-lime-400 rounded-md hover:p-2 btn btn-outline cursor-pointer">
              Delete Movie
            </button>
            <button className="p-2 bg-lime-400 rounded-md hover:p-2 btn btn-outline cursor-pointer">
              Add Favourite
            </button>
          </div>
          <Link className="p-2 bg-lime-400 rounded-md hover:p-2 btn btn-outline cursor-pointer" to={"/all_movie"}>
            <button >
              All-Movie
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllMovieDetail;
