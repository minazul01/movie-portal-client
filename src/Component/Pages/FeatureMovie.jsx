import React, { useEffect, useState } from "react";
import FeatureCard from "../Header/FeatureCard";

const FeatureMovie = () => {
  const [feature, setFeature] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/features")
      .then((res) => res.json())
      .then((data) => {
        setFeature(data);
      });
  }, []);
  return (
    <div className="text-center my-20">
      <h1 className="text-3xl font-bold">Features of Movies</h1>
      <p className="md:w-2/3 mx-auto my-6 text-gray-500 text-base font-normal">
        A diverse mix of action, romance, animation, and psychological
        thrillers—this movie collection explores time loops, dream invasions,
        musical ambitions, social horror, heroic battles, and emotional
        journeys, offering something unforgettable for every viewer.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
        {feature?.map((card) => (
          <FeatureCard key={card.id} card={card}></FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default FeatureMovie;
