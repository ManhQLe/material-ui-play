import React, { Component } from 'react';
import './App.css';
import RaisedButtonExp from './components/1.RaisedButtonExp'
import AppBarExp from './components/2.AppBarExp'
import AutoCompleteExp from './components/3.AutoCompleteExp'
import AvatarExp from './components/4.AvatarExp'
import BadgeExp from './components/5.BadgeExp'


class App extends Component {
	render() {
		return (
			<div>
				<AppBarExp />
				<div style={{paddingTop:"80px"}}>
					<RaisedButtonExp />
					<AutoCompleteExp/>
					<AvatarExp/>
					<BadgeExp/>
					<div style={{ height: 1400 }}>
					</div>					
				</div>
			</div>
		);
	}
}

export default App;