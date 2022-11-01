

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
        
        
        //  const weatherDay2Title = response.forecast.forecastday[1].day.condition.text;
          const weatherDay2Title = response.forecast.forecastday;
     
         populateTaskList(response);
        //  weatherDay2Title.innerText = response.forecast.forecastday[1].day.condition.text;
        console.log(response);
        // console.log(weatherDay2Title);
          
    }

   
    // 

    
function populateTaskList(response = []) {
    
 //   console.log(taskList);
    console.log(response);
    const taskList = document.getElementById('taskList');
const b = response.forecast.forecastday;
console.log(b);
    taskList.innerHTML = b.map((task, i) => {
        console.log(task);
        return `
       <label>Data: ${task.date}</label>     <br>
       <label>Temperatura máxima: ${task.day.maxtemp_c}</label>     <br>
       <label>Temperatura mínima: ${task.day.mintemp_c}</label>  <br><br>
            `;
    }).join('');
}