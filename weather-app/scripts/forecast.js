const apiKey = "2dqEGpGoxG6bQ4eaG5do2JUrLdEjQSnX"; // 50 api call per day...


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
}

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