<template>
    <div class="m-auto w-5/6 mt-base">
        <!-- Critères de recherche -->
        <div class="vx-row w-2/5 mb-base">
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

        <div class="vx-row mb-base">
            <!-- Adresse -->
            <div class="vx-col inline-block sm:w-full xs:w-full md:w-1/2 lg:w-2/5 xl:w-2/5 w-full text-gray-700 pr-2">
                <vs-input
                    placeholder="Saisir votre adresse"
                    icon-after="true" 
                    icon="home" 
                    v-model="adresse"
                    class="w-full bg-white px-2 py-2 rounded mb-2"
                    />
            </div>
            <!-- Date -->
            <div class="vx-col inline-block sm:w-full xs:w-full md:w-1/2 lg:w-1/5 xl:w-1/5 w-full text-gray-700 text-center pr-2">
                <date-picker v-model="date" valueType="format" class="w-full bg-white px-2 py-2 rounded mr-2 mb-2"/>
            </div>
            <!-- Jour ou Nuit -->
            <div class="vx-col inline-block sm:w-full xs:w-full md:w-1/2 lg:w-1/5 xl:w-1/5 w-full text-center items-center text-gray-700 rounded pr-2">
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
                    class="w-full px-2 py-4"
                    :disabled="!validateForm"
                    @click="findPharmacy">
                    Rechercher
                </vs-button>
            </div>
        </div>

        <div class="vx-row">
            <!-- Liste des pharmacies -->
            <div v-if="pharmacies.length" class="vx-col w-2/5 inline-block pr-2">
                <!-- <small class="text-white">
                    Les horaires des pharmacies étant variables, 
                    nous vous recommandons d'appeler avant de vous déplacer
                </small> -->
               <div class="liste-pharmacie text-black">
                    <p class="text-black p-2" style="background-color: #cbd5e0;">
                        Pharmacies accessibles près de chez vous
                        Journée du lundi 13/07/2020
                    </p>
                    <div class="list-resultat" v-for="(phr, index) in pharmacies" :key="index">
                        <p>
                            {{phr.name}}
                        </p>
                        <small>
                            {{phr.address}}
                        </small>
                        <br>
                        <small>
                            {{phr.phone}}
                        </small>
                    </div>
                </div>
            </div>

            <!-- Maps -->
            <div class="vx-col w-3/5 inline-block" :class="{'w-full': !pharmacies.length}">
                <gmap-map
                    :center="center"
                    :zoom="7"
                    style="width: 99%; height: 600px;"
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
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

/* Services */
import {findPharmacyByName} from '@/layouts/services'

export default {
    data(){
        return {
            date: '2020-07-07',
            adresse: '',
            radios: 0,
            pharmacies: [],

            /* Mapp */

            center: {lat: 12.135441, lng: 15.055799},
            markers: []
        }
    },

    components:{
        DatePicker
    },
    computed:{
        validateForm(){
            return this.adresse != '' 
        }
    },
    methods:{
        findPharmacy(){
            let horaire = ''

            if(this.radios == '0')
                horaire = 'jour'
            else
                horaire = 'nuit'

            findPharmacyByName({
                name: this.adresse,
                date: this.date,
                horaire: horaire
            })
            .then((res)=>{
                this.pharmacies = res

                this.pharmacies.forEach(element => {
                    this.markers.push ({
                        position: {
                            lat: element.latitude, lng: element.longitude
                        }
                    })
                });
            })
            .catch((err)=>{
                window.console.log(err)
            })
        }
    }
}
</script>