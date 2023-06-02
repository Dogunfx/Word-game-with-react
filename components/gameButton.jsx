import styles from "./component.module.css";

export default function GameButton({ showText, display }) {
  function handleClick() {
    showText((prev) => prev + display);
  }
  return (
    <button onClick={handleClick} className={styles.gameButton}>
      {display}
    </button>
  );
}
