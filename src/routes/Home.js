import { useState, useEffect } from "react";
import Movie from "../components/Movie";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`,
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  const onClickGetMovies = () => {
    getMovies();
  };
  console.log(movies);
  useEffect(() => {});

  return (
    <div>
      {loading ? (
        <h1>Loading .....</h1>
      ) : (
        <div>
          {movies.map((item) => (
            <Movie key={item.id} mv={item} id={item.id} />
          ))}
        </div>
      )}
      <button onClick={onClickGetMovies}>GetMovies</button>
    </div>
  );
}
