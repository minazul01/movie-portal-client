import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMovie = () => {
  const data = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const [singleData, setData] = useState(data);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.release.value;
    const rating = form.rating.value;
    const poster = form.photo.value;
    const description = form.summary.value;
    const allForm = {
      title,
      genre,
      duration,
      releaseYear,
      rating,
      poster,
      description,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/features/${singleData?._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(allForm),
        })
          .then((res) => res.json())
          .then((data) => {
  
            if (
              data &&
              data?.acknowledged === true &&
              data?.modifiedCount > 0 &&
              data?.matchedCount > 0
            ) {
              Swal.fire({
                title: "Updated!",
                text: "Your file has been Updated.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-5xl font-bold my-10 text-center">Update movie</h2>
      <form onSubmit={handleUpdate} className="w-full mt-[50px]">
        <div className="flex flex-col sm:flex-row items-center gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
            <label className="relative">
              <input
                type="text"
                name="name"
                defaultValue={singleData?.title}
                className="peer bg-white border-[#e5eaf2] border rounded-2xl outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
              />
              <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                Movie Name
              </span>
            </label>
          </div>

          <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
            <label className="relative">
              <input
                type="text"
                name="duration"
                defaultValue={singleData?.duration}
                className="peer bg-white border-[#e5eaf2] border rounded-2xl outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
              />
              <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                Duration
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
            <label className="text-[#777777] text-sm font-medium">Genre</label>
            <select
              name="genre"
              // defaultValue={data?.genre}
              required
              className="bg-white border border-[#e5eaf2] rounded-2xl px-4 py-3 outline-none focus:border-[#3B9DF8] transition-colors duration-300"
            >
              <option value="" disabled>
                Select Genre
              </option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Comedy">Comedy</option>
              <option value="Horror">Horror</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Romance">Romance</option>
            </select>
          </div>

          <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
            <label className="relative">
              <input
                type="text"
                name="rating"
                defaultValue={singleData?.rating}
                className="peer bg-white border-[#e5eaf2] border rounded-2xl outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
              />
              <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                Rating
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
            <label className="relative">
              <input
                type="text"
                name="release"
                defaultValue={singleData?.releaseYear}
                className="peer bg-white border-[#e5eaf2] border rounded-2xl outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
              />
              <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                Release Year
              </span>
            </label>
          </div>

          <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
            <label className="relative">
              <input
                type="text"
                name="summary"
                defaultValue={singleData?.description}
                className="peer bg-white border-[#e5eaf2] border rounded-2xl outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
              />
              <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                Summary
              </span>
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-[5px] w-full sm:w-[100%] my-5">
          <label className="relative">
            <input
              type="url"
              name="photo"
              defaultValue={singleData?.poster}
              className="peer bg-white border-[#e5eaf2] border rounded-2xl outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
            />
            <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
              Image url
            </span>
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="items-center justify-center py-2 px-6 border border-[#3B9DF8] text-[#3B9DF8] rounded font-[500] relative overflow-hidden z-10 mt-[50px] cursor-pointer  hover:bg-secondary"
          >
            Added
          </button>
        </div>
      </form>
      <div className="text-center my-20">
        <Link to="/all_movies">
          <button className="px-6 py-2 border border-[#3B9DF8] bg-primary text-[#fff] hover:bg-secondary hover:text-[#3B9DF8] transition duration-300 rounded my-5 cursor-pointer">
            Move to All-Movie
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateMovie;
