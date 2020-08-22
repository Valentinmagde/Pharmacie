<template>
  <on-click-outside :do="handleClickOutside">
    <div class="relative w-64 mx-auto">
        <span class="rounded-md shadow-sm">
            <button type="button" @click="open = !open"
                class="inline-flex justify-center w-full menu rounded-md  px-4 py-2 text-sm leading-5 font-medium text-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" 
                id="options-menu" aria-haspopup="true" aria-expanded="true">
                Accès sécurisé
                <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
            </button>
        </span>

        <div v-show="open" class="origin-top-right absolute right-0 mt-4 w-64 rounded-md shadow-lg">
            <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-1000 hover:text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                    Lien PS/PHARMACIENS pour masques
                </a>
                <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-1000 hover:text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                    Pharmaciens
                </a>
            </div>
            <div class="border-t border-gray-100"></div>
            <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-1000 hover:text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                    Forces de l’ordre
                </a>
                <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-1000 hover:text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                    Permanence pharmaceutique
                </a>
            </div>
            <div class="border-t border-gray-100"></div>
            <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-1000 hover:text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                    Administrateur
                </a>
                
            </div>
            </div>
        </div>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from "./OnClickOutside.vue";

export default {
  name: "DropdownDemo",
  components: {
    OnClickOutside
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    handleClickOutside() {
      if (this.open) {
        this.open = false;
      }
    }
  }
};
</script>


<style lang="css">
    /* .dropdown-menu {
        width: 300px;
    } */
    .menu{
        background-color: #0069b4
    }
</style>