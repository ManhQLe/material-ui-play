import React,{Component} from 'react'
import {List,ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import Badge from 'material-ui/Badge'
import FontIcon from 'material-ui/FontIcon'
const mleAvatar = 'https://avatars2.githubusercontent.com/u/5281814?s=460&v=4';
const X = [1,2,3,4];
export default class AdvancedListExp extends Component{
    render(){
        return <Paper>
            <List>
                <Subheader>Github avartar</Subheader>
                {
                    X.map(x=>{
                        return <ListItem style={{height:70}}
                            primaryText={"Manh Le"}
                            leftAvatar={<Avatar src={mleAvatar}/>}
                            rightIcon={
                                <Badge badgeContent={x}>
                                    <FontIcon className='material-icons'>chat bubble</FontIcon>
                                </Badge>}
                        />
                    })
                }
                <hr/>
            </List>
        </Paper>            
    }
}