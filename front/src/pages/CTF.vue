<template>
  <q-page>
    <q-tabs
      dense
      active-color="secondary"
      indicator-color="secondary"
      align="left"
      narrow-indicator
    >
      <q-route-tab :to="ctf.infoLink" label="Info" />
      <q-route-tab :to="ctf.tasksLink" label="Tasks" :disable="!ctf.granted" />
      <q-route-tab v-show="me.isMember" :to="ctf.guestsLink" label="Guests" />
    </q-tabs>
    <q-card>
      <q-separator />
      <q-card-section>
        <router-view :ctf="ctf" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { Ctf } from 'src/ctfnote';
import { getMe } from 'src/ctfnote/me';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    ctf: { type: Object as () => Ctf, required: true },
  },
  setup() {
    const { result: me } = getMe();
    return { me };
  },
});
</script>
