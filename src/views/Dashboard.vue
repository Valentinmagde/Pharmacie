<template>
  <div>
    <navbar-component/>
    <div class="mt-32 mb-8 logo">
      <img
        alt="..."
        class="border-none shadow-lg ml-8 -pt-8 -pb-8 -pr-8"
        src="../assets/img/monpharmacien.png"
      />
      <p class="ml-8">
        Toutes les pharmacies ouvertes en journée et les pharmacies de garde en Ile-de-France
      </p>
    </div>
    <div class="relative md:mt-8">
      <!-- Header -->
      <div class="relative bg-card pt-6 mb-base">
        <h1 class="text-white text-center text-4xl">
          24H/24, 7J/7, trouver facilement <br/>
          la pharmacie la plus proche.
        </h1>

        <div class="px-4 md:px-10 mx-auto w-full">
          <div>
            <!-- Card stats -->
            <div class="flex flex-wrap">
              <!-- Critaires de recherche -->
              <div class="cons-example pt-6 pb-6">
                <vs-input
                  placeholder="Saisir votre adrees"
                  v-model="value1"
                  class="align-left address"/>

                <div class="flex flex-wrap justify-between date-picker align-left">
                  <div class="mt-3 mb-2 inline-block">
                    <date-picker v-model="time" valueType="format"/>
                  </div>
                  <div class="mt-3">
                    <ul>
                      <li>
                        <vs-radio 
                        v-model="radios" 
                        vs-value="0"
                        class="mr-6">
                        Jour
                      </vs-radio>
                      <vs-radio 
                        v-model="radios" 
                        vs-value="1"
                        class="mr-6">
                        Nuit
                      </vs-radio>
                      </li>
                    </ul>
                  </div>
                </div>

                <vs-button class="align-left search-button">
                  Rechercher une pharmacie
                </vs-button>

              </div>

              <!-- Maps -->
              <div class="w-full text-center mb-5">
                  <gmap-map
                    :center="center"
                    :zoom="7"
                    style="width: 80%; height: 600px; margin:auto"
                  >
                    <gmap-marker
                      :key="index"
                      v-for="(m, index) in markers"
                      :position="m.position"
                      :clickable="true"
                      :draggable="true"
                      @click="center=m.position"
                    ></gmap-marker>
                  </gmap-map>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- A propos -->
      <div class="px-4 md:px-10 mx-auto w-full">
        <div class="flex flex-wrap mt-4">
          <div class="w-full mb-12">
            <h1 class="mt-5">A propos</h1>

            <div class="mt-5">
              <p>
                MonPharmacien est une application mobile doublée d’un site web (www.monpharmacien-idf.fr) 
                qui fournit l’information officielle sur les pharmacies ouvertes en Île-de-France, 
                notamment les pharmacies de garde les dimanches, les jours fériés et la nuit.
              </p>

              <p>
                Avec le site internet MonPharmacien, vous pouvez rechercher une pharmacie ouverte en 
                semaine et une pharmacie de garde le dimanche et les jours fériés autour de la localisation
                souhaitée. Vous identifiez ainsi la pharmacie ouverte en journée ou de garde la plus proche 
                de vous et trouvez facilement le meilleur itinéraire pour vous y rendre.
              </p>

              <p>
                A Paris, la nuit, les pharmacies de garde sont ouvertes et directement accessibles. Partout ailleurs, 
                les coordonnées de la pharmacie de garde de nuit vous seront communiquées par les services de police 
                ou de gendarmerie de proximité.
              </p>

              <p>
                MonPharmacien (www.monpharmacien-idf.fr) est le fruit d’une collaboration entre l’Agence Régionale de Santé 
                (ARS) Île-de-France et l’Union Régionale des Professionnels de Santé (URPS) Pharmaciens Île-de-France. 
                Le site internet www.monpharmacien-idf.fr et l’application reflètent leur engagement et celui des 
                syndicats de pharmaciens à garantir une information fiable et accessible à tous les Franciliens sur 
                la permanence des pharmacies ouvertes et en particulier les pharmacies de garde.
              </p>
            </div>
          </div>
        </div>
        
      </div>

      <!-- Zone de couverture -->
      <div class="relative bg-zone md:pt-32 pb-32 pt-12 mb-base">
        <div class="px-4 md:px-10 mx-auto w-full">
          <div>
            <!-- Card stats -->
            <div class="flex flex-wrap">
              <div class="w-full lg:w-1/12 xl:w-3/12 px-4 mb-5">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                        <span class="font-semibold text-xl text-gray-800">
                          75
                        </span>
                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                          Paris
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="w-full lg:w-3/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                        <span class="font-semibold text-xl text-gray-800">
                          77
                        </span>
                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                          Seine-et-Marne
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-3/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                        <span class="font-semibold text-xl text-gray-800">
                          78
                        </span>
                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                          Yvelines
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-3/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                        <span class="font-semibold text-xl text-gray-800">
                          91
                        </span>
                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                          Essonne
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-3/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                        <span class="font-semibold text-xl text-gray-800">
                          92
                        </span>
                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                          Haute-de-seine
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-3/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                        <span class="font-semibold text-xl text-gray-800">
                          93
                        </span>
                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                          Seine-saint-Denis
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-3/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                        <span class="font-semibold text-xl text-gray-800">
                          94
                        </span>
                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                          Val-de-marne
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-3/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                        <span class="font-semibold text-xl text-gray-800">
                          95
                        </span>
                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                          Val-d'Oise
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-component/>
  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

import Vue from 'vue'
import { vsButton, vsSelect, vsPopup, vsInput, vsRadio, vsIcon } from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(vsButton)
Vue.use(vsSelect)
Vue.use(vsPopup)
Vue.use(vsInput)
Vue.use(vsRadio)
Vue.use(vsIcon)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC-hTpKRrz98OSNg-FzRcXsXQNezs9F9xk',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  }
})
export default {
  name: "dashboard-page",
  data(){
    return{
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }],

      time: '2020-07-07',
      value1: '',
      radios: 0
    }
  },
  components: {
    NavbarComponent,
    FooterComponent,
    DatePicker
  },
};
</script>
<style lang="css">
  .bg-card {
    background-color: #3f9b38;
  }

  .bg-zone {
    background-color: #0069b4;
  }
  .cons-example{
    margin: auto;
    width: 80%;
  }

  .logo {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }

  .align-left{
    margin-left: 0;
    margin-bottom: 15px;
  }
  .address, .search-button, .date-picker {
    width: 50%;
  }
</style>