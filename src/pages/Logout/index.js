import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { logout } from "../../services/auth";


class Logout extends Component {
  async componentDidMount() {
    await logout();
		this.props.history.push("/");
	}
    render() {
        return (
         <div></div>
        );
      }
    }
    
    export default withRouter(Logout);