//Init Storage Class
const storage = new Storage();
//get stored location data
const weatherLocation = storage.getLocationData();


//Init Weather Class

const weather = new Weather(weatherLocation.city, weatherLocation.zip);

//Init UI Class
const ui = new UI();

//Add Event Listener for when DOM Content Loaded

document.addEventListener('DOMContentLoaded', getWeather);

//Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;

    //Change Location
    weather.changeLocation(city, zip);
    //Set Local Storage
    storage.setLocationData(city, zip);

    //get and display new weather location
    getWeather();
    
    //close Modal Window
    $('#locModal').modal('hide');

});


function getWeather(){
weather.getWeather()
    .then(results => {
        ui.paint(results);
        console.log(results);
    })
    .catch(err => console.log(err));

}