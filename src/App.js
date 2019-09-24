import "./App.css";
import Navbar from "./components/navBar";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counter = this.state.counter.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };

  handleDelete = counterId => {
    const counters = this.state.counter.filter(c => c.id !== counterId);
    this.setState({ counter: counters });
  };

  incrementHandler = count => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(count);
    counter[index] = { ...count };
    counter[index].value++;
    this.setState({ counter });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counter.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counter={this.state.counter}
            onReset={this.handleReset}
            onIncrement={this.incrementHandler}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
