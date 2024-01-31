import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("constructor");
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>Welcome To Namaste React Web Series</h2>
        <User />
        <UserClass name={"Aditya Agare"} Location={"Nagpur"} />
      </div>
    );
  }
}

export default About;
