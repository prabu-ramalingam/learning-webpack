
import { createButton, createPara } from './dateDisplayLibrary'

import renderDate, { renderDay } from './displayDate'


function renderApp(fun) {

    //'createButton' will return addEventListner function to attach listner.
    var addButtonDateEventListner = createButton('Display Date');
    addButtonDateEventListner(renderDate);
    var addButtonDayEventListner = createButton('Display Day');
    addButtonDayEventListner(renderDay);
    createPara();  
}
renderApp();