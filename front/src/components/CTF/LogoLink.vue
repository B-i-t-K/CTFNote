<template>
  <q-btn
    :href="ctf.ctfUrl"
    target="_blank"
    class="logo"
    type="a"
    :style="style"
    icon="icon"
    round
  >
    <q-tooltip>Browse CTF website</q-tooltip>
  </q-btn>
</template>

<script lang="ts">
import { Ctf } from 'src/ctfnote';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    ctf: { type: Object as () => Ctf, required: true },
  },
  computed: {
    style() {
      return this.ctf.logoUrl
        ? { '--logo-url': `url(${this.ctf.logoUrl})` }
        : {};
    },
    icon() {
      return this.ctf.logoUrl ? '' : 'language';
    },
  },
});
</script>

<style scoped>
.logo {
  background: var(--logo-url);
  background-size: cover;
  background-origin: 50% 50%;
}
</style>
