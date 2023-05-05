document.getElementById('container');
document.querySelector('#container');
document.querySelectorAll('.second');
document.querySelector('ol .third');

const container = document.querySelector('#container');
container.innerText = "Hello!"

const footer = document.querySelector('.footer');
footer.classList.add("main");

const footers = document.querySelector('.footer');
footer.classList.remove("main");

const newLi = document.createElement('li');

newLi.innerText = "four";

const ul = document.querySelector('ul');
ul.appendChild(newLi);

const lists = document.querySelector('ol');
for(let list of lists){
    list.style.backgroundColor = "green";
}

const foot = document.querySelector('.footer');
footer.remove();