import React, {	Component} from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';


class App extends Component {
	render() {
		return (
			<div>
				<RaisedButton label="One"/>
				<RaisedButton label="Two"/>
				<RaisedButton label="Three"/>
			</div>
		);
	}
}

export default App;