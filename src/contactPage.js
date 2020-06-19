function contactAppend(element){

let title = document.createElement('h1');
title.innerText = 'Contact us through a variety of platforms';

let contactDiv = document.createElement('div');

let number = document.createElement('address');
number.innerText = '455-455-455';

let email = document.createElement('address');
email.innerText = 'thisisnotreal@restaurant.com';

let location = document.createElement('address');
location.innerText = 'Ontario, Toronto';

element.appendChild(contactDiv);
contactDiv.appendChild(title);
contactDiv.appendChild(number);
contactDiv.appendChild(email);
contactDiv.appendChild(location);

}

export default contactAppend