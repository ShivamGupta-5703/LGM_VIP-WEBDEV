import './App.css';

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users_data: [],
      loading: false,
      currentIndex: 0,
      currentUser: null,
    };

    this.fetchUserData = this.fetchUserData.bind(this);
    this.getNextUser = this.getNextUser.bind(this);
  }

  fetchUserData() {
    const link = `https://reqres.in/api/users?page=${this.state.currentIndex + 1}`;

    this.setState({ loading: true });

    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        const { users_data, currentIndex } = this.state;
        const nextIndex = currentIndex + 1;

        if (nextIndex <= users.total_pages) {
          this.setState({
            users_data: [...users_data, ...users.data],
            currentIndex: nextIndex,
            loading: false,
            currentUser: users.data[0],
          });
        } else {
          this.setState({ loading: false, currentUser: null });
        }

        console.log(users.data);
      });
  }

  componentDidMount() {
  }

  getNextUser() {
    const { users_data, currentIndex } = this.state;
    const currentUsers = users_data[currentIndex];

    if (currentUsers) {
      const nextIndex = currentIndex + 1;
      this.setState({
        currentIndex: nextIndex,
        currentUser: users_data[nextIndex],
      });
    } else {
      this.fetchUserData();  }
  }

  render() {
    const { currentUser, loading } = this.state;

    return (
      <div className="container">
        <div className="card">
          <nav>
            <div className="heading">
              <h1>USER PROFILE</h1>
            </div>
          </nav>

          {}
          <div>
            <img src={currentUser?.avatar} alt="User Avatar" />
            <h3>Name : {`${currentUser?.first_name} ${currentUser?.last_name}`}</h3>
            <p>Email : {currentUser?.email}</p>
          </div>

          <div className="column">
            {loading ? (
              <button disabled>Loading...</button>
            ) : (
              <button onClick={this.getNextUser}>Get Next User</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;