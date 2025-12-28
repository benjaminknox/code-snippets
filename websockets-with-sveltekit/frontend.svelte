<script lang="ts">
  import { io } from 'socket.io-client';

  const socket = io();

  let backEndMessage = $state("");

  const sendFrontendMessage = () => {
    socket.emit('frontend-message', { frontend: `${Date.now()}` });
  }

  socket.on('backend-message-to-frontend', (frontend) => {
    backEndMessage = frontend;
  });
</script>

<a onclick={sendFrontendMessage}>Send Message</a>

<div>Svelte Frontend: {backEndMessage}</div>
