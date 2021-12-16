import React from "react";

import { FormGroup, FormControlLabel, Switch } from '@mui/material';

//import CSS
import './SecurePage.css';
class SecurePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            door: props.door,
            alarm: props.alarm,
            garage: props.garage
        }
    }

    onChange = (e, type) => {
        switch (type) {
            case 'alarm':
                this.setState({alarm: e.target.checked});
                break;
            case 'door':
                this.setState({door: e.target.checked});
                break;
            case 'garage':
                this.setState({garage: e.target.checked});
                break;
            default:
                break;
        }
        this.props.onUpdte(e.target.checked, type);
    }
    render() {
        return (
            <div className="secure-control">
                <h1>Security</h1>
                <FormGroup>
                    <FormControlLabel control={<Switch onChange={(e) => this.onChange(e, 'alarm') } checked={this.state.alarm}
                                                     />} 
                            label="Instusion Alarm" labelPlacement="start"/>
                    <FormControlLabel control={<Switch onChange={(e) => this.onChange(e, 'door')}  checked={this.state.door}
                                                    />} 
                            label="Doors Locked" labelPlacement="start"/>
                    <FormControlLabel control={<Switch onChange={(e) => this.onChange(e, 'garage')}  checked={this.state.garage}
                                                    />} 
                            label="Garage Locked" labelPlacement="start"/>
                </FormGroup>
                <div></div>
            </div>
        );
    }
}

export default SecurePage;