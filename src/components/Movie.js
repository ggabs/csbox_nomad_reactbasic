import PropTypes from "prop-types";

export default function Movie({ mv }) {
  return (
    <div>
      <img src={mv.medium_cover_image} />
      <h2>{mv.title}</h2>
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
