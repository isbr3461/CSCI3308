//helper functions
var dayOfWeek = "";
function formatDate(date, month, year)
{
  month = (month.length < 2) ? ('0' + month) : month;
  date = (date.length < 2)? ('0' + date) : date;
  return [year,month,date].join('-');
}
function getDayofWeek(date, month, year){
  var week_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dayOfWeek =  week_names[new Date([month,date,year].join('-')).getDay()];
}
function getFarenheitTemp(temp){
  return (9*temp/5)+32;
}

//run when the document object model is ready for javascript code to execute
$(document).ready(function() {
  var url ='https://api.weatherstack.com/forecast?access_key=5bc82451636190abd9d7afe6fe9b20b5&query=40.0150,-105.27&forecast_days=5'; //Place your weatherstack API Call Here - access_key to be used: 5bc82451636190abd9d7afe6fe9b20b5

  $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
		console.log(data);//Review all of the data returned

    var image_today = data.current.weather_icons;

    var heading = data.location.name;
    document.getElementById("heading").innerHTML = 'Weather Forecast - ' + heading;

    var temp_today = getFarenheitTemp(data.current.temperature);
    //var thermometer_inner = temp_today + '%';

    var precip_today = data.current.precip + 'mm';
    document.getElementById("precip_today").innerHTML = precip_today;

    var humidity_today = data.current.humidity + '%';
    document.getElementById("humidity_today").innerHTML = humidity_today;

    var wind_today = data.current.wind_speed;
    document.getElementById("wind_today").innerHTML = wind_today;

    var summary_today = data.current.weather_descriptions;
    document.getElementById("summary_today").innerHTML = summary_today;

    document.getElementById("local_time").innerHTML = new Date();
    /*
      Read the current weather information from the data point values [https://weatherstack.com/documentation] to
      update the webpage for today's weather:
      1. image_today : This should display an image for today's weather.
               This will use the icon that is returned by the API. You will be looking for the weather_icons key in the response.

      2. location: This should be appended to the heading. For eg: "Today's Weather Forecast - Boulder"

      3. temp_today : This will be updated to match the current temperature. Use the getFarenheitTemp to convert the temperature from celsius to farenheit.

      4. thermometer_inner : Modify the height of the thermometer to match the current temperature. This means if the
                   current temperature is 32 F, then the thermometer will have a height of 32%.  Please note,
                   this thermometer has a lower boundary of 0 and upper boundary of 100.

      5. precip_today : This will be updated to match the current probability for precipitation. Be sure to check the unit of the value returned and append that to the value displayed.

      6. humidity_today : This will be updated to match the current humidity percentage (make sure this is listed as a
                percentage %)

      7. wind_today : This will be updated to match the current wind speed.

      8. summary_today: This will be updated to match the current summary for the day's weather.

    */
    //helper function - to be used to get the key for each of the 5 days in the future when creating cards for forecasting weather
    function getKey(i){
        var week_names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
        dayOfWeek=week_names[new Date(Object.keys(data.forecast)[i]).getDay()];
        return data.forecast[Object.keys(data.forecast)[i]];
    }
    /* Process the daily forecast for the next 5 days */



    var temphi1 = 'High: ' + getKey(0).maxtemp.toString();
    var templow1 = 'Low: ' + getKey(0).mintemp.toString();
    var sunrise1 = 'Sunrise: ' + getKey(0).astro.sunrise.toString();
    var sunset1 = 'Sunset: ' + getKey(0).astro.sunset.toString();
    document.getElementById("temphi1").innerHTML = temphi1;
    document.getElementById("templow1").innerHTML = templow1;
    document.getElementById("sunrise1").innerHTML = sunrise1;
    document.getElementById("sunset1").innerHTML = sunset1;


    var temphi2 = 'High: ' + getKey(1).maxtemp.toString();
    var templow2 = 'Low: ' + getKey(1).mintemp.toString();
    var sunrise2 = 'Sunrise: ' + getKey(1).astro.sunrise.toString();
    var sunset2 = 'Sunset: ' + getKey(1).astro.sunset.toString();
    document.getElementById("temphi2").innerHTML = temphi2;
    document.getElementById("templow2").innerHTML = templow2;
    document.getElementById("sunrise2").innerHTML = sunrise2;
    document.getElementById("sunset2").innerHTML = sunset2;



    var temphi3 = 'High: ' + getKey(2).maxtemp.toString();
    var templow3 = 'Low: ' + getKey(2).mintemp.toString();
    var sunrise3 = 'Sunrise: ' + getKey(2).astro.sunrise.toString();
    var sunset3 = 'Sunset: ' + getKey(2).astro.sunset.toString();
    document.getElementById("temphi3").innerHTML = temphi3;
    document.getElementById("templow3").innerHTML = templow3;
    document.getElementById("sunrise3").innerHTML = sunrise3;
    document.getElementById("sunset3").innerHTML = sunset3;



    var temphi4 = 'High: ' + getKey(3).maxtemp.toString();
    var templow4 = 'Low: ' + getKey(3).mintemp.toString();
    var sunrise4 = 'Sunrise: ' + getKey(3).astro.sunrise.toString();
    var sunset4 = 'Sunset: ' + getKey(3).astro.sunset.toString();
    document.getElementById("temphi4").innerHTML = temphi4;
    document.getElementById("templow4").innerHTML = templow4;
    document.getElementById("sunrise4").innerHTML = sunrise4;
    document.getElementById("sunset4").innerHTML = sunset4;



    var temphi5 = 'High: ' + getKey(4).maxtemp.toString();
    var templow5 = 'Low: ' + getKey(4).mintemp.toString();
    var sunrise5 = 'Sunrise: ' + getKey(4).astro.sunrise.toString();
    var sunset5 = 'Sunset: ' + getKey(4).astro.sunset.toString();
    document.getElementById("temphi5").innerHTML = temphi5;
    document.getElementById("templow5").innerHTML = templow5;
    document.getElementById("sunrise5").innerHTML = sunrise5;
    document.getElementById("sunset5").innerHTML = sunset5;


    /*
      For the next 5 days you'll need to add a new card listing:
        1. The day of the week
        2. The temperature high
        3. The temperature low
        4. Sunrise
        5. Sunset

      Each card should use the following format:
      <div style="width: 20%;">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"><!-- List Day of the Week Here --></h5>
            <p class="card-text">High:<!--List Temperature High --> <br>
              Low: <!-- List Temperature Low --><br>
              Sunrise: <!-- List Time of Sunrise --><br>
              Sunset: <!-- List Time of Sunset --></p>
          </div>
        </div>
      </div>

      <Hint1 - To access the forecast data> You need to make sure to carefully see the JSON response to see how to access the forecast data. While creating the key to access forecast data make sure to convert it into a string using the toString() method.

      <Hint2 - To add the cards to the HTML> - Make sure to use string concatenation to add the html code for the daily weather cards.  This should
      be set to the innerHTML for the 5_day_forecast.
    */
  })
});
