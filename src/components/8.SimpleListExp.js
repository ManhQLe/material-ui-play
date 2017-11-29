import React,{Component} from 'react'
import {List,ListItem} from 'material-ui/List'
import Comment from 'material-ui/svg-icons/communication/comment'
import Rotation from 'material-ui/svg-icons/action/three-d-rotation'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'

const fixWidth={
    width:300
}

class SimpleListExp extends Component{
    render(){
        return(
            <Paper zDepth={1} style={fixWidth}>
                <List>
                    <ListItem primaryText="Group" leftIcon={<Rotation/>}/>
                    <ListItem primaryText="List" 
                    leftIcon={<FontIcon className='material-icons'>add</FontIcon>}/>
                    <ListItem primaryText="Last Item" leftIcon={<Comment/>}/>
                </List>
            </Paper>
        )
    }
}

export default SimpleListExp;