// API-nyckel för väder 9795e1602a571852a281a4c93db2aeeb
// länk med vädret https://api.openweathermap.org/data/2.5/weather?q=nynashamn&appid=9795e1602a571852a281a4c93db2aeeb
// länk med forecast https://api.openweathermap.org/data/2.5/forecast?q=nynashamn&appid=9795e1602a571852a281a4c93db2aeeb
// javascript html ajax youtube

'use strict';

var weather = new weatherTable({
    title: 'Hej',
    information: 'hej'
});

var train1 = new trainTable({
    title: 'Hej',
    trainNR: '42',
    leaves: '15:00',
    arrives: '15:45'
});
var train2 = new trainTable({
    title: 'Hej',
    trainNR: '42',
    leaves: '16:00',
    arrives: '16:45'
});

var train3 = new trainTable({
    title: 'Hej',
    trainNR: '42',
    leaves: '17:00',
    arrives: '17:45'
});

var nameInput = document.getElementById('input');
var nameOutput = document.getElementById('output');

    nameInput.addEventListener('input', (event) =>{
     nameOutput.innerHTML ="Åker ifrån: " + event.target.value;
     event.preventDefault();
    });