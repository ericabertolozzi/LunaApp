// Check if the geolocation is supported by the browser
if (navigator.geolocation) {
    // Pass errorCheck function as a second argument here to handle location problems
    navigator.geolocation.getCurrentPosition(currentWeather, errorCheck);
  } else {
    alert("Geolocation is not supported by this browser.");
}

function currentWeather(position) {
  var lat = position.coords.latitude;
  var long = position.coords.longitude;


  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=68a01e80027a3c2fe93cc100dc4e0a80&units=imperial",
    function(data) {
        console.log(lat);
        console.log(long);
        document.getElementById('city').innerHTML ="<b>"+ data.name +" "+ "Weather"+"</b>"
        document.getElementById('temp').innerHTML = Math.round(data.main.temp)+ "&deg;F"
        document.getElementById('feelslike').innerHTML ="Feels Like: "+" "+ Math.round(data.main.feels_like)+ "&deg;F"
        document.getElementById('icon').innerHTML ="<img src='http://openweathermap.org/img/wn/" + data.weather[0].icon +".png'>"
        document.getElementById('weatherdescription').innerHTML = data.weather[0].main;
        document.getElementById('humidity').innerHTML ="Humidity: "+" "+ data.main.humidity+ "%";
        document.getElementById('pressure').innerHTML="Pressure: "+" "+ data.main.pressure + "hpa";
        document.getElementById('tempMin').innerHTML="Temp Min: "+" "+ data.main.temp_min + "&deg;F";
        document.getElementById('tempMax').innerHTML="Temp Max: "+" "+ data.main.temp_max + "&deg;F";
        document.getElementById('pressure').innerHTML="Pressure: "+" "+ data.main.pressure + "hpa";
        var id_str = (''+data.weather[0].id);
        if( id_str == "800" ) { // clear sky
          document.body.style.backgroundImage = "url('https://media.giphy.com/media/tntFzilPvh4je/source.gif')";
        }
        else if( id_str[0] == 8 ) { // clouds
          document.body.style.backgroundImage = "url('https://media.giphy.com/media/HoUgegTjteXCw/source.gif')";
        }
        else if( id_str[0] == 6 ) { // snow
          document.body.style.backgroundImage = "url('https://media.giphy.com/media/Xi2Xu0MejhsUo/source.gif')";
        }
        else if( id_str[0] == 5 || id_str[0] == 3 ) { // rain
          document.body.style.backgroundImage = "url('https://media.giphy.com/media/Mgq7EMQUrhcvC/source.gif')";
        }
        else if( id_str[0] == 2 ) { // thunderstorm
          document.body.style.backgroundImage = "url('https://media.giphy.com/media/o8A56JaNJQFSU/giphy.gif')";
        }
        else { // default
          document.body.style.backgroundImage = "url('https://media.giphy.com/media/u01ioCe6G8URG/source.gif')";
        }
        document.body.style.backgroundSize = "cover";
        document.body.style.height = "100vh";
        document.body.style.padding = "0";
        document.body.style.margin = "0";
    }
  );
}

// Function to use Troy, NY coordinates as the default location if user blocks location access
function defaultWeather() {
  var lat = 42.727962;
  var long = -73.691956;

  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=68a01e80027a3c2fe93cc100dc4e0a80&units=imperial",
    function(data) {
        document.getElementById('city').innerHTML ="<b>"+ data.name +" "+ "Weather"+"</b>"
        document.getElementById('temp').innerHTML = Math.round(data.main.temp)+ "&deg;F"
        document.getElementById('feelslike').innerHTML ="Feels Like: "+" "+ Math.round(data.main.feels_like)+ "&deg;F"
        document.getElementById('icon').innerHTML ="<img src='http://openweathermap.org/img/wn/" + data.weather[0].icon +".png'>"
        document.getElementById('weatherdescription').innerHTML = data.weather[0].main;
        document.getElementById('humidity').innerHTML ="Humidity: "+" "+ data.main.humidity+ "%";
        document.getElementById('pressure').innerHTML="Pressure: "+" "+ data.main.pressure + "hpa";
        document.getElementById('tempMin').innerHTML="Temp Min: "+" "+ data.main.temp_min + "&deg;F";
        document.getElementById('tempMax').innerHTML="Temp Max: "+" "+ data.main.temp_max + "&deg;F";
        document.getElementById('pressure').innerHTML="Pressure: "+" "+ data.main.pressure + "hpa";


    }
  );
}

// Error checking function to see if user blocked location permissions
function errorCheck(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied permission.");
      defaultWeather();
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}
