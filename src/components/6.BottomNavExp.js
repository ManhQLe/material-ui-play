import React, { Component } from 'react'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import FontIcon from 'material-ui/FontIcon';

class BottomNavExp extends Component {
    state={
        "selected":-1
    }
    sel(selected){
        this.setState({selected})
    }
    render() {
        return (
            <BottomNavigation selectedIndex={this.state.selected}>
                <BottomNavigationItem label="Recent"
                    icon={<FontIcon className="material-icons">restore</FontIcon>}
                    onClick={()=>this.sel(0)}
                />
                <BottomNavigationItem label="Favorite"
                    icon={<FontIcon className="material-icons">favorite</FontIcon>}
                    onClick={()=>this.sel(1)}
                />                                    
            </BottomNavigation>
        )
    }
}

export default BottomNavExp

