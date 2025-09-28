import { handler } from './build/handler.js';
import { startWebsocketServer } from './build/start-websocket-server.js';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

app.use(handler);

startWebsocketServer(server);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
