import React, { useEffect } from "react";
import ImgSlider from "./ImgSlider";
import styled from "styled-components";
import Viewers from "./Viewers";
import movieCollection from "../firebase-config";
import { getDocs } from "firebase/firestore";
import { setMovies } from "../features/movie/movieSlice";
import { useDispatch } from "react-redux";
import AllMovies from "./AllMovies";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieType = ["original", "new", "recommend", "trending"];

    const getmovies = async () => {
      const result_dict = {
        original: null,
        new: null,
        recommend: null,
        trending: null,
      };
      const data = await getDocs(movieCollection);
      const tempMovie = data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      const getFiltered = (mov_lst, filterer) => {
        const result_lst = [];

        for (var i = 0; i < mov_lst.length; i++) {
          if (mov_lst[i].type === filterer) {
            result_lst.push(mov_lst[i]);
          }
          result_dict[filterer] = result_lst;
        }
      };

      for (var i = 0; i < movieType.length; i++) {
        getFiltered(tempMovie, movieType[i]);
      }

      dispatch(setMovies(result_dict));
    };

    getmovies();
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <AllMovies />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: calc(100vh-70px);
  // min-height: 100vh;
  overflow-x: hidden;
  padding: 0px calc(3.5vw+5px);
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background: url("images/photos/home-background.png");
    position: fixed;
    background-size:cover;
    background-repeat:no-repeat;
    position:center center;
    z-index: -1;
`;
