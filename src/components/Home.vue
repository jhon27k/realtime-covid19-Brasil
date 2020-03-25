<template>
  <v-container>
    <template>
      <div class="text-center">
        <v-dialog v-model="dialog" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
              Buscando Dados...
              <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
      <div class="container-fluid text-center" v-if="!dialog">
        <div class="titulo">
          <h1 class="txt-titulo">INFORMAÇÕES DO CORONA VÍRUS (COVID-19) EM TEMPO REAL</h1>
        </div>

        <!-- BODY -->
        <div class="col-md-4">
          <div class="form-group selecionar-pais">
            <form class="escolherPais text-center">
              <div class="form-group">
                <v-col class="d-flex" cols="12" sm="12">
                  <v-select
                    :items="paises"
                    label="Selecione o país"
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
                <h2 class="card-h2 mb-5" style="text-transform: uppercase">{{ paisSelecionado }}</h2>
                <div class="card img-fluid">
                  <img
                    class="card-img-top"
                    src="../assets/64/iconfinder_World_Wide_Virus_5958613.png"
                    alt="Card image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>CASOS CONFIRMADOS</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{ dados.cases }}</h2>
              </div>
              <div class="card img-fluid">
                <img
                  class="card-img-top"
                  src="../assets/64/5803966 - checklist clipboard task todo.png"
                  alt="Card image"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>CASOS HOJE</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{ dados.todayCases }}</h2>
              </div>
              <div class="card img-fluid">
                <img
                  class="card-img-top"
                  src="../assets/64/5803979 - fever sick temperature termometer.png"
                  alt="Card image"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>MORTES</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{ dados.deaths }}</h2>
              </div>
              <div class="card img-fluid">
                <img
                  class="card-img-top"
                  src="../assets/64/iconfinder__Graveyard_754630.png"
                  alt="Card image"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>MORTES HOJE</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{ dados.todayDeaths }}</h2>
              </div>
              <div class="card img-fluid">
                <img
                  class="card-img-top"
                  src="../assets/64/iconfinder_death_5932473.png"
                  alt="Card image"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>RECUPERADOS</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{ dados.recovered }}</h2>
              </div>
              <div class="card img-fluid">
                <img
                  class="card-img-top"
                  src="../assets/64/5803987 - coronavirus covid mask mask hygiene medical.png"
                  alt="Card image"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>ATIVOS</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{ dados.active }}</h2>
              </div>
              <div class="card img-fluid">
                <img
                  class="card-img-top"
                  src="../assets/64/5803968 - cold cough flu sore throat.png"
                  alt="Card image"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h2>CASOS CRÍTICOS</h2>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{ dados.critical }}</h2>
              </div>
              <div class="card img-fluid">
                <img
                  class="card-img-top"
                  src="../assets/64/5803985 - bed coronavirus hospital.png"
                  alt="Card image"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container card shadow p-3 mb-5 bg-white rounded">
              <div class="card-title mb-2">
                <h3>CASOS A CADA 1 MILHÃO</h3>
              </div>
              <div class="card-body">
                <h2 class="card-h2 mb-5">{{ dados.casesPerOneMillion }}</h2>
              </div>
              <div class="card img-fluid">
                <img
                  class="card-img-top"
                  src="../assets/64/iconfinder_Spread-virus-carrier-people-Contagious_5859162.png"
                  alt="Card image"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- FIM CARDS -->
        <div class="container-fluid text-center mb-4" v-if="!dialog">
          <div class="titulo total">
            <h1 class="txt-titulo">TOTAL NO MUNDO</h1>
          </div>
          <div class="titulo">
            <!-- <h1 class="txt-titulo">INFORMAÇÕES GERAIS EM TODO O MUNDO</h1> -->
            <div class="row geral">
              <div class="col-md-2">
                <div class="container card shadow p-3 mb-5 bg-white rounded">
                  <div class="card-title mb-2">
                    <h2>CASOS</h2>
                  </div>
                  <div class="card-body">
                    <h2 class="card-h2 mb-5" style="text-transform: uppercase"></h2>
                    <div class="card img-fluid">
                      <p>{{total[0].total_cases | number}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="container card shadow p-3 mb-5 bg-white rounded">
                  <div class="card-title mb-2">
                    <h2>MORTES</h2>
                  </div>
                  <div class="card-body">
                    <h2 class="card-h2 mb-5" style="text-transform: uppercase"></h2>
                    <div class="card img-fluid">
                      <p>{{total[0].total_deaths | number}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="container card shadow p-3 mb-5 bg-white rounded">
                  <div class="card-title mb-2">
                    <h2>CASOS HOJE</h2>
                  </div>
                  <div class="card-body">
                    <h2 class="card-h2 mb-5" style="text-transform: uppercase"></h2>
                    <div class="card img-fluid">
                      <p>{{total[0].total_new_cases_today | number}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="container card shadow p-3 mb-5 bg-white rounded">
                  <div class="card-title mb-2">
                    <h2>MORTES HOJE</h2>
                  </div>
                  <div class="card-body">
                    <h2 class="card-h2 mb-5" style="text-transform: uppercase"></h2>
                    <div class="card img-fluid">
                      <p>{{total[0].total_new_deaths_today | number}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="container card shadow p-3 mb-5 bg-white rounded">
                  <div class="card-title mb-2">
                    <h2>CASOS ATIVOS</h2>
                  </div>
                  <div class="card-body">
                    <h2 class="card-h2 mb-5" style="text-transform: uppercase"></h2>
                    <div class="card img-fluid">
                      <p>{{total[0].total_active_cases | number}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="container card shadow p-3 mb-5 bg-white rounded">
                  <div class="card-title mb-2">
                    <h2>RECUPERADOS</h2>
                  </div>
                  <div class="card-body">
                    <h2 class="card-h2 mb-5" style="text-transform: uppercase"></h2>
                    <div class="card img-fluid">
                      <p>{{total[0].total_recovered | number}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Recomendacoes />
        </div>
        <div class>
          <Footer />
        </div>
      </div>
    </template>
  </v-container>
</template>

<script>
const Swal = require("sweetalert2");
import Footer from "./Footer.vue";
import Recomendacoes from "./Recomendacoes";

// var VueAuth = require('vue-auth')

export default {
  name: "Principal",
  components: { Footer, Recomendacoes },
  props: {
    msg: String
  },
  data() {
    return {
      dados: [],
      dialog: true,
      paises: [],
      paisSelecionado: "Brazil",
      total: []
    };
  },
  filters: {
    number(n) {
      return n.toLocaleString();
    }
  },
  mounted() {
    this.BuscarDados(this.paisSelecionado, true);
    this.BuscarPaises();
    this.buscarTotal();

    setInterval(() => {
      this.BuscarDados(this.paisSelecionado, false);
      this.buscarTotal();
    }, 50000);
    // setInterval(() => {
    //   this.buscarTotal();
    // }, 10000);
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
    buscarTotal() {
      this.axios({
        method: "get",
        url: "https://thevirustracker.com/free-api?global=stats",
        baseURL: "/"
      })
        .then(response => {
          this.total = response.data.results;
          console.log(this.total[0]);
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

.total {
  background-color: #5e1e1e !important;
  color: white;
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
  font-size: 1.3rem;
  background-color: #d8dde2;
}

option {
  margin-left: 10px;
}
.sel {
  padding-left: 10px;
}
</style>
