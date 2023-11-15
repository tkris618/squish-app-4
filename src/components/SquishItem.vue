<script>
import {Squish} from "@/models/Squish";

export default {
  name: "SquishItem",
  props: {
    item: {
      type: Squish
    }
  }
}
</script>

<template>
  <div>
    <h3 class="card-title">{{item.name}}</h3>
    <p class="card-text">Category: {{item.category}}</p>
  </div>
</template>

<style scoped>

</style>