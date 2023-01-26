<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Book Finder</title>
  <link rel="shortcut icon" href="./img/reading.png" type="image/x-icon">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</head>

<body class="bg">
  <script>
    // this script need to in body but before html content to avoid flickering
    const localTheme = localStorage?.getItem("theme");
    if (localTheme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  </script>

<nav id="nav">
  <div class="container-fluid align-items-center">
    <a class="navbar-brand" href="index.html">
      <span class="text">RCM</span><span class="find">Talking</span>
    </a>    
    <div class="mode d-flex align-items-center">
      <ul class="nav-menu">
        <li class="nav-item">
          <a class="nav-link" href="index.html"> <span class="find">Home</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html"> <span class="find">About Us</span></a>
        </li>
      </ul>
      <img class="logo" id="icon" src="img/moon.png" />
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>

      </div>
    </div>
  </div>
</nav>
  <div class="container pt-5">
  <div class="row align-items-end pt-5">
<div class="col-lg-7">
  <header class="header" id="header" style="text-align: left;">
    <h1 class="title title-about">
      About
      <p class="finder" style="display: inline-block">Us</p>
    </h1>
    <div class="description" style="text-align:left;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit <br>
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div class="search" id="search-bar">
      <form class="search-form">
      </form>
    </div>
  </header>
</div>
<div class="col-lg-5">
    <div class="">
      <img src="img/mogaka.png" alt="Mogaka showing airtime" class="illustration-about" />
    </div>
</div>
  </div>
</div>
  <section>
    <div class="whirly-loader" style="display: none;"></div>
    <div id="results" class="results container">
    </div>
  </section>
  <a href="#" id="return-to-top" class="special1" > 
    <i class="fa fa-arrow-up" ></i>
  </a>
  <!-- <footer>
    <div class="foot">
      Made with ❤️ by <a href="https://github.com/wangata">Wangata</a>
  </div> 
   </footer> -->
</body>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
  AOS.init({
        offset: 200,
        duration: 1000
    });
</script>
<script src="main.js"></script>
</body>

</html>