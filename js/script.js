/*************************************************************************
Title:       script.js

Author:      Shane Lester

Created on:  September 8th 2018

Description: Allows for all interactivity on App Chooser webpage. It is
			 responsible for providing all the app data on the page. This
			 includes the description, logo, and links to play and check
			 the source code. It also is what allows the user to scroll
			 through applications to select which application to use. For
			 more information on this project, please refer to the README 
			 within this project
             
 *************************************************************************/

/**
* @description Container for all the data needed to fill any particular application
* @constructor Contains the logo image, the name of the game, the description, 
* the source code and play link and all the additional photos of the game
* @param  { String } Contains the name of the application. Depending on the name
* of the app, it will generate all the data about that particular app
*/
class AppInformation {
	constructor(appName) {
		// Generates all the data needed for object in an array
		const info = AppInformation.generateAppInfo(appName);
		// Svg logo image and the alt attribute
		this.svgImage = info[0];
		this.svgAlt = info[1];
		// Name of the game
		this.nameOfGame = info[2];
		// Description of the game
		this.gameDescription = info[3];
		// The source code and game play links
		this.sourceCodeLink = info[4];
		this.gamePlayLink = info[5];
		// The additional photos of the game
		this.photoArray = [info[6], info[7], info[8]];
	}
	/**
	* @description Generates all the data of a particualr app, given the app name 
	* @param  { String } Contains the name of the application. Depending on the name
	* of the app, it will generate all the data about that particular app
	* @return { Array } Will return an array giving all the data of the app
	*/
	static generateAppInfo(appName) {
		let info = [];
		// Tommy Cross passed in as a parameter
		if (appName === 'Tommy Cross') {
			// info[0] has the logo of the app
			info.push('images/game-logos/tommy-cross-logo.svg');
			// info[1] has the alt attribute
			info.push('app logo of game called Tommy Cross');
			// info[2] has the name of the application
			info.push('Tommy Cross');
			const gameDescription = AppInformation.generateDescription('Tommy Cross');
			// info[3] has the description
			info.push(gameDescription);
			// info[4] has the github link to source code
			info.push('https://github.com/Shane-Lester99/Tommy-Cross');
			// info[5] has the playable link
			info.push('Tommy-Cross/index.html');
			// info[6,7,8] has links to additional photos
			info.push('images/game-images/tommy-cross-game-images/tommy-cross-pic-1.png');
			info.push('images/game-images/tommy-cross-game-images/tommy-cross-pic-2.png');
			info.push('images/game-images/tommy-cross-game-images/tommy-cross-pic-3.png');
		}
		// Concentration passed in as a parameter
		else if (appName === 'Concentration') {
			// info[0] has the logo of the app
			info.push('images/game-logos/concentration-logo.svg');
			// info[1] has the alt attribute
			info.push('app logo of game called concentration');
			// info[2] has the name of the application
			info.push('Concentration');
			// info[3] has the description
			const gameDescription = AppInformation.generateDescription('Concentration');
			info.push(gameDescription);
			// info[4] has the github link to source code
			info.push('https://github.com/Shane-Lester99/Concentration');
			// info[5] has the playable link
			info.push('Concentration/index.html');
			// info[6,7,8] has links to additional photos
			info.push('images/game-images/concentration-game-images/concentration-pic-4.png');
			info.push('images/game-images/concentration-game-images/concentration-pic-3.png');
			info.push('images/game-images/concentration-game-images/concentration-pic-1.png');
		}
		// Pixel Art passed in as a parameter
		else if (appName ==='Pixel Art') {
			// info[0] has the logo of the app
			info.push('images/game-logos/pixel-art-logo.svg');
			// info[1] has the alt attribute
			info.push('app logo of game called Pixel Art');
			// info[2] has the name of the application
			info.push('Pixel Art');
			const gameDescription = AppInformation.generateDescription('Pixel Art');
			// info[4] has the github link to source code
			info.push(gameDescription);
			info.push('https://github.com/Shane-Lester99/Pixel-Art-Maker');
			// info[5] has the playable link
			info.push('Pixel-Art-Maker/index.html');
			// info[6,7,8] has links to additional photos
			info.push('images/game-images/pixel-art-game-images/pixel-art-pic-6.png');
			info.push('images/game-images/pixel-art-game-images/pixel-art-pic-1.png');
			info.push('images/game-images/pixel-art-game-images/pixel-art-pic-4.png');

		}
		// Returns the array of information
		return info;
	}
	/**
	* @description Generates the description of a particylar app
	* @param  { String } Contains the name of the application. Depending on the name
	* of the app, it will generate the description about that app
	* @return { String } Will return description of app mentioned in parameter
	*/
	static generateDescription(appTitle) {
		let message = '';
		// Tommy Cross passed in as a parameter, generate description
		if (appTitle === 'Tommy Cross') {
			message = '<p>Tommy Cross is a boy in a bit of a jam, a traffic jam that is!' +
			 ' Okay, thats a little lame, and I apologize. </p> '+ 
			 'The point I was trying to make was that, similar to Frogger, ' +
			 'Tommy Cross  needs to dodge traffic and make it to the other side safely. ' +
			 'Will you be the hero he needs to help him?</p>'
		}
		// Concentration passed in as a parameter, generate descripiton
		else if (appTitle === 'Concentration') {
			 message = 
			 '<p>Remember concentration? It’s that matching game you may have played as a child. ' +
			 'It was the one where you put cards face-down and paired up two of a kind as quickly as possible? </p>' +
			'<p>If you do not remember, its okay neither did I at first, and thats what google is for!</p>' +
			'<p>Anyway, behind each card is a secret emoji, with two of each type within the deck of cards. ' +
			'Be careful though, the emojis change fast, so make sure to… focus! (was there a better word for that?) </p>';
		}
		// Pixel Art passed in as a parameter, generate descripiton
		else if (appTitle === 'Pixel Art') {
			 message = '<p>Did you ever want to use a drawing app that could re-create classic ' +
			 'pixelated-yet-lovable game sprites from the beginning of gaming?<p>Or are you more ' +
			  'of an abstract artist that wants to create a pixelated affect in your drawings? </p>' +
			  ' Or perhaps you have a few hours to kill before a big date tonight ?</p>' +
			'<p>Either way, this app is just what you need, and you should create some pixel art! </p> ' +
			'<p>All you have to do to get started is fill in what size you want your canvas to be, choose a color, ' +
			 'and get drawing! But be warned, it can get pretty addictive pretty fast! </p>'
		}
		// Return the description
		return message;
	}
}

