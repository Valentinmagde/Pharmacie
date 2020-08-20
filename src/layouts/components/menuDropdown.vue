<template>
    <div class="relative inline-block text-left">
        <div class="dropdown" @click="toggle">
            <span class="rounded-md shadow-sm">
            <button type="button" class="inline-flex justify-center w-full menu rounded-md  px-4 py-2 text-sm leading-5 font-medium text-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
                Accès sécurisé
                <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
            </button>
            </span>
        </div>

        <!--
            Dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        -->
        <div id="dropdown-menu" class="dropdown-menu absolute right-0 mt-4 rounded-md shadow-lg hidden">
            <div class="rounded-md bg-white shadow-xs">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" class="block px-4 py-1 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                        Lien PS/PHARMACIENS pour masques
                    </a>
                    <a href="#" class="block px-4 py-1 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                        Pharmaciens
                    </a>
                    <a href="#" class="block px-4 py-1 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                        Forces de l’ordre
                    </a>
                    <a href="#" class="block px-4 py-1 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                        Permanence pharmaceutique
                    </a>
                    <form method="POST" action="#">
                        <button type="submit" class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                            Administrateur
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        toggle(){
            let x = document.getElementById("dropdown-menu");

            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
    }
}
</script>

<style lang="css">
    .dropdown-menu {
        width: 300px;
    }
    .menu{
        background-color: #0069b4
    }
</style>