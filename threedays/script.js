const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd5d978f70emshd9deb72e549dfe2p150153jsn41e3942684ea',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};



    function searchWeather(){
        

        const input = document.getElementById("searchInput").value;
        fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q='+input+'&days=3', options)
        .then(response => response.json())
        .then(response => 
         retrievingData(response)
           
            )
        .catch(err => console.error(err));
        console.log('cuco');
       
        
    
    
    }
    

    function retrievingData(response){
         city.innerText = response.location.country;
         countryName.innerText = response.location.name;
         regionName.innerText = response.location.region;
         currentTemperatureCelsius.innerText = response.current.temp_c+'º';
         const currentConditionIcon = response.current.condition.icon;
         weatherNow.setAttribute('src', currentConditionIcon);
         weatherNowTitle.innerText = response.current.condition.text;
        
        
         // const weatherDay2Title = response.forecast.forecastday[1].day.condition.text;
          weatherDay2Title.innerText = response.forecast.forecastday[1].day.condition.text;
        console.log(response);
        // console.log(weatherDay2Title);
          
    }