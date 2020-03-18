
import { createButton, createPara, addButtonEventListner } from './dateDisplayLibrary'

import renderDate, { renderDay } from './displayDate'

function renderApp(fun) {
    var buttonDate = createButton('Display Date');   
    var buttonDay = createButton('Display Day');
    createPara();
    addButtonEventListner(buttonDate, renderDate);
    addButtonEventListner(buttonDay, renderDay);
}
renderApp();