<template>
  <q-select v-model="role" emit-value :options="options">
    <template v-for="(_, name) of $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </q-select>
</template>

<script lang="ts">
import { Role } from 'src/ctfnote';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: { type: String, default: 'guest' },
  },
  emits: ['update:model-value'],
  setup() {
    const options = [
      { label: 'Guest', value: Role.UserGuest },
      { label: 'Member', value: Role.UserMember },
      { label: 'Manager', value: Role.UserManager },
      { label: 'Admin', value: Role.UserAdmin },
    ];

    return { options };
  },
  computed: {
    role: {
      get() {
        return this.options.find((o) => o.value == this.modelValue);
      },
      set(value: string) {
        this.$emit('update:model-value', value);
      },
    },
  },
});
</script>

<style scoped></style>
