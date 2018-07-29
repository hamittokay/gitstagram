<template>
  <div class="search">
    <v-text-field
      append-icon="arrow_forward"
      class="mx-3"
      flat
      label="Search By Github Username"
      prepend-inner-icon="search"
      solo-inverted />
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>