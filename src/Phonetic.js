import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        alt="phonetic-audio"
      >
        🔊
      </a>
      <span className="text"> {props.phonetic.text}</span>
    </div>
  );
}
