import React,{Component} from 'react'
import FontIcon from 'material-ui/FontIcon'
import { blue300, red400, green400, yellow400, orange300 } from 'material-ui/styles/colors';
const style={
    marginRight:10
}
class FontIconExp extends Component{
    render(){
        return (
            <div>
                <FontIcon style={style} color={blue300} className='material-icons'>alarm</FontIcon>
                <FontIcon style={style} color={green400} className='material-icons'>android</FontIcon>
                <FontIcon style={style} color={red400} className='material-icons'>flight</FontIcon>
                <FontIcon style={style} color={yellow400} className='material-icons'>extension</FontIcon>
                <FontIcon style={style} color={orange300} className='material-icons'>home</FontIcon>
            </div>
        )
    }
}

export default FontIconExp