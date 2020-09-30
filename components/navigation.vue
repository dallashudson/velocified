<template>
  <nav role="navigation" class="top-nav">
    <ul class="menu">
      <li v-if="!/\/.*?\/.*/.test(route.path)" v-for="route in this.$router.options.routes">
        <nuxt-link :to="{ name: route.name }">{{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style>
  @font-face {
    font-family: "airstrikeout";
    font-weight: 400;
    font-style: normal;
    src: url("~/static/airstrikeout.woff") format("woff");
    font-display: swap;
  }
  .person-name:link,
  .person-name:visited {
    width: 50%;
    display: inline-block;
    font-size: 2em;
    font-style: normal;
    font-family: "airstrikeout";
    text-decoration: none;
    color: #000000;
  }

  .top-nav {
    width: 50%;
    display: inline-block;
    text-align: right;
  }

  .menu {
    display: inline-block;
  }

  .menu li {
    display: inline-block;
    margin-left: 1em;
  }

  .menu a:link,
  .menu a:visited {
    color: #000000;
    text-decoration: none;
  }

</style>
