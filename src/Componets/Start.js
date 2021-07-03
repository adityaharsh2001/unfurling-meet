import React, { Component } from "react";
import { Input, Button } from "@material-ui/core";
import "../App.css"
class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  // const classes = useStyles();
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
      <div className="join">
        <p className="text">Unfurling Meet</p>
        <Button
          variant="contained"
          // color="primary"
          onClick={this.join}
          style={{ margin: "20px", width:"80%", backgroundColor:"#56CBCC" }}
        >
          Create a Meeting
        </Button>
        <Input placeholder="Enter The meeting URL" onChange={(e) => this.handleChange(e)}  style={{ margin: "20px", color:"white",borderColor:"#56CBCC"}}/>
        <Button className="btn"
          variant="outlined"
          // color="primary"
          onClick={this.join}
          style={{ margin: "20px", borderColor:"#56CBCC", color: "#56CBCC" }}
        >
          Join
        </Button>
        
      </div>
    );
  }
}
export default Start;
