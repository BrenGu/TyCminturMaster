import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";

class Producto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      visible: true,
      list: "",
      MenuItem: "",
    };
  }

  componentDidMount() {
    // list of items
    list = [
      { name: "item1" },
      { name: "item2" },
      { name: "item3" },
      { name: "item4" },
      { name: "item5" },
      { name: "item6" },
      { name: "item7" },
      { name: "item8" },
      { name: "item9" },
    ];

    // One item component
    // selected prop will be passed
    MenuItem = ({ text, selected }) => {
      return <div className="menu-item">{text}</div>;
    };

    // All items component
    // Important! add unique key
    const Menu = (list) =>
      list.map((el) => {
        const { name } = el;

        return <MenuItem text={name} key={name} />;
      });

    const Arrow = ({ text, className }) => {
      return <div className={className}>{text}</div>;
    };

    const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
    const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

    state = {
      selected: 0,
    };

    onSelect = (key) => {
      this.setState({ selected: key });
    };
  }
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = Menu(this.state.list, selected);

    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}
export default Producto;
