import { Component, Fragment } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";
import UsersContext from "../store/user-context";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  // we can call static once only in class based
  // in order to use multiple context we have to create seperate components

  static contextType = UsersContext;
  // main state constructor
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }
  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }
  //   replacement of useEffect from react WITH A DEPENDENCY
  componentDidUpdate(prevProp, prevState) {
    // to avoid going through a loop
    // because react will render this function on each chnage on state
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("searching");
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    console.log("change state");
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <input
          className={classes.finder}
          type="search"
          onChange={this.searchChangeHandler.bind(this)}
        />
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input type="search" onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
