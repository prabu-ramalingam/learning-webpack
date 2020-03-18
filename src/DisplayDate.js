
import now, { day } from './date'

function renderDate(html) {

    let date = now();

    html.innerHTML=date;
}
function renderDay(html) {

    let date = day();

    html.innerHTML = date;
}

export {
    renderDate as default,
    renderDay
};