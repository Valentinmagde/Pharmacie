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
          <p class="text-white text-center pt-5 text-4xl" style="line-height: 1.15em; font-family: 'Open sans'">
            24H/24, 7J/7, trouver facilement <br/>
            la pharmacie la plus proche.
          </p>

          <criterion-and-mapp/>
        </div>
      </div>

      <!-- A propos -->
      <div class="px-4 px-16 mx-auto w-full">
        <div class="flex flex-wrap mt-4 px-16 justify-between">
          <div class="w-full mb-12">
            <h1 class="mt-5 text-xl">A propos</h1>

            <div class="mt-5">
              <p>
                MonPharmacien est une application mobile doublée d’un site web (www.monpharmacien-idf.fr) 
                qui fournit l’information officielle sur les pharmacies ouvertes en Île-de-France, 
                notamment les pharmacies de garde les dimanches, les jours fériés et la nuit.
              </p>

              <p class="mt-5">
                Avec le site internet MonPharmacien, vous pouvez rechercher une pharmacie ouverte en 
                semaine et une pharmacie de garde le dimanche et les jours fériés autour de la localisation
                souhaitée. Vous identifiez ainsi la pharmacie ouverte en journée ou de garde la plus proche 
                de vous et trouvez facilement le meilleur itinéraire pour vous y rendre.
              </p>

              <p class="mt-5">
                A Paris, la nuit, les pharmacies de garde sont ouvertes et directement accessibles. Partout ailleurs, 
                les coordonnées de la pharmacie de garde de nuit vous seront communiquées par les services de police 
                ou de gendarmerie de proximité.
              </p>

              <p class="mt-5">
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
import NavbarComponent from "@/layouts/components/Navbar.vue";
import FooterComponent from "@/layouts/components/Footer.vue";
import CriterionAndMapp from "@/layouts/components/criterionAndMapp.vue";

export default {
  name: "dashboard-page",
  data(){
    return{
      
    }
  },
  components: {
    NavbarComponent,
    FooterComponent,
    CriterionAndMapp,
  },
};
</script>
<style>
  .mx-input {
    height: 38px !important;
  }
</style>