/**
* @description Container for holding AppInformation objects
* @constructor Contains an array of AppInformation objects to scroll through
* and an index to keep track which one is currently active
*/
class ActiveApplication {
	constructor() {
		// Array of playable applications
		this.apps = [new AppInformation('Tommy Cross'), new AppInformation('Concentration'), new AppInformation('Pixel Art')];
		// Index of current live application. Scrollable with class methods.
		this.currentAppIndex = 0;
	}
	/**
	* @description Places all the information contained in the currently selected 
	* AppInfromation object and in the HTML page
	*/
	loadData() {
		// Get the appIcon html object
		const appIcon = document.querySelector('.app-icon');

		// Change its picture and source to the current logo needed
		appIcon.src = this.apps[this.currentAppIndex].svgImage;
		appIcon.alt = this.apps[this.currentAppIndex].svgAlt;

		// Changes description of application
		document.querySelector('.title-description').innerHTML = this.apps[this.currentAppIndex].nameOfGame;
		document.querySelector('.app-description').innerHTML = this.apps[this.currentAppIndex].gameDescription;
		// Changes play button and source code links
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
	/**
	* @description Scrolls the AppInformation Array left one unit and load the data
	* from that application
	*/
	scrollLeft() {
		// If we are at the leftmost app, scroll back to the rightmost app
		if (this.currentAppIndex === 0) {
			this.currentAppIndex = this.apps.length - 1;
		} else {
			this.currentAppIndex -= 1;
		}
		// This will load the data to the html page
		this.loadData();
	}
	/**
	* @description Scrolls the AppInformation Array right one unit and load the data
	* from that application
	*/
	scrollRight() {
		// If we are at the rightmost app, scroll back to the ledtmost app
		if (this.currentAppIndex === this.apps.length - 1) {
			this.currentAppIndex = 0;
		} else {
			this.currentAppIndex += 1;
		}
		// This will load the data to the html page
		this.loadData();
	}
}

// Create an object of ActiveApplication so that we can scroll through the applications
const applications = new ActiveApplication();

// Recieve the left and right scroll buttons from HTML page so we can
// add event listeners
const leftScrollButton = document.querySelector('.left');
const rightScrollButton = document.querySelector('.right');


// Load the first application to make one current upon load
applications.loadData();

// Add event listeners to enable scrolling.
leftScrollButton.addEventListener('click', function() {
	applications.scrollLeft();
});

rightScrollButton.addEventListener('click', function() {
	applications.scrollRight();
});
