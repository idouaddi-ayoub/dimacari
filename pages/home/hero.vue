<template>
  <div class="bg-img"></div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100%;
  margin: 0;
}

.bg-img {
  width: 100%;
  min-height: 100vh; /* grows with screen height */
  background-image: url("/assets/DesktopBG.jpg");
  background-size: cover; /* fills area, scales dynamically */
  background-position: center; /* keeps it centered */
  background-repeat: no-repeat;
  background-attachment: scroll; /* moves naturally with page scroll */
}

/* 📱 Mobile version */
@media (max-width: 768px) {
  .bg-img {
    background-image: url("/assets/MobileBG.png");
    background-size: cover; /* still scales with screen width */
    background-position: top; /* optional: adjust focal point */
  }
}
</style>
