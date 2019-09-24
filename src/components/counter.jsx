import React, { Component } from "react";

class Counter extends Component {
  //FOR THE SAKE OF SINGLE SOURCE OF TRUTH
  //   state = {
  //     //prop is a property of component and the attributes of that component are the properties of prop
  //     count: this.props.counter.value
  //     //tags: ["tag1", "tag2", "tag3"]
  //   };

  //   handleIncrement = () => {
  //     //   setState is the method inherit from the base component, tells the react that we are changing the state and then
  //     //   it figures this out that what part of the state is changed and based on that it will bring the dom in sync with
  //     //   the virtual dom.
  //     this.setState({ count: this.state.count + 1 });
  //   };

  render() {
    return (
      <div>
        <span className={this.getBadge()}>{this.formating()}</span>
        <button
          //onClick={this.handleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  getBadge() {
    let classes = "badge m-2 badge-";
    // classes += this.state.count === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formating() {
    // const { count } = this.state;
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
