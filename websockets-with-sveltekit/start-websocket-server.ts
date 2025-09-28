import { Server } from 'socket.io';

export const startWebsocketServer = async (httpServer : any) => {
  const io = new Server(httpServer);

  io.on('connection', (socket) => {

    // We'll handle a message from the frontend
    socket.on('frontend-message', async (data) => {
      console.log(data);
      
      const { frontend } = data;

      // Emit a message to the frontend
      io.sockets.emit('backend-message-to-frontend', frontend);
    });

    // Add any other events here...
    
  });
}
