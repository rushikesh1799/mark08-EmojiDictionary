import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😔": "Sad",
  "🍝": "Spaghetti",
  "❤️": "Love",
  "😟": "Worried",
  "😑": "Annoyance",
  "😕": "Confused",
  "😞": "Disappointed",
  "🤩": "Star-Struck",
  "😉": "Winking",
  "💥": "Collision",
  "👍": "Thumbs Up",
  "😴": "Sleeping",
  "🦁": "Lion",
  "😒": "Unamused"
};

let emojis = Object.keys(emojiDictionary);

export default function App() {
  let [output, setOutput] = useState("Your output will Be displayed here");

  function emojiInputHandler(e) {
    let emoji = e.target.value;

    if (emoji === "") {
      setOutput();
      return;
    }

    let output = emojiDictionary[emoji];

    if (output) {
      setOutput(output);
    } else {
      setOutput("We do not have this emoji in our database.");
    }
  }

  function emojiClickHandler(emoji) {
    let output = emojiDictionary[emoji];
    setOutput(output);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input
        type="text"
        placeholder="Enter Emoji Here"
        onChange={emojiInputHandler}
      ></input>

      <p>Emojis that we have in our database</p>
      <section id="output">{output}</section>
      <div className="wrapper">
        <ul>
          {emojis.map((emoji, index) => {
            return (
              <li key={index} onClick={() => emojiClickHandler(emoji)}>
                {emoji}
              </li>
            );
          })}
        </ul>
      </div>
      <footer>
        <p class="footer-text">
          Developed By
          <a
            href="https://rushikeshbunge-portfolio.netlify.app/"
            className="link"
            target="_blank"
          >
            {" "}
            Rushikesh{" "}
          </a>
        </p>
      </footer>
    </div>
  );
}
