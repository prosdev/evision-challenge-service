import {
    GraphQLObjectType,
    GraphQLFloat
} from 'graphql';


const CoordinateType = new GraphQLObjectType({
    name: 'CoordinateType',
    description: 'Time zone type',
    fields: () => ({
        lon: {
            type: GraphQLFloat,
            description: 'Longitude for given location'
        },
        lat: {
            type: GraphQLFloat,
            description: 'Latitude for given location'
        }
    })
});

export default CoordinateType;