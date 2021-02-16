Lab 2 Work Log:

Group Work Log:
Our first step was reviewing the Openweathermap API to see the type of data it contained. There were several different ways to get
the weather of the current location including by zip code, city name, and geolocation. We decided to use the
HTML geolocation feature to retrieve the user’s location and specifically their latitude and longitude. If the user's
browser does not give a location, Troy NY's weather is displayed by default. The latitude and longitude coordinate
values were then fed into the API URL.
The next step involved printing the results of the API call onto the webpage.
This was accomplished by making div ID’s in the HTML page for each of the various data points.
Then, in the JavaScript file we assigned the API weather data to each of the respective ID tags.
The data that was collected from the API included: city name, temperature, feels like temperature,
icon of weather description and description, humidity, pressure, maximum and minimum temperature.
The background of our web page changes depending on the weather calculated.

Simi @simranambiar:

I worked on the js file adding tempMin, tempMax and pressure to this file. I also added the divs into html and css.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Virginia Barnes @barnesv17
1) Facebook Login API:
    -"a secure, fast, and convenient way for users to log into your app, and for
    your app to ask for permissions to access data."
    - This API includes many features including cross platform login and granular
    permissions.
    - As a developer, you need to register on the API's website and add the github
    package dependency to your code.
    - The data is organized as a Graph with nodes and edges
      - Nodes include user, photo, page, or comment
      - Edges include connections such as photos on a page or comments on a photo
      - Nodes and Edges have fields aka the data about an object like user's bday
      or a page's name.
    - An example request is: `https://graph.facebook.com/facebook/picture?redirect=false`
    - It returns:
    ```
    {
      "data": {
        "height": 50,
        "is_silhouette": false,
        "url": "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/cp0/p50x50/119568341_200337161527884_7846459746434232698_n.png?_nc_cat=1&ccb=3&_nc_sid=dbb9e7&_nc_ohc=AzpLg4FhXTcAX_dgF-9&_nc_ht=scontent-lga3-1.xx&_nc_tp=30&oh=530508ecc6f8bcbc9c7b39c766e5a85b&oe=60522F0D",
        "width": 50
      }
    }
    ```
    Requests are formatted as: `/me/permissions/{permission-name}` an example {permission-name} is email.
    The data is intuitively organized, with the highest level being a node and the rest following edges to get
    certain fields.

2) Spoonacular API: https://spoonacular.com/food-api
    - "Let's you access over 330,000 recipes and 80,000 food products"
    - An example request is: `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2`
    - It returns:
    ```
    {
    "offset": 0,
    "number": 2,
    "results": [
      {
        "id": 716429,
        "calories": 584,
        "carbs": "84g",
        "fat": "20g",
        "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        "imageType": "jpg",
        "protein": "19g",
        "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"
      },
      {
        "id": 715538,
        "calories": 521,
        "carbs": "69g",
        "fat": "10g",
        "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
        "imageType": "jpg",
        "protein": "35g",
        "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta"
      }
    ],
    "totalResults": 86
    }
    ```
    Each request begins with a natural language query. It is then followed by
    any number of parameters/filters. This API behaves more like a SQL select than
    other hierarchical APIs.

3) MusixMatch API: https://developer.musixmatch.com/documentation?ref=apilist.fun
    - "The fastest, most powerful and legal way to display lyrics on your website or
    in your application. Today."
    - This API allows for the following parameters:
      - country
      - page (defines the number for paginated results)
      - page_size (range from 1 to 100)
      - format (json or xml)
    - These paramters seem very useful for developers and would be good to implement
    in our application's API
    - An example request is: `chart.artists.get?page=1&page_size=3&country=it`
    - This is requesting the top 3 artists in Italy
    - Much like the Spoonacular API, this API behaves more like a SQL query than
    a hierarchical API

4) Worklog
I added the functionality of the background gif changing depending on what the weather is.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Erica Bertolozzi (@ericabertolozzi)

API Research:
1) Fruityvice API
This API is very simple and provides nutritional data about each kind of fruit. The data for each fruit can be accessed at /api/fruit/<fruit-name>. The response contains information including name, id, genus, and an array with more specific nutritional data like calories, sugar, and fat. I think this is the best way to organize this data, but I would add ways to query to find fruits that have certain nutritional values and obtain them all together.
Here is an example response when calling api/fruit/banana:
{
    "genus": "Musa",
    "name": "Banana",
    "id": 1,
    "family": "Musaceae",
    "order": "Zingiberales",
    "nutritions": {
        "carbohydrates": 22,
        "protein": 1,
        "fat": 0.2,
        "calories": 96,
        "sugar": 17.2
    }
}

