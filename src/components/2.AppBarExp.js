import React, {	Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon';

class AppBarExp extends Component{
    render(){
        return <AppBar title="My Appbar" style={{position:"fixed"}}
        iconElementRight={<FontIcon className="muidocs-icon-action-home"/>}
        />
    }
}

export default AppBarExp;