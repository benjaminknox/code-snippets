import { Server } from 'socket.io';

export const startWebsocketServer = async (httpServer : any) => {
  const { publisher: redis } = await initRedis();
  const io = new Server(httpServer);

  io.on('connection', (socket) => {

    // We'll send a message from the frontend
    socket.on('frontend-message', async (data) => {
      console.log(data);
    });

    // Add any other events here...
    
  });
}