2) Poems One API
This API holds a large store of poems. The API is broken down into a few sections: poem of the day, poems, and private poems. For poem of the day, you can get one from all categories or one from a specific category, denoted by pod/categories. Poems have /random, /search, and /categories/search. Search allows filtering by author or tags. You can only make GET requests for poem of the day and poems. Private poems support GET, PUSH, and DELETE requests. This organization makes a lot of sense to me. An example poemOfTheDay response is:
{
  "author": "string",
  "title": "string"
  "poem": string,
  "tags": [...],
  "id": string,
  "image": string,
  "length": integer($int32),
  "date": string
}
-----------------------------------------------
Work log:
I added support for the user denied their browser access to their location. I learned how to do this on Stack Overflow, and set the default location to Troy NY so that weather will be displayed if no location is provided. I looked into the other ways to make an API call, and used the zip code URL for this part instead of the latitude and longitude coordinates. I also added an icon to the browser tab that has a weather icon similar to the iPhone weather app.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Manya Trehan (@Manya14)

Work Log -

I retrieved the user’s location by using the HTML geolocation feature. I learned how to do this by referencing w3schools. I then saved latitude and longitude coordinates in their respective variables and then fed them into the API call. In order to print the data onto the page, I created a div tag for each data weather variable i.e. city name, temperature, etc. and saved the data from the API to its respective div tag to be displayed. For creativity, I added the weather descriptions icons to the page in order to help users visualize the weather.

API Research -

1) Brandwatch Data Upload API
Companies can upload their first party data to this API and will be able to receive a detailed analysis. This
will allow businesses to better understand their customers and their business as a whole. After the data has been
uploaded, companies can use this API to identify key topics and trends and sentiment based off of users’ posts
online (Facebook, Twitter, etc.). In addition, companies can also upload all reviews (from Yelp) for their
company so that the API can analyze it and find common trends. While data is returned in JSON form, there
is also the option for the API to return visualizations (word map, line chart, etc.). This is a good way to
organize the data because a company’s marketing team would easily be able to look at these visualizations
and get a good picture of their business. Regarding what I would change, say I upload a dataset on February 1
and another dataset on March 1st. It would be interesting if the API not only draws conclusions from the latest
data set uploaded, but is also able to compare data from different time periods and identify trends and similarities/differences.

