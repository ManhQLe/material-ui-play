import React, {	Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon';

class AppBarExp extends Component{

    onTitleClick = ()=>{
        alert("On title click")
    }

    onLeftIconClick=()=>{
        alert("Left Icon click")
    }
    render(){
        return <AppBar title="My Appbar" style={{position:"fixed"}}
        iconElementRight={<FontIcon className="muidocs-icon-action-home"/>}
        onTitleTouchTap = {this.onTitleClick}
        onLeftIconButtonTouchTap={this.onLeftIconClick}
        />
    }
}

export default AppBarExp;