// hides all cards

function hideElement(){
    const allCards = document.getElementsByClassName('card');
    for (const stream of allCards) {
                    stream.style.display = 'none';
                }
            };

hideElement();

// restores buttons after clear all

function buttonsBack () {
    htmlButton.style.backgroundColor = '';
    htmlButton.style.boxShadow = '';
    scratchButton.style.backgroundColor = '';
    scratchButton.style.boxShadow = '';
    spreadsheetButton.style.backgroundColor = '';
    spreadsheetButton.style.boxShadow = '';
    videoButton.style.backgroundColor = '';
    videoButton.style.boxShadow = '';
    cssButton.style.backgroundColor = '';
    cssButton.style.boxShadow = '';
    javaButton.style.backgroundColor = '';
    javaButton.style.boxShadow = '';
}

// clears all of the selections

let clearAll = document.getElementById('clear-all');

clearAll.addEventListener('click', hideElement);
clearAll.addEventListener('click', buttonsBack);

// displays all the HTML tagged boxes

let htmlButton = document.getElementById('html-button');

htmlButton.addEventListener('click', showHTML);

function showHTML() {

    //hides all other buttons - but do I want this? how can I make it a toggle on/off button?
    hideElement();
    buttonsBack();
    const allHTML = document.getElementsByClassName ('html-tag');
    for (const stream of allHTML) {
                    stream.style.display = '';
    }
    htmlButton.style.backgroundColor = '#ED535A';
    htmlButton.style.boxShadow = '0px 0px';
    htmlButton.addEventListener('click', hideHTML);
};

// Why doesn't this work?

/* function hideHTML() {
    const allHTML = document.getElementsByClassName ('html-tag');
    for (const stream of allHTML) {
                    stream.style.display = 'none';
    }
    htmlButton.style.backgroundColor = '';
    htmlButton.style.boxShadow = '';
    htmlButton.addEventListener('click', showHTML); 

}*/

// displays all the Scratch tagged boxes

let scratchButton = document.getElementById('scratch-button');

scratchButton.addEventListener('click', showScratch);

function showScratch() {
    hideElement();
    buttonsBack();
    const allScratch = document.getElementsByClassName ('scratch-tag');
    for (const stream of allScratch) {
                    stream.style.display = '';
    }
    scratchButton.style.backgroundColor = '#ED535A';
    scratchButton.style.boxShadow = '0px 0px';
};

// displays all the Spreadsheet tagged boxes

let spreadsheetButton = document.getElementById('spreadsheet-button');

spreadsheetButton.addEventListener('click', showSpreadsheet);

function showSpreadsheet() {
    hideElement();
    buttonsBack();
    const allSpreadsheet = document.getElementsByClassName ('spreadsheet-tag');
    for (const stream of allSpreadsheet) {
                    stream.style.display = '';
    }
    spreadsheetButton.style.backgroundColor = '#ED535A';
    spreadsheetButton.style.boxShadow = '0px 0px';
};


// displays all the Video tagged boxes

let videoButton = document.getElementById('video-button');

videoButton.addEventListener('click', showVideo);

function showVideo() {
    hideElement();
    buttonsBack();
    const allVideo = document.getElementsByClassName ('video-tag');
    for (const stream of allVideo) {
                    stream.style.display = '';
    }
    videoButton.style.backgroundColor = '#ED535A';
    videoButton.style.boxShadow = '0px 0px';
};

// displays all the CSS tagged boxes

let cssButton = document.getElementById('css-button');

cssButton.addEventListener('click', showCss);

function showCss() {
    hideElement();
    buttonsBack();
    const allCss = document.getElementsByClassName ('css-tag');
    for (const stream of allCss) {
                    stream.style.display = '';
    }
    cssButton.style.backgroundColor = '#ED535A';
    cssButton.style.boxShadow = '0px 0px';
};

// displays all the javaScript tagged boxes

let javaButton = document.getElementById('javascript-button');

javaButton.addEventListener('click', showJava);

function showJava() {
    hideElement();
    buttonsBack();
    const allJava = document.getElementsByClassName ('javascript-tag');
    for (const stream of allJava) {
                    stream.style.display = '';
    }
    javaButton.style.backgroundColor = '#ED535A';
    javaButton.style.boxShadow = '0px 0px';
};
