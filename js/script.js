class AppInformation {
	constructor(appName) {
		const info = AppInformation.generateAppInfo(appName);
		//alert(info)
		this.svgImage = info[0];
		this.svgAlt = info[1];
		this.nameOfGame = info[2];
		this.gameDescription = info[3];
		this.sourceCodeLink = info[4];
		this.gamePlayLink = info[5];
		this.photoArray = [info[6], info[7], info[8]];
	}

	static generateAppInfo(appName) {
		let info = [];
		if (appName === 'Tommy Cross') {
			info.push('images/tommy.svg');
			info.push('app logo of game called Tommy Cross')
			info.push('Tommy Cross');
			const gameDescription = '<p>Welcome to Tommy Cross :)</P>';
			info.push(gameDescription);
			info.push('http://github.TC')
			info.push('play-tommy-cross');
		}
		else if (appName === 'Concentration') {
			info.push('images/concentration.svg');
			info.push('app logo of game called concentration')
			info.push('Concentration');
			const gameDescription = 'Welcome to Concentration :)';
			info.push(gameDescription);
			info.push('http://github.Concentration')
			info.push('play-concentration');
			info.push('images/game-images/concentration-game-images/concentration-pic-4.png');
			info.push('images/game-images/concentration-game-images/concentration-pic-3.png');
			info.push('images/game-images/concentration-game-images/concentration-pic-1.png');


		}
		return info;
	}
}

class ActiveApplication {
	constructor() {
		this.apps = [new AppInformation('Concentration'), new AppInformation('Tommy Cross')];
		this.currentAppIndex = 0;
	}
	loadData() {
		// Changes app
		// document.querySelector('.app-name').innerHTML =  '';//this.apps[this.currentAppIndex].nameOfGame;
		// Needs attribute
		const appIcon = document.querySelector('.app-icon');

		appIcon.src = this.apps[this.currentAppIndex].svgImage;
		appIcon.alt = this.apps[this.currentAppIndex].svgAlt;

		// Changes description
		document.querySelector('.title-description').innerHTML = this.apps[this.currentAppIndex].nameOfGame;
		document.querySelector('.app-description').innerHTML = this.apps[this.currentAppIndex].gameDescription;

		// Changes play button and source code links

		// NEEDS attributes
		document.querySelector('.play-button').href = this.apps[this.currentAppIndex].gamePlayLink;
		document.querySelector('.source-code').href = this.apps[this.currentAppIndex].sourceCodeLink;

		// Updates photos in larger displays
		const pic1 = document.querySelector('.first-pic');
		pic1.src = this.apps[this.currentAppIndex].photoArray[0];
		pic1.alt = this.apps[this.currentAppIndex].nameOfGame + ' photo 1';
		const pic2 = document.querySelector('.second-pic');
		pic2.src = this.apps[this.currentAppIndex].photoArray[1];
		pic2.alt = this.apps[this.currentAppIndex].nameOfGame + ' photo 2';
		const pic3 = document.querySelector('.third-pic');
		pic3.src = this.apps[this.currentAppIndex].photoArray[2];
		pic3.alt = this.apps[this.currentAppIndex].nameOfGame + ' photo 3';
	}
	scrollLeft() {
		if (this.currentAppIndex === 0) {
			this.currentAppIndex = this.apps.length - 1;
		} else {
			this.currentAppIndex -= 1;
		}
		this.loadData();

	}
	scrollRight() {
		if (this.currentAppIndex === this.apps.length - 1) {
			this.currentAppIndex = 0;
		} else {
			this.currentAppIndex += 1;
		}
		this.loadData();
	}
}

const applications = new ActiveApplication();

// document.querySelector('')
const leftScrollButton = document.querySelector('.left');
const rightScrollButton = document.querySelector('.right');

applications.loadData();

leftScrollButton.addEventListener('click', function() {
	applications.scrollLeft();
});

rightScrollButton.addEventListener('click', function() {
	applications.scrollRight();
});




