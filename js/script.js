class AppInformation {
	constructor(appName) {
		const info = AppInformation.generateAppInfo(appName);
		this.svgImage = info[0];
		this.nameOfGame = info[1];
		this.gameDescription = info[2];
	}

	static generateAppInfo(appName) {
		let info = [];
		if (appName === 'Tommy Cross') {
			info.push('images/tommy.svg');
			info.push('Tommy Cross');
			const gameDescription = 'Welcome to Tommy Cross :)';
			info.push(gameDescription);
		}
		else if (appName === 'Concentration') {
			info.push('images/concentration.svg');
			info.push('Concentration');
			const gameDescription = 'Welcome to Concentration :)';
			info.push(gameDescription);
		}
	}
}

class ActiveGame {
	constructor() {
		this.apps = [new AppInformation('Concentration'), new AppInformation('Tommy Cross')];
		this.currentAppIndex = 0;
	}
	loadData() {
		// Changes app
		document.querySelector('.app-name');
		document.querySelector('.app-icon');

		// Changes description
		document.querySelector('.title-description');
		document.querySelector('.app-description');

		// Changes play button and source code links
		

	}
	scrollLeft() {

	}
	scrollRight() {

	}
}



// document.querySelector('')