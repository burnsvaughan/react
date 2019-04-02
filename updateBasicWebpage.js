import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Burns',
			health: '100',
			level: 1000,
			lowLevelClass: 'danger-red'
		};
		this.clickedLogo = this.clickedLogo.bind(this);
	}
	clickedBtn = () => {};
	async test() {}

	clickedLogo() {
		this.setState(
			{
				health: this.state.health - 25
			},
			function() {
				console.log(
					'HEY I CLICKED THE LOGO, ITS HEALTH IS NOW ' + this.state.health
				);
			}
		);
	}

	render() {
		return (
			<div id={`parent`}>
				<Header />
				<div
					className={`chips ${
						this.state.health < 55 ? this.state.lowLevelClass : ''
					}`}
				>
					<div className={'user-info'}>
						<h3>Name: {this.state.name}</h3>
						<h3>Level: {this.state.level}</h3>
					</div>
					<LogoImg clickedLogo={this.clickedLogo} health={this.state.health} />
				</div>
			</div>
		);
	}
}

class LogoImg extends Component {
	constructor() {
		super();
		this.state = {
			gameOver: 'SORRY YOU ARE DEAD!'
		};
	}

	render() {
		return (
			<div className="LogoImgComp">
				<img
					src="/img/logo.png"
					alt={'logo of codingphase'}
					onClick={this.props.clickedLogo}
				/>
				<h3>
					Health:{' '}
					{this.props.health <= 0 ? this.state.gameOver : this.props.health}
				</h3>
			</div>
		);
	}
}

var Header = function() {
	return (
		<header>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</header>
	);
};

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
