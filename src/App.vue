<template>
 <div>
  <div class="wrapper">

<!-- Preloader -->
<!-- <div class="preloader flex-column justify-content-center align-items-center">
  <img class="animation__shake" src="/admin/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
</div> -->

<!-- Navbar -->
<nav-bar></nav-bar>
<!-- /.navbar -->

<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="index3.html" class="brand-link">
    <img src="/admin/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
    <span class="brand-text font-weight-light">AdminLTE 3</span>
  </a>

  <!-- Sidebar -->
 <side-bar></side-bar>
  <!-- /.sidebar -->
</aside>

<!-- Content Wrapper. Contains page content -->
  <router-view></router-view>
<!-- /.content-wrapper -->


<!-- Control Sidebar -->

<!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->
 </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
export default {
  components : { NavBar, SideBar }
}
</script>


