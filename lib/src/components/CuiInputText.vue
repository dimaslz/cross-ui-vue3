<template>
  <cross-input-text @input="onInputHandler" :value="modelValue" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "cui-input-text",
  props: {
    modelValue: String,
  },
  methods: {
    onInputHandler($event: any) {
      const value = $event.target.value;
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
