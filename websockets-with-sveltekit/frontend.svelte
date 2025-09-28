<script lang="ts">
  import { io } from 'socket.io-client';

  const socket = io();

  let backEndMessage = $state("");

  socket.emit('frontend-message', {frontEnd: `${Date.now()}`});
  
  socket.on('backend-message-to-frontend', (data) => {
    backendMessage = data;
  });
</script>

<div>Svelte Frontend: {backendMessage}</div>
