import React from "react";
import ReactDOM from "react-dom";
import Item from "./item";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

class Items extends React.Component {
  state = {
    items: [{ id: 1, value: 0 }, { id: 2, value: 10 }, { id: 3, value: 0 }]
  };

  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({
      items: items
    });
  };

  render() {
    return (
      <div>
        {this.state.items.map(item => (
          <Item key={item.id} items={item} handleDelete={this.handleDelete} />
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Items />, rootElement);
