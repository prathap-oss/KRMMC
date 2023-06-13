const apikey="2c066048ab3ca6a895681789f3892648";


const WeatherDataE1=document.getElementById("Weather-data");

const CityInputE1= document.getElementById("city-input");

const FormE1 = document.querySelector("form");

FormE1.addEventListener("submit",(event)=>{
    event.preventDefault();
    const cityValue = CityInputE1.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={cityValue}&appid={apikey}`)
        if(response.ok){
            throw new error("Network response is not working ! ");
        } 

        const data=await response.json()


        console.log(data);
        
    } catch (error) {
        
    }
}