'use strict';
const KEY = '9795e1602a571852a281a4c93db2aeeb';
const API_URL = 'http://api.openweathermap.org'
+ '/data/2.5/forecast?q=nynashamn&appid=' + KEY;

    function HttpGet(url){
        this.url = url;
     this.ajax = new XMLHttpRequest();
    }

    HttpGet.prototype.proceed = function(callback) {
        this.ajax.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200){
                callback(this.response);
            }
        }
    this.ajax.open('GET', this.url, true);
    this.ajax.send();
    }

    function fetch(url) {
        return new HttpGet(url);
    }

    function Table(tbody){
        this.container = document.querySelector(tbody.container);
    }

    function weatherTable(attribute){
        Table.call(this, {
        container: '.weatherTable',
        title: attribute.title
        });

            fetch(API_URL).proceed(response => {
        
                 var weatherData = JSON.parse(response);
        
                 var weatherList = weatherData.list;
                 
                 var tbody = document.querySelector('.weatherTable');

                for(var index = 0; index < 5; index++) {
                    var time = weatherList[index].dt_txt;
                    var date = new Date(time);
                    var hour = date.getHours() + ":00";
                    var temp = weatherList[index].main.temp - 273.15;
            
                    var templet = `
                        <tr>
                            <td>${hour}</td>
                            <td>${weatherList[index].weather[0].main}</td>
                            <td>${temp.toFixed(2)}</td>
                            <td>${weatherList[index].wind.speed}</td>
                        </tr>
                        `;
                    tbody.innerHTML += templet;
                }
            });   
}



    function trainTable(attribute){
        Table.call(this, {
            container: '.trainTable',
            title: attribute.title
        });
        var button = document.querySelector('#searchTrains');
        button.addEventListener('click', (event) => {
   
            function prepareBody(tbody){
                for(var i=0; i<1; i++){
                    var row = document.createElement('tr');
                        for(var j=0; j<1; j++){
                            var col1 = document.createElement('td');
                            var col2 = document.createElement('td');
                            var col3 = document.createElement('td');
                            col1.innerHTML += attribute.trainNR;
                            col2.innerHTML += attribute.leaves;
                            col3.innerHTML += attribute.arrives;

                            row.appendChild(col1);
                            row.appendChild(col2);
                            row.appendChild(col3);
                        }       
                    tbody.appendChild(row);
                }
            }
         prepareBody(this.container);
        });
    }   
        trainTable.prototype = Object.create(Table.prototype);
        trainTable.prototype.constructor = weatherTable;