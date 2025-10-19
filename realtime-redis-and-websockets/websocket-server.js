import { Server } from 'socket.io';
import { createClient } from 'redis';

export const startWebsocketServer = async (httpServer : any) => {
  const io = new Server(httpServer);

  let redisClient = createClient({ url: process.env.REDIS_URI });
  
  await redisClient.connect();
  
  // The front end establishes a connection
  io.on('connection', (socket) => { 
  
    socket.on('register', async (channelId) => {
      // The server joins a room to isolate messages by user
      socket.join(channelId);
      
      // The server subscribes to a user specific pub/sub channel
      redisClient.subscribe(`channel:${channelId}`, async (message) => {
        // Receive from the back end and send a message to the user via the front end
        socket.emit('front-end-message', message);
      });
      
      socket.on('disconnect', async () => {
        await redisClient.unsubscribe(`channel:${channelId}`);
      });
    });
  });
}