2) Yahoo Finance API
This API allows for one to view historical and real time data for stocks/bonds, market analysis,
options, etc. From the data given, users have the ability to query this data to find market trends.
To retrieve the data from this API, the user can enter something into the search bar and the
information will be displayed related to that search. The user can then select ‘Historical Data’
and a time period and all of the data from that particular time will be displayed.
This is an example of a sample response:
{
“marketSummaryResponse”:{
	“result”:[
		“exchangeTimezoneName”: “America/New_York”
		“fullExchangeName”: “SNP”
		“symbol”: “^GSPC”
		“regularMarketChange”:{
			“raw”:0.2199707
			“fmt”: “0.22”
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Lauren McAlarney (@mcalal)

Work Log - 
I worked on the html and css, and added classes for the divs and h1.

API Research -

1) Pokemon Go
This API is a free public API classified as a Gaming API. The data is stored in stats as follows: candies required to evolve, buddy distances, raid pokemon, nesting pokemon, maximum CP, shiny pokemon, alolan pokemon, fast moves, names, charged moves, released pokemon, and more. I think that the data is organized as such since it is easier for users to search for specific pokemon with such terms. I like this organization because they are providing a fun free API for people to use that at one point brought a lot of people together. If I weree to add something to this API, it would have to do more with the functions in regards to friends you have on the game. It is easy to send gifts to friends, but it would be cool to send specific items that they may need. An example of fetch JavaScript is seen below:
fetch("https://pokemon-go1.p.rapidapi.com/pokemon_stats.json", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "SIGN-UP-FOR-KEY",
    "x-rapidapi-host": "pokemon-go1.p.rapidapi.com"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});

2) Flight Data API
This API was created by travelpayouts, with the goal to provide flight trends and popular destinations for a user's website or application. With this API you can query (using GET): non-stop tickets, popular airline routes, tickets for every day of the month, popular directions from a city, cheapest tickets, special offers, and more. For this API, data is generated from sites Aviasales.ru and Jetradar.come, then transferred from the cache. An example request would be:
GET https://api.travelpayouts.com/v1/prices/cheap?origin=MOW&destination=HKT&depart_date=2016-11&return_date=2016-12&token=PutHereYourToken
Example output JSON code is as follows:
{
    "success": true,
    "data": {
        "LED": {
            "0": {
                "price": 4363,
                "airline": "UT",
                "flight_number": 369,
                "departure_at": "2015-06-27T11:35:00Z",
                "return_at": "2015-07-04T16:00:00Z",
                "expires_at": "2015-01-08T20:21:46Z"
            }
        }
    }
}
I like that this organization allows users to mass query these websites, and users can find the most optimal flight for them.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Helena O'Sullivan:  (GitHub Username: osullh)

Work Log:
 For Lab 2, I helped with the HTML and CSS aspects of it. I worked on the background gradient animation,
 some styling, and I also helped with the footer as well as the center block. Some of the code that
 I implemented for the HTML and CSS styling was during a Visual Studio Live Share. During the entire
 process of the lab, I didn't get stuck on any specific part. I found that the work that I did for the
 lab to be very reasonable. 

 For individual creativity, instead of implementing a simple gradient background, I added CSS
 elements so that the background gradient would be animated.

API Research:
 AccuWeather API:	https://developer.accuweather.com/getting-started
    - The AccuWeather API collects weather data for a plethora of locations across the globe, and
      presents their information in more than 100 languages.
    - AccuWeather API is organized through a hierarchy. The first action is to use one of the 
      Location APIs to find the user's location by either...
		      * Geoposition Search
		      * Text Search Using Postal Code
		      * Text Search by City Name
      After a location is established and a locationKey is obtained from the API response,
      other APIs can be called (depending on personal use)...
		      * Forecast API
		      * Current Conditions API
		      * Indices API
		      * Weather Alarms API
      I like how Accuweather provides multiple options for their users (i.e. with their Locations
      API). I feel that this type of implementation should be replicated for Luna and
      other future projects. This type of organization allows for a usage that's easy to
      understand and provides a more straightforward API.
    - An example request is: 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/locationKey?apikey=01&language=en-us&details=true&metric=true'.
      This request is for daily forecast data of a specific location.

 Twilio API:	https://www.twilio.com/docs/api
    - Twilio's customizable API allows users to query and manage meta-data for accounts, phone numbers,
      usage, and access tokens.
    - Twilio supports HTTP Basic authentication. Essentially, this allows users to protect the URLs on
      their web server. 
    - Twilio has several APIs that users can utilize...
      	 * Twilio’s Programmable SMS API
      	 * Programmable Voice API
      	 * Wireless API
      	 * Programmable Video API
      	 * Authy (Two-factor Authentication)
    - I like how Twilio set up their Authy API, which allows for two-factor authorization. I wouldn't change anything about it, and it's a good 
      example to draw inspiration from for building future APIs involved with account security. It's clear that this API was implemented and 
      created with ease of use and manageability in mind.
    - By default, Twilio's REST API returns XML. Here is an example response when calling Twilio’s Programmable SMS API:
        <TwilioResponse>
            <SMSMessage>
                <Sid>SM1f0e8ae6ade43cb3c0ce4525424e404f</Sid>
                <DateCreated>Fri, 13 Aug 2010 01:16:24 +0000</DateCreated>
                <DateUpdated>Fri, 13 Aug 2010 01:16:24 +0000</DateUpdated>
                <DateSent/>
                <AccountSid>ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</AccountSid>
                <To>+13455431221</To>
                <From>+15104564545</From>
                <Body>A Test Message</Body>
                <Status>queued</Status>
                <Flags>
                      <Flag>outbound</Flag>
                </Flags>
                <ApiVersion>2010-04-01</ApiVersion>
                <Price/>
                <Uri>
                      /2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SM1f0e8ae6ade43cb3c0ce4525424e404f
                </Uri>
            </SMSMessage>
        </TwilioResponse>      
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////