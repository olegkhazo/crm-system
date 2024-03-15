<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Primitive, type PrimitiveProps } from "radix-vue";
import { type ButtonVariants, buttonVariants } from ".";
import { cn } from "@/utils";

interface Props {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  as?: string;
  class?: HTMLAttributes["class"];
  // Define asChild if it's supposed to be used
  asChild?: any; // Replace 'any' with the correct type if known
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <!-- Remove :as-child="asChild" -->
  <Primitive
    :as="as"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
