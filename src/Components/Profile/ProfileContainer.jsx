import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {

componentDidMount () {
  debugger;
  axios.get('https://social-network.samuraijs.com/api/1.0/profile/1')
  .then(response => {
  this.props.setUserProfile(response.data);
  })
}

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export default connect(mapStateToProps,) (ProfileContainer);