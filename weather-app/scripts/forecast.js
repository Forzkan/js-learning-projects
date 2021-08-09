
class Forecast{
    constructor(){
        this.apiKey = "2dqEGpGoxG6bQ4eaG5do2JUrLdEjQSnX";
        this.weatherURI = "http://dataservice.accuweather.com/currentconditions/v1/";
        this.cityURI = "http://dataservice.accuweather.com/locations/v1/cities/search";
    }

    async updateCity(city){
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);

        return {
            /* shorthand notation, if the name of the key is the same as the name of the variable
            as seen below, then we can just write the variable and its name will then be used
            as the key

            cityDetails: cityDetails,
            weather: weather   
            */
            cityDetails,
            weather
        }
    }

    async getCity(city){
        const query = `?apikey=${this.apiKey}&q=${city}`;

        const response = await fetch(this.cityURI + query);
        const data = await response.json();

        return data[0];
    }

    async getWeather(locationKey){
      
        const query = `${locationKey}?apikey=${this.apiKey}`;

        const response = await fetch(this.weatherURI + query);
        const data = await response.json();

        return data[0];
    }

}




/* const apiKey = "2dqEGpGoxG6bQ4eaG5do2JUrLdEjQSnX"; // 50 api call per day...


// Get Weather Information
const getWeather = async (locationKey) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${locationKey}?apikey=${apiKey}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

// Get City Information
const getCity = async (city) => {

    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${apiKey}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
} */

/* getCity('stockholm')
    .then(data => {
        return getWeather(data.Key);
    }).then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));
 */
/* getWeather('329260')
    .then(data => console.log(data))
    .catch(err => console.log(err)); */