<template>
  <v-footer height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="footer1 mb-4">
        <span class="subheading" style="font-size: 0.6rem">Fonte: https://coronavirus-19.com</span>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-actions class="justify-center mt-4">
        <div class="justify-center mt-4">
        &copy;2020 —
        <strong>Jonathas Mendonça / Klemerson Castro</strong>
        </div>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({})
};
</script>
<style>
.subheading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

