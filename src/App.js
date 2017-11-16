import React, { Component } from 'react';
import './App.css';
import RaisedButtonExp from './components/1.RaisedButtonExp'
import AppBarExp from './components/2.AppBarExp'

class App extends Component {
	render() {
		return (
			<div>
				<AppBarExp />
				<div style={{paddingTop:"80px"}}>
					<RaisedButtonExp />
					<div style={{ height: 1400 }}>
					</div>
				</div>
			</div>
		);
	}
}

export default App;