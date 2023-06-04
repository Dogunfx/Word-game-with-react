import { useState } from "react";
import BoxComponent from "./box";
import styles from "./component.module.css";
import GameButton from "./gameButton";
import generateWord, { hasWord, isInArray } from "../util/words";
import { toast, ToastContainer } from "react-toastify";

export default function GameScreen() {
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(0);
  const [listOfLetters, setListOfLetters] = useState([]);
  const [listOfWords, setListOfWords] = useState([]);

  function handleTest() {
    if (hasWord(text)) {
      if (!isInArray(text, listOfWords)) {
        setListOfWords([...listOfWords, text]);
        toast.success("Good Job ✅");
        setText("");
        setCounter((prevV) => {
          return prevV + 1;
        });
      } else {
        toast.error("Word already Exist");
      }
    } else {
      toast.error("Try Again ");
    }
  }

  const letterComponents = listOfLetters.map((letter, index) => (
    <GameButton key={index} showText={setText} display={letter} />
  ));

  const wordComponents = listOfWords.map((word, index) => (
    <span key={index} className={styles.word}>
      {word}
    </span>
  ));

  return (
    <div className={styles.row}>
      <div className={styles.wordList}>{wordComponents}</div>
      <div className={styles.gameScreen}>
        <ToastContainer />
        <div className={styles.topRowLayout}>
          <div className={styles.left}>
            <BoxComponent display={`Score ---  ${counter}`} />
          </div>
          <div className={styles.right}>
            <BoxComponent display="Timer" />
          </div>
        </div>

        <div className={styles.spacing + " " + styles.bigText}>
          <BoxComponent display={text} width="50%" />
        </div>
        <div className={styles.spacing}>
          <BoxComponent width="90%">{letterComponents}</BoxComponent>
          <button onClick={handleTest} className={styles.box}>
            Summit Answer
          </button>

          <button
            className={styles.box}
            onClick={() => {
              setText("");
            }}
          >
            Clear
          </button>

          <button
            onClick={() => {
              const newWord = generateWord(4);
              setListOfLetters([...newWord.shuffle_word]);
            }}
            className={styles.box}
          >
            Generate Word
          </button>
        </div>
      </div>
    </div>
  );
}
