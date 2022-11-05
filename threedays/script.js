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
    const nextdaysForecast = response.forecast.forecastday;
    nextdaysForecast.shift();
    nextdaysForecastList.innerHTML = nextdaysForecast.map((forecast) => {
        const day = forecast.date.substr(8, 2);
        let month = forecast.date.substr(5, 2);
        let monthName = checkMonthName(month);
        let maxTempCelsius = forecast.day.maxtemp_c;
        let maxTempFarenheit = forecast.day.maxtemp_f;
        return `
       <label>Data: ${monthName}, ${day}</label><br>
       <label>Temperatura máxima (Celsius): ${maxTempCelsius}</label><br>
       <label>Temperatura máxima (Farenheit): ${maxTempFarenheit}</label><br>
       <label>Temperatura mínima: ${forecast.day.mintemp_c}</label><br><br>
            `;
    }).join('');
}

function checkMonthName(month) {
    switch (month) {
        case '01':
            return month = 'January';
        case '02':
            return month = 'February';
        case '03':
            return month = 'March';
        case '04':
            return month = 'April';
        case '05':
            return month = 'May';
        case '06':
            return month = 'June';
        case '07':
            return month = 'July';
        case '08':
            return month = 'August';
        case '09':
            return month = 'September';
        case '10':
            return month = 'October';
        case '11':
            return month = 'November';
        case '12':
            return month = 'December';
    }
}