import Live from "../../assets/live_img.png";
import { BsArrowRight } from "react-icons/bs";

const Watch = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row items-center justify-center">
      <div className="flex flex-col justify-center space-y-8">
        <div className="flex flex-row items-center gap-5 text-xl text-gray-500 font-bold">
          <BsArrowRight />
          <h5>ONLINE STREAMING</h5>
        </div>
        <h2 className="text-4xl font-bold">
          Live Movie & TV Shows For Friends & Family
        </h2>
        <p className="text-base font-normal text-gray-500">
          Enjoy non-stop live movies and TV shows, perfectly curated for
          unforgettable moments with friends and family — anytime, anywhere.
        </p>
        <div className="flex flex-row items-start gap-16">
          <h3 className="text-5xl font-bold text-red-400">HD 4K</h3>
          <div>
            <h3 className="text-4xl font-bold text-black">20k+</h3>
            <h3 className="text-2xl font-bold">Active Customer</h3>
          </div>
        </div>
      </div>
      <div>
        <img src={Live} alt="live image" />
      </div>
    </div>
  );
};

export default Watch;
