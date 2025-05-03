import { Link } from "react-router-dom";

const AddMovie = () => {
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const duration = form.duration.value;
    const release = form.release.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const summary = form.summary.value;
    
    const inputData = { name, duration, release, rating, photo, summary };

    console.log(inputData);
  };

  return (
    <div>
      <div className="h-screen">
        <section className="w-full">
          {/* title */}
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="mt-10 text-[2rem] font-bold text-[#3B9DF8] leading-[36px]">
              Add Coffee
            </h1>
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
                    type="category"
                    name="photo"
                    className="peer bg-white border-[#e5eaf2] border rounded-2xl outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                  />
                  <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                    Image url
                  </span>
                </label>
              </div>

              <div className="flex flex-col gap-[5px] w-full sm:w-[50%] my-5">
                <label className="relative">
                  <input
                    type="details"
                    name="summary"
                    className="peer bg-white border-[#e5eaf2] border rounded-2xl outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                  />
                  <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                    Summary
                  </span>
                </label>
              </div>
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
          <Link to="/all_movie">
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
