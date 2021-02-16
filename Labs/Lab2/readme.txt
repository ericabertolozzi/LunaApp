Lab 2 Work Log:

Group Work Log:
Our first step was reviewing the Openweathermap API to see the type of data it contained. There were several different ways to get
the weather of the current location including by zip code, city name, and geolocation. We decided to use the
HTML geolocation feature to retrieve the user’s location and specifically their latitude and longitude.
These values were then fed into the API URL. The next step involved printing the results of the API call onto
the webpage. This was accomplished by making div ID’s in the HTML page for each of the various data points.
Then, in the JavaScript file we assigned the API weather data to each of the respective ID tags.
The data that was collected from the API included: city name, temperature, feels like temperature,
icon of weather description and description, humidity, pressure, maximum and minimum temperature.

Simi @simranambiar:

I worked on the js file adding tempMin, tempMax and pressure to this file. I also added the divs into html and css.

Virginia Barnes @barnesv17 /////////////////////////////////////////////////////
  Facebook Login API:
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

  Spoonacular API: https://spoonacular.com/food-api
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

  MusixMatch API: https://developer.musixmatch.com/documentation?ref=apilist.fun
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
