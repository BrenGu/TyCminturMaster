import React, { Component } from "react";
import Arbolesfull from "../../components/Arbolesfull";
import Loading from "../../utils/Loading";

class PArboles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.setState({ loading: false });
  }

  render() {
    return (
      <div className="PNovedades">
        {this.state.loading ? (
          <div className="PFiltroAlojamiento mb-5">
            <div>
              <Loading margins="96px" />
            </div>
          </div>
        ) : (
          <React.Fragment>
            <Arbolesfull />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default PArboles;
