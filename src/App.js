import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil";
import "./styles.css";

const textState = atom({
  key: "textState",
  default: ""
});

function CharacterCounter() {
  return (
    <div>
      <TextInput />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
      <br />
      Character Count: {text.length}
      <br />
      Word Count:{" "}
      {text.length == 0
        ? 0
        : text.endsWith(" ")
        ? text.split(" ").length - 1
        : text.split(" ").length}
    </div>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Hello World</h1>
        <h2>This is a demo recoil app</h2>
        <CharacterCounter />
      </div>
    </RecoilRoot>
  );
}
