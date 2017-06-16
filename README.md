# About project
Create a utility using the language/tools of your choice that takes a ZIP­code, then outputs the city name,
current temperature, time zone, and general elevation at the location with a user­friendly message. For
example, “At the location $CITY_NAME, the temperature is $TEMPERATURE, the timezone is $TIMEZONE,
and the elevation is $ELEVATION”

### Pre-reqs:
1. Use the [Open WeatherMap](https://openweathermap.org/api) current weather API to retrieve the current temperature and city name. You
will be required to sign up for a free API key.
2. Use the [Google Time Zone API](https://developers.google.com/maps/documentation/timezone/start?hl=en_US) to get the current timezone for a location. You will again need to
register a “project” and sign up for a free API key with Google.
3. Use the [Google Elevation API](https://developers.google.com/maps/documentation/elevation/start) to retrieve elevation data for a location. You can use the same Google
API key as the Time Zone API.


### Getting Started:
Explore the many queries available in this service by cloning it done, and checking out the graphql endpt:
`http://localhost:4000/graphiql`:

To install dependencies, run:
```code
npm install
```

and to get started exploring the server, run:
```code
npm start
```



