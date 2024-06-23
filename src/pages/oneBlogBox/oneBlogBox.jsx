import './oneBlogBox.css'
import React from "react";

export default function OneBlogBox(props) {
  return (
    <div className="oneBlogBox">
      <h1>{props.title}</h1>
      <p>{props.authors}</p>
    </div>
  );
}