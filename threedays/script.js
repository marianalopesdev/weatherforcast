function searchWeather() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd5d978f70emshd9deb72e549dfe2p150153jsn41e3942684ea',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    const input = document.getElementById("searchInput").value;

    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + input + '&days=3', options)
        .then(response => response.json())
        .then(response =>
            retrievingData(response)
        )
        .catch(err => console.error(err));
}


function retrievingData(response) {
    city.innerText = response.location.country;
    countryName.innerText = response.location.name;
    regionName.innerText = response.location.region;
    currentTemperatureCelsius.innerText = response.current.temp_c + 'º';
    const currentConditionIcon = response.current.condition.icon;
    weatherNow.setAttribute('src', currentConditionIcon);
    weatherNowTitle.innerText = response.current.condition.text;


    populateNextDaysForecast(response);
   

}

function populateNextDaysForecast(response = []) {

  //  const taskList = document.getElementById('taskList');
    const nextdaysForecast = response.forecast.forecastday;
    nextdaysForecast.shift();
    nextdaysForecastList.innerHTML = nextdaysForecast.map((forecast) => {
        const day = forecast.date.substr(8, 2);
        const month = forecast.date.substr(5, 2);
        return `
       <label>Data: ${day}/${month}</label><br>
       <label>Temperatura máxima: ${forecast.day.maxtemp_c}</label><br>
       <label>Temperatura mínima: ${forecast.day.mintemp_c}</label><br><br>
            `;
    }).join('');
}
