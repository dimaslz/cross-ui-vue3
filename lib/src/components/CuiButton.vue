<template>
  <cross-button>
    <slot />
  </cross-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "cui-button",
});
</script>
