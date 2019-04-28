import React from "react";
import GifList from "../components/GifList.js";
import GifSearch from "../components/GifSearch.js";

class GifListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      gifList: []
    };
  }

  fetchGifs = search => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=e6vEg6VH4M5SmdSGZnVOJw4LcHt2YtDf&rating=g&limit=3`
    )
      .then(resp => resp.json())
      .then(({ data }) => {
        this.setState({
          gifList: data.map(gif => gif.images.original.url)
        });
      });
  };

  componentDidMount() {
    this.fetchGifs();
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifList} />
        <GifSearch submitHandler={this.fetchGifs} />
      </div>
    );
  }
}

export default GifListContainer;
