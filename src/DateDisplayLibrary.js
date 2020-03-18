

var body = document.body;
var para;

function createButton(buttonName) {

    var button = document.createElement('button');
    var buttonText = document.createTextNode(buttonName);
    button.appendChild(buttonText);
    body.appendChild(button);

    
    return function (listener) {

        button.addEventListener('click', () => listener(para));
    }    
}
function createPara() {

    para = document.createElement('p');
    body.appendChild(para);
}




export { createButton, createPara} 