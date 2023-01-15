// Scripts for Skills Page
let codingSkills = document.getElementById('coding-info');
let itSkills= document.getElementById('it-use-info');
let dtSkills= document.getElementById('design-thinking-info');
let teachingSkills = document.getElementById('teaching-info');

let codingButton = document.getElementById('coding-skill');
let itButton = document.getElementById('it-use-skill');
let dtButton = document.getElementById('design-thinking-skill');
let teachingButton = document.getElementById('teaching-skill');

function hideSkills() {
    codingSkills.style.display='none';
    codingButton.style.backgroundColor = '';
    codingButton.style.boxShadow = '';
    itSkills.style.display='none';
    itButton.style.backgroundColor = '';
    itButton.style.boxShadow = '';
    dtSkills.style.display='none';
    dtButton.style.backgroundColor = '';
    dtButton.style.boxShadow = '';
    teachingSkills.style.display='none';
    teachingButton.style.backgroundColor = '';
    teachingButton.style.boxShadow = '';
}

hideSkills();
showCoding();


function showCoding() {
    hideSkills();
    codingSkills.style.display = '';
    codingButton.style.backgroundColor = '#ED535A';
    codingButton.style.boxShadow = '0px 0px';
}

function showIT() {
    hideSkills();
    itSkills.style.display='';
    itButton.style.backgroundColor = '#ED535A';
    itButton.style.boxShadow = '0px 0px';
}

function showDT() {
    hideSkills();
    dtSkills.style.display = '';
    dtButton.style.backgroundColor = '#ED535A';
    dtButton.style.boxShadow = '0px 0px';
}

function showTeaching() {
    hideSkills();
    teachingSkills.style.display=''
    teachingButton.style.backgroundColor = '#ED535A';
    teachingButton.style.boxShadow = '0px 0px';
}



codingButton.addEventListener('click', showCoding);
itButton.addEventListener('click', showIT);
dtButton.addEventListener('click', showDT);
teachingButton.addEventListener('click', showTeaching);