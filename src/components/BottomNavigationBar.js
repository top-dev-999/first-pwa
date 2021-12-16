import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';



class BottomNavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }

    render() {
        return(
            <Box>
                <BottomNavigation
                    showLabels
                    value={this.state.selected}
                    onChange={(event, newValue) => {
                    this.setState({selected: newValue})
                    }}
                >
                    <BottomNavigationAction label="Main" icon={<RestoreIcon />} component={Link} to="/" />
                    <BottomNavigationAction label="Comfort" icon={<FavoriteIcon />} component={Link} to="/comfort"  />
                    <BottomNavigationAction label="Security" icon={<LocationOnIcon />}  component={Link} to="/secure"  />
                </BottomNavigation>
            </Box>
        );
    }
}

export default BottomNavigationBar
