import React from 'react';
import { Link } from 'react-router-dom';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: false
        }
        this.handleDisplayMenu = this.handleDisplayMenu.bind(this)
    }

    handleDisplayMenu(){
        this.setState({displayMenu: !this.state.displayMenu})
    }

render() {
    const dropList = this.state.displayMenu ? 'open' : 'close';
    return (
    <div className="homeBody">
        <ul>
  <li><a href="#home">Home</a></li>
  <li className="loginSignup">
    <a className="dropbtn" onClick={this.handleDisplayMenu}>Login/Sign up</a>
    <div className={`dropdown-content ${dropList}`} id="dropdown-content">
      <form>
      <label>Username</label>
      <input type="text" placeholder="Username"></input>
      <label>Password</label>
      <input type="text" placeholder="Password"></input>
      <Link to="/admin"><a>Login</a></Link>
      <a href="#">Sign up</a>
      </form>
    </div>
  </li>
</ul>
<h1 className="header">Welcome to Polli!</h1>
    </div>
)
}
}
export default HomeContainer;
