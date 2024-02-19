import React, { Component } from "react";
import { Consumer } from "../context";
import GridImages from "../components/GridImages";

class PGridImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isNotFound: true,
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
  }

  render() {
    return (
      <GridImages></GridImages>
    );
  }
}

PGridImages.contextType = Consumer;

export default PGridImages;
