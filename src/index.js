import pageLoadAppend from './pageLoad';
import contactAppend from './contactPage';
import menuAppend from './menuPage';
import './style.css';


const contentContainer = document.getElementById('content');
const tabs = document.querySelectorAll('.tabBtn');

function tabChoice(tab){

    if (this.dataset.page == 'home'){
        console.log('button 1 was clicked')
        resetContainer();
        pageLoadAppend(contentContainer);
    } else if (this.dataset.page == 'menu') {
        resetContainer();
        menuAppend(contentContainer);
    } else if (this.dataset.page == 'contact') {
        resetContainer();
        contactAppend(contentContainer);
    }
}

function resetContainer(){
    contentContainer.innerHTML = '';
   }


for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabChoice);
}

pageLoadAppend(contentContainer);

