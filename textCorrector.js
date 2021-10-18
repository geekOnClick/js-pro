// let regEx = /^'|'$/g
// let change = document.getElementById('text').textContent.replace(regEx, '----------');

// let regEx = /'/g
// let change = document.getElementById('text').textContent.replace(/'([А-Я]+|[а-я]+)'/gim, '"$1"');
// console.log(change)
// document.getElementById('text').textContent = change;


let change = document.getElementById('text').textContent

let str = change.replace(/ '/g, ' "').replace(/'\s/g, '"');
console.log(str)