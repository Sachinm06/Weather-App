function cityData() {
    citysearch = city.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citysearch}&appid=b41ec3be35c7dac8aabbc21ba253137a`)
    .then(data=>data.json()).then(data=>displayData(data))


}

function displayData(cityData){

cityName=cityData.name
weather=cityData.weather[0].description
temp=((cityData.main.temp)-273.15).toFixed()
tempMin=((cityData.main.temp_min)-273.15).toFixed()
tempMax=((cityData.main.temp_max)-273.15).toFixed()
feels_like=((cityData.main.feels_like)-273.15).toFixed()

result.innerHTML=`
<h2 class="city"><i class="fa-solid fa-location-dot"></i>  ${cityName}</h2> 
<h1 class="temp">${temp}° </h1>
<h2 class="weather">${weather}</h2>
<h4 class="feels">Feels like ${feels_like}°</h4>
<hr>
<h4 class="mintemp">min ${tempMin}°</h4>
<h4 class="mintemp">max ${tempMax}°</h4>
`

}