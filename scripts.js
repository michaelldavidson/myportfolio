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
}

// clears all of the selections

let clearAll = document.getElementById('clear-all');

clearAll.addEventListener('click', hideElement);
clearAll.addEventListener('click', buttonsBack);

// displays all the HTML tagged boxes

let htmlButton = document.getElementById('html-button');

htmlButton.addEventListener('click', showHTML);

function showHTML() {
    const allHTML = document.getElementsByClassName ('html-tag');
    for (const stream of allHTML) {
                    stream.style.display = '';
    }
    htmlButton.style.backgroundColor = '#ED535A';
    htmlButton.style.boxShadow = '0px 0px';
};

// displays all the Scratch tagged boxes

let scratchButton = document.getElementById('scratch-button');

scratchButton.addEventListener('click', showScratch);

function showScratch() {
    const allScratch = document.getElementsByClassName ('scratch-tag');
    for (const stream of allScratch) {
                    stream.style.display = '';
    }
    htmlButton.style.backgroundColor = '#ED535A';
    htmlButton.style.boxShadow = '0px 0px';
};

