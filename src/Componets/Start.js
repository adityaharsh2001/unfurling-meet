import React, { Component } from "react";
import { Input, Button } from "@material-ui/core";
import "./Start.css";
class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  handleChange = (e) => this.setState({ url: e.target.value });
  join = () => {
    if (this.state.url !== "") {
      var url = this.state.url.split("/");
      window.location.href = `/${url[url.length - 1]}`;
    } else {
      url = Math.random().toString(36).substring(2, 7);
      window.location.href = `/${url}`;
    }
  };

  render() {
    return (
      <div className="container">
        <p>
          Start or join a meeting
        </p>
        <Input placeholder="URL" onChange={(e) => this.handleChange(e)} />
        <Button
          variant="contained"
          color="primary"
          onClick={this.join}
          style={{ margin: "20px" }}
        >
          Go
        </Button>
      </div>
    );
  }
}
export default Start;
