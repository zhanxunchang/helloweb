let myHeading = document.querySelector('#p-id-1');
myHeading.textContent = '这是通过js动态设置的新内容!!!';

document.querySelector('#p-id-2').onclick = function() {
    alert('别戳我，我怕疼。');
}

let myImage = document.querySelector('#img-id-1');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg') {
      myImage.setAttribute('src', 'images/2.jpg');
    } else {
      myImage.setAttribute('src', 'images/1.jpg');
    }
}

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        pUserName.textContent = '欢迎 ' + myName;
    }
}

let pUserName = document.querySelector('#p-id-username');
let btnSetUserName = document.querySelector('#btn-id-1');
btnSetUserName.onclick = function() {
    setUserName();
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    pUserName.textContent = '欢迎 ' + storedName;
}


function funcAdd(num1, num2) {
    let result = num1 + num2;
    return result;
}