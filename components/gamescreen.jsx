import { useState } from "react";
import BoxComponent from "./box";
import styles from "./component.module.css";
import GameButton from "./gameButton";

export default function GameScreen() {
  const [text, setText] = useState("");
  const [computer_text, setComputerText] = useState({});

  return (
    <div className={styles.gameScreen}>
      <div className={styles.topRowLayout}>
        <div className={styles.left}>
          <BoxComponent display="score" />
        </div>
        <div className={styles.right}>
          <BoxComponent display="Timer" />
        </div>
      </div>

      <div className={styles.spacing}>
        <BoxComponent display={computer_text.shuffle_word} width="70%" />
      </div>
      <div className={styles.spacing}>
        <BoxComponent display={text} width="50%" />
      </div>
      <div className={styles.spacing}>
        <BoxComponent width="90%">
          <GameButton showText={setText} display="A" />
          <GameButton showText={setText} display="B" />
          <GameButton showText={setText} display="C" />
          <GameButton showText={setText} display="D" />
          <GameButton showText={setText} display="E" />
          <GameButton showText={setText} display="F" />
          <GameButton showText={setText} display="G" />
          <GameButton showText={setText} display="G" />
          <GameButton showText={setText} display="I" />
          <GameButton showText={setText} display="H" />
          <GameButton showText={setText} display="J" />
          <GameButton showText={setText} display="L" />
          <GameButton showText={setText} display="M" />
          <GameButton showText={setText} display="N" />
          <GameButton showText={setText} display="O" />
          <GameButton showText={setText} display="P" />
          <GameButton showText={setText} display="Q" />
          <GameButton showText={setText} display="R" />
          <GameButton showText={setText} display="S" />
          <GameButton showText={setText} display="T" />
          <GameButton showText={setText} display="U" />
          <GameButton showText={setText} display="V" />
          <GameButton showText={setText} display="W" />
          <GameButton showText={setText} display="X" />
          <GameButton showText={setText} display="Y" />
          <GameButton showText={setText} display="Z" />
        </BoxComponent>

        <button
          className={styles.box}
          onClick={() => {
            setText("");
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}