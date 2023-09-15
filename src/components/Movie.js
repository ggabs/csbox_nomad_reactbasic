import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movie({ mv, id }) {
  return (
    <div>
      <img src={mv.medium_cover_image} />
      <h2>
        <Link to={`/movie/${id}`}>{mv.title}</Link>
      </h2>
      <p>{mv.summary}</p>
      <ul>
        {mv.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  mv: PropTypes.object.isRequired,
};
