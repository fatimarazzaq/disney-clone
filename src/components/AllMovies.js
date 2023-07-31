import React from "react";
import Movies from "./Movies";
import { useSelector } from "react-redux";

const AllMovies = () => {
  const movieSelector = useSelector((state) => state.movie.movies);
  const headings = [
    "Recommended For You",
    "Trending",
    "New to Disney+",
    "Originals",
  ];
  const overAllList = [];
  var i = 0;
  for (let key in movieSelector) {
    overAllList.push({
      heading: headings[i],
      movies: movieSelector[key],
    });
    i++;
  }
  console.log(overAllList);

  return (
    <>
      {overAllList &&
        overAllList.map((item, index) => (
          <Movies key={index} heading={item.heading} items={item.movies} />
        ))}
    </>
  );
};

export default AllMovies;
