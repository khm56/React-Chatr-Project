import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addMsg } from "./redux/actions/channel";
// import { Link } from "react-router-dom";

class MsgForm extends Component {
  state = {
    message: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.addMsg(this.state, this.props.channelID);
    this.setState({ message: "" });
  };

  render() {
    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={event => this.handleSubmit(event)}>
              <div className="form-group">
                <label htmlFor="title">Message</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.message}
                  name="message"
                  placeholder="message"
                  onChange={event => this.handleChange(event)}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMsg: (msg, channelID) => dispatch(addMsg(msg, channelID))
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MsgForm);
