var distance = 0;

        x = navigator.geolocation;

        x.getCurrentPosition(success);

        function success(position){

            var myLat = position.coords.latitude;
            var myLong = position.coords.longitude;

            var coords = new google.maps.LatLng(myLat, myLong);

            var mapOptions = {
                
                zoom: 11,
                center: coords,
                mapTypeId: google.maps.MapTypeId.ROADMAP

            }
            
            var map = new google.maps.Map(document.getElementById("map"),mapOptions);
            var marker = new google.maps.Marker({map:map, position:coords});
       

            Number.prototype.toRad = function() {
         return this * Math.PI / 180;
        }

        var lat2 = -33.957314; 
        var lon2 = 18.403108; 
        var lat1 = myLat; 
        var lon1 = myLong; 

        var R = 6371; // km 
        //has a problem with the .toRad() method below.
        var x1 = lat2-lat1;
        var dLat = x1.toRad();  
        var x2 = lon2-lon1;
        var dLon = x2.toRad();  
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                        Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                        Math.sin(dLon/2) * Math.sin(dLon/2);  
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        distance = R * c; 

        
            
    
    }

    function inRange(){
        if (distance < 5){
            alert("You are logged in")
            } 
        else {
            alert("not in within 5 km")
        }


    }    