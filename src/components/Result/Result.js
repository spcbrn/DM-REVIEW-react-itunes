import React from "react";

export default function Results(props) {
  return (
    //04: plug each prop into it's appropriate table cell (<td>)
    <tr>
      <td>
        <button>
          <a href={props.preview} target="_blank" rel="noopener noreferrer">
            Play
          </a>
        </button>
      </td>
      <td>{props.song}</td>
      <td>{props.artist}</td>
      <td>{props.collection}</td>
      <td>
        <img src={props.albumArt} alt="Album Cover" />
      </td>
      <td>{props.type}</td>
      <td>${props.singlePrice}</td>
      <td>${props.collectionPrice}</td>
    </tr>
  );
}
