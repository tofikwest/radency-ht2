import React from "react";
import { AddNoteForm } from "./AddNoteForm";

class ButtonAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isPressed: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isPressed: !prevState.isPressed,
    }));
  }
  render() {
    if (!this.state.isPressed) {
      return (
        <div className="row">
          <input
            id="add-btn"
            type="button"
            value=""
            onClick={this.handleClick}
          />
        </div>
      );
    }
    return <AddNoteForm button={this}></AddNoteForm>;
  }
}

export default ButtonAdd;
