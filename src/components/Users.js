import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

// the alternitaves for useEffect in function components is
// 1- componentDidMount()  ................ useEffect(() => {..}, [])
// 2- componentDidUpdate()   ............. useEffect(() => {..}, [dependency])
// 3- componentWillUnmount() ......... useEffect(() => {return () => {..}}, [dependency]) clean up function
class Users extends Component {
  // is class components we have to define all states in one object like this
  constructor() {
    super();
    this.state = {
      showUsers: true, // this is a state
      more: "test", // this is another state
    };
  }

  // this is called a method
  // this is how to create a toggle function and update a state on the prev state
  toggleUsersHandler() {
    this.setState((currentUser) => {
      return {
        showUsers: !currentUser.showUsers,
      };
    });
  }
  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No Users provided");
    }
  }
  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
