import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLNonNull
} from 'graphql';
import WeatherType from './WeatherType';
import axios from 'axios';
import config from '../../config';

const OPENWEATHER_API_KEY = config.OPENWEATHER_API_KEY;
const GOOGLEMAP_API_KEY= config.GOOGLEMAP_API_KEY;
const OPENWEATHER_API_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const GOOGLEMAP_TIME_ZONE_URL='https://maps.googleapis.com/maps/api/timezone/json?';
const GOOGLEMAP_ELEVATION_URL='https://maps.googleapis.com/maps/api/elevation/json?';

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'The root access to query possibilities in this service',
    fields: {
        getWeather: {
            type: WeatherType,
            description: 'Get weather information, along with timezone and elevation details',
            args: {
                zipcode : {
                    type: new GraphQLNonNull(GraphQLInt),
                    description: '5 digit zip code to query. Example: 97230'
                }
            },
            resolve: async (parentValue, {zipcode}) => {
                const OPENWEATHER_FULL=`${OPENWEATHER_API_BASE_URL}zip=${zipcode},us&appid=${OPENWEATHER_API_KEY}`;

                return await axios.get(OPENWEATHER_FULL)
                    .then( async res => {
                        const lat = res.data.coord.lat;
                        const lon = res.data.coord.lon;
                        const timestamp = res.data.dt;
                        console.log(res.data);
                        const GOOGLEMAP_TIMEZONE_FULL_URL = `${GOOGLEMAP_TIME_ZONE_URL}location=${lat},${lon}&timestamp=${timestamp}&key=${GOOGLEMAP_API_KEY}`;
                        const GOOGLEMAP_ELEVATION_FULL_URL=`${GOOGLEMAP_ELEVATION_URL}locations=${lat},${lon}&key=${GOOGLEMAP_API_KEY}`;

                        res.data.timeZoneInfo = await axios.get(GOOGLEMAP_TIMEZONE_FULL_URL).then(res => res.data).catch( err => {
                            console.log(err);
                        });
                        res.data.elevation = await axios.get(GOOGLEMAP_ELEVATION_FULL_URL).then(res => res.data.results[0].elevation).catch( err => {
                            console.log(err);
                        });
                        return res.data;
                    }).catch( err => {
                        console.log(err);
                    });
            }
        }
    }
});

export default RootQueryType;