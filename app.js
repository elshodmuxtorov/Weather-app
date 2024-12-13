const apiKey = "739e75fa7ad7cfa4542b06a8977e3e88";
const searchInput=document.querySelector(".input");
const searchButton=document.querySelector(".search-btn");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=";
const img=document.querySelector(".weather-img");

async function checkWeather(city) {
    const response=await fetch(apiUrl+apiKey+"&q="+city);

    if(response.status!=200){
        document.querySelector(".error-message").style.display="block";
        document.querySelector(".weather").style.display="none";
        document.querySelector(".card").style.height="70px";
    }else {
        var data=await response.json();


        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity-child").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind-child").innerHTML=data.wind.speed+"km/h";
    
        switch(data.weather[0].main){
            case "Clear":
                img.src="images/clear.png";
                break;
            case "Clouds":
                img.src="images/clouds.png";
                break;
            case "Rain":
                img.src="images/rain.png";
                break;
            case "Snow":
                img.src="images/snow.png";
                break;    
                
        }
        document.querySelector(".card").style.height="500px";
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error-message").style.display="none";
    }
    }
searchButton.addEventListener("click",()=>{
    checkWeather(searchInput.value);
})  