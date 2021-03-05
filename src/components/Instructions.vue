<template>
  <div class="container">
    <h2>Instructions</h2>

    <ol>
      <li>
        <p>Enable new Items to be entered to the list</p>
      </li>

      <ul>
        <li>
          In the component <b>SortableList</b>, create a function to handle
          <i>Add New Items</i> event:

          <pre>
    function addNew() {
      if(!desc.value) {
        return;
      }

      state.list = [
        ...state.list,
        { text: desc.value, color: getRandomColor() },
      ];
    }
        </pre
          >
        </li>

        <li>
          <p>
            Return addNew function from setup function
          </p>
        </li>

        <li>
          <p>
            In the component <b>SortableList</b>, add event listener to button
            <i>Add New Items</i>:
          </p>

          <pre>
          ... v-on:click="addNew" ...
        </pre
          >
        </li>
      </ul>

      <li>Add functionality to remove Item</li>

      <p>
        Using as reference the <b><i>drag and drop</i></b> functionality as
        implemented for <b>ListItem</b>, Allow items to be dragged to the trash
        can and be deleted on the drop event.
      </p>

      <p>
        You need to add attributes to trash can element and also create the
        handler for the drop event
      </p>
    </ol>

    <h2>Reference</h2>
    <ul>
      <li>
        <a href="https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf"
          >VUE 3 Cheat Sheet</a
        >
      </li>
      <li>
        <a href="https://www.w3schools.com/html/html5_draganddrop.asp"
          >HTML Drag and Drop API</a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.1rem;
}

.container {
  margin: auto;
  width: 400px;
  text-align: left;
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll;
}
</style>
