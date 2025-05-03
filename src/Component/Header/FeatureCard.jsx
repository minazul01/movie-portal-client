import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const FeatureCard = ({ card }) => {
  // console.log(card);
  const { poster, id, title, rating } = card;
  
  return (
    <div className="">
      <div className=" bg-[#F7E99E] rounded-md p-4 md:p-6 text-center">
        <img
          alt="movie/image"
          src={poster}
          className="w-[550px] h-[400px] mx-auto"
        />
        <h3 className="text-[1.3rem] md:text-[1.6rem] leading-[28px] md:leading-[35px] font-semibold">
          {title}
        </h3>

        <button className="text-base text-gray-400 font-medium my-3">
          Duration : {rating}
        </button>
        <Link to={`/details/${id}`}>
          <button className="group flex items-center gap-[10px] w-full bg-[#FA8232] text-white py-2.5 rounded-md hover:bg-[#DE732D] transition-all duration-300 px-4 justify-center">
            Details now
            <BsArrowRight className="group-hover:ml-1 transition-all duration-300" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
