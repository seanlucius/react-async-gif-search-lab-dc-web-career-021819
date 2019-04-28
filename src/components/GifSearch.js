import React from "react";

class GifSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitHandler(this.state.searchTerm);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default GifSearch;
