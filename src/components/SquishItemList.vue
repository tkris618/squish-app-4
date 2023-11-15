<script>
import SquishCollection from "@/models/SquishCollection";
import {Squish} from "@/models/Squish";
import SquishList from "@/components/SquishList.vue";


export default {
  name: "SquishItemList",
  components: {SquishList},
  data() {
    return {
      collection: new SquishCollection()
          .addItem(new Squish ('Clayton', 'animal'))//want it
          .addItem(new Squish('Ronnie', 'animal'))//have it
          .addItem(new Squish('Reshma','animal')) //favorite
          .addItem(new Squish('Poo', 'animal'))//favorite

    }
  },
}
</script>

<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-3 g-3" style="text-align: center">
<!--    I know dont, put styles in the html tags. I'm just testing it out and plan on moving it when I create the SCSS file :P.-->
    <h3>Want It</h3>
    <h3>Got It</h3>
    <h3>Favorite</h3>
  </div>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <squish-list v-for="(item, i) in collection"
                        :key="item.name"
                        :item="item"
                        @delete-item="deleteItem => $emit('delete-item', deleteItem)"
      ></squish-list>

  </div>

</template>

<style scoped>

</style>