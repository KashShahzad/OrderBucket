import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      //ajax call and get new data from ther server
    }
  }

  render() {
    const { onReset, onDelete, onIncrement, counter } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-secondary btn-sm m-2">
          Reset
        </button>
        {counter.map(counter => (
          <Counter
            key={counter.id}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
