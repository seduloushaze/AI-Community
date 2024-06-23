import './oneBlogBox.css'
import React from "react";

export default function OneBlogBox(props) {
  return (
    <div className="oneBlogBox">
      <h1>{props.title}</h1>
      <div className="cont">
        <p>{props.authors}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
}