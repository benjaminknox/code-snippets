import { Server } from 'socket.io';
import { createClient } from 'redis';
import { createShardedAdapter } from "@socket.io/redis-adapter";

export const startWebsocketServer = async (httpServer : any) => {
  // Make sure to define your REDIS_URI as an environment variable
  let pubClient = createClient({ url: process.env.REDIS_URI });
  const subClient = pubClient.duplicate();

  await Promise.all([
    pubClient.connect(),
    subClient.connect()
  ]);

  // Create the adapter
  const adapter = createShardedAdapter(pubClient, subClient);
  const io = new Server(httpServer, { adapter });
  
  io.on('connection', (socket) => {
    // Implement your specific server events here
  });
}
