var timeNow = Date().toString();

var year = timeNow.split(' ')[3];

var yearSpan = document.querySelector('#year');
yearSpan.innerText = year;