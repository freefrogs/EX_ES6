class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			running: false,
			resultList: [],
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		}
	}

	reset() {
		this.setState ({
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		});
	}

	format(times) {
		return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`;
	}

	start() {
		if (!this.state.running) {
			this.setState({
				running: true
			})
			this.watch = setInterval(() => this.step(), 10);
		}
	}

	step() {
		if (!this.state.running) return;
		this.calculate();
	}

	calculate() {
		let {minutes, seconds, miliseconds } = this.state.times;

		miliseconds += 1;
		if (miliseconds >= 100) {
			seconds += 1;
			miliseconds = 0;
		}
		if (seconds >= 60) {
			minutes += 1;
			seconds = 0;
		}
		this.setState({
			times: {
				minutes: minutes,
				seconds: seconds,
				miliseconds: miliseconds
			}
		});
	}

	stop() {
		if (this.state.running) {
			this.setState({
				running: false
			});
		}
		clearInterval(this.watch);
	}

	pad0(value) {
		let result = value.toString();
		if (result.length < 2) {
			result = '0' + result;
		}
		return result;
	}

	saveResult() {
		this.addTimeToList(this.format(this.state.times));
	}

	addTimeToList(time) {
		this.setState((prevState, props) => ({
			resultList: [...prevState.resultList, {'time': time, 'id': new Date().getTime()}]
		}));
	}

	clear() {
		this.setState({
			resultList: []
		});
	}

	render() {
		return (
			<div>
				<nav className='controls'>
					<a href='#' className='button' id='start' onClick={this.start.bind(this)}>Start</a>
					<a href='#' className='button' id='stop' onClick={this.stop.bind(this)}>Stop</a>
					<a href='#' className='button' id='reset' onClick={this.reset.bind(this)}>Reset</a>
					<a href='#' className='button' id='result' onClick={this.saveResult.bind(this)}>Save Result</a>
				</nav>
				<div className='stopwatch'>{this.format(this.state.times)}</div>
				<ul className='results'>
					{this.state.resultList.map(item => <li key={item.id}>{item.time}</li>)}
				</ul>
				<div className='clear'>
					<a href='#' className='button' id='clear' onClick={this.clear.bind(this)}>Clear Results</a>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Stopwatch/>, document.getElementById('app'));



