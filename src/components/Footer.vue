<template>
  <v-footer height="auto">
    <v-card class="flex card_" flat tile>
      <v-card-title class="footer1">
        <div>
          <span class="subheading mt-3" style="font-size: 0.5rem">Fonte: coronavirus-19-api.herokuapp</span>
        </div>
      </v-card-title>
      <v-card-actions class="justify-center">
        <div class="justify-center">
          &copy;2020 —
          <strong>Jonathas Mendonça</strong>
        </div>
      </v-card-actions>
      <div class="mt-4">
        <a v-for="icon in icons" :key="icon.icone" dark icon :href="icon.link" target="_blank">
          <i :class="icon.icone + ' fa-2x ml-2'" aria-hidden="true"></i>
        </a>
      </div>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        icone: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/jonathasmendonca/"
      },
      {
        icone: "fab fa-github-square",
        link: "https://github.com/jhon27k"
      }
    ]
  })
};
</script>
<style>
.subheading {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fa-2x{
  /* color: rgb(59, 91, 152); */
  opacity: 0.5;
  margin-top: -10px;
}
.fa-2x:hover{
  opacity: 1;
}

</style>

