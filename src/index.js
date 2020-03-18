
import { createButton, createPara } from './dateDisplayLibrary'

import renderDate, { renderDay } from './displayDate'

function renderApp(fun) {
    var addButtonDateEventListner = createButton('Display Date');
    addButtonDateEventListner(renderDate);
    var addButtonDayEventListner = createButton('Display Day');
    addButtonDayEventListner(renderDay);
    createPara();  
}
renderApp();