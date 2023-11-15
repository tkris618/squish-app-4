<script>
import SquishItemList from "@/components/SquishItemList.vue";

export default {
  components: {SquishItemList}
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <h1><i class="fa-regular fa-compass fa-md" id="newSquish"></i> SQUISH TRACKR</h1>
      </a>
      <!--Button trigger for modal-->
      <button type="button" class="btn btn-bd-primary" id="addBtn" data-bs-toggle="modal" data-bs-target="#addItemModal" title="Add Item">
        <i class="fas fa-plus"> </i> Add Squish
      </button>

    </div>

  </nav>
  <div class="container-fluid">

    <!--Header image-->
    <div class="container-fluid">
      <div class="row-header">
        <div class="col text-center headerImgContainer">
          <!--Image borrowed for educational purposes-->
          <!--Source: -->
          <img src="./images/Squish_Website_Banner.png.webp" class="header-img container-fluid" alt="">
        </div>
      </div>
    </div>

<squish-item-list></squish-item-list>
  <!--Footer Content-->
  <footer>
    <h3 class="footerHeader">&copySquishTrackr</h3>
    <div class="container-fluid">
      <img class="container-fluid" src="./images/Squishmallows_Footer_Desktop_1944x.webp" alt="">
    </div>
  </footer>
  </div>
</template>

<style>
nav{
  background-color: #f8f8fc;
  border-bottom: 5px solid #8083ff;
  h1{
    color: #8083ff;
  }
}
footer{
  border-top: 5px solid #8083ff;
  text-align: center;
  background-color: #f8f8fc;
  h3 {
    padding-top: 40px;
    color: #8083ff;
  }
}
</style>
