import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ text }) {
  return <button calssName={styles.btn}>{text}</button>;
}

Button.PropTypes = {
  text: PropTypes.string.isRequired
};
