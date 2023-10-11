<script setup>
import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};
</script>

<template>
  <div>
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value:  '#060C24',
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 10,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 10,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }"
    />
  </div>
  <div class="main-heading">
  <div class="header">
    <img  alt="Header Img" src="../assets/logo.png"/>
 </div>>
 </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.header{
  margin-left: 55rem;
}
#main-heading{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
}
@media screen and (max-width:450px){
  .main-heading{
      flex-direction: column !important;
  }
  
  #Home-Page .title{
      margin:0;
  }
  .header{
    margin-left: 0rem;
    height:5px;
    width: 2px;
    margin-right: 2px;
    background: transparent;
  }

  
}
</style>
