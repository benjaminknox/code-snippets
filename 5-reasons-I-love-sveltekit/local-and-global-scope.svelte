// src/routes/+layout.svelte

<script lang="ts">
// Javascript code here...
</script>

{@render children()}

<style lang="scss">
  :root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-color: #f8f9fa;
    --text-color: #333333;
    --font-size-base: 16px;
    --spacing-unit: 8px;
    --border-radius: 4px;
  }
// Other styles here...
</style>

// src/routes/[anyRoute]/+page.svelte

<script>
  let greeting = "❤️ SvelteKit";
</script>

<div class="card">
  <h1>{greeting}</h1>
  <p>This is a component using CSS variables defined in +layout.scss.</p>
  <button class="button">Click Me</button>
</div>

<style lang="scss">
  .card {
    background-color: white;
    // Referencing global styles 👇
    border: 1px solid var(--secondary-color); 
    border-radius: var(--border-radius); 
    padding: calc(var(--spacing-unit) * 2);
    margin-bottom: var(--spacing-unit);
  }

  // Other styles here...
</style>
