
const apiKey = "05f6484c1318d4f6e6c1004dec6d9686";

document.querySelector('.search-button').addEventListener('click', () => {
    const city = document.querySelector('#search').value;
    if (city) {
        fetchWeatherDetails(city);
    } else {
        console.log("Please enter a city name.");
    }
});

function renderWeatherInfo(data){
    let tem = document.querySelector('.temperature');  
let temperatureInCelsius = data?.main?.temp - 273.15;  
tem.textContent = `${temperatureInCelsius.toFixed(2)} °C`;
document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.country-name').textContent = data.sys.country;

    // Set Flag Image
    let flagImg = document.querySelector('.country-flag');
    flagImg.src = `https://flagcdn.com/w320/${data.sys.country.toLowerCase()}.png`;
    flagImg.alt = `Flag of ${data.sys.country}`;
}
async function fetchWeatherDetails(city) {
    try{
        // let city = document.querySelector('.city-name').textContent;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        const data = await response.json()
        console.log("weather data :-> " ,data)
        renderWeatherInfo(data);
    }
    catch{
        console.log("error");
    }
     
}

