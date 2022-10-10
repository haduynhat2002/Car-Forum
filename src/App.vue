<template>
 <div>
    <HeaderClient msg="" />
    <HomeClient msg="" />
    <FooterClient msg="" />
  </div>
</template>

<script>
import HeaderClient from "./views/client/HeaderClient.vue";
import HomeClient from "./views/client/HomeClient.vue";
// import ContactClient from "./views/client/ContactClient.vue";
import FooterClient from "./views/client/FooterClient.vue";
export default {
  components : {    
    HeaderClient,
    HomeClient,
    // ContactClient,
    FooterClient, }
}
</script>


