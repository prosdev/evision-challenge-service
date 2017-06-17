import {
    GraphQLObjectType,
    GraphQLString
} from 'graphql';


const TimeZoneType = new GraphQLObjectType({
    name: 'TimeZone',
    description: 'Time zone type',
    fields: () => ({
        timeZoneId: {
            type: GraphQLString,
            description: 'Timezone id at given location'
        },
        timeZoneName: {
            type: GraphQLString,
            description: 'Timezone name at given location'
        }
    })
});

export default TimeZoneType;