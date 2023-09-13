import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
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
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <img src={movie.medium_cover_image} />
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                <ul>
                  {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
      <button onClick={onClickGetMovies}>GetMovies</button>
    </div>
  );
}
