<template>
  <div>
    <header class="header-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-lg">
              <!-- Logo -->
              <a class="navbar-brand" href="index.html">
                <img src="/client/dist/img/core-img/logo.png" alt="Logo"
              /></a>
              <!-- Navbar Toggler -->
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#worldNav"
                aria-controls="worldNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <!-- Navbar -->
              <div class="collapse navbar-collapse" id="worldNav">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#"
                      >Home <span class="sr-only">(current)</span></a
                    >
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >Pages</a
                    >
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="index.html">Home</a>
                      <a class="dropdown-item" href="catagory.html">Catagory</a>
                      <a class="dropdown-item" href="single-blog.html"
                        >Single Blog</a
                      >
                      <a class="dropdown-item" href="regular-page.html"
                        >Regular Page</a
                      >
                      <a class="dropdown-item" href="contact.html">Contact</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Gadgets</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Lifestyle</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Video</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>
                </ul>
                <!-- Search Form  -->
                <div id="search-wrapper">
                  <form action="#">
                    <input
                      type="text"
                      id="search"
                      placeholder="Search something..."
                    />
                    <div id="close-icon"></div>
                    <input class="d-none" type="submit" value="" />
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: 'HeaderClient',
};
</script>

<style>
</style>