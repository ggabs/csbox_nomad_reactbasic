import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
  const pa = useParams();
  console.log(pa);

  const [movieDetail, setMovieDetail] = useState(``);
  const [dtlLoading, setLoading] = useState(true);

  const getMovieDetail = async () => {
    const dtlData = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${pa.id}`)
    ).json();
    console.log(dtlData);
    setMovieDetail(dtlData.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div>
      {dtlLoading ? (
        <h1>Detail..</h1>
      ) : (
        <h1>
          {movieDetail.title} ({movieDetail.rating})
        </h1>
      )}
    </div>
  );
}
