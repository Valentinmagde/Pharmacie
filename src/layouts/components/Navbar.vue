<template>
  <!-- Navbar -->
  <nav
    class="fixed top-0 left-0 w-full z-10 bg-nav md:flex-row md:flex-no-wrap md:justify-between flex items-center p-4"
  >
    <div
      class="w-full mx-autp items-start flex justify-end md:flex-no-wrap flex-wrap"
      style="padding-right: 15rem"
    >
      <!-- Dropdown menu -->
      <ul
        class="flex-col md:flex-row list-none items-start md:flex"
      >
        <menu-dropdown/>
      </ul>
    </div>
  </nav>

  <!-- End Navbar -->
</template>
<script>
import MenuDropdown from './menuDropdown'
export default {
  components: {
    MenuDropdown
  }
};
</script>
<style lang="css">
  .bg-nav{
    background-color: #0069b4
  }
</style>
