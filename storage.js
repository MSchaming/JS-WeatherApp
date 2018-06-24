class Storage {
    constructor(){
        this.city;
        this.zip;
        this.defaultCity = "Colorado Springs";
        this.defaultZip = '80907';
    }

    getLocationData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('zip') === null){
            this.zip = this.defaultZip;
        } else {
            this.zip = localStorage.getItem('zip');
        }

        return {
            city: this.city,
            zip: this.zip
        }
    } //end of getLocationData

    setLocationData(city, zip) {
        localStorage.setItem('city', city);
        localStorage.setItem('zip', zip);
    }

}  //end of class Storage