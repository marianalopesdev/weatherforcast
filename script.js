
const search = document.getElementById("searchButton");

const city = document.getElementById("city");
const ot = document.getElementById("ot");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd5d978f70emshd9deb72e549dfe2p150153jsn41e3942684ea',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};



function searchWeather(){
    console.log('cuco2');
    const input = document.getElementById("searchInput").value;
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+input, options)
	.then(response => response.json())
	.then(response => 
     bubu(response)
       
        )
	.catch(err => console.error(err));
    console.log('cuco');
   
    


}

function bubu(response){
    city.innerText = response.location.country;
     ot.innerText = response.location.name;
     ot2.innerText = response.location.region;
     ot3.innerText = response.current.temp_c+'º';
     const currentConditionIcon = response.current.condition.icon;
     weatherNow.setAttribute('src', currentConditionIcon);
     weatherNowTitle.innerText = response.current.condition.text;
     
     console.log(response);
      
}