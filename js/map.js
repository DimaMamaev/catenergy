


 function initMap() {
    var coordinates = {lat: 59.938894, lng: 30.323080},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 14,   
        }),
    
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: "img/"
        });
       
}