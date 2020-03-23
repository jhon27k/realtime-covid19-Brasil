<template>
  <v-container>
    <template>
      <div class="text-center">
        <v-dialog v-model="dialog" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
              Carregando Dados...
              <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
      <div class="container-fluid text-center" v-if="!dialog">
        <div class="titulo">
          <h1 class="txt-titulo">INFORMAÇÕES EM TEMPO REAL CORONA VÍRUS</h1>
        </div>
        <div class="titulo">
          <div class="selecionar-pais">
            <form class="form-group">
              <v-row align="center">
                <v-col cols="12">
                  <select class="form-control" v-model="paisSelecionado" @change="BuscarDados(paisSelecionado)" style="width:100%">
                    <option :value="paisSelecionado">Outros Países</option>
                    <option v-for="pais in paises" :value="pais" :key="pais">{{pais}}</option>
                  </select>
                </v-col>
              </v-row>
              </form>
          </div>
        </div>
        <div class="row shadow p-3 mb-5 bg-white rounded">
                    <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>PAÍS</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5" style="text-transform: uppercase">{{paisSelecionado}}</h2>
              </div>

              <!-- <div class="card img-fluid">
                <img
                  class="card-img-top"
                  src="../assets/1.jpg"
                  alt="Card image"
                  style="width:100%;"
                />
              </div>-->
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>CASOS CONFIRMADOS</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{dados.cases}}</h2>
              </div>

              <!-- <div class="card img-fluid">
                <img
                  class="card-img-top"
                  src="../assets/1.jpg"
                  alt="Card image"
                  style="width:100%;"
                />
              </div>-->
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>CASOS HOJE</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{dados.todayCases}}</h2>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>MORTES</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{dados.deaths}}</h2>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>MORTES HOJE</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{dados.todayDeaths}}</h2>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>RECUPERADOS</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{dados.recovered}}</h2>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>ATIVOS</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{dados.active}}</h2>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>CASOS CRÍTICOS</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{dados.critical}}</h2>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>CASOS A CADA 1M</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{dados.casesPerOneMillion}}</h2>
              </div>
            </div>
          </div>
        </div>
        <!-- FIM CARDS -->
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
      dados: [],
      dialog: true,
      i: 0,
      paises: [],
      paisSelecionado: ""
    };
  },
  mounted() {
    this.paisSelecionado = "Brazil";
    this.BuscarDados(this.paisSelecionado);
    this.BuscarPaises();
  },
  watch: {
    dialog(val) {
      if (!val) return;
      setTimeout(() => (this.dialog = false), 4000);
    }
  },
  methods: {
    BuscarDados(paisSelecionado) {
      this.axios
        .get("/" + paisSelecionado)
        .then(response => {
          this.dados = response.data;
          setTimeout(() => (this.dialog = false), 2000);
        })
        .catch(error => {
          console.log(error);
        });
    },
    BuscarPaises() {
      this.axios
        .get("/")
        .then(response => {
          var dado = response.data;
          dado.forEach(element => {
            this.paises.push(element.country);
          });
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
#dados1 {
  display: flex;
  align-content: center;
}

.card {
  background-color: #d8dde2;
  color: #718096;
  font-size: 1.3rem;
}
.card-title {
  background-color: #718096;
  color: #e2e8f0;
  margin: auto;
  vertical-align: middle;
  line-height: 60px;
}
card-body {
  background-color: #fff5f5;
  color: #e53e3e;
}
.titulo {
  padding: 15px;
  margin: 15px;
  min-height: 50px;
  font-size: 1.5rem;
  background-color: #d8dde2;
}
</style>