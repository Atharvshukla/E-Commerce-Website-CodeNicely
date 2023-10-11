<template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      <div class="container py-5">
        <div class="d-flex flex-column justify-content-center w-100 h-100">

          <div class="d-flex flex-column justify-content-center align-items-center">
            <h1 class="fw-light text-white m-0">Pure CSS Gradient Background Animation</h1>
            <div class="btn-group my-5">
              <a href="https://codepen-api-export-production.s3.us-west-2.amazonaws.com/zip/PEN/pyBNzX/1578778289271/pure-css-gradient-background-animation.zip" class="btn btn-outline-light" aria-current="page"><i class="fas fa-file-download me-2"></i> SOURCE CODE</a>
              <a href="https://codepen.io/P1N2O/full/pyBNzX" class="btn btn-outline-light">FULL SCREEN <i class="fas fa-expand ms-2"></i></a>
            </div>
            <a href="https://manuel.pinto.dev" class="text-decoration-none">
              <h5 class="fw-light text-white m-0">— Pen by Manuel Pinto —</h5>
            </a>
          </div>
        </div>
        
      </div>
      <hr />
    </div>

    <!--    display categories-->


  <!--    display top products-->
    <div class="container py-2">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3"> Top Products</h2>
        </div>
      </div>

      <!--      display products-->

      <div class="row">
        <div v-for="index in this.productSize" :key="index"
             class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <ProductBox :product="products[index-1]" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import ProductBox from "../components/ProductBox";
export default {
  name: "Home",
  components: {ProductBox},
  props: [ "products"],
  data() {
    return {
      productSize: 0
    }
  },
  mounted() {
    this.productSize = Math.min(8, this.products.length);
  }
};
</script>
<style>
  .page-holder {
    min-height: 100vh;
  }
  .bg-cover{
    background-size: cover !important;
  }
  #heading {
    font-weight: 400;
  }
  body {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
  }
  
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
</style>
