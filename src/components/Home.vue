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
          <h1 class="txt-titulo">INFORMAÇÕES SOBRE O CORONA VÍRUS EM TEMPO REAL</h1>
        </div>
        <div class="col-md-4">
          <div class="form-group selecionar-pais">
            <form class="escolherPais text-center">
              <div class="form-group">
                <v-col class="d-flex" cols="12" sm="12">
                  <v-select
                    :items="paises"
                    label=""
                    v-model="paisSelecionado"
                    @change="BuscarDados(paisSelecionado, true)"
                    dense
                  ></v-select>
                </v-col>
              </div>
            </form>
          </div>
        </div>
        <div class="row">
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
                <h2 class="card-h2 mb-5">{{dados.cases}}
                   </h2>
              </div>
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
                <h3>CASOS A CADA 1 MILHÃO DE HABITANTES</h3>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{dados.casesPerOneMillion}}</h2>
              </div>
            </div>
          </div>
        </div>
        <!-- FIM CARDS -->
        <div class="">
        <Footer />
        </div>
      </div>
    </template>
  </v-container>
</template>

<script>
const Swal = require("sweetalert2");
import Footer from "./Footer.vue";
// var VueAuth = require('vue-auth')

export default {
  name: "Principal",
  components: { Footer },
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
    this.BuscarDados(this.paisSelecionado, true);
    this.BuscarPaises();
    setInterval(() => {
      this.BuscarDados(this.paisSelecionado, false);
    }, 5000);
  },
  watch: {
    // dados: function (newQuestion, oldQuestion) {
    //   console.log('dados mudou')
    //   console.log(newQuestion)
    //   console.log(oldQuestion)
    // }
  },
  methods: {
    BuscarDados(paisSelecionado, load) {
      this.dialog = load;
      this.axios
        .get("/" + paisSelecionado)
        .then(response => {
          this.dados = response.data;
          setTimeout(() => (this.dialog = false), 1000);
        })
        .catch(error => {
          console.log(error);
          this.Msg("Sem conexão com a internet", "error");
          location.reload();
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
.card-body {
  /* background-color: #fff5f5; */
  color: #212121;
}

.titulo {
  padding: 15px;
  margin-top: 15px;
  min-height: 50px;
  font-size: 1.5rem;
  background-color: #d8dde2;
}
.txt-titulo {
  font-size: 2.2rem;
}
.escolherPais {
}

option {
  margin-left: 10px;
}
.sel {
  padding-left: 10px;
}

</style>