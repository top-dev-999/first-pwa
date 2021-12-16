import React from "react";

import { Grid, List, ListItem, ListItemText } from "@mui/material";
//import Css
import "./MainPage.css";
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: props.temperature,
      comfort: props.comfort,
      alarm: props.alarm,
      door: props.door,
      garage: props.garage,
    };
  }
  render() {
    return (
      <div className="main-control">
        <h1>Sample App</h1>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <header>Comfort</header>
            <div>{this.state.temperature}`F</div>
          </Grid>
          <Grid item xs={6}>
            <div>System: {this.state.comfort}</div>
          </Grid>

          <Grid item xs={12}>
            <div>Security</div>

            <List>
              <ListItem>
                <ListItemText
                  primary="Instrusion Alarm"
                  secondary={this.state.alarm === true ? "Locked" : "Open"}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Doors"
                  secondary={this.state.door === true ? "Locked" : "Open"}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Garage"
                  secondary={this.state.garage === true ? "Locked" : "Open"}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <div></div>
      </div>
    );
  }
}

export default MainPage;
