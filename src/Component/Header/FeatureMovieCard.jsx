import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";


const FeatureMovieCard = ({ data }) => {
  const { poster, _id, title, rating } = data;
  return (
    <div>
      <div className=" bg-[#F7E99E] rounded-md p-4 md:p-6 text-center">
        <img
          alt="movie/image"
          src={poster}
          className="w-[550px] h-[400px] mx-auto p-2 rounded-2xl"
        />
        <h3 className="text-[1.3rem] md:text-[1.6rem] leading-[28px] md:leading-[35px] font-semibold">
          {title}
        </h3>

        <div className="flex justify-between">
          <div className="">
            <button className="text-base text-gray-400 font-medium my-3">
              Rating :
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-orange-500">
              <BiSolidLike />
            </div>
            <div>{rating}</div>
          </div>
        </div>
        <Link to={`/details/${_id}`}>
          <button className="group flex items-center gap-[10px] w-full bg-[#FA8232] text-white py-2.5 rounded-md hover:bg-[#DE732D] transition-all duration-300 px-4 justify-center">
            Details now
            <BsArrowRight className="group-hover:ml-1 transition-all duration-300" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureMovieCard;
