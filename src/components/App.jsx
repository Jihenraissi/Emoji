import React from "react";
import Card from "./Card";
import emoji from "../Emojipedia";

function createCard(emoji) {
  return (
    <div>
      <Card
        key={emoji.id}
        emoji={emoji.emoji}
        name={emoji.name}
        meaning={emoji.meaning}
      />
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>EmojiPedia</span>
      </h1>
      {emoji.map(createCard)}
    </div>
  );
}
export default App;
