class Weather {
    constructor(city, zip) {
        this.apiKey = 'e991d15f3a8e3075358d182437491479';
        this.city = city;
        this.zip = zip;
    }

    //Fetch Weather from API
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=${this.apiKey}&q=${this.city}&zip=${this.zip}`)
    
        const responseData = await response.json();

        return responseData;
    }

    //Change weather location
    changeLocation(city, zip) {
        this.city = city;
        this.zip = zip;
    }

}