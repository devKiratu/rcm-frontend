<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Send airtime to employees" />
  <title>RCM Talking</title>
  <link rel="shortcut icon" href="img/reading.png" type="image/x-icon">
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
      <img class="logo" id="icon" src="img/moon.png" alt="Toggle Dark Mode"/>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>

      </div>
    </div>
  </div>
</nav>
  <header class="header" id="header">
    <img src="img/mogaka.png" alt="Man Reading a Book" class="illustration" />
    <h1 class="title">
      RCM
      <p class="finder" style="display: inline-block">Talking</p>
    </h1>
  </header>
  <section>
    <div class="whirly-loader" style="display: none;"></div>
    <div id="results" class="results container">
    </div>
  </section>
  
  <a href="#" id="return-to-top" class="special1" aria-label="Go to Top"> 
    <i class="fa fa-arrow-up"></i>
  </a>
</body>
<script>
  AOS.init({
        offset: 200,
        duration: 1000
    });
</script>
<script src="main.js"></script>
</body>

</html>
