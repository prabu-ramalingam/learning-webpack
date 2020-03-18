

var body = document.body;
var para;

function createButton(buttonName) {
    var button = document.createElement('button');
    var buttonText = document.createTextNode(buttonName);
    button.appendChild(buttonText);
    body.appendChild(button);
    return button;
}
function createPara() {

    para = document.createElement('p');
    body.appendChild(para);
}

function addButtonEventListner(button, listener) {

    button.addEventListener('click', () => listener(para));
}


export { createButton, createPara, addButtonEventListner} 