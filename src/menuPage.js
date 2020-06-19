function menuAppend(element){

let title = document.createElement('h1');
title.innerText = 'Our Menu';

let menuDiv = document.createElement('div');

let subTitle = document.createElement('h2');
subTitle.innerText = 'Specials:';

let para = document.createElement('p');
para.innerText = 'Babooie Cake - $10.00';

element.appendChild(menuDiv);
menuDiv.appendChild(title);
menuDiv.appendChild(subTitle);
menuDiv.appendChild(para);

}



export default menuAppend