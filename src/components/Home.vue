<template>
  <v-container>
    <template>
      <div class="text-center">
        <v-dialog v-model="dialog" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
              Carregando Dados...
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
      <div class="container-fluid" v-if="!dialog">
        <div class="row" id="dados1">
          <div class="col-md-4 ">1</div>
          <div class="col-md-4">2</div>
          <div class="col-md-4">3<i class="fas fa-address-book"></i></div>
        </div>
      </div>
    </template>
  </v-container>
</template>

<script>
const Swal = require("sweetalert2");
// var VueAuth = require('vue-auth')

export default {
  name: "Principal",
  props: {
    msg: String
  },
  data() {
    return {
      dados: "",
      dialog: true
    };
  },
  mounted() {
    this.BuscarDados();
  },
  watch: {
    dialog(val) {
      if (!val) return;
      setTimeout(() => (this.dialog = false), 4000);
    }
  },
  methods: {
    BuscarDados() {
      // this.Msg("load", "success");
      this.axios
        .get("/brazil")
        .then(response => {
          this.dados = response.data;
          console.log(this.dados);
          setTimeout(() => (this.dialog = false), 2000);
        })
        .catch(error => {
          console.log(error);
        });
    },
    Msg(msg, icon) {
      Swal.fire({
        position: "center",
        showConfirmButton: false,
        html:
          "<v-progress-circular" +
          ':size="50"' +
          'color="primary"' +
          "indeterminate" +
          "></v-progress-circular>",
        icon: icon,
        text: msg,
        timer: 2000
      });
    }
  }
};
</script>

<style scoped>
  #dados1{
    display: flex;
    align-content: center;
  }

</style>