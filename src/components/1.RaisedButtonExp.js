import React, {	Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class RaisedButtonExp extends Component{
    clickedThree =()=>{
        alert(3);
    }

    keyDown= (e)=>{
        console.log("Key pressed",e.which)
    }

    mouseOver = ()=>{
        console.log("Mouse is Over");
    }

    render(){
        return(
            <div>
                <RaisedButton label="One" primary onKeyDown={this.keyDown}/>
                <br/>                
                <RaisedButton label="Two" secondary onMouseOver={this.mouseOver}/>                
                <br/>
                <RaisedButton label="Three" onClick={this.clickedThree}/>
                <br/>
                <br/>
                <RaisedButton label="Full Width" fullWidth/>
            </div>
        )
    }
}

export default RaisedButtonExp;