import React,{Component} from 'react'
import Badge from 'material-ui/Badge'
import CameraFront from 'material-ui/svg-icons/image/camera-front'
import CameraIcon from 'material-ui/svg-icons/image/camera'
import IconButton from 'material-ui/IconButton'
import { white, blue300 } from 'material-ui/styles/colors';
import { green200 } from 'material-ui/styles/colors';

class BadgeExp extends Component{
    render(){
        return (
            <div>
                <Badge badgeContent={4} primary={true}/>
                <br/>
                <Badge badgeContent={8} secondary>
                    <CameraFront/>
                </Badge>
                <Badge badgeContent={17} primary>
                    <IconButton tooltip="Cool Camera">
                        <CameraIcon color={green200}/>
                    </IconButton>
                </Badge>
            </div>
        )
    }
}

export default BadgeExp;