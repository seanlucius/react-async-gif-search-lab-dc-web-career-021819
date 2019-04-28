import React from "react";

const GifList = props => (
  <div>
    {props.gifs.map(gif => (
      <img key={gif} src={gif} alt="" />
    ))}
  </div>
);
export default GifList;
