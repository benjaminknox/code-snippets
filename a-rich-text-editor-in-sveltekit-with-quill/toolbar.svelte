<div id="toolbar">
  <!-- Add font size dropdown -->
  <select class="ql-size">
    <option value="small"></option>
    <!-- Note a missing, thus falsy value, is used to reset to default -->
    <option selected></option>
    <option value="large"></option>
    <option value="huge"></option>
  </select>
  <!-- Add a bold button -->
  <button class="ql-bold"></button>
  <!-- Add subscript and superscript buttons -->
  <button class="ql-script" value="sub"></button>
  <button class="ql-script" value="super"></button>
</div>

<div id="editor"></div>

<style>
  #toolbar {
    width: 600px;
    margin: auto;
    border-radius: 10px 10px 0 0;
  }

  #editor {
    width: 600px;
    height: 300px;
    margin: auto;
    border-radius: 0 0 10px 10px;
  }
</style>
