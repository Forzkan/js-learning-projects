const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    /* const cityDetails = data.cityDetails;
    const weather = data.weather; */

    // destructuring properties instead of the old way above..
    const { cityDetails, weather} = data;

    // update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // change image
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);

    // change the icon
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // remove the d-none class if present.
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}


const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

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

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    if(city !== ""){
        // update the ui with the new city information.
        updateCity(city)
            .then(data => {
                updateUI(data);
            })
            .catch(err => console.log(err));

        // store the city in local storage
        localStorage.setItem('city', city);
    }
});


if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then( data => updateUI(data))
    .catch(err => console.log(err));
}