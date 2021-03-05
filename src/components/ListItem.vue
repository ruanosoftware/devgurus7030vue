<template>
  <div
    ref="root"
    class="draggable-item"
    :class="{ invisible: !visible }"
    draggable="true"
    v-on:dragstart="dragStart"
    v-on:dragend="dragEnd"
    v-on:dragover="allowDrop"
    v-on:drop="drop"
  >
    {{ item }}
  </div>
</template>

<script>
import { ref, onMounted, onUpdated } from "vue";

export default {
  emits: ["dropItem"],
  props: {
    item: String,
    index: Number,
    color: String,
  },
  setup(props, context) {
    const root = ref(null);
    const visible = ref(true);

    onMounted(() => {
      root.value.style.border = `4px solid ${props.color}`;
    });

    onUpdated(() => {
      root.value.style.border = `4px solid ${props.color}`;
    });

    function dragStart(ev) {
      visible.value = false;
      ev.dataTransfer.setData("orgIndex", props.index);
    }

    function dragEnd() {
      visible.value = true;
    }

    function allowDrop(ev) {
      ev.preventDefault();
    }

    function drop(ev) {
      ev.preventDefault();
      const orgIndexStr = ev.dataTransfer.getData("orgIndex");
      const orgIndex = parseInt(orgIndexStr, 10);
      context.emit("drop-item", { org: orgIndex, dst: props.index });
    }

    return {
      root,
      visible,
      allowDrop,
      dragStart,
      dragEnd,
      drop,
    };
  },
};
</script>

<style scoped>
.draggable-item {
  border: 1px solid red;
}

.invisible {
  opacity: 0;
  transition: opacity 0.1s;
}
</style>
