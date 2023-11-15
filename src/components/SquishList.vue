<script>
import SquishItem from "@/components/SquishItem.vue";
export default {
  name: "SquishList",
  components: {
    SquishItem
  },
  data() {
    return {
      edit: false,
    }
  },
  props: {
    item: {
      type: Object,
    }
  },
  methods: {
    deleteIt(){
      this.$emit('delete-item', this.item);
    },
  },
}
</script>

<template>

    <div class="card h-100">
      <div class="card-body">
<!--        <div>{{item.images}}</div>-->
      <h4><strong>Name:</strong> {{item.name}}</h4><br>
      <label><strong>Category:</strong> {{item.category}}</label><br>
               </div>

               <div class="card-footer">
                <button>Favorite</button>
                 <button>Want It</button>
                 <button class="btn btn-tiny" id="deleteBtn" @click="deleteIt()" data-bs-toggle="modal" data-bs-target="#deleteItemModal" style="margin-right: 15px">Delete</button>
                 <edit-item-modal @click="edit = !edit">edit</edit-item-modal>
               </div>
      </div>


         </template>

         <style scoped>

         </style>