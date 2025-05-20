import React, { useContext } from "react";
import { dataContext } from "../App";
import { Link } from "react-router-dom";

const Header = () => {
  const data = useContext(dataContext);

  // 2020 ba tar porer movies, last 4 ta new release
  const newMovie = data.filter((d) => d.releaseYear >= 2020).slice(-4);

  return (
    <div className="carousel w-full my-10 rounded-md">
      {newMovie?.map((movie, index) => {
        // slide id gula dynamic korchi: slide1, slide2 ...
        const slideId = `slide${index + 1}`;

       
        const prevSlide = `slide${index === 0 ? newMovie.length : index}`;
        const nextSlide = `slide${
          index === newMovie.length - 1 ? 1 : index + 2
        }`;

        return (
          <div
            key={movie._id}
            id={slideId}
            className="carousel-item relative w-full"
          >
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${movie.poster})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">New Release Movie</h1>
                  <h1 className="mb-5 text-4xl font-bold">{movie.title}</h1>

                  <p className="mb-5">Duration: {movie.duration}</p>
                  <p className="mb-5">Rating: {movie.rating || "N/A"}</p>
                  <Link to={`/details/${movie._id}`}>
                    <button className="btn btn-primary">Details</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#${prevSlide}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#${nextSlide}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
