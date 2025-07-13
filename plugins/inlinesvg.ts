import { defineNuxtPlugin } from "#app";
import InlineSvg from "vue-inline-svg";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("InlineSvg", InlineSvg);
});
