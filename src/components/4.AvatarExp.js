import React,{Component} from 'react'
import Avatar from 'material-ui/Avatar'
import FileFolder from 'material-ui/svg-icons/file/folder'

import  {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,
    white,
    blue800,
    blue600,
  } from 'material-ui/styles/colors'
const style={
    margin:5
}
class AvatarExp extends Component{
    render(){
        
        const leUrl ="https://scontent-dft4-3.xx.fbcdn.net/v/t1.0-1/p60x60/14102339_138498826598671_7964955532928818665_n.jpg?oh=0b9638e7c4cc08aacf7568eea126d088&oe=5A92B109";
        return (
            <div>
                <Avatar color={white} backgroundColor={blue600} style={style}>B</Avatar>
                <br/>
                <Avatar src={leUrl} size={50} style={style}/>
                <br/>
                <Avatar icon={<FileFolder/>}/>
            </div>
        )
    }
}

export default AvatarExp;