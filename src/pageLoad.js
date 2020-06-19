// Element is container div
function pageLoadAppend(element) {

    let image = document.createElement('IMG');
image.alt = 'Food Image';
element.appendChild(image);

let tagLine = document.createElement('H2');
tagLine.innerText = 'The best Restaurant in all of Canada!';
element.appendChild(tagLine);

let homeCopy = document.createElement('P');
homeCopy.innerText = `This Restaurant is very wonderful, we serve and provide for people all accross the GTA.
Dine in or take out, the choice is yours.`;
element.appendChild(homeCopy);

}

export default pageLoadAppend