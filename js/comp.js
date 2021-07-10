Vue.component("navbar-component", {
  template: `
    <nav id="navbar" class="navbar navbar-index navbar-expand-lg navbar-light py-3 bg-white py-md-4">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <img src="assets/brand.svg" alt="komodo os" draggable="false">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse justify-content-end text-center" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item py-2 py-lg-0">
            <a class="nav-link" aria-current="page" href="index.html#home" onclick="topFunction()">Home</a>
          </li>
          <li class="nav-item py-2 py-lg-0">
            <a class="nav-link" href="index.html#about" onclick="collapse()">About</a>
          </li>
          <li class="nav-item py-2 py-lg-0">
            <a class="nav-link" href="index.html#features" onclick="collapse()">Features</a>
          </li>
          <li class="nav-item py-2 py-lg-0">
            <a class="nav-link" href="team.html" onclick="collapse()">Team</a>
          </li>
          <li class="nav-item d-inline d-lg-none py-2 py-lg-0">
            <a class="nav-link" href="index.html#donate" onclick="collapse()">Donate</a>
          </li>
          <li class="nav-item d-none d-lg-inline">
            <a class="nav-link btn btn-primary btn-donate px-4" href="index.html#donate"
              onclick="collapse()">Donate</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    `,
});

Vue.component("footer-component", {
  template: `
    <footer class="bg-dark text-white">
    <div class="container py-5 px-4 px-md-0">
      <div class="row">
        <div class="col-12 col-md-4 d-flex my-auto text-center text-sm-start">
          <div class="w-100">
            <img src="assets/brand.svg" alt="komodo os" draggable="false">
            <p class="text-muted mt-2">Custom ROM with all their local wisdom.</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 text-center text-sm-start text-md-center my-3 my-sm-0">
          <a href="http://xda-developers.com/">XDA Thread</a>
          <a href="http://t.me/komodosrom/">Telegram Channel</a>
          <a href="http://t.me/komodosgroup/">Need Help?</a>
          <a href="http://t.me/komodosgroup/">Screenshots</a>
        </div>
        <div class="col-12 col-sm-6 col-md-4 text-center my-3">
          <p id="maintainer">Want to build the ROM officialy?</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjPwX5xveh4qN2sgX_csnXXyCQ3qnwGUCM9lLUiDg4bOMVkA/viewform"
            target="_blank" class="btn btn-primary px-4 text-dark">Join Us!</a>
        </div>
      </div>
    </div>
    <div class="container px-4">
      <div class="text-sm-center py-3">
        <p id="copyright" class="text-muted small">&copy; Komodo OS - 2021</p>
      </div>
    </div>
    </footer>
    `,
});
