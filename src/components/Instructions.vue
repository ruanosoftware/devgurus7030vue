<template>
  <div class="container">
    <h2>Instructions</h2>

    <ol>
      <li>
        <p>Enable new Items to be added to the list</p>
      </li>

      <ul>
        <li>
          In the component <b>SortableList</b>, create a function
          <i>addNew</i> to handle Add New Items event:

          <pre class="codestyle">
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
            In the component <b>SortableList</b>, add a click event listener to
            wire up the button <i>"Add New Items"</i> to the event handler
            addNew:
          </p>

          <pre class="codestyle">
          &lt;button <b>v-on:click="addNew" </b> ...
        </pre>
        </li>

        <li>
          <p>
            In the <b>setup</b> function of <b>SortableList</b> component,
            return <b>addNew</b> function:
          </p>

          <pre class="codestyle">
    ...
    return {
      state,
      desc,
      dropEvent,
      addNew
    };
        </pre
          >
        </li>
      </ul>

      <p>
        If everything works fine, a New item should be added to the list after
        entering a description and clicking the add button
      </p>

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
      <li>
        <a
          href="https://www.youtube.com/watch?v=bwItFdPt-6M&ab_channel=Academind"
          >Vue 3 Composition API Introduction [FULL TUTORIAL]</a
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

.codestyle {
  color: green;
  font-weight: 600;
}
</style>
