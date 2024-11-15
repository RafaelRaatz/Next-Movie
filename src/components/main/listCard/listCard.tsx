"use client";
import { useEffect, useState } from "react";
import { CardMovie } from "../cardMovie";
import { CardSwitcher } from "../cardSwitcher";
import { IoIosArrowForward } from "react-icons/io";
import { apiPopularMovies, apiRatedMovies } from "@/services/api";

export function ListCard() {
  const [popularmovies, setPopularMovies] = useState<any[]>([]);
  const [ratedmovies, setRatedMovies] = useState<any[]>([]);
  const [visibleSwitcher, setVisibleSwitcher] = useState(1);
  const [visible, setVisible] = useState(6);

  const getRatedMovies = async () => {
    try {
      const response = await apiRatedMovies;
      const data = response.data;
      console.log(data);
      setRatedMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getPopularMovies = async () => {
    try {
      const response = await apiPopularMovies;
      const data = response.data;

      setPopularMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
    getRatedMovies();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {popularmovies.slice(0, visibleSwitcher).map((movie, key) => (
        <CardSwitcher
          key={key}
          name={movie.title}
          image={movie.poster_path}
          average={movie.vote_average}
          popularity={movie.popularity}
          date={movie.release_date}
          resume={movie.overview}
        />
      ))}

      <div className="flex flex-col bg-gray-800 p-4 gap-4 rounded">
        <div className="text-white flex flex-row items-center gap-1 text-xl ml-6 ">
          <h3>Top Popular Movies |</h3>

          <a className="no-underline text-white" href="/">
            See More
          </a>

          <IoIosArrowForward />
        </div>

        <div className="flex flex-row gap-6 justify-center">
          {popularmovies.slice(0, visible).map((movie, key) => (
            <CardMovie key={key} name={movie.title} image={movie.poster_path} />
          ))}
        </div>
      </div>

      <div className="flex flex-col bg-gray-800 p-4 gap-4 rounded">
        <div className="text-white flex flex-row items-center gap-1 text-xl ml-6 ">
          <h3>Top Rated Movies |</h3>

          <a className="no-underline text-white" href="/">
            See More
          </a>

          <IoIosArrowForward />
        </div>

        <div className="flex flex-row gap-6">
          {ratedmovies.slice(0, visible).map((movie, key) => (
            <CardMovie key={key} name={movie.title} image={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}
