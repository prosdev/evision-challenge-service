
import express from 'express';
import cors from 'cors';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';

import schema from './src/schema/schema';

import http from 'http';
import https from 'https';
import fs from 'fs';

const privateKey  = fs.readFileSync('./key.pem');
const certificate = fs.readFileSync('./cert.pem');

const credentials = {key: privateKey, cert: certificate};
const PORT = 4000;
const PORT_SECURE = 8443;
const server = express();

server.use(cors());

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

const httpServer = http.createServer(server);
const httpsServer = https.createServer(credentials, server);

httpServer.listen(PORT, () =>
    console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);
httpsServer.listen(PORT_SECURE, () =>
    console.log(`Secure GraphQL Server is now running on https://localhost:${PORT_SECURE}`)
);