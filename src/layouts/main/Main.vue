<template>
  <div class="home-page">
    <navbar-component/>
    <!-- Logo -->
    <div class="mt-12 logo flex flex-wrap justify-between">
      <div class="inline-block mr-8">
        <img
          alt="..."
          class="border-none ml-4 pt-6 mb-8 -pr-8"
          src="@/assets/img/monpharmacien.jpg"
          width="250"
        />
        <p class="ml-8" style="font-size: 24px, font-family: sans-serif">
          Toutes les pharmacies ouvertes en journée et les pharmacies de garde 
          <br/>
          en Ile-de-France
        </p>
      </div>
      <div class="inline-block text-center mt-8">
        <div class="text-center" style="font-weight: 900">
          <p>
            Télécharger gratuitement l'application 
            <br/>
            Intégrer sur votre site
          </p>
          <img
            alt="..."
            class="border-none ml-4  -pb-8 -pr-8"
            src="@/assets/img/appIcons.png"
            width="280"
            style="float: right"
          />
        </div>
        <div class="text-center">
          <p>
            Intégrer sur votre site
          </p>
          <img
            alt="..."
            class="border-none"
            src="@/assets/img/widget.png"
            style="margin:auto"
            width="150"
          />
        </div>
      </div>
    </div>


    <div class="relative">
      <!-- Header -->
      <div class="relative bg-card pt-6 mb-base">
        <div class="color-overlay">
          <p class="text-white text-center text-4xl" style="line-height: 1.15em; font-family: 'Open sans'">
            24H/24, 7J/7, trouver facilement <br/>
            la pharmacie la plus proche.
          </p>

          <div class="m-auto w-5/6 mt-base">
            <!-- Critères de recherche -->
            <div class="vx-row w-2/5 mb-4">
              <!-- <div class="vx-col w-full">
                  
                  <vs-input
                    placeholder="Saisir votre adrees"
                    icon-after="true" 
                    icon="home" 
                    v-model="value1"
                    class="w-full"
                    />
                  
                  <div class="flex flex-wrap justify-between">
                    
                    <div class="mt-3 mb-3">
                      <date-picker v-model="time" valueType="format"/>
                    </div>
                    
                    <ul class="centerx mt-4">
                      <li class="inline-block mr-4">
                        <vs-radio 
                        v-model="radios" 
                        vs-value="0">
                        Jour
                      </vs-radio>
                      </li>
                      <li class="inline-block">
                      <vs-radio 
                        v-model="radios" 
                        vs-value="1">
                        Nuit
                      </vs-radio>
                      </li>
                    </ul>
                  </div>

                  
                  <vs-button class="w-full">
                    Rechercher une pharmacie
                  </vs-button>
              </div> -->
            </div>

            <div class="vx-row mb-4">
              <!-- Adresse -->
              <div class="vx-col inline-block sm:w-full xs:w-full md:w-1/2 lg:w-2/5 xl:w-2/5 w-full text-gray-700 pr-2">
                <vs-input
                    placeholder="Saisir votre adresse"
                    icon-after="true" 
                    icon="home" 
                    v-model="value1"
                    class="w-full bg-white px-2 py-2 rounded mb-2"
                    />
              </div>
              <!-- Date -->
              <div class="vx-col inline-block sm:w-full xs:w-full md:w-1/2 lg:w-1/5 xl:w-1/5 w-full text-gray-700 text-center pr-2">
                <date-picker v-model="time" valueType="format" class="w-full bg-white px-2 py-2 rounded mr-2 mb-2"/>
              </div>
              <!-- Jour ou Nuit -->
              <div class="vx-col inline-block sm:w-full xs:w-full md:w-1/2 lg:w-1/5 xl:w-1/5 w-full text-gray-700 rounded pr-2">
                <ul class="w-full bg-white rounded px-4 pt-3 pb-4 mb-3">
                  <li class="inline-block mr-4">
                    <vs-radio 
                    v-model="radios" 
                    vs-value="0">
                    Jour
                  </vs-radio>
                  </li>
                  <li class="inline-block">
                  <vs-radio 
                    v-model="radios" 
                    vs-value="1">
                    Nuit
                  </vs-radio>
                  </li>
                </ul>
              </div>

              <!-- Boutton de recherche -->
              <div class="vx-col inline-block sm:w-full xs:w-full md:w-1/2 lg:w-1/5 xl:w-1/5 w-full pr-2">
                <vs-button
                  class="w-full px-2 py-4">
                  Rechercher
                </vs-button>
              </div>
            </div>

            <div class="vx-row">
              <!-- Liste des pharmacies -->
              <div class="vx-col w-2/5 inline-block">
                <p class="text-black p-2" style="background-color: #cbd5e0;">
                  Pharmacies accessibles près de chez vous
                  Journée du lundi 13/07/2020
                </p>
                <small class="text-white">
                  Les horaires des pharmacies étant variables, 
                  nous vous recommandons d'appeler avant de vous déplacer
                </small>
                <div class="liste-pharmacie text-black">
                  <div class="list-resultat">
                    <p>
                      Pharmacie Laborex Tchad
                    </p>
                    <small>
                      Archidiocèse de Ndjamena
                    </small>
                    <br>
                    <small>
                      +23566028484
                    </small>
                  </div>

                  <div class="list-resultat">
                    <p>
                      Pharmacie La Rose
                    </p>
                    <small>
                      43M2+44 N'Djamena
                    </small>
                    <br>
                    <small>
                      +23563088080
                    </small>
                  </div>

                  <div class="list-resultat">
                    <p>
                      Pharmacie Beguinage
                    </p>
                    <small>
                      Rue du Harve
                    </small>
                    <br>
                    <small>
                      +23566028487
                    </small>
                  </div>

                  <div class="list-resultat">
                    <p>
                      Pharmacie La Vaillance
                    </p>
                    <small>
                      433H+J8 N'Djamena
                    </small>
                    <br>
                    <small>
                      +235620969866
                    </small>
                  </div>

                  <div class="list-resultat">
                    <p>
                      Pharmacie Egouni
                    </p>
                    <small>
                      Avenue du Général de Gaulle
                    </small>
                    <br>
                    <small>
                      +23563988080
                    </small>
                  </div>

                  <div class="list-resultat">
                    <p>
                      PHARMACIE Pharmacie Laborex Tchad
                    </p>
                    <small>
                      Archidiocèse de Ndjamena
                    </small>
                    <br>
                    <small>
                      +23566028484
                    </small>
                  </div>

                  <div class="list-resultat">
                    <p>
                      Dépôt Pharmaceutique Globe Terrestre
                    </p>
                    <small>
                      4XJP+2Q N'Djamena
                    </small>
                    <br>
                    <small>
                      +23565028484
                    </small>
                  </div>

                  <div class="list-resultat">
                    <p>
                      Agro Veterinary Agency Tchad
                    </p>
                    <small>
                      43J3+CR N'Djamena
                    </small>
                    <br>
                    <small>
                      +23566191890
                    </small>
                  </div>

                  <div class="list-resultat">
                    <p>
                      PHARMACIE Sosanna
                    </p>
                    <small>
                      32 Southridge Crossing
                    </small>
                    <br>
                    <small>
                      +23566028484
                    </small>
                  </div>
                </div>
              </div>

              <!-- Maps -->
              <div class="vx-col w-3/5 inline-block pl-2">
                <gmap-map
                  :center="center"
                  :zoom="7"
                  style="width: 99%; height: 600px; clear:both;"
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


export default {
  name: "dashboard-page",
  data(){
    return{
      center: {lat: 12.135441, lng: 15.055799},
      markers: [{
        position: {lat: 12.135143, lng: 15.055728}
      }, 
      {
        position: {lat: 12.133006, lng: 15.050310}
      },
      {
        position: {lat: 12.116552, lng: -15.038977}
      },
      {
        position: {lat: 12.104063, lng: 15.078286}
      },
      {
        position: {lat: 12.113628, lng: 15.034460}
      },
      {
        position: {lat: 12.130051, lng: 14.986910}
      },
      {
        position: {lat: 12.131125, lng: 15.054571}
      },
      {
        position: {lat: 56.7780157, lng: 51.9234687}
      }
      ],

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
<style>
  .mx-input {
    height: 38px !important;
  }
</style>