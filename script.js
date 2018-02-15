class Stopwatch {
	constructor(display) {
		this.running = false;
		this.display = display;
		this.reset();
		this.print(this.times);
	}

	reset() {
		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
		this.print();
	}

	print() {
		this.display.innerText = this.format(this.times);
	}

	format(times) {
		return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	start() {
		if (!this.running) {
			this.running = true;
			this.watch = setInterval(() => this.step(), 10);
		}
	}

	step() {
		if (!this.running) return;
		this.calculate();
		this.print();
	}

	calculate() {
		this.times.miliseconds += 1;
		if (this.times.miliseconds >= 100) {
			this.times.seconds += 1;
			this.times.miliseconds = 0;
		}
		if (this.times.seconds >= 60) {
			this.times.minutes += 1;
			this.times.seconds = 0;
		}
	}

	stop() {
		this.running = false;
		clearInterval(this.watch);
	}

	result() {
		const resultList = document.querySelector('.results');
		const newResult = document.createElement('li');
		newResult.setAttribute('class', 'time');
		newResult.innerHTML = this.format(this.times);
		resultList.appendChild(newResult);
	}

	clearLast() {
		const time = document.querySelector('.time');
		time.parentNode.removeChild(time);
	}

	clear() {
		$('li').remove();
	}
}

function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}


const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'));

var startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

var startButton = document.getElementById('reset');
startButton.addEventListener('click', () => stopwatch.reset());

var startButton = document.getElementById('result');
startButton.addEventListener('click', () => stopwatch.result());

var startButton = document.getElementById('clearLast');
startButton.addEventListener('click', () => stopwatch.clearLast());

var startButton = document.getElementById('clear');
startButton.addEventListener('click', () => stopwatch.clear());