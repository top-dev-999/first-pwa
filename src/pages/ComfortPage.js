import React from "react";
import {
    Radio, RadioGroup, FormControlLabel, FormControl, Slider
} from '@mui/material';

//import CSS
import './ComfortPage.css';
class ComfortPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comfort: props.comfort,
            temperature: props.temperature
        }
    }

    onTemperatureChange = (e) => {
        this.setState({
            temperature: e.target.value
        });
        this.props.onUpdateTemperature(e.target.value);

    }

    onComfortChange = (e) => {
        this.setState({
            comfort: e.target.value
        });
        this.props.onUpdateComfort(e.target.value);
    }
    render() {
        return (
            <div className="comfort-control">
                <h1>Comfort</h1>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                        value={this.state.comfort}
                        onChange={(e) => this.onComfortChange(e)}
                    >
                        <FormControlLabel value="off" control={<Radio />} label="OFF" />
                        <FormControlLabel value="heat" control={<Radio />} label="HEAT" />
                        <FormControlLabel value="cool" control={<Radio />} label="COOL" />
                    </RadioGroup>
                </FormControl>
                <Slider value={this.state.temperature} aria-label="Default" 
                        valueLabelDisplay="auto"
                        onChange={(e) => this.onTemperatureChange(e)} />
            </div>
        );
    }
}

export default ComfortPage;