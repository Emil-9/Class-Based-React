import classes from "./User.module.css";
import { Component } from "react";

// this is a class based component we can use it with function based components also 

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
