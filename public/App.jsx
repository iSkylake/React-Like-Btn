// MAIN APP

const App = React.createClass({

	// App state
	getInitialState: () => {
		return{
			likes: 50,
			dislikes: 10,
			likeActive: false,
			dislikeActive: false
		};
	},

	// Check opposite button
	checkOpBtn(btn, active){
		let currentBtn = this.state[btn];
		let currentActive = this.state[active];
		if(currentActive){
			currentActive = !currentActive;
			currentBtn -= 1;
			this.setState({
				[btn]: currentBtn,
				[active]: currentActive
			});
		};
	},

	// Handle like and dislike click
	handleClick(btn, active, opBtn, opActive){
		let currentBtn = this.state[btn];
		let currentActive = this.state[active];
		this.checkOpBtn(opBtn, opActive);
		if(!this.state[active]){
			currentBtn += 1;
		} else {
			currentBtn -= 1;
		};
		currentActive = !currentActive;
		this.setState({
			[btn]: currentBtn, 
			[active]: currentActive
		});
	},

	// Render function
	render(){
		const {likeActive, dislikeActive} = this.state;
		return(
			<div>
				<button className={`btn ${likeActive ? 'btn-selected' : ''}`} onClick={() => this.handleClick('likes', 'likeActive', 'dislikes', 'dislikeActive')}>Like | {this.state.likes}</button>
				<button className={`btn ${dislikeActive ? 'btn-selected' : ''}`} onClick={() => this.handleClick('dislikes', 'dislikeActive', 'likes', 'likeActive')}>Dislike | {this.state.dislikes}</button>
			</div>
		);
	}

});

// DOM RENDER

ReactDOM.render(<App />, document.getElementById('root'));