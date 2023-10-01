<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style1.css" />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>E2RALY</title>
  </head>
  <body>
    <div id="home">
      <img id="logo_name" src="pics\\logo_name.png" alt="" srcset="" />
      <img id="poly" src="pics\\Ellipse 1.png" alt="" srcset="" />
      <img id="fltBook" src="pics\\filybook.png" alt="" srcset="" />

      <p id="note">Note:</p>
    </div>

    <div id="preview">
      <div class="textContainer">
        <h1 class="hdpreviwe">Previwe</h1>
        <p class="paragpreviwe">
          this section will show you some sampels from our liberary, to see what
          we have from books.
        </p>
      </div>

      <div id="bookPreviwe"></div>
    </div>

    <div class="aboutUs" id="aboutUs">
      <div class="box">
        <h1>About E2RALY</h1>
        <p>
          Stephen King once said, "books are a uniquely portable magic". We
          couldn't agree more.
          <br />
          <br />
          We believe that reading great books makes a person happier, helps them
          learn, and makes them grow. <br /><br />That's why we've created an
          audiobook service that lets you take your favorite books anywhere. We
          listen at work, at the gym and on weekend road trips, which makes
          finding the time to be inspired, educated and entertained by books
          really easy. <br /><br />We're all about combining our love of books
          with our passion for technology and innovation to create a service
          unlike any other. To put it simply, we're a bunch of book and tech
          nerds doing cool things to make listening to books better.
        </p>
      </div>
    </div>

    <div id="sign">
      <form action="index2.html" method="get">
        <img src="pics\form\logo.png" alt="" />
        <h1>Sign up</h1>

        <input type="text" name="fn" id="fn" required />
        <label id="pfn">first name</label>

        <input type="text" name="ln" id="ln" required />
        <label id="pln">last name</label>

        <input type="email" name="email" id="email" required />
        <label id="pemail">email</label>

        <input type="password" name="password" id="password" required />
        <label id="ppass">password</label>

        <button id="submit" type="submit">Sign up</button>
      </form>
    </div>

    <header id="header" class="myheader">
      <img src="pics\\logo2.png" id="logoHeader" alt="" />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#preview">Previwe</a></li>
        <li><a href="#aboutUs">About Us</a></li>
        <li><a href="#sign">Sign up</a></li>
      </ul>
    </header>

    <script src="js1.js"></script>
  </body>
</html>
