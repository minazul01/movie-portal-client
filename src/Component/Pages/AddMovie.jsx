/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddMovie = () => {
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.release.value;
    const rating = form.rating.value;
    const poster = form.photo.value;
    const description = form.summary.value;
    // console.log(name);

    // 1. Title validation (at least 2 words)
    if (!title.trim() || title.split(" ").length > 2) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      return Toast.fire({
        icon: "error",
        title: "movie name lower then 2 charcter",
      });
    }

    // 2. Rating validation (between 1 and 10)
    if (isNaN(rating) || rating < 1 || rating > 10) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      return Toast.fire({
        icon: "error",
        title: "rating 1 to 10 number",
      });
    }

    // 3. Genre validation (should not be empty)
    if (!genre.trim()) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      return Toast.fire({
        icon: "error",
        title: "genre not be emty",
      });
    }

    // 4. Duration validation (e.g., '1h 30m')
    if (isNaN(duration) || duration < 30) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      return Toast.fire({
        icon: "error",
        title: "duration has been 30 min",
      });
    }
    if (!releaseYear) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      return Toast.fire({
        icon: "error",
        title: "release year not emty",
      });
    }
    // 5. Description validation (should not be empty and reasonable length)
    if (!description.trim() || description.length < 10) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      return Toast.fire({
        icon: "error",
        title: "summary has been 10 cheracter",
      });
    }

    // 6. Poster URL validation (only https://)
    if (!poster.trim()) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      return Toast.fire({
        icon: "error",
        title: "image url error",
      });
    }

    try {
      const url = new URL(poster);
      if (url.protocol !== "https:") {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-center",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        return Toast.fire({
          icon: "error",
          title: "image url error",
        });
      }
    } catch (e) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      return Toast.fire({
        icon: "error",
        title: "image url error",
      });
    }

    const inputData = {
      poster,
      title,
      genre,
      duration,
      releaseYear,
      rating,
      description,
    };

   
    fetch("https://movie-portal-server-six-flax.vercel.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            title: "Your Movie Post has been added!!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="container mx-auto">
        <section className="w-full">
          {/* title */}
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="mt-10 text-[2rem] font-bold text-[#3B9DF8] leading-[36px]">
              Add Movie
            </h1>
            <p className="text-base text-gray-500 font-medium text-center my-5">Your movie added by all movie section. Stream the latest movies and timeless classics live <br /> perfect for movie nights with friends and family.</p>
          </div>

          {/* form area */}
          <form onSubmit={handleForm} className="w-full mt-[50px]">
            <div className="flex flex-col sm:flex-row items-center gap-[20px]">
              <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
                <label className="relative">
                  <input
                    type="text"
                    name="name"
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
                    type="chef"
                    name="duration"
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
                <label className="text-[#777777] text-sm font-medium">
                  Genre
                </label>
                <select
                  name="genre"
                  defaultValue=""
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
                    type="teste"
                    name="rating"
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
                    type="supplier"
                    name="release"
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
                    type="teste"
                    name="summary"
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
                  type="images"
                  name="photo"
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
        </section>
        <div className="text-center my-20">
          <Link to="/all_movies">
            <button className="px-6 py-2 border border-[#3B9DF8] bg-primary text-[#fff] hover:bg-secondary hover:text-[#3B9DF8] transition duration-300 rounded my-10 cursor-pointer">
              Move to All-Movie
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
