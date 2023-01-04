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
