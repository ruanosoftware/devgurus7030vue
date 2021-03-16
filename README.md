# devgurus7030vue

## Instructions
1. Enable new Items to be added to the list

* In the component SortableList, create a function addNew to handle Add New Items event:

```Javascript
    function addNew() {
      if(!desc.value) {
        return;
      }

      state.list = [
        ...state.list,
        { text: desc.value, color: getRandomColor() },
      ];
    }
```
        
* In the component SortableList, add a click event listener to wire up the button "Add New Items" to the event handler addNew:
```Javascript
          <button v-on:click="addNew"  ...
```

* In the setup function of SortableList component, return addNew function:

```Javascript
    ...
    return {
      state,
      desc,
      dropEvent,
      addNew
    };
```
        
> If everything works fine, a New item should be added to the list after entering a description and clicking the add button

2. Add functionality to remove Item

Using as reference the drag and drop functionality as implemented for ListItem, Allow items to be dragged to the trash can and be deleted on the drop event.
You need to add attributes to trash can element and also create the handler for the drop event

## Reference

[VUE 3 Cheat Sheet](https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf)  
[HTML Drag and Drop API](https://www.w3schools.com/html/html5_draganddrop.asp)  
[Vue 3 Composition API Introduction [FULL TUTORIAL] ](https://www.youtube.com/watch?v=bwItFdPt-6M&ab_channel=Academind)
