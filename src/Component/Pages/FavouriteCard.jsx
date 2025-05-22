import { BiSolidLike } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

import Swal from "sweetalert2";

const FavouriteCard = ({card, setData, fData}) => {



    const { poster, _id, title, rating } = card;


     const handleDelete = (id) => {
    
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://movie-portal-server-six-flax.vercel.ap/favourites/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
          
                if (data.deletedCount == 1) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "Delete success",
                  });
                 
    
                  const reaming = fData.filter((d) => d._id !== id);
                  setData(reaming);
                }
              });
          }
        });
      };

    return (
        <div>
        <div className="">
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
            
              <button onClick={() => handleDelete(_id)} className="group flex items-center gap-[10px] w-full bg-[#FA8232] text-white py-2.5 rounded-md hover:bg-[#DE732D] transition-all duration-300 px-4 justify-center">
                Delete
                <BsArrowRight className="group-hover:ml-1 transition-all duration-300" />
              </button>
           
          </div>
        </div>
      </div>
    );
};

export default FavouriteCard;