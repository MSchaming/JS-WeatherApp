class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        // this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');

    } // end of constructor




    paint(weather){
    //convert Kelvin to Fahrenheit
    const temp = Math.round(((weather.main.temp -273.15)*1.8) + 32);
    //convert Knots to mph
    const wind = Math.round(weather.wind.speed * 1.152);

        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${temp} F \xBA`;
        // this.icon.setAttribute('src', weather.weather.icon);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `${weather.weather[0].main}`;
        this.wind.textContent = `Wind Speed: ${wind} mph`;
    }

}