import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat
} from 'graphql';

import TimeZoneType from './TimeZoneType';
import CoordinateType from './CoordinateType';

const WeatherType = new GraphQLObjectType({
    name: 'WeatherType',
    description: 'Weather object',
    fields: () => ({
        cityName: {
            type: GraphQLString,
            description: 'Name of city at given location',
            resolve: (obj) => {
                return obj.name;
            }
        },
        temperature: {
            type: GraphQLFloat,
            description: 'Current temperature at given location',
            resolve: (obj) => {
                const temp = obj.main.temp;
            return convertToFarenheit(temp);
            }
        },
        timeZoneInfo: {
            type: TimeZoneType,
            description: 'Time zone information at given location'
        },
        elevation: {
            type: GraphQLFloat,
            description: 'Elevation at given location'
        },
        coord: {
            type: CoordinateType,
            description: 'Coordinate of given location'
        }
    })
});

const convertToFarenheit = (temp) => {
    return ((temp * 9/5) - 459.67).toFixed(2);
};

export default WeatherType;