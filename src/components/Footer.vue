<template>
    <footer class="block bg-gray-200 fixed bottom-0 w-full">
        <div class="container mx-auto">
            <div class="flex flex-wrap items-center md:justify-between justify-center">
                <div class="w-full md:w-4/12 px-4 mt-5 mb-5">
                    <div class="text-sm text-gray-600 font-semibold py-1">
                    Copyright © {{date}}
                    <a
                        href="#"
                        class="text-gray-600 hover:text-gray-800 text-sm font-semibold py-1"
                    >
                        ARS, URPS
                    </a>
                    </div>
                </div>
                <div class="w-full md:w-8/12 pt-4 mt-5 mb-5">
                    <ul class="flex flex-wrap list-none md:justify-end  justify-center">
                    <li>
                        <a
                        href="https://www.creative-tim.com"
                        class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                        >
                        Creative Tim
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://www.creative-tim.com/presentation"
                        class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                        >
                        About Us
                        </a>
                    </li>
                    <li>
                        <a
                        href="http://blog.creative-tim.com"
                        class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                        >
                        Blog
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/master/LICENSE.md"
                        class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                        >
                        MIT License
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>