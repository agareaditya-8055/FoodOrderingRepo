import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="user-card p-4 m-4 bg-gray-100 rounded-lg">
        <h1>Count : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Add
        </button>
        <h2>Name : {this.props.name}</h2>
        <h3>Location : {this.props.Location}</h3>
        <h4>Contact : adityaagare@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
