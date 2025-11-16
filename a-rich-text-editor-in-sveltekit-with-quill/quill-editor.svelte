<script lang="ts">
  import type Quill from 'quill';
  import 'quill/dist/quill.snow.css';

  let content: HTMLInputElement; // We will create an input element in step 4

  $effect(() => {
    let quill: Quill | undefined;

    (async () => {
      const Quill = (await import('quill')).default;
      
      quill = new Quill('#editor', { // We will create the editor element in step 5
        theme: 'snow',
        modules: {
          toolbar: '#toolbar' // We will create the toolbar element in step 6
        }
      });
      
      quill.on('text-change', () => {
        content.value = quill.root.innerHTML;
      });
    })();
    
    return () => {
      if (quill) {
        quill.off('text-change');
      }
    };
  });
</script>